import React from "react";
import { useLocation } from "react-router-dom";
import "./About.css";
import { useNavigate } from "react-router-dom";

function About(props) {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);

    // Get the additional parameters from the query string
    const name = searchParams.get("name");
    const speed = searchParams.get("speed");
    const color = searchParams.get("color");
    const id = searchParams.get("id");

    const navigate = useNavigate();

    return (
        <div className="about-container">
            <h1>Crewmate: {name}</h1>
            <p className="about-item">Speed: {speed}</p>
            <p className="about-item">Color: {color}</p>
            {parseInt(speed, 10) <= 3 ? (
                <p className="about-item">
                    He's TOO slow, might be a liability at some point
                </p>
            ) : (
                <p className="about-item">
                    He's fast I guess, at this point he's just showing off
                </p>
            )}
            <button
                onClick={() =>
                    navigate(
                        `/update?id=${id}&name=${name}&speed=${speed}&color=${color}`
                    )
                }
            >
                I can fix him!
            </button>
            <img
                src={"https://i.imgur.com/XSE85Xp.png"}
                className="crew-image"
                width="900"
                height="400"
            />
        </div>
    );
}

export default About;
