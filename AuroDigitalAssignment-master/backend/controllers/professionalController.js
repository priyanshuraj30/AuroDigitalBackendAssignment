const Portfolio = require("../models/ProfessionalTemplateModel");

// Get All Professional Portfolios
const getProfessionalPortfolios = async (req, res) => {
    try {
        const portfolios = await Portfolio.find(); // Retrieve all portfolios
        res.status(200).json(portfolios);
    } catch (error) {
        res.status(500).json({ message: "Error fetching professional portfolios", error });
    }
};

// Get Professional Portfolio by ID
const getProfessionalPortfolioById = async (req, res) => {
    const { id } = req.params;

    try {
        const portfolio = await Portfolio.findById(id);

        if (!portfolio) {
            return res.status(404).json({ message: "Professional portfolio not found" });
        }

        res.status(200).json(portfolio);
    } catch (error) {
        res.status(500).json({ message: "Error fetching professional portfolio by ID", error });
    }
};

// Create Professional Portfolio
const createProfessionalPortfolio = async (req, res) => {
    const {
        name,
        email,
        phone,
        location,
        university,
        degree,
        bio,
    } = req.body;

    try {
        const newPortfolio = new Portfolio({
            name,
            email,
            phone,
            location,
            university,
            degree,
            bio,
        });

        await newPortfolio.save();
        res.status(201).json({ message: "Professional portfolio created", portfolio: newPortfolio });
    } catch (error) {
        console.error("Error creating portfolio:", error); // Log the error
        res.status(500).json({ message: "Error creating professional portfolio", error });
    }
};

module.exports = {
    createProfessionalPortfolio,
    getProfessionalPortfolios,
    getProfessionalPortfolioById,
};
