const Portfolio = require("../models/TechieTemplateModel");

// Get All Techie Portfolios
const getTechiePortfolios = async (req, res) => {
    try {
        const portfolios = await Portfolio.find(); // Retrieve all portfolios
        res.status(200).json(portfolios);
    } catch (error) {
        res.status(500).json({ message: "Error fetching techie portfolios", error });
    }
};

// Get Techie Portfolio by ID
const getTechiePortfolioById = async (req, res) => {
    const { id } = req.params;

    try {
        const portfolio = await Portfolio.findById(id);

        if (!portfolio) {
            return res.status(404).json({ message: "Techie portfolio not found" });
        }

        res.status(200).json(portfolio);
    } catch (error) {
        res.status(500).json({ message: "Error fetching techie portfolio by ID", error });
    }
};

// Create Techie Portfolio
const createTechiePortfolio = async (req, res) => {
    const {
        name,
        email,
        phone,
        location,
        programmingLanguages,
        tools,
        skills, 
    } = req.body;

    try {
        const newPortfolio = new Portfolio({
            name,
            email,
            phone,
            location,
            programmingLanguages,
            tools,
            skills,
        });

        await newPortfolio.save();
        res.status(201).json({ message: "Techie portfolio created", portfolio: newPortfolio });
    } catch (error) {
        res.status(500).json({ message: "Error creating techie portfolio", error });
    }
};

module.exports = {
    createTechiePortfolio,
    getTechiePortfolios,
    getTechiePortfolioById,
};
