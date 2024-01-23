const Attribute = require("../models/Attribute");

// get all attribute
const getAllAttribute = async (req, res) => {
  try {
    const attributes = await Attribute.find({}).sort({ createdAt: -1 });

    res.status(200).json({
      data: attributes,
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

// single create attribute
const singleCreateAttribute = async (req, res) => {
  try {
    let attribute = new Attribute({ ...req.body });
    await attribute.save();

    res.status(201).json({
      message: "Attribute created Successfully",
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

// get single attribute
const getSingleAttribute = async (req, res) => {
  try {
    const attribute = await Attribute.findById(req.params.id);

    res.status(200).json({
      data: attribute,
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

// single update attribute
const singleUpdateAttribute = async (req, res) => {
  try {
    await Attribute.findOneAndUpdate({ _id: req.params.id }, { ...req.body });

    res.status(201).json({
      message: "Attribute updated successfully!",
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

// single delete attribute
const singleDeleteAttribute = async (req, res) => {
  try {
    await Attribute.findByIdAndDelete(req.params.id);

    res.status(200).json({
      message: "Attribute deleted Successfully!",
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
  getAllAttribute,
  singleCreateAttribute,
  getSingleAttribute,
  singleUpdateAttribute,
  singleDeleteAttribute,
};
