import React, { useEffect, useState } from "react";
import { supabase } from "./client.js";
import "./Create.css";
import "./Gallery.css"; // Create a new CSS file for Gallery styles
import { useNavigate } from "react-router-dom";

function Gallery() {
    const [crew, setCrew] = useState([]);
    useEffect(() => {
        getCrew();
    }, []);
    const navigate = useNavigate();
    const getCrew = async () => {
        const { data } = await supabase
            .from("Crewmates")
            .select()
            .order("name", { ascending: true });
        setCrew(data);
    };

    return (
        <div className="gallery-container">
            {crew.map((data) => (
                <div
                    className={`crew-block ${
                        data.color === "rainbow" ? "rainbow-bg" : "" // If we want a rainbow background we want to check if the property is rainbow first
                    }`}
                    key={data.id}
                    style={{
                        borderColor: data.color,
                        boxShadow: `5px 5px 10px 0px ${data.color}`,
                    }}
                    onClick={() =>
                        navigate(
                            `/about?id=${data.id}&name=${data.name}&speed=${data.speed}&color=${data.color}`
                        )
                    }
                >
                    <img
                        src={
                            "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/eccecf5b-58df-4fb5-b1ca-a55568933bb6/de4wc9z-8e8c024c-47a4-4df2-b6d2-3fe702239606.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2VjY2VjZjViLTU4ZGYtNGZiNS1iMWNhLWE1NTU2ODkzM2JiNlwvZGU0d2M5ei04ZThjMDI0Yy00N2E0LTRkZjItYjZkMi0zZmU3MDIyMzk2MDYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.Vej7QaFaRt--PTxyWLaIz8lI6nBG0XhEkprDqq7cZ0Q"
                        }
                        alt={data.name}
                        className="crew-image"
                    />
                    <div className="crew-info">
                        <p className="crew-name">Name: {data.name}</p>
                        <p className="crew-details">
                            Speed: {data.speed} | Color: {data.color}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Gallery;
