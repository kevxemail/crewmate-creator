import React, { useState } from "react";
import { supabase } from "./client.js";
import { useLocation } from "react-router-dom";
import "./Create.css";

function Update() {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);

    // Get the additional parameters from the query string
    const currName = searchParams.get("name");
    const currSpeed = searchParams.get("speed");
    const currColor = searchParams.get("color");
    const id = searchParams.get("id");
    console.log(id);

    const [name, setName] = useState(currName);
    const [color, setColor] = useState(currColor);
    const [speed, setSpeed] = useState(currSpeed);

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

    const updateCrew = async (event) => {
        event.preventDefault();
        if (!isFormValid) {
            alert("Please fill out all fields before submitting.");
            return;
        }
        await supabase
            .from("Crewmates")
            .update({ name: name, speed: speed, color: color })
            .eq("id", id);
        window.location = "/gallery";
    };

    const deleteCrew = async (event) => {
        event.preventDefault();

        await supabase.from("Crewmates").delete().eq("id", id);
        window.location = "/gallery";
    };
    return (
        <div className="create-container">
            <h1>Create Crewmate</h1>
            <img
                src="https://i.redd.it/tns1c0hs59fa1.png"
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
                onClick={updateCrew}
                disabled={!isFormValid} // Disable the button if the form is not valid
            >
                Update
            </button>

            <button
                className="submit-button"
                type="submit"
                onClick={deleteCrew}
                // Disable the button if the form is not valid
            >
                Delete
            </button>
        </div>
    );
}

export default Update;
