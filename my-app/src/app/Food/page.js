"use client"; 
import { useEffect, useState } from "react";
import FoodCard from "@/components/FoodCard";



export default function FoodPage() {
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=")
      .then((res) => res.json())
      .then((data) => {
        setFoods(data.meals || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p style={{ textAlign: "center", marginTop: "20px" }}>Loading...</p>;

  return (
    <div style={{ padding: "20px", display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
      {foods.map((food) => (
        <FoodCard
          key={food.idMeal}
          food={{ name: food.strMeal, image: food.strMealThumb }}
        />
      ))}
    </div>
  );
}
