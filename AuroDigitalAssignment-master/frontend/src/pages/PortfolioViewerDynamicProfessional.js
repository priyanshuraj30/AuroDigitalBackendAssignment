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
                const response = await axios.get(`http://localhost:4000/api/professional/${id}`);
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
                <h2>University</h2>
                {portfolio.university ? (
                    <p>{portfolio.university}</p>
                ) : (
                    <p>University information not provided.</p>
                )}
            </section>

            <section>
                <h2>Degree</h2>
                {portfolio.degree ? (
                    <p>{portfolio.degree}</p>
                ) : (
                    <p>Degree information not provided.</p>
                )}
            </section>

            <section>
                <h2>Bio</h2>
                {portfolio.bio ? <p>{portfolio.bio}</p> : <p>Bio not provided.</p>}
            </section>
        </div>
    );
};

export default ViewPortfolioDynamic;
