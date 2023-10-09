import React from "react";
import { useNavigate } from "react-router-dom";
import Categorycard from "../categorycard/Categorycard";
import "./Containerright.css";

export default function Containerright({
  cardDetails,
  markedCategoryategory,
  onAddCategory,
}) {
  const navigate = useNavigate();

  const goToinfo = (e) => {
    e.preventDefault();
    navigate("/info");
  };
  return (
    <div className="container-right">
      <ul className="categories">
        {cardDetails.map((card) => (
          <Categorycard
            categoryObj={card}
            onAdd={onAddCategory}
            key={card.categoryName}
          />
        ))}
      </ul>
      {markedCategoryategory.length >= 3 && (
        <button className="next-btn" onClick={goToinfo}>
          Next Page
        </button>
      )}
    </div>
  );
}
