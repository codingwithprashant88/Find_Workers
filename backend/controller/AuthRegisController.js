const RegistrationUser = require("../Models/RegistrationInfo");

const UserGet = async (req, res) => {
  try {
    if (!req.user || !req.user.id) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized user",
      });
    }

    const usersInfo = await RegistrationUser.find({
      user: req.user.id,
    });

    res.status(200).json({
      success: true,
      data: usersInfo,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

const UserRegistrationInfo = async (req, res) => {
  try {
    const { name, age, phone, email, category } = req.body;
    const userId = req.user.id;
    const userCheck = await RegistrationUser.findOne({ email, user: userId });
    if (userCheck) {
      return res
        .status(403)
        .json({ message: "User Registration is Already Exist" });
    }

    const registerUser = new RegistrationUser({
      name,
      age,
      phone,
      email,
      category,
      user: userId,
    });
    await registerUser.save();
    res
      .status(201)
      .json({ message: "User Register SuccessFuly", success: true , User: registerUser});
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

module.exports = { UserGet, UserRegistrationInfo };
