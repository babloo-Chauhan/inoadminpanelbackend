import enquiryModel from "../models/enquiry.js";

// Get all enquiries
export async function getEnquiry(req, res) {
  try {
    const enquiries = await enquiryModel.find();
    res.status(200).json(enquiries);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// Create a new enquiry
export async function createEnquiry(req, res) {
  const enquiry = new enquiryModel(req.body);
  try {
    const savedEnquiry = await enquiry.save();
    res.status(201).json(savedEnquiry);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

export async function updateEnquiry(req, res) {
  const enquiryId = req.params.id;
  const updateData = req.body; // the fields to update: name, email, mobile, message, status

  try {
    // Find enquiry by ID and update
    const updatedEnquiry = await enquiryModel.findByIdAndUpdate(
      enquiryId,
      { ...updateData, updatedAt: new Date() }, // set updatedAt to current date
      { new: true } // return the updated document
    );

    if (!updatedEnquiry) {
      return res
        .status(404)
        .json({ success: false, message: "Enquiry not found" });
    }

    res.status(200).json({
      success: true,
      message: "Enquiry updated",
      data: updatedEnquiry,
    });
  } catch (error) {
    console.error("Error updating enquiry:", error);
    res
      .status(500)
      .json({ success: false, message: "Server error", error: error.message });
  }
}






export async function deleteEnquiry(req, res) {
  const id = req.params.id;

  try {
    const deletedEnquiry = await enquiryModel.findByIdAndDelete(id);

    if (!deletedEnquiry) {
      return res
        .status(404)
        .json({ success: false, message: "Enquiry not found" });
    }

    res
      .status(200)
      .json({ success: true, message: "Enquiry deleted successfully" });
  } catch (error) {
    console.error("Error deleting enquiry:", error);
    res
      .status(500)
      .json({ success: false, message: "Server error", error: error.message });
  }
}
