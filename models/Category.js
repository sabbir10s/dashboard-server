const mongoose = require("mongoose");

const categorySchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: false,
      trim: true,
    },
    root: {
      type: String,
      required: false,
      trim: true,
    },
    image: {
      type: String,
      required: false,
      trim: true,
    },
    orderBy: {
      type: Number,
      required: false,
      trim: true,
    },
    bestSelling: {
      type: Number,
      required: false,
      trim: true,
    },
    published: {
      type: String,
      lowercase: true,
      enum: ["show", "hide"],
      default: "show",
    },
    parentId: {
      type: mongoose.Schema.Types.ObjectId,
      required: false,
      ref: "Category",
    },
  },
  { timestamps: true }
);

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;
