const express = require("express");
const { 
    createProfessionalPortfolio, 
    getProfessionalPortfolios, 
    getProfessionalPortfolioById 
} = require("../controllers/professionalController");

const router = express.Router();

router.get("/", getProfessionalPortfolios); // Get all professional portfolios
router.get("/:id", getProfessionalPortfolioById); // Get a professional portfolio by ID
router.post("/", createProfessionalPortfolio); // Create a new professional portfolio

module.exports = router;
