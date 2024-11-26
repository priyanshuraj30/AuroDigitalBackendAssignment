const Portfolio = require("../models/CreativeTemplateModel");

// Get All Creative Portfolios
const getCreativePortfolios = async (req, res) => {
    try {
        const portfolios = await Portfolio.find(); // Filter by template type
        res.status(200).json(portfolios);
    } catch (error) {
        res.status(500).json({ message: "Error fetching creative portfolios", error });
    }
};

// Get Creative Portfolio by ID
const getCreativePortfolioById = async (req, res) => {
    const { id } = req.params;

    try {
        const portfolio = await Portfolio.findById(id);

        if (!portfolio) {
            return res.status(404).json({ message: "Creative portfolio not found" });
        }

        res.status(200).json(portfolio);
    } catch (error) {
        res.status(500).json({ message: "Error fetching creative portfolio by ID", error });
    }
};

// Create Creative Portfolio
const createCreativePortfolio = async (req, res) => {
    const {
        name,
        email,
        phone,
        location,
        portfolioUrl,
        designTools,          
    } = req.body;

    try {
        const newPortfolio = new Portfolio({
            name,
            email,
            phone,
            location,
            portfolioUrl,
            designTools,       
        });

        await newPortfolio.save();
        res.status(201).json({ message: "Creative portfolio created", portfolio: newPortfolio });
    } catch (error) {
        res.status(500).json({ message: "Error creating creative portfolio", error });
    }
};

module.exports = {
    createCreativePortfolio,
    getCreativePortfolios,
    getCreativePortfolioById,
};
