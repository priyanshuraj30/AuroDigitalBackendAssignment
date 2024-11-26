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
                const response = await axios.get(`http://localhost:4000/api/techie/${id}`);
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
            <h1 style={{ textAlign: "center" }}>{portfolio.name}</h1>
            <p style={{ textAlign: "center" }}>
                <strong>Email:</strong> {portfolio.email} | <strong>Phone:</strong> {portfolio.phone} |{" "}
                <strong>Location:</strong> {portfolio.location}
            </p>

            <hr style={{ margin: "20px 0" }} />

            <section>
                <h2>Programming Languages</h2>
                <ul>
                    {portfolio.programmingLanguages && portfolio.programmingLanguages.length > 0 ? (
                        portfolio.programmingLanguages.map((language, index) => (
                            <li key={index}>{language}</li>
                        ))
                    ) : (
                        <p>No programming languages listed.</p>
                    )}
                </ul>
            </section>

            <section>
                <h2>Tools/Technologies</h2>
                <ul>
                    {portfolio.tools && portfolio.tools.length > 0 ? (
                        portfolio.tools.map((tool, index) => <li key={index}>{tool}</li>)
                    ) : (
                        <p>No tools/technologies listed.</p>
                    )}
                </ul>
            </section>

            <section>
                <h2>Skills</h2>
                <ul>
                    {portfolio.skills && portfolio.skills.length > 0 ? (
                        portfolio.skills.map((skill, index) => <li key={index}>{skill}</li>)
                    ) : (
                        <p>No skills listed.</p>
                    )}
                </ul>
            </section>
        </div>
    );
};

export default ViewPortfolioDynamic;
