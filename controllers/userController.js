const User = require("../models/user");

exports.signup = async (req, res) => {
  try {
    console.log(req.body);
    const { username, email, password } = req.body;

    //find user if exist or not
    let user = await User.findOne({ email: email });

    //return if user not exist
    if (user) {
      return res.status(400).json({
        success: false,
        message: "User already exists",
      });
    }

    //user created
    user = await User.create({ username, email, password });

    await user.save();

    //generate token
    const token = user.generateToken();

    res.status(201).json({
      user: user,
      token: token,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};


//sign in method
exports.signIn = async (req, res) => {
  try {
    const { email, password } = req.body;

    let user = await User.findOne({ email:email }).select("+password");

    //check user exist or not
    if (!user) {
      return res.status(500).json({
        success: false,
        message: "User doesn't exist",
      });
    }

    //now check password
    const isMatch = user.matchPassword(password);
    if (!isMatch) {
      return res.status(400).json({
        message: "Invalid Credentionls",
      });
    }

    const token = user.generateToken();

    res.status(201).json({
      user: user,
      token: token,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};
