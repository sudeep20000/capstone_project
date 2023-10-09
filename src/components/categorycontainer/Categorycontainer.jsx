import React from "react";
import { useState } from "react";
import Containerleft from "../containerleft/Containerleft";
import Containerright from "../containerright/Containerright";
import "./Categorycontainer.css";

const categoryData = [
  {
    categoryName: "Action",
    categoryImg: "categoryImg/action.png",
    color: "#FF5209",
    activeBorder: "4px solid #11B800",
  },
  {
    categoryName: "Drama",
    categoryImg: "categoryImg/drama.png",
    color: "#D7A4FF",
    activeBorder: "4px solid #11B800",
  },
  {
    categoryName: "Romance",
    categoryImg: "categoryImg/romance.png",
    color: "#148A08",
    activeBorder: "4px solid #11B800",
  },
  {
    categoryName: "Thriller",
    categoryImg: "categoryImg/thriller.png",
    color: "#84C2FF",
    activeBorder: "4px solid #11B800",
  },
  {
    categoryName: "Western",
    categoryImg: "categoryImg/western.png",
    color: "#902500",
    activeBorder: "4px solid #11B800",
  },
  {
    categoryName: "Horror",
    categoryImg: "categoryImg/horror.png",
    color: "#7358FF",
    activeBorder: "4px solid #11B800",
  },
  {
    categoryName: "Fantasy",
    categoryImg: "categoryImg/fantasy.png",
    color: "#FF4ADE",
    activeBorder: "4px solid #11B800",
  },
  {
    categoryName: "Music",
    categoryImg: "categoryImg/music.png",
    color: "#E61E32",
    activeBorder: "4px solid #11B800",
  },
  {
    categoryName: "Fiction",
    categoryImg: "categoryImg/fiction.png",
    color: "#6CD061",
    activeBorder: "4px solid #11B800",
  },
];

export default function Categorycontainer() {
  const [categories, setCategories] = useState([]);

  function handleCategory(category) {
    setCategories((categories) => [...categories, category]);
  }

  function deleteItem(markedCategory) {
    setCategories((categories) =>
      [...categories].filter((category) => category !== markedCategory)
    );
  }

  return (
    <div className="category-container">
      <Containerleft selectedCategory={categories} onDeleteItem={deleteItem} />
      <Containerright
        cardDetails={categoryData}
        markedCategoryategory={categories}
        onAddCategory={handleCategory}
      />
    </div>
  );
}
