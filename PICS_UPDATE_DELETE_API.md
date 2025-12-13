# Pics Update & Delete API Guide

## Overview
Update aur Delete APIs ab ready hain har route ke liye. Yeh APIs dynamic routes use karte hain jo sabhi existing routes ke saath kaam karte hain.

## Base URL
```
/api/pics
```

## Available Endpoints

### 1. Update Specific Item
**PUT** `/api/pics/:route/item/:index`

Kisi specific item ko update karein array mein.

**Parameters:**
- `route`: Route name (e.g., `home`, `skardu-7-days-images`, `hunza-tours`)
- `index`: Array index (0-based, pehla item = 0)

**Request Body:**
Object arrays ke liye:
```json
{
  "title": "Updated Title",
  "img": "https://updated-image.jpg",
  "title1": "UPDATED"
}
```

String arrays ke liye:
```json
{
  "value": "https://updated-url.jpg"
}
```

**Example:**
```bash
PUT /api/pics/home/item/0
Content-Type: application/json

{
  "title": "Updated Tour",
  "title1": "UPDATED TOUR",
  "img": "https://example.com/updated.jpg"
}
```

**Response:**
```json
{
  "message": "Item updated successfully",
  "route": "home",
  "index": 0,
  "updatedItem": { ... },
  "data": [ ... ]
}
```

---

### 2. Delete Item
**DELETE** `/api/pics/:route/item/:index`

Array se specific item ko delete karein.

**Parameters:**
- `route`: Route name
- `index`: Array index (0-based)

**Example:**
```bash
DELETE /api/pics/home/item/0
```

**Response:**
```json
{
  "message": "Item deleted successfully",
  "route": "home",
  "deletedIndex": 0,
  "deletedItem": { ... },
  "data": [ ... ]
}
```

---

### 3. Add Item
**POST** `/api/pics/:route`

Array mein naya item add karein (end mein).

**Parameters:**
- `route`: Route name

**Request Body:**
Object arrays ke liye:
```json
{
  "img": "https://new-image.jpg",
  "title": "New Tour",
  "title1": "NEW TOUR",
  "link": "/NewTour"
}
```

String arrays ke liye:
```json
"https://new-image-url.jpg"
```

**Example:**
```bash
POST /api/pics/home
Content-Type: application/json

{
  "img": "https://example.com/new-tour.jpg",
  "title": "Tour Packages",
  "title1": "NEW TOUR",
  "link": "/NewTour"
}
```

**Response:**
```json
{
  "message": "Item added successfully",
  "route": "home",
  "newItem": { ... },
  "index": 5,
  "data": [ ... ]
}
```

---

### 4. Update Entire Array
**PUT** `/api/pics/:route`

Puri array ko replace karein.

**Parameters:**
- `route`: Route name

**Request Body:**
Complete array (must be an array):
```json
[
  {
    "img": "https://...",
    "title": "Tour 1",
    "title1": "TOUR 1"
  },
  {
    "img": "https://...",
    "title": "Tour 2",
    "title1": "TOUR 2"
  }
]
```

**Example:**
```bash
PUT /api/pics/home
Content-Type: application/json

[
  { "img": "...", "title": "...", "title1": "..." },
  { "img": "...", "title": "...", "title1": "..." }
]
```

**Response:**
```json
{
  "message": "Array updated successfully",
  "route": "home",
  "data": [ ... ]
}
```

---

## Supported Routes

