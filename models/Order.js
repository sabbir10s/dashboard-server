const mongoose = require("mongoose");

const orderSchema = mongoose.Schema(
  {
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Customer",
      required: false,
    },
    invoice: {
      type: String,
      required: false,
    },
    cart: [{}],
    paymentMethod: {
      type: String,
      required: false,
      trim: true,
    },
    discount: {
      type: Number,
      required: false,
    },
    vat: {
      type: Number,
      required: false,
    },
    shippingCost: {
      type: Number,
      required: false,
    },
    paidAmount: {
      type: Number,
      required: false,
      default: 0,
    },
    total: {
      type: Number,
      required: false,
    },
    status: {
      type: String,
      default: "pending",
      enum: [
        "pending",
        "ordered",
        "complete",
        "processing",
        "delivered",
        "cancel",
        "deleted",
      ],
    },
  },
  { timestamps: true }
);

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
