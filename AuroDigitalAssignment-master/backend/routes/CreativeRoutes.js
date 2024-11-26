const express = require("express");
const { 
    createCreativePortfolio, 
    getCreativePortfolios, 
    getCreativePortfolioById 
} = require("../controllers/creativeController");

const router = express.Router();

router.get("/", getCreativePortfolios); // Get all creative portfolios
router.get("/:id", getCreativePortfolioById); // Get a creative portfolio by ID
router.post("/", createCreativePortfolio); // Create a new creative portfolio

module.exports = router;
