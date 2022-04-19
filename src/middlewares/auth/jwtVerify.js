const jwt = require("jsonwebtoken");
const url = require("url");
const { security } = require("../../config");

module.exports = async function (req, res, next) {
  try {
    let token = null;

    if (req.query && req.query.token) {
      token = req.query.token;
    }

    if (token && url.parse(req.url).pathname.startsWith("/public")) {
      let decoded = jwt.verify(token, security.JWT.key);
      req.jwtPayload = decoded;
      return next();
    }

    if (
      !url.parse(req.url).pathname.startsWith("/auth") &&
      url.parse(req.url).pathname !== "/ping"
    ) {
      let decoded = jwt.verify(req.token, security.JWT.key);
      let { priviledges, isAdmin } = decoded;
      req.jwtPayload = decoded;

      //for admin section
      if (isAdmin == 1) {
        return next();
      }
      if (url.parse(req.url).pathname.startsWith("/admin")) {
        return res.answerWith(401, "Not Authorized");
      }

      priviledges.push("/report");
      //check user priviledges
      let urlPath = url.parse(req.url).pathname;
      let checkLengthSubUrlPath = urlPath.split("/").length - 1; //3

      let parrentPath = null;

      for (let i = 0; i < checkLengthSubUrlPath - 1; i++) {
        if (parrentPath) {
          parrentPath = parrentPath
            .substring(0, parrentPath.lastIndexOf("/") + 1)
            .slice(0, -1);
        } else {
          parrentPath = urlPath
            .substring(0, urlPath.lastIndexOf("/") + 1)
            .slice(0, -1);
        }
      }

      
      if (
        priviledges.indexOf(parrentPath) < 0 &&
        priviledges.indexOf(urlPath) < 0
      ) {
        return res.answerWith(401, "Not Authorized");
      }
      return next();
    } else {
      next();
    }
  } catch (error) {
    res.answerWith(401, "Not Authorized");
  }
};
