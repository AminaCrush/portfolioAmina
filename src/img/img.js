import React from "react";
import myPhoto from "../img/amina.jpg";

export const AboutMe = () => {
  return (
    <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "center", gap: "20px" }}>
      <img
        src={myPhoto}
        alt="Моя фотография"
        style={{ width: "300px", height: "auto", borderRadius: "20px" }}
      />
      <p style={{ width: "300px", fontSize: "27px", border: "1px solid black", borderRadius: "20px", padding: "22px 10px", margin: "0" }}>
        I am 17 years old, and I am a businesswoman. I have 3 active businesses,
        and I am studying at Salyimbekov College in my second year. Here, I
        study programming languages and have already completed several projects.
      </p>
    </div>
  );
};
