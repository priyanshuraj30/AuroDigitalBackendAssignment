import React from "react";

const TechieTemplate = ({ portfolio, handleChange }) => {
    return (
        <div>
            <h3>Techie Template Details</h3>

            {/* Name Field */}
            <label>
                Name:
                <input
                    type="text"
                    name="name"
                    value={portfolio.name}
                    onChange={handleChange}
                    required
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
                    required
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
                    required
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
                    required
                    placeholder="Enter your location"
                />
            </label>
            <br />

            {/* Programming Languages Field */}
            <label>
                Programming Languages:
                <input
                    type="text"
                    name="programmingLanguages"
                    value={portfolio.programmingLanguages.join(", ")}
                    onChange={(e) => {
                        const newLanguages = e.target.value.split(",").map((lang) => lang.trim());
                        handleChange({ target: { name: "programmingLanguages", value: newLanguages } });
                    }}
                    placeholder="Enter languages separated by commas"
                />
            </label>
            <br />

            {/* Tools Field */}
            <label>
                Tools:
                <input
                    type="text"
                    name="tools"
                    value={portfolio.tools.join(", ")}
                    onChange={(e) => {
                        const newTools = e.target.value.split(",").map((tool) => tool.trim());
                        handleChange({ target: { name: "tools", value: newTools } });
                    }}
                    placeholder="Enter tools separated by commas"
                />
            </label>
            <br />

            {/* Skills Field */}
            <label>
                Skills:
                <input
                    type="text"
                    name="skills"
                    value={portfolio.skills.join(", ")}
                    onChange={(e) => {
                        const newSkills = e.target.value.split(",").map((skill) => skill.trim());
                        handleChange({ target: { name: "skills", value: newSkills } });
                    }}
                    placeholder="Enter skills separated by commas"
                />
            </label>
            <br />
        </div>
    );
};

export default TechieTemplate;
