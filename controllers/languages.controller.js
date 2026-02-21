const languages = require("../data/languages");

// GET all languages
const getAllLanguages = (req, res) => {
  let result = [...languages];

  // Search filter
  if (req.query.search) {
    const search = req.query.search.toLowerCase();
    result = result.filter(l => l.name.toLowerCase().includes(search));
  }

  // Sort
  if (req.query.sort === "asc") {
    result.sort((a, b) => a.name.localeCompare(b.name));
  } else if (req.query.sort === "desc") {
    result.sort((a, b) => b.name.localeCompare(a.name));
  }

  res.status(200).json({
    success: true,
    count: result.length,
    data: result
  });
};

// GET single language by ID
const getLanguageById = (req, res) => {
  const lang = languages.find(l => l.id === parseInt(req.params.id));

  if (!lang) {
    return res.status(404).json({
      success: false,
      message: "Language not found"
    });
  }

  res.status(200).json({
    success: true,
    data: lang
  });
};

module.exports = { getAllLanguages, getLanguageById };