Yeh sab routes support karte hain:
- `home`
- `skardu-6-days-faq-data`
- `skardu-7-days-images`
- `skardu-7-days-faq-data`
- `skardu-10-days-images`
- `skardu-10-days-faq-data`
- `tour`
- `public-tour`
- `hunza-tours`
- `hunza-air-tours`
- `hunza-package-tours`
- `hunza-data`
- `hunza-activities`
- `slides`
- `hunza-day-5`
- `hunza-faq-data`
- `hunza-6-days-images`
- `hunza-6-faq-data`
- `hunza-skardu-day-8`
- `hunza-skardu-images`
- `hunza-skardu-10-days-data`
- `hunza-skardu-10-days-images`
- `skardu-group-8-images`
- `skardu-group-8-faq`
- `skardu-air-4-days-images`
- `skardu-air-4-days-data`
- `air-hunza-skardu-fairy-10-days-images`
- `air-hunza-skardu-fairy-10-days-data`
- `fairy-hunza-skardu-15-days-images`
- `fairy-hunza-skardu-15-days-data`
- `air-hunza-4-days-images`
- `air-hunza-4-days-data`
- `air-hunza-5-days-images`
- `air-hunza-5-days-data`
- `air-hunza-6-days-images`
- `air-hunza-6-days-data`
- `air-hunza-7-days-images`
- `air-hunza-7-days-data`
- `hunza-group-5-images`
- `hunza-group-5-faq`
- `hunza-group-8-images`
- `hunza-group-8-faq`
- `skardu-tours`
- `skardu-air-tours`
- `skardu-package-tours`
- `skardu-data`
- `swat-tours`
- `swat-public-tours`
- `swat-data`
- `swat-faq-data`
- `kalam-2-days-images`
- `kalam-3-days-images`
- `kalam-4-days-images`
- `kalam-5-days-images`
- `kalam-5-days-malam-jabba-images`
- `kalam-5-days-malam-jabba-data`
- `kalam-7-days-images`
- `kalam-2-days-data`
- `kalam-3-days-data`
- `kalam-4-days-data`
- `kalam-5-days-data`
- `kalam-7-days-data`
- `naran-hero-images`
- `naran-packages`
- `naran-data`
- `naran-faq-data`
- `babusar-top-images`
- `babusar-top-faq-data`
- `kunhar-river-images`
- `kunhar-river-faq-data`
- `shogran-images`
- `shogran-faq-data`
- `siri-paye-images`
- `siri-paye-faq-data`
- `lahore-hero-images`
- `lahore-places`
- `lahore-more-img`
- `lahore-other-names`
- `lahore-rulers`
- `lahore-gates`
- `lahore-faq-data`
- `lahore-services-included`
- `historic-lahore-streets-images`
- `lahore-fort-images`
- `shalimar-garden-images`
- `wazir-khan-images`

---

## Examples with cURL

### Update item at index 0 in home array
```bash
curl -X PUT http://localhost:4000/api/pics/home/item/0 \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Updated Tour",
    "title1": "UPDATED",
    "img": "https://example.com/updated.jpg"
  }'
```

### Delete item at index 0
```bash
curl -X DELETE http://localhost:4000/api/pics/home/item/0
```

### Add new item to home array
```bash
curl -X POST http://localhost:4000/api/pics/home \
  -H "Content-Type: application/json" \
  -d '{
    "img": "https://example.com/new.jpg",
    "title": "New Tour",
    "title1": "NEW",
    "link": "/NewTour"
  }'
```

### Update entire array
```bash
curl -X PUT http://localhost:4000/api/pics/home \
  -H "Content-Type: application/json" \
  -d '[
    { "img": "...", "title": "...", "title1": "..." },
    { "img": "...", "title": "...", "title1": "..." }
  ]'
```

---

## Error Responses

### 404 Not Found
```json
{
  "message": "Data not found for route: invalid-route"
}
```

### 400 Bad Request
```json
{
  "message": "Invalid index: 10. Array has 5 items (0-4)"
}
```

```json
{
  "message": "Request body must be an array"
}
```

### 500 Internal Server Error
```json
{
  "message": "Error message here"
}
```

---

## Important Notes

⚠️ **Data Persistence:** Abhi changes memory mein hain. Server restart hone par changes reset ho jayengi. Permanent persistence ke liye database ya file writing mechanism implement karein.

✅ **Index Validation:** Sab operations array bounds check karte hain aur clear error messages return karte hain.

✅ **Route Mapping:** All route names automatically map ho jate hain to their corresponding data arrays.

---

## Quick Reference

| Action | Method | Endpoint | Body |
|--------|--------|----------|------|
| Update Item | PUT | `/api/pics/:route/item/:index` | Object/Value |
| Delete Item | DELETE | `/api/pics/:route/item/:index` | - |
| Add Item | POST | `/api/pics/:route` | Object/String |
| Update Array | PUT | `/api/pics/:route` | Array |

---

Sab APIs ready hain aur test kar sakte hain! 🚀

