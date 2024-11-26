import React from "react";

const ProfessionalTemplate = ({ portfolio, handleChange }) => {
    return (
        <div>
            <h3>Professional Template Details</h3>

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

            {/* University Field */}
            <label>
                University:
                <input
                    type="text"
                    name="university"
                    value={portfolio.university}
                    onChange={handleChange}
                    required
                    placeholder="Enter your university"
                />
            </label>
            <br />

            {/* Degree Field */}
            <label>
                Degree:
                <input
                    type="text"
                    name="degree"
                    value={portfolio.degree}
                    onChange={handleChange}
                    required
                    placeholder="Enter your degree"
                />
            </label>
            <br />

            {/* Bio Field */}
            <label>
                Bio:
                <textarea
                    name="bio"
                    value={portfolio.bio}
                    onChange={handleChange}
                    required
                    placeholder="Write a short bio about yourself"
                />
            </label>
            <br />
        </div>
    );
};

export default ProfessionalTemplate;
