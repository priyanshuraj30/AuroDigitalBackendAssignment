const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const professionalRoutes = require("./routes/ProfessionalRoutes"); // Import portfolio routes
const creativeRoutes = require("./routes/CreativeRoutes"); // Import portfolio routes
const techieRoutes = require("./routes/TechieRoutes"); // Import portfolio routes

dotenv.config();

const app = express();

// Middleware
app.use(cors()); // Enable CORS for cross-origin requests
app.use(express.json()); // Parse JSON bodies

// Log request details for debugging purposes
app.use((req, res, next) => {
    console.log(`${req.method} request to ${req.path}`);
    next();
});

// Define routes for portfolio-related actions
app.use("/api/professional", professionalRoutes);
app.use("/api/creative", creativeRoutes);
app.use("/api/techie", techieRoutes);


// Connect to MongoDB
const PORT = process.env.PORT || 5000;
const MONGO_URL = process.env.MONGO_URL;

mongoose
    .connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    })
    .catch((err) => {
        console.error("Error connecting to MongoDB:", err);
    });
