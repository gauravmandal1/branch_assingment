const jwt = require("jsonwebtoken");

const generateToken = (id) => {
  return jwt.sign({ id }, "secrecttokenhaiye", {
    expiresIn: "30d",
  });
};

module.exports = generateToken;
