import Admin from "../models/Admin.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const JWT_SECRET = "YOUR_SECRET_KEY";

// ===========================
// REGISTER ADMIN
// ===========================
export const registerAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const existing = await Admin.findOne({ email });
    if (existing) return res.status(400).json({ message: "Admin already exists" });

    const hashed = await bcrypt.hash(password, 10);
    const admin = await Admin.create({ email, password: hashed });

    res.status(201).json({ success: true, admin });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ===========================
// LOGIN ADMIN
// ===========================
export const loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const admin = await Admin.findOne({ email });
    if (!admin) return res.status(404).json({ message: "Admin not found" });

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) return res.status(401).json({ message: "Invalid password" });

    const token = jwt.sign({ id: admin._id }, JWT_SECRET, { expiresIn: "7d" });
    res.json({ success: true, token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ===========================
// GET ALL ADMINS
// ===========================
export const getAllAdmins = async (req, res) => {
  try {
    const admins = await Admin.find().select("-password"); // exclude password
    res.json({ success: true, admins });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ===========================
// GET ADMIN BY ID
// ===========================
export const getAdminById = async (req, res) => {
  try {
    const admin = await Admin.findById(req.params.id).select("-password");
    if (!admin) return res.status(404).json({ message: "Admin not found" });
    res.json({ success: true, admin });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ===========================
// UPDATE ADMIN
// ===========================
export const updateAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const updateData = {};
    if (email) updateData.email = email;
    if (password) updateData.password = await bcrypt.hash(password, 10);

    const updatedAdmin = await Admin.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true }
    ).select("-password");

    if (!updatedAdmin) return res.status(404).json({ message: "Admin not found" });

    res.json({ success: true, message: "Admin updated successfully", admin: updatedAdmin });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ===========================
// DELETE ADMIN
// ===========================
export const deleteAdmin = async (req, res) => {
  try {
    const deletedAdmin = await Admin.findByIdAndDelete(req.params.id);
    if (!deletedAdmin) return res.status(404).json({ message: "Admin not found" });

    res.json({ success: true, message: "Admin deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
