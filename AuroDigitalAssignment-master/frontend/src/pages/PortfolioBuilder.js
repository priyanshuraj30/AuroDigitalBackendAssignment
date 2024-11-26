import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ProfessionalTemplateModel } from "../models/ProfessionalTemplateModel";
import { TechieTemplateModel } from "../models/TechieTemplateModel";
import axios from "axios";

const PortfolioBuilder = () => {
    const [portfolio, setPortfolio] = useState({});
    const [isTemplateSelected, setIsTemplateSelected] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPortfolio({ ...portfolio, [name]: value });
    };

    const handleArrayChange = (e, fieldName) => {
        const values = e.target.value.split(",").map((item) => item.trim());
        setPortfolio({ ...portfolio, [fieldName]: values });
    };

    const handleTemplateChange = (e) => {
        const template = e.target.value;
        setIsTemplateSelected(true);

        let newTemplateData = {};
        switch (template) {
            case "Professional Template":
                newTemplateData = { ...ProfessionalTemplateModel, template: "Professional Template" };
                break;
            case "Techie Template":
                newTemplateData = { ...TechieTemplateModel, template: "Techie Template" };
                break;
            case "Creative Template":
                newTemplateData = {
                    name: "",
                    email: "",
                    phone: "",
                    location: "",
                    portfolioUrl: "",
                    designTools: [],
                    template: "Creative Template",
                };
                break;
            default:
                break;
        }

        setPortfolio((prevState) => ({
            ...prevState,
            ...newTemplateData,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        let postUrl = 'http://localhost:4000/api/portfolios';

        switch (portfolio.template) {
            case "Professional Template":
                postUrl = 'http://localhost:4000/api/professional';
                break;
            case "Techie Template":
                postUrl = 'http://localhost:4000/api/techie';
                break;
            case "Creative Template":
                postUrl = 'http://localhost:4000/api/creative';
                break;
            default:
                break;
        }

        try {
            console.log(portfolio);
            const response = await axios.post(postUrl, portfolio);
            console.log("Response:", response.data);
            navigate("/");
        } catch (error) {
            console.error("Error submitting portfolio:", error.response?.data || error.message);
        }
    };

    return (
        <div style={{ padding: "20px" }}>
            <h2>Build Your Portfolio</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Template:
                    <select
                        name="template"
                        value={portfolio.template || ""}
                        onChange={handleTemplateChange}
                        required
                    >
                        <option value="">Select a Template</option>
                        <option value="Professional Template">Professional Template</option>
                        <option value="Techie Template">Techie Template</option>
                        <option value="Creative Template">Creative Template</option>
                    </select>
                </label>
                <br />

                <label>
                    Name:
                    <input
                        type="text"
                        name="name"
                        value={portfolio.name || ""}
                        onChange={handleChange}
                        required
                    />
                </label>
                <br />
                <label>
                    Email:
                    <input
                        type="email"
                        name="email"
                        value={portfolio.email || ""}
                        onChange={handleChange}
                        required
                    />
                </label>
                <br />
                <label>
                    Phone:
                    <input
                        type="text"
                        name="phone"
                        value={portfolio.phone || ""}
                        onChange={handleChange}
                        required
                    />
                </label>
                <br />
                <label>
                    Location:
                    <input
                        type="text"
                        name="location"
                        value={portfolio.location || ""}
                        onChange={handleChange}
                        required
                    />
                </label>
                <br />

                {/* Professional Template Fields */}
                {isTemplateSelected && portfolio.template === "Professional Template" && (
                    <div>
                        <h3>Professional Template Details</h3>
                        <label>
                            University:
                            <input
                                type="text"
                                name="university"
                                value={portfolio.university || ""}
                                onChange={handleChange}
                                required
                            />
                        </label>
                        <br />
                        <label>
                            Degree:
                            <input
                                type="text"
                                name="degree"
                                value={portfolio.degree || ""}
                                onChange={handleChange}
                                required
                            />
                        </label>
                        <br />
                        <label>
                            Bio:
                            <textarea
                                name="bio"
                                value={portfolio.bio || ""}
                                onChange={handleChange}
                                required
                                placeholder="Write a short bio about yourself"
                            />
                        </label>
                        <br />
                    </div>
                )}

                {/* Techie Template Fields */}
                {isTemplateSelected && portfolio.template === "Techie Template" && (
                    <div>
                        <h3>Techie Template Details</h3>
                        <label>
                            Programming Languages (comma-separated):
                            <textarea
                                name="programmingLanguages"
                                value={portfolio.programmingLanguages?.join(", ") || ""}
                                onChange={(e) => handleArrayChange(e, "programmingLanguages")}
                                required
                                placeholder="List programming languages you know"
                            />
                        </label>
                        <br />
                        <label>
                            Tools (comma-separated):
                            <textarea
                                name="tools"
                                value={portfolio.tools?.join(", ") || ""}
                                onChange={(e) => handleArrayChange(e, "tools")}
                                required
                                placeholder="List tools/technologies you use"
                            />
                        </label>
                        <br />
                        <label>
                            Skills (comma-separated):
                            <textarea
                                name="skills"
                                value={portfolio.skills?.join(", ") || ""}
                                onChange={(e) => handleArrayChange(e, "skills")}
                                required
                                placeholder="List your skills"
                            />
                        </label>
                        <br />
                    </div>
                )}

                {/* Creative Template Fields */}
                {isTemplateSelected && portfolio.template === "Creative Template" && (
                    <div>
                        <h3>Creative Template Details</h3>
                        <label>
                            Portfolio URL:
                            <input
                                type="url"
                                name="portfolioUrl"
                                value={portfolio.portfolioUrl || ""}
                                onChange={handleChange}
                                required
                                placeholder="Enter your portfolio URL"
                            />
                        </label>
                        <br />
                        <label>
                            Design Tools (comma-separated):
                            <textarea
                                name="designTools"
                                value={portfolio.designTools?.join(", ") || ""}
                                onChange={(e) => handleArrayChange(e, "designTools")}
                                required
                                placeholder="List design tools you use"
                            />
                        </label>
                        <br />
                    </div>
                )}

                <button type="submit">Submit Portfolio</button>
            </form>
        </div>
    );
};

export default PortfolioBuilder;
