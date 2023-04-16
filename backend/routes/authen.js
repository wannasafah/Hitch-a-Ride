const express = require("express");
const pool = require("../config");
const path = require("path");
const router = express.Router();
let alert = require("alert");

router.post("/signup", async function (req, res, next) {
  let fullname = req.body.fullname;
  let email = req.body.email;
  let phone = req.body.phone;
  let gender = req.body.gender;
  let password1 = req.body.password1;
  let password2 = req.body.password2;
  if (password1 != password2) {
    alert("Password do not match");
  } else {
    const conn = await pool.getConnection();
    await conn.beginTransaction();
    try {
      const user = await conn.query(
        "INSERT INTO users(fullname, email, phone, gender, password) VALUES(?, ?, ?, ?, ?)",
        [fullname, email, phone, gender, password1]
      );
      await conn.commit();
      res.json("success");
    } catch (err) {
      await conn.rollback();
      next(err);
    } finally {
      console.log("finally");
      conn.release();
    }
  }
});

router.post("/login", async function (req, res, next) {
  let email = req.body.email;
  let password = req.body.password;
  
  const [data, field] = await pool.query(
    "SELECT * FROM users WHERE email = ? AND password = ?",
    [email, password]
  );
  if (data[0] == undefined) {
    return res.json("error");
  } else {
    return res.json(data[0].user_id);
  }
});

router.post("/user", async function (req, res, next) {
  let id = req.body.user_id;
  const [data, field] = await pool.query(
    "SELECT * FROM users WHERE id = ?",
    [id]
    );

  if (data[0] == undefined) {
    return res.json("error");
  } else {
    return res.json(data[0]);
  }
});


router.post("/editprofile_noimg", async function (req, res, next) {
  let id = req.body.user_id
  let firstname = req.body.firstname;
  let lastname = req.body.lastname;
  let password = req.body.password;
  try {
    const [data, field] = await pool.query(
      "UPDATE users SET firstname = ?, lastname = ?, password = ? WHERE id = ?",
      [firstname, lastname, password, id]
    );
    res.json("success")
  } catch (error) {
    res.json(error)
  }
});

router.post("/addInterest", async function (req, res, next) {
  let id = req.body.user_id
  let interest = req.body.interest;
  try {
    const [data, field] = await pool.query(
      "UPDATE users SET interest = ? WHERE id = ?",
      [JSON.stringify(interest), id]
    );
    res.json("success")
  } catch (error) {
    res.json(error)
  }
});

module.exports = router;
