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
                const response = await axios.get(`http://localhost:4000/api/creative/${id}`);
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
            <h2>Creative Portfolio: {portfolio.name}</h2>
            <p>
                <strong>Email:</strong> {portfolio.email}
            </p>
            <p>
                <strong>Phone:</strong> {portfolio.phone}
            </p>
            <p>
                <strong>Location:</strong> {portfolio.location}
            </p>

            <hr style={{ margin: "20px 0" }} />

            <section>
                <h3>Portfolio URL:</h3>
                {portfolio.portfolioUrl ? (
                    <a href={portfolio.portfolioUrl} target="_blank" rel="noopener noreferrer">
                        {portfolio.portfolioUrl}
                    </a>
                ) : (
                    <p>Portfolio URL not provided.</p>
                )}
            </section>

            <section>
                <h3>Design Tools:</h3>
                {portfolio.designTools && portfolio.designTools.length > 0 ? (
                    <ul>
                        {portfolio.designTools.map((tool, index) => (
                            <li key={index}>{tool}</li>
                        ))}
                    </ul>
                ) : (
                    <p>No design tools specified.</p>
                )}
            </section>
        </div>
    );
};

export default ViewPortfolioDynamic;
