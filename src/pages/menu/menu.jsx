import React, { useState, useEffect } from "react";
import Card from "../../shared/card";
import "./menu.css";
import { useAuth } from "../../store/auth";
import axios from "axios";

const Menu = () => {
  const { food } = useAuth();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredFood, setFilteredFood] = useState([]);

  useEffect(() => {
    async function fetchData() {
      if (selectedCategory === "All") {
        // Fetch all food items
        setFilteredFood(food);
      } else {
        // Fetch food items by category
        try {
          const response = await axios.get(
            `https://foodhut-d4sp.onrender.com/food/getByCategory?category=${selectedCategory}`
          );
          setFilteredFood(response.data);
        } catch (error) {
          console.error("Error fetching food items by category:", error);
        }
      }
    }

    fetchData();
  }, [selectedCategory, food]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <section className="py-3  sm:px-6 bg-gray-300 bg-opacity-30 lg:px-6">
      <div className="container mx-auto py-[14vh]">
        <div className="text-5xl font-extrabold text-cyan-800 my-7 italic mx-auto items-center justify-center grid">
          Our Menu
        </div>
        <div className="flex mx-auto gap-3 items-center flex-wrap justify-center">
          {["All", "Drink", "Desserts", "Appetizers", "Burgers", "Pizza"].map(
            (category) => (
              <button
                key={category}
                className={`shopBtn ${
                  selectedCategory === category ? "active" : ""
                }`}
                onClick={() => handleCategoryChange(category)}
              >
                {category}
              </button>
            )
          )}
        </div>
        <div className="py-12 flex flex-wrap gap-7 items-center">
          <Card food={filteredFood} />
        </div>
      </div>
    </section>
  );
};

export default Menu;
