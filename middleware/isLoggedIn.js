module.exports = (req, res, next) => {
  if (!req.user) {
    return res.json({
      success: false,
      message: "User is not logged in",
    });
  }
  next();
};
