const express = require("express");
const { 
    createTechiePortfolio, 
    getTechiePortfolios, 
    getTechiePortfolioById 
} = require("../controllers/techieController");

const router = express.Router();

router.get("/", getTechiePortfolios); // Get all portfolios
router.get("/:id", getTechiePortfolioById); // Get portfolio by ID
router.post("/", createTechiePortfolio); // Create a new portfolio

module.exports = router;
