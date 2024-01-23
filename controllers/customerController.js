const Customer = require("../models/Customer");

// get all customer
const getAllCustomer = async (req, res) => {
  try {
    const customers = await Customer.find({}).sort({ createdAt: -1 });

    res.status(200).json({
      data: customers,
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

// single create customer
const singleCreateCustomer = async (req, res) => {
  try {
    let customer = new Customer({ ...req.body });
    await customer.save();

    res.status(201).json({
      message: "Customer created Successfully",
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

// get single customer
const getSingleCustomer = async (req, res) => {
  try {
    const customer = await Customer.findById(req.params.id);

    res.status(200).json({
      data: customer,
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

// single update customer
const singleUpdateCustomer = async (req, res) => {
  try {
    await Customer.findOneAndUpdate({ _id: req.params.id }, { ...req.body });

    res.status(201).json({
      message: "Customer updated successfully!",
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

// single delete customer
const singleDeleteCustomer = async (req, res) => {
  try {
    await Customer.findByIdAndDelete(req.params.id);

    res.status(200).json({
      message: "Customer deleted Successfully!",
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
  getAllCustomer,
  singleCreateCustomer,
  getSingleCustomer,
  singleUpdateCustomer,
  singleDeleteCustomer,
};
