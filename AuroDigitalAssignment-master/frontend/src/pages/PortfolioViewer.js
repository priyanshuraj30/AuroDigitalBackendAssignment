import React from "react";

const portfolios = [
    {
        // Professional Template
        template: "Professional Template",
        name: "John Doe",
        email: "johndoe@example.com",
        phone: "123-456-7890",
        location: "New York, USA",
        university: "University of Example",
        degree: "Bachelor of Science in Computer Science",
        bio: "Passionate about software development and building scalable web applications.",
    },
    {
        // Techie Template
        template: "Techie Template",
        name: "Jane Smith",
        email: "janesmith@example.com",
        phone: "987-654-3210",
        location: "San Francisco, USA",
        programmingLanguages: ["Python", "JavaScript"],
        tools: ["Django", "Flask", "SQL", "Docker", "AWS"],
        skills: ["Python", "Django", "Flask", "SQL", "Docker", "AWS"],
    },
    {
        // Creative Template
        template: "Creative Template",
        name: "Alice Johnson",
        email: "alicej@example.com",
        phone: "555-1234",
        location: "London, UK",
        portfolioUrl: "https://www.behance.net/alicejohnson",
        designTools: ["Adobe Photoshop", "Illustrator", "Figma"],
    }
];

const PortfolioViewer = () => {
    return (
        <div style={{ padding: "20px" }}>
            <h2>Portfolios</h2>
            {portfolios.map((portfolio, index) => (
                <div
                    key={index}
                    style={{
                        marginBottom: "40px",
                        borderBottom: "1px solid #ccc",
                        paddingBottom: "20px",
                    }}
                >
                    <h3>{portfolio.template}</h3>
                    <h4>{portfolio.name}'s Portfolio</h4>
                    <p><strong>Email:</strong> {portfolio.email}</p>
                    <p><strong>Phone:</strong> {portfolio.phone}</p>
                    <p><strong>Location:</strong> {portfolio.location}</p>

                    {/* Conditionally render based on template */}
                    {portfolio.university && <p><strong>University:</strong> {portfolio.university}</p>}
                    {portfolio.degree && <p><strong>Degree:</strong> {portfolio.degree}</p>}
                    {portfolio.bio && <p><strong>Bio:</strong> {portfolio.bio}</p>}

                    {portfolio.programmingLanguages && (
                        <>
                            <h4>Programming Languages:</h4>
                            <ul>
                                {portfolio.programmingLanguages.map((lang, idx) => (
                                    <li key={idx}>{lang}</li>
                                ))}
                            </ul>
                        </>
                    )}

                    {portfolio.tools && (
                        <>
                            <h4>Tools:</h4>
                            <ul>
                                {portfolio.tools.map((tool, idx) => (
                                    <li key={idx}>{tool}</li>
                                ))}
                            </ul>
                        </>
                    )}

                    {portfolio.skills && (
                        <>
                            <h4>Skills:</h4>
                            <ul>
                                {portfolio.skills.map((skill, idx) => (
                                    <li key={idx}>{skill}</li>
                                ))}
                            </ul>
                        </>
                    )}

                    {portfolio.portfolioUrl && (
                        <p>
                            <strong>Portfolio URL:</strong>{" "}
                            <a
                                href={portfolio.portfolioUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {portfolio.portfolioUrl}
                            </a>
                        </p>
                    )}

                    {portfolio.designTools && (
                        <>
                            <h4>Design Tools:</h4>
                            <ul>
                                {portfolio.designTools.map((tool, idx) => (
                                    <li key={idx}>{tool}</li>
                                ))}
                            </ul>
                        </>
                    )}
                </div>
            ))}
        </div>
    );
};

export default PortfolioViewer;
