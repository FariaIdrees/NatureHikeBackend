import express from "express";
import {
  registerAdmin,
  loginAdmin,
  getAllAdmins,
  getAdminById,
  updateAdmin,
  deleteAdmin
} from "../controllers/adminAuthController.js";

const router = express.Router();

// Public
router.post("/register", registerAdmin);
router.post("/login", loginAdmin);

// Protected/Admin only (you can add middleware later)
router.get("/all", getAllAdmins);
router.get("/:id", getAdminById);
router.put("/:id", updateAdmin);
router.delete("/:id", deleteAdmin);

export default router;
