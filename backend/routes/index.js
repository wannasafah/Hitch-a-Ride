const express = require("express");
const pool = require("../config");
const path = require("path");
const multer = require("multer");

router = express.Router();
router.post("/addWork", async function (req, res, next) {
  let location = req.body.location;
  let destination = req.body.destination;
  let passenger = req.body.passenger
  let userId = req.body.user_id;
  let role = req.body.role;
  try {
    const [data, field] = await pool.query(
      "INSERT INTO carpooling(user_id, location, destination, passenger, role) VALUES(?, ?, ?, ?, ?)",
      [userId, location, destination, passenger, role]
    );
    res.json("success");
  } catch (error) {
    res.json(error);
  }
});
router.post("/passengers", async function (req, res, next) {
    let location = req.body.location;
    let destination = req.body.destination;
    try {
      const [data, field] = await pool.query(
        "SELECT * FROM carpooling WHERE location = ? AND destination = ?",
        [location, destination]
      );
      if(data.length>0){
        res.json(data)
      }
      else{
        res.json("error");
      }
      
    } catch (error) {
      res.json(error);
    }
  });
  router.post("/findDriver", async function (req, res, next) {
    let location = req.body.location;
    let destination = req.body.destination;
    try {
      const [data, field] = await pool.query(
        "SELECT * FROM carpooling AS c RIGHT OUTER JOIN users AS u ON u.user_id = c.user_id WHERE c.location = ? AND c.destination = ? AND c.role = 'driver'",
        [location, destination]
      );
      if(data.length>0){
        res.json(data)
      }
      else{
        res.json("error");
      }
      
    } catch (error) {
      res.json(error);
    }
  });
  router.post("/getUser", async function (req, res, next) {
    let id = req.body.id;
    try {
      const [data, field] = await pool.query(
        "SELECT * FROM users WHERE user_id = ?",
        [id]
      );
      if(data.length>0){
        res.json(data)
      }
      else{
        res.json("error");
      }
      
    } catch (error) {
      res.json(error);
    }
  });
exports.router = router;
