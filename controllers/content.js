import contentModel from "../models/content.js";

// GET all content
export async function getContent(req, res) {
  try {
    const contents = await contentModel.find(); // optional: .sort({ createdAt: -1 })
    res.status(200).json({
      success: true,
      data: contents,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch content",
      error: error.message,
    });
  }
}

// CREATE new content
export async function createContent(req, res) {
  try {
    const newContent = new contentModel(req.body);
    const savedContent = await newContent.save();

    res.status(201).json({
      success: true,
      message: "Content created successfully",
      data: savedContent,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Failed to create content",
      error: error.message,
    });
  }
}

// UPDATE content by ID
export async function updateContent(req, res) {
  try {
    const updatedContent = await contentModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true } // return updated doc & validate
    );

    if (!updatedContent) {
      return res.status(404).json({
        success: false,
        message: "Content not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Content updated successfully",
      data: updatedContent,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Failed to update content",
      error: error.message,
    });
  }
}

// DELETE content by ID
export async function deleteContent(req, res) {
  try {
    const deletedContent = await contentModel.findByIdAndDelete(req.params.id);

    if (!deletedContent) {
      return res.status(404).json({
        success: false,
        message: "Content not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Content deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to delete content",
      error: error.message,
    });
  }
}
