import mongoose from "mongoose";
import Tour from "./models/Tour.js";
import * as data from "./data/pics.js";

const getAllTours = () => {
  // Two-pass approach:
  // 1) create base tour entries from exports that represent tour items (objects with title/link/img/image)
  // 2) process arrays that are FAQ/description/price lists and merge their data into matching base tours when possible

  const tours = [];
  const seenLinks = {};
  const linkIndex = {}; // map finalLink -> index in tours

  // helper: generate unique final link
  const makeFinalLink = (raw, fallback) => {
    const explicitLink = typeof raw === 'string' && raw.trim() ? raw.trim() : null;
    const base = explicitLink || fallback;
    let final = base;
    if (seenLinks[base]) {
      final = `${base}-${seenLinks[base]}`;
      seenLinks[base] += 1;
    } else {
      seenLinks[base] = 1;
    }
    return final;
  };

  // normalization helpers
  const normalizeImages = (item) => {
    const primaryImg = item.img && item.img.trim() ? item.img : item.image && item.image.trim() ? item.image : Array.isArray(item.images) && item.images.length ? item.images[0] : '';
    const primaryImage = item.image && item.image.trim() ? item.image : item.img && item.img.trim() ? item.img : Array.isArray(item.images) && item.images.length ? item.images[0] : '';
    const imagesSet = [];
    if (Array.isArray(item.images) && item.images.length) item.images.forEach((u) => u && imagesSet.push(u));
    [item.image, item.image1, item.img].forEach((u) => { if (u && !imagesSet.includes(u)) imagesSet.push(u); });
    return { primaryImg: primaryImg || '', primaryImage: primaryImage || '', imagesSet };
  };

  // First pass: create explicit tour entries (items with title/link/img/image or those already containing price)
  Object.keys(data || {}).forEach((key) => {
    const arr = data[key];
    if (!Array.isArray(arr)) return;

    // skip pure faq/description arrays in this pass
    const isFaqArray = arr.length > 0 && arr.every((el) => el && typeof el === 'object' && ('day' in el && 'details' in el));
    const isDescriptionArray = arr.length > 0 && arr.every((el) => el && typeof el === 'object' && ('title' in el && 'text' in el));
    if (isFaqArray || isDescriptionArray) return;

    arr.forEach((item, index) => {
      // include items that have any of: title, link, img, image, price, title1
      if (!item || (typeof item !== 'object')) return;
      if (!item.title && !item.link && !item.img && !item.image && !item.price && !item.title1) return;

      const { primaryImg, primaryImage, imagesSet } = normalizeImages(item);
      const finalLink = makeFinalLink(item.link, `${key}-${index}`);

      const tourObj = {
        type: 'tour',
        title: item.title || 'No Title',
        title1: item.title1 || '',
        img: primaryImg,
        image: primaryImage,
        image1: item.image1 || null,
        price: item.price || '',
        duration: item.duration || '',
        images: imagesSet,
        faq: item.faq || [],
        description: item.description || [],
        activities: item.activities || [],
        services: item.services || [],
        attractions: item.attractions || [],
        otherNames: item.otherNames || [],
        rulers: item.rulers || [],
        gates: item.gates || [],
        link: finalLink,
      };

      linkIndex[finalLink] = tours.length;
      tours.push(tourObj);
    });
  });

  // Second pass: merge FAQ/description/price arrays into existing tours when tokens match; otherwise create synthetic tour entries
  const tokenize = (s) => (s || '').toString().replace(/([a-z])([A-Z])/g, '$1 $2').replace(/[^a-z0-9]+/gi, ' ').trim().toLowerCase().split(/\s+/).filter(Boolean);
  const ignoreTokens = new Set(['faq', 'data', 'images', 'image', 'days', 'day', 'tour', 'public', 'package']);

  Object.keys(data || {}).forEach((key) => {
    const arr = data[key];
    if (!Array.isArray(arr) || arr.length === 0) return;

    const isFaqArray = arr.every((el) => el && typeof el === 'object' && ('day' in el && 'details' in el));
    const isDescriptionArray = arr.every((el) => el && typeof el === 'object' && ('title' in el && 'text' in el));

    if (isFaqArray || isDescriptionArray) {
      // attempt to match by tokens
      const keyTokens = tokenize(key).filter((t) => !ignoreTokens.has(t));
      let matched = false;

      tours.forEach((tour) => {
        const hay = (tour.link + ' ' + (tour.title || '')).toLowerCase();
        const ok = keyTokens.every((tk) => hay.includes(tk));
        if (ok) {
          if (isFaqArray) tour.faq = Array.isArray(tour.faq) ? [...tour.faq, ...arr] : arr;
          if (isDescriptionArray) tour.description = Array.isArray(tour.description) ? [...tour.description, ...arr] : arr;
          matched = true;
        }
      });

      if (!matched) {
        // create synthetic tour entry carrying this faq/description
        const finalLink = makeFinalLink(null, key);
        const tourObj = {
          type: 'tour',
          title: key,
          title1: '',
          img: '',
          image: '',
          image1: null,
          price: '',
          duration: '',
          images: [],
          faq: isFaqArray ? arr : [],
          description: isDescriptionArray ? arr : [],
          activities: [],
          services: [],
          attractions: [],
          otherNames: [],
          rulers: [],
          gates: [],
          link: finalLink,
        };
        linkIndex[finalLink] = tours.length;
        tours.push(tourObj);
      }
    }

    // Also handle arrays of plain tour-like items that may include price but were missed in pass1 (safeguard)
    if (!isFaqArray && !isDescriptionArray) {
      arr.forEach((item, index) => {
        if (!item || typeof item !== 'object') return;
        if (!item.price) return; // only concerned with prices here

        // try to find matching tour by item.link or item.title tokens
        const itemTokens = tokenize(item.link || item.title || `${key} ${index}`).filter((t) => !ignoreTokens.has(t));
        let found = false;
        tours.forEach((tour) => {
          const hay = (tour.link + ' ' + (tour.title || '') + ' ' + (tour.image || '')).toLowerCase();
          const ok = itemTokens.every((tk) => hay.includes(tk));
          if (ok) {
            if (!tour.price) tour.price = item.price || '';
            found = true;
          }
        });

        if (!found) {
          // create a tour entry for this item (if it wasn't created in pass1 because it lacked title/img)
          if (item.title || item.link || item.img || item.image) {
            const { primaryImg, primaryImage, imagesSet } = normalizeImages(item);
            const finalLink = makeFinalLink(item.link, `${key}-${index}`);
            const tourObj = {
              type: 'tour',
              title: item.title || key,
              title1: item.title1 || '',
              img: primaryImg,
              image: primaryImage,
              image1: item.image1 || null,
              price: item.price || '',
              duration: item.duration || '',
              images: imagesSet,
              faq: item.faq || [],
              description: item.description || [],
              activities: item.activities || [],
              services: item.services || [],
              attractions: item.attractions || [],
              otherNames: item.otherNames || [],
              rulers: item.rulers || [],
              gates: item.gates || [],
              link: finalLink,
            };
            linkIndex[finalLink] = tours.length;
            tours.push(tourObj);
          }
        }
      });
    }
  });

  return tours;
};
const seedDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/naturehike");
    console.log("MongoDB connected");

    await Tour.deleteMany({});
    console.log("Old data cleared");

    const tours = getAllTours();
    console.log(`Seeding ${tours.length} tours...`);
    console.log("Sample item:", tours[0]);

    await Tour.insertMany(tours);
    console.log("Database seeded successfully!");

    await mongoose.disconnect();
    console.log("MongoDB disconnected");
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

seedDB();
