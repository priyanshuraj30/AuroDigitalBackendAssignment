const mongoose = require("mongoose");

const professionalTemplateSchema = new mongoose.Schema({
    // Common Fields
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    location: { type: String, required: true },

    // Professional-specific Fields
    university: { type: String, required: true },
    degree: { type: String, required: true },
    bio: { type: String, required: true },
});

module.exports = mongoose.model("ProfessionalTemplate", professionalTemplateSchema);
