import React from "react";

const CreativeTemplate = ({ portfolio, handleChange }) => {
    return (
        <div>
            <h3>Creative Template Details</h3>
            
            {/* Name Field */}
            <label>
                Name:
                <input
                    type="text"
                    name="name"
                    value={portfolio.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                />
            </label>
            <br />
            
            {/* Email Field */}
            <label>
                Email:
                <input
                    type="email"
                    name="email"
                    value={portfolio.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                />
            </label>
            <br />

            {/* Phone Field */}
            <label>
                Phone:
                <input
                    type="text"
                    name="phone"
                    value={portfolio.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                />
            </label>
            <br />

            {/* Location Field */}
            <label>
                Location:
                <input
                    type="text"
                    name="location"
                    value={portfolio.location}
                    onChange={handleChange}
                    placeholder="Enter your location"
                />
            </label>
            <br />
            
            {/* Portfolio URL Field */}
            <label>
                Portfolio URL:
                <input
                    type="text"
                    name="portfolioUrl"
                    value={portfolio.portfolioUrl}
                    onChange={handleChange}
                    placeholder="Enter your portfolio URL"
                />
            </label>
            <br />
            
            {/* Design Tools Field */}
            <label>
                Design Tools:
                <input
                    type="text"
                    name="designTools"
                    value={portfolio.designTools.join(", ")}
                    onChange={(e) => {
                        const newTools = e.target.value.split(",").map((tool) => tool.trim());
                        handleChange({ target: { name: "designTools", value: newTools } });
                    }}
                    placeholder="Enter design tools separated by commas"
                />
            </label>
            <br />
        </div>
    );
};

export default CreativeTemplate;
