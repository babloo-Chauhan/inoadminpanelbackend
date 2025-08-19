import mongoose from "mongoose";

const settingSchema = new mongoose.Schema(
  {
    siteName: {
      type: String,
      default: "My Website",
    },
    siteLogo: {
      type: String, // URL or file path
    },
    siteFavicon: {
      type: String, // URL or file path
    },
    contactEmail: {
      type: String,
      trim: true,
    },
    contactPhone: {
      type: String,
      trim: true,
    },
    address: {
      type: String,
      trim: true,
    },
    socialLinks: {
      facebook: { type: String, trim: true },
      instagram: { type: String, trim: true },
      twitter: { type: String, trim: true },
      linkedin: { type: String, trim: true },
      youtube: { type: String, trim: true },
    },
    seo: {
      metaTitle: { type: String, trim: true },
      metaDescription: { type: String, trim: true },
      metaKeywords: { type: String, trim: true },
    },
    currency: {
      code: { type: String, default: "INR" },
      symbol: { type: String, default: "₹" },
    },
    maintenanceMode: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const settingModel = mongoose.model("Setting", settingSchema);

export default settingModel;
