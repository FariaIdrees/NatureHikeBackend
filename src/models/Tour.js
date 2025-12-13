import mongoose from 'mongoose';

// Sub-schemas
const FaqItemSchema = new mongoose.Schema({
  day: { type: String, required: true },
  details: { type: String, required: true }
});

const TourInfoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  text: { type: String, required: true },
  img: { type: String, required: true }
});

const ActivitySchema = new mongoose.Schema({
  img: { type: String, required: true },
  title: { type: String, required: true }
});

// Main Tour Schema
const TourSchema = new mongoose.Schema({
  type: { type: String, required: true },
  title: { type: String },
  title1: { type: String },
  img: { type: String },
  image: { type: String },
  image1: { type: String, default: null },
  price: { type: String },
  duration: { type: String },
  images: [String],
  faq: [FaqItemSchema],
  description: [TourInfoSchema],
  activities: [ActivitySchema],
  services: [String],
  attractions: [String],
  otherNames: [String],
  rulers: [String],
  gates: [String],
  link: { type: String}, // added field
}, { timestamps: true });

const Tour = mongoose.model('Tour', TourSchema);
export default Tour;
