const express = require("express");
const router = express.Router();
const { getAllLanguages, getLanguageById } = require("../controllers/languages.controller");

router.get("/", getAllLanguages);
router.get("/:id", getLanguageById);

module.exports = router;