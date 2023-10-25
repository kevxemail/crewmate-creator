import React, { useState } from "react";
import { supabase } from "./client.js";
import "./Create.css";

function Create() {
    const [name, setName] = useState("");
    const [color, setColor] = useState("Choose");
    const [speed, setSpeed] = useState(0.0);

    const handleNameChange = (event) => {
        setName(event.target.value);
        validateForm(event.target.value, speed, color);
    };

    const handleSpeedChange = (event) => {
        setSpeed(event.target.value);
        validateForm(name, event.target.value, color);
    };

    const handleColorChange = (event) => {
        setColor(event.target.value);
        validateForm(name, speed, event.target.value);
    };

    const [isFormValid, setIsFormValid] = useState(false);

    const validateForm = (name, speed, color) => {
        // Check if all fields are filled
        if (name.trim() !== "" && speed >= 0.0 && color.trim() !== "Choose") {
            setIsFormValid(true);
        } else {
            setIsFormValid(false);
        }
    };

    const createCrew = async (event) => {
        event.preventDefault();
        if (!isFormValid) {
            alert("Please fill out all fields before submitting.");
            return;
        }
        await supabase
            .from("Crewmates")
            .insert({
                name: name,
                speed: speed,
                color: color,
            })
            .select();
        window.location = "/gallery";
    };

    return (
        <div className="create-container">
            <h1>Create Crewmate</h1>
            <img
                src="https://images.fineartamerica.com/images/artworkimages/medium/3/104-cute-among-us-png-among-us-sublimation-instant-download-among-us-pdf-png-dxf-eps-silhouette-c-tu-hoang-transparent.png"
                alt="logo"
                width="170"
                height="200"
            />
            <div className="input-container">
                <div className="input-box">
                    <h2>Name</h2>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={name}
                        onChange={handleNameChange}
                    />
                </div>

                <div className="input-box">
                    <h2>Speed</h2>
                    <input
                        type="number"
                        id="speed"
                        name="speed"
                        value={speed}
                        onChange={handleSpeedChange}
                    />
                </div>

                <div className="input-box">
                    <h2>Color</h2>
                    <select
                        id="color"
                        name="color"
                        value={color}
                        onChange={handleColorChange}
                    >
                        <option value="choose">Choose</option>
                        <option value="red">Red</option>
                        <option value="blue">Blue</option>
                        <option value="green">Green</option>
                        <option value="purple">Purple</option>
                        <option value="yellow">Yellow</option>
                        <option value="orange">Orange</option>
                        <option value="purple">Purple</option>
                        <option value="pink">Pink</option>
                        <option value="rainbow">Rainbow</option>
                    </select>
                </div>
            </div>
            <button
                className="submit-button"
                type="submit"
                onClick={createCrew}
                disabled={!isFormValid} // Disable the button if the form is not valid
            >
                Submit
            </button>
        </div>
    );
}

export default Create;
