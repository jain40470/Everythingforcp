const express = require("express");
const router = express.Router();
const Tuser = require("../models/Tuser");
const { body, validationResult } = require("express-validator");

router.post(
  "/",

  body("username", "Enter a valid username").isLength({ min: 3 }),
  body("email", "Enter a valid email").isEmail(),

  async (req, res) => {
    console.log(req.body);
    const errors = validationResult(req);
    let check = false;

    if (!errors.isEmpty()) {
      return res.status(400).json({ check, errors: errors.array() });
    }

    try {
      let tevent = await Tevent.create({
        username: req.body.username,
        email: req.body.email,
      });
      check = true;
      res.status(200).send({ check, tevent });
    } catch (err) {
      console.log(err);
      res.status(500).json({ check, error: "Some error occured" });
    }
  }
);

module.exports = router;
