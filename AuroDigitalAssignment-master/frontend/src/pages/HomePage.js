import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import PortfolioCard from "../components/PortfolioCard";

const HomePage = () => {
    const [portfolios, setPortfolios] = useState({
        professional: [],
        creative: [],
        techie: [],
    });
    const [expandedSections, setExpandedSections] = useState({
        professional: false,
        creative: false,
        techie: false,
    });

    // Fetch portfolios from the database
    useEffect(() => {
        const fetchPortfolios = async () => {
            try {
                const professionalResponse = await axios.get("http://localhost:4000/api/professional");
                const creativeResponse = await axios.get("http://localhost:4000/api/creative");
                const techieResponse = await axios.get("http://localhost:4000/api/techie");

                setPortfolios({
                    professional: professionalResponse.data,
                    creative: creativeResponse.data,
                    techie: techieResponse.data,
                });
            } catch (error) {
                console.error("Error fetching portfolios:", error.message);
            }
        };

        fetchPortfolios();
    }, []);

    const toggleSection = (section) => {
        setExpandedSections((prevState) => ({
            ...prevState,
            [section]: !prevState[section],
        }));
    };

    return (
        <div style={{ textAlign: "center", padding: "20px" }}>
            <h1>Welcome to Auro Digital Portfolio Builder</h1>
            <p>Create and showcase your digital portfolio effortlessly!</p>
            <div>
                <Link to="/builder">
                    <button style={{ margin: "10px", padding: "10px 20px" }}>Build Portfolio</button>
                </Link>
                <Link to="/portfolio/example">
                    <button style={{ margin: "10px", padding: "10px 20px" }}>View Example Portfolio</button>
                </Link>
            </div>

            <div style={{ marginTop: "20px" }}>
                <h2
                    onClick={() => toggleSection("professional")}
                    style={{
                        cursor: "pointer",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        fontSize: "1.5rem",
                    }}
                >
                    Professional Portfolios
                    <span style={{ transform: expandedSections.professional ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.3s" }}>
                        &#9660;
                    </span>
                </h2>
                <div
                    style={{
                        maxHeight: expandedSections.professional ? "1000px" : "0",
                        overflow: "hidden",
                        transition: "max-height 0.3s ease-out",
                    }}
                >
                    {portfolios.professional.length > 0 ? (
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                            {portfolios.professional.map((portfolio) => (
                                <PortfolioCard
                                    key={portfolio._id}
                                    id={portfolio._id}
                                    name={portfolio.name}
                                    email={portfolio.email}
                                    phone={portfolio.phone}
                                    template={"professional"}
                                />
                            ))}
                        </div>
                    ) : (
                        <p>No professional portfolios available.</p>
                    )}
                </div>
            </div>

            <div style={{ marginTop: "20px" }}>
                <h2
                    onClick={() => toggleSection("creative")}
                    style={{
                        cursor: "pointer",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        fontSize: "1.5rem",
                    }}
                >
                    Creative Portfolios
                    <span style={{ transform: expandedSections.creative ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.3s" }}>
                        &#9660;
                    </span>
                </h2>
                <div
                    style={{
                        maxHeight: expandedSections.creative ? "1000px" : "0",
                        overflow: "hidden",
                        transition: "max-height 0.3s ease-out",
                    }}
                >
                    {portfolios.creative.length > 0 ? (
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                            {portfolios.creative.map((portfolio) => (
                                <PortfolioCard
                                    key={portfolio._id}
                                    id={portfolio._id}
                                    name={portfolio.name}
                                    email={portfolio.email}
                                    phone={portfolio.phone}
                                    template={"creative"}
                                />
                            ))}
                        </div>
                    ) : (
                        <p>No creative portfolios available.</p>
                    )}
                </div>
            </div>

            <div style={{ marginTop: "20px" }}>
                <h2
                    onClick={() => toggleSection("techie")}
                    style={{
                        cursor: "pointer",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        fontSize: "1.5rem",
                    }}
                >
                    Techie Portfolios
                    <span style={{ transform: expandedSections.techie ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.3s" }}>
                        &#9660;
                    </span>
                </h2>
                <div
                    style={{
                        maxHeight: expandedSections.techie ? "1000px" : "0",
                        overflow: "hidden",
                        transition: "max-height 0.3s ease-out",
                    }}
                >
                    {portfolios.techie.length > 0 ? (
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                            {portfolios.techie.map((portfolio) => (
                                <PortfolioCard
                                    key={portfolio._id}
                                    id={portfolio._id}
                                    name={portfolio.name}
                                    email={portfolio.email}
                                    phone={portfolio.phone}
                                    template={"techie"}
                                />
                            ))}
                        </div>
                    ) : (
                        <p>No techie portfolios available.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default HomePage;
