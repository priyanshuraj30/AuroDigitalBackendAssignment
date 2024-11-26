import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ViewPortfolioDynamic = () => {
    const { id } = useParams();
    const [portfolio, setPortfolio] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPortfolio = async () => {
            try {
                // Replace with your actual API endpoint
                const response = await axios.get(`http://localhost:4000/api/portfolios/${id}`);
                setPortfolio(response.data); // Store the fetched portfolio
                setLoading(false);
            } catch (err) {
                setError("Failed to fetch portfolio.");
                setLoading(false);
            }
        };

        fetchPortfolio();
    }, [id]);

    if (loading) {
        return <p>Loading portfolio...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    if (!portfolio) {
        return <p>Portfolio not found.</p>;
    }

    return (
        <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto", fontFamily: "Arial, sans-serif" }}>
            <h2>Portfolio: {portfolio.name}</h2>
            <p>
                <strong>Email:</strong> {portfolio.email}
            </p>
            <p>
                <strong>Phone:</strong> {portfolio.phone}
            </p>
            <p>
                <strong>About:</strong> {portfolio.about}
            </p>
            <h3>Skills:</h3>
            <ul>
                {portfolio.skills?.map((skill, index) => (
                    <li key={index}>{skill}</li>
                ))}
            </ul>
            <h3>Experience:</h3>
            <ul>
                {portfolio.experience?.map((exp, index) => (
                    <li key={index}>
                        <strong>{exp.title}</strong> at {exp.company} ({exp.startDate} - {exp.endDate})
                        <br />
                        <p>{exp.description}</p>
                    </li>
                ))}
            </ul>
            <h3>Education:</h3>
            <ul>
                {portfolio.education?.map((edu, index) => (
                    <li key={index}>
                        <strong>{edu.degree}</strong> from {edu.institution} ({edu.startDate} - {edu.endDate})
                        <br />
                        <p>{edu.details}</p>
                    </li>
                ))}
            </ul>
            <h3>Projects:</h3>
            <ul>
                {portfolio.projects?.map((project, index) => (
                    <li key={index}>
                        <strong>{project.title}</strong>: {project.description}
                        <br />
                        <a href={project.repoLink} target="_blank" rel="noopener noreferrer">
                            GitHub Repo
                        </a>{" "}
                        |{" "}
                        <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                            Live Demo
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ViewPortfolioDynamic;
