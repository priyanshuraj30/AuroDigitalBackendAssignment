const mongoose = require("mongoose");

const creativeTemplateSchema = new mongoose.Schema({
    // Common Fields
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    location: { type: String, required: true },

    // Creative-specific Fields
    portfolioUrl: { type: String, required: true },
    designTools: { type: [String], required: true },
});

module.exports = mongoose.model("CreativeTemplate", creativeTemplateSchema);
