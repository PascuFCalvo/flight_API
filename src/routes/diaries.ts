import express from "express"; //ESmodules
// const express = require("express") //commonJS


const router = express.Router();

router.get("/", (_req, res) => {
  res.send("Fetching all entry diaries");
});

router.post("/", (_req, res) => {
  res.send("Saving a diary");
});

export default router;