const mongoose = require("mongoose");

const techieTemplateSchema = new mongoose.Schema({
    // Common Fields
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    location: { type: String, required: true },

    // Techie-specific Fields
    programmingLanguages: { type: [String], required: true },
    tools: { type: [String], required: true },

    // Skills (Array of strings)
    skills: { type: [String], required: true },

});

module.exports = mongoose.model("TechieTemplate", techieTemplateSchema);
