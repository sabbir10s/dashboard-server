const mongoose = require("mongoose");

const attributeSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    options: {
      type: String,
      default: "dropdown",
      enum: ["dropdown", "radio", "checkbox"],
    },
    variants: [
      {
        name: {
          type: String,
          required: false,
        },
        status: {
          type: String,
          default: "show",
          enum: ["show", "hide"],
        },
      },
    ],
    published: {
      type: String,
      default: "show",
      enum: ["show", "hide"],
    },
  },
  { timestamps: true }
);

const Attribute = mongoose.model("Attribute", attributeSchema);

module.exports = Attribute;
