const Banner = require("../models/Banner");

// get all banner
const getAllBanner = async (req, res) => {
  try {
    const banners = await Banner.find({}).sort({ createdAt: -1 });

    res.status(200).json({
      data: banners,
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

// single create banner
const singleCreateBanner = async (req, res) => {
  try {
    let banner = new Banner({ ...req.body });
    await banner.save();

    res.status(201).json({
      message: "Banner created Successfully",
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

// get single banner
const getSingleBanner = async (req, res) => {
  try {
    const banner = await Banner.findById(req.params.id);

    res.status(200).json({
      data: banner,
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

// single update banner
const singleUpdateBanner = async (req, res) => {
  try {
    await Banner.findOneAndUpdate({ _id: req.params.id }, { ...req.body });

    res.status(201).json({
      message: "Banner updated successfully!",
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

// single delete banner
const singleDeleteBanner = async (req, res) => {
  try {
    await Banner.findByIdAndDelete(req.params.id);

    res.status(200).json({
      message: "Banner deleted Successfully!",
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
  getAllBanner,
  singleCreateBanner,
  getSingleBanner,
  singleUpdateBanner,
  singleDeleteBanner,
};
