import pageModel from "../models/page.js";

// Get all pages
export async function getPages(req, res) {
  try {
    const pages = await pageModel.find().sort({ createdAt: -1 });
    res.status(200).json(pages);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// Get single page by slug
export async function getPageBySlug(req, res) {
  try {
    const page = await pageModel.findOne({
      slug: req.params.slug,
      status: "published",
    });
    if (!page) {
      return res.status(404).json({ message: "Page not found" });
    }
    res.status(200).json(page);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// Create new page
export async function createPage(req, res) {
  try {
    const page = new pageModel(req.body);
    const savedPage = await page.save();
    res.status(201).json(savedPage);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

// Update page
export async function updatePage(req, res) {
  console.log("Update request body:", req.body);

  try {
    const updatedPage = await pageModel.findByIdAndUpdate(
      req.params.id,
      { $set: req.body }, // only set passed fields
      {
        new: true, // return updated doc
        runValidators: true, // validate updated fields
      }
    );

    if (!updatedPage) {
      return res.status(404).json({ message: "Page not found" });
    }

    res.status(200).json(updatedPage);
  } catch (error) {
    console.error("Error updating page:", error);
    res.status(400).json({ message: error.message });
  }
}


// Delete page
export async function deletePage(req, res) {
  try {
    const deletedPage = await pageModel.findByIdAndDelete(req.params.id);
    if (!deletedPage) {
      return res.status(404).json({ message: "Page not found" });
    }
    res.status(200).json({ message: "Page deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
