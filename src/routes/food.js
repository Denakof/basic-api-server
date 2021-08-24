"use strict";

const express = require("express");
const router = express.Router();
const { Food } = require("../models/index");

router.get("/food", getAll);
router.post("/food", create);
router.put("/food/:id", updateData);
router.delete("/food/:id", delete1);
router.get("/food/:id", getOne);

async function getAll(req, res) {
  let food1 = await Food.getAll();
  res.status(200).json(food1);
}

async function create(req, res) {
  let food = req.body;

  let food1 = await Food.create(food);
  res.status(201).json(food1);
}
async function updateData(req, res) {
  const id = parseInt(req.params.id); 
 let food1 = await Food.update(id, req.body);

  res.status(200).json(food1);
}



async function delete1(req, res) {
  const id = parseInt(req.params.id); 
 let food1 = await Food.delete(id);
  res.status(200).json(food1);
}

async function getOne(req, res) {
  const id = parseInt(req.params.id); 
  let food1 = await Food.get(id);
  res.status(200).json(food1);
}

module.exports = router;
