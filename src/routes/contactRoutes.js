import express from "express";
import {
  createContact,
  getAllContacts,
  getContactById,
  updateContact,
  deleteContact,
} from "../controllers/contactControllers.js";

const router = express.Router();

router.post("/", createContact);       // Create
router.get("/", getAllContacts);       // Read All
router.get("/:id", getContactById);    // Read Single
router.put("/:id", updateContact);     // Update
router.delete("/:id", deleteContact);  // Delete

export default router;
