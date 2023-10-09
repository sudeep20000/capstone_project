import React from "react";
import "./Category.css";

export default function Category({ markedCategory, onDelete }) {
  const handelDeleteItem = () => {
    onDelete(markedCategory);
  };
  return (
    <li className="item">
      <span className="item-name">{markedCategory}</span>
      <img src="img/X.png" alt="cencle" onClick={handelDeleteItem} />
    </li>
  );
}
