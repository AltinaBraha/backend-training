
export default function FoodCard({ food }) {
  return (
    <div className="border border-gray-300 rounded-lg shadow-md p-4 max-w-xs text-center m-2 transition-transform duration-200 ease-in-out hover:-translate-y-1 hover:shadow-xl">
      <img
        src={food.image}
        alt={food.name}
        className="w-full h-44 object-cover rounded-md"
      />
      <h2 className="text-lg mt-3">{food.name}</h2>
    </div>
  );
}
