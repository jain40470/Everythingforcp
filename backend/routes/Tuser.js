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
      return res.status(400);
    }

    try {
      let tuser = await Tuser.create({
        username: req.body.username,
        email: req.body.email,
        registerfor: req.body.registerfor,
        eventemail: req.body.eventemail,
        eventid: req.body.eventid,
        eventlink: req.body.eventlink,
        eventdate: req.body.eventdate,
        eventtime: req.body.eventtime,
      });
      check = true;
      res.status(200).send({ check, tuser });
    } catch (err) {
      console.log(err);
      res.status(500).json({ check, error: "Some error occured" });
    }
  }
);

module.exports = router;

//
