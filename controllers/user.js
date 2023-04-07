const User = require("../models/User");


exports.register = async (req, res) => {
  try {
    const { name, mobileNo } = req.body;

    let user = await User.findOne({ mobileNo });
    if (user) {
      return res.status(400).json({
        success: false, message: "User already exists"
      });
    }

    user = await User.create({
      name,
      mobileNo,
    });

    res.status(201).json({
      success: true,
      user,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


exports.updateUsers = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    const { name, mobileNo } = req.body;

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "User not Found"
      })
    }

    if (name) {
      user.name = name;
    }

    if (mobileNo) {
      user.mobileNo = mobileNo;
    }

    await user.save();

    res.status(201).json({
      success: true,
      user,
      message: "Profile updated successfully"
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


exports.userDetails = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    res.status(201).json({
      success: true,
      user,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}

exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      res.status(500).json({
        success: false,
        message: "User not found"
      })
    }

    await User.findByIdAndDelete(req.params.id)

    res.status(200).json({
      success: true,
      message: "Deleted Successfully"
    })

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find({
      name: { $regex: req.query.name, $options: "i" }
    });

    res.status(201).json({
      success: true,
      users,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};