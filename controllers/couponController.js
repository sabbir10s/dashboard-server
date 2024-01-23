const Coupon = require("../models/Coupon");

// get all coupon
const getAllCoupon = async (req, res) => {
  try {
    const coupons = await Coupon.find({}).sort({ createdAt: -1 });

    res.status(200).json({
      data: coupons,
      message: "Success",
    });
  } catch (error) {
    res.status(500).json({
      errors: {
        common: {
          message: error.message,
        },
      },
    });
  }
};

// single create coupon
const singleCreateCoupon = async (req, res) => {
  try {
    let coupon = new Coupon({ ...req.body });
    await coupon.save();

    res.status(201).json({
      message: "Coupon created Successfully",
    });
  } catch (error) {
    res.status(500).json({
      errors: {
        common: {
          message: error.message,
        },
      },
    });
  }
};

// get single coupon
const getSingleCoupon = async (req, res) => {
  try {
    const coupon = await Coupon.findById(req.params.id);

    res.status(200).json({
      data: coupon,
      message: "Success",
    });
  } catch (error) {
    res.status(500).json({
      errors: {
        common: {
          message: error.message,
        },
      },
    });
  }
};

// single update coupon
const singleUpdateCoupon = async (req, res) => {
  try {
    await Coupon.findOneAndUpdate({ _id: req.params.id }, { ...req.body });

    res.status(201).json({
      message: "Coupon updated successfully!",
    });
  } catch (error) {
    res.status(500).json({
      errors: {
        common: {
          message: error.message,
        },
      },
    });
  }
};

// single delete coupon
const singleDeleteCoupon = async (req, res) => {
  try {
    await Coupon.findByIdAndDelete(req.params.id);

    res.status(200).json({
      message: "Coupon deleted Successfully!",
    });
  } catch (error) {
    res.status(500).json({
      errors: {
        common: {
          message: error.message,
        },
      },
    });
  }
};

module.exports = {
  getAllCoupon,
  singleCreateCoupon,
  getSingleCoupon,
  singleUpdateCoupon,
  singleDeleteCoupon,
};
