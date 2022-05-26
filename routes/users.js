var express = require("express");
var router = express.Router();
const { getRandomStudent } = require("./get-random-student");
/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.post("/", function (req, res, next) {
  const { name } = req.body;
  if (name === "thiago") {
    res.status(200).json({ job: "full-stack-developer" });
  } else if (name === "gabriel") {
    res.status(200).json({ job: "front-end" });
  } else {
    res.status(200).json({ job: "no-job" });
  }
});

router.get("/mock", function (req, res) {
  const list = ["thiago", "felipe", "gabriel"];
  res.send(getRandomStudent(list));
});

module.exports = router;
