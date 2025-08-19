import settingModel from "../models/setting.js";

// Get settings (single record)
export async function getSettings(req, res) {
  try {
    const settings = await settingModel.findOne(); // assuming only one settings document
    res.status(200).json(settings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// Update or create settings
export async function updateSettings(req, res) {
  try {
    let settings = await settingModel.findOne();
    if (settings) {
      settings = await settingModel.findOneAndUpdate({}, req.body, {
        new: true,
        runValidators: true,
      });
    } else {
      settings = await settingModel.create(req.body);
    }
    res.status(200).json(settings);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}
