import "../styles/FoodCard.css";

export default function FoodCard({ food }) {
  return (
    <div className="food-card">
      <img src={food.image} alt={food.name} />
      <h2>{food.name}</h2>
    </div>
  );
}
