import mongoose from "mongoose";

const contentSchema = new mongoose.Schema(
  {
    language: {
      type: String,
      enum: ["ENGLISH", "HINDI"],
      default: "ENGLISH",
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
); // <-- adds createdAt and updatedAt automatically

const ContentModel = mongoose.model("Content", contentSchema);
export default ContentModel;
