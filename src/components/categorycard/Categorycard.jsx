import React, { useState } from "react";
import "./Categorycard.css";

export default function Categorycard({ categoryObj, onAdd }) {
  const [active, setActive] = useState(false);

  const styleObj = {
    backgroundColor: `${categoryObj.color}`,
    border: `${
      active && categoryObj.activeBorder ? categoryObj.activeBorder : "none"
    }`,
  };

  let categoryDetails =
    JSON.parse(localStorage.getItem("categoryDetails")) || [];

  const handelActive = () => {
    setActive(!active);
    const selectedCategory = categoryObj.categoryName;
    categoryDetails.push(selectedCategory);
    localStorage.setItem("categoryDetails", JSON.stringify(categoryDetails));
    onAdd(selectedCategory);
  };

  return (
    <li className="category-card" style={styleObj} onClick={handelActive}>
      <p className="category-name">{categoryObj.categoryName}</p>
      <div className="img-container">
        <img src={categoryObj.categoryImg} alt={categoryObj.categoryName} />
      </div>
    </li>
  );
}
