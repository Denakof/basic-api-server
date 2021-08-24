"use strict";

const express = require("express");
const router = express.Router();
const { Clothes } = require("../models/index");

router.get("/clothes", getAll);
router.post("/clothes", create);
router.put("/clothes/:id", updateData);
router.delete("/clothes/:id", delete1);
router.get("/clothes/:id", getOne);

async function getAll(req, res) {
  let clothes = await Clothes.getAll();
  res.status(200).json(clothes);
}

async function create(req, res) {
  let clothes = req.body;
  //must have an email

  let clothes1 = await Clothes.create(clothes);
  res.status(201).json(clothes1);
}
async function updateData(req, res) {
  const id = parseInt(req.params.id);

  let clothes = await Clothes.update(id, req.body);
  res.status(200).json(clothes);
}

async function delete1(req, res) {
  const id = parseInt(req.params.id);

  let clothes = await Clothes.delete(id);
  res.status(200).json(clothes);
}

async function getOne(req, res) {
  const id = parseInt(req.params.id);

  let clothes = await Clothes.get(id);
  res.status(200).json(clothes);
}

module.exports = router;
