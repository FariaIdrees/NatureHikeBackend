import Contact from "../models/ContactMessage.js";

// CREATE
export const createContact = async (req, res) => {
  try {
    const newMessage = await Contact.create(req.body);
    res.status(201).json({
      success: true,
      message: "Message sent successfully!",
      data: newMessage,
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// READ ALL
export const getAllContacts = async (req, res) => {
  try {
    const messages = await Contact.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, data: messages });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// READ SINGLE
export const getContactById = async (req, res) => {
  try {
    const message = await Contact.findById(req.params.id);
    if (!message)
      return res.status(404).json({ success: false, message: "Message not found!" });

    res.status(200).json({ success: true, data: message });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// UPDATE
export const updateContact = async (req, res) => {
  try {
    const updated = await Contact.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updated)
      return res.status(404).json({ success: false, message: "Message not found!" });

    res.status(200).json({
      success: true,
      message: "Message updated successfully!",
      data: updated,
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// DELETE
export const deleteContact = async (req, res) => {
  try {
    const deleted = await Contact.findByIdAndDelete(req.params.id);

    if (!deleted)
      return res.status(404).json({ success: false, message: "Message not found!" });

    res.status(200).json({
      success: true,
      message: "Message deleted successfully!",
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
