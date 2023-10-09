import React from "react";
import Category from "../selectedcategory/Category";
import "./Containerleft.css";

export default function Containerleft({ selectedCategory, onDeleteItem }) {
  return (
    <div className="container-left">
      <div className="left-sec">
        <div className="title-img-cotainer">
          <img src="img/title.png" alt="title" />
        </div>
        <div className="category-msg">
          <img src="img/categoryLeftImg.png" alt="category" />
        </div>
        <div className="marked-categories">
          <ul>
            {selectedCategory.map((category) => (
              <Category markedCategory={category} onDelete={onDeleteItem} />
            ))}
          </ul>
        </div>
        {selectedCategory.length < 3 && (
          <div className="warning-sec">
            <img src="img/Vector.png" alt="vector" />
            <span className="warning">Minimum 3 category required</span>
          </div>
        )}
      </div>
    </div>
  );
}
