import React, { useState, useEffect } from "react";
import rgbToHex from "./utils";

const SingleColor = ({ rgb, weight, index, hexColor }) => {
  const [alert, setAlert] = useState(false);
  const bcg = rgb.join(",");

  // Convert to hex
  // const hex = rgbToHex(...rgb); // Alternative is to use the hex prop the library provides
  // console.log(hexColor);
  const hexValue = `#${hexColor}`;

  // Automatically remove alert
  useEffect(() => {
    const id = setTimeout(() => {
      setAlert(false);
    }, 2000);

    return () => {
      clearTimeout(id);
    };
  }, [alert]);

  // Includes copy to clipboard feature
  return (
    <article
      className={`color ${index > 10 && "color-light"}`}
      style={{ backgroundColor: `rgb(${bcg})` }}
      onClick={() => {
        setAlert(true);
        window.navigator.clipboard.writeText(hexValue);
      }}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{hexValue}</p>
      {alert && <p className="alert">copied to clipboard</p>}
    </article>
  );
};

export default SingleColor;
