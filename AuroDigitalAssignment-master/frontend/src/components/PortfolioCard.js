import React from "react";
import { Link } from "react-router-dom";

const PortfolioCard = ({ id, name, email, phone, template }) => {
    return (
        <div
            style={{
                width: "80%",
                margin: "20px auto",
                padding: "20px",
                backgroundColor: "white",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                borderRadius: "8px",
            }}
        >
            <div>
                <h3>{name}</h3>
                <p>Email: {email}</p>
                <p>Phone: {phone}</p>
            </div>
            <Link to={`/${template}/${id}`}>
                <button
                    style={{
                        padding: "10px 20px",
                        backgroundColor: "#007BFF",
                        color: "white",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer",
                    }}
                >
                    View Portfolio
                </button>
            </Link>
        </div>
    );
};

export default PortfolioCard;
