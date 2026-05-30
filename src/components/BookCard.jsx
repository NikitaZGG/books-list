import { NavLink } from "react-router-dom";

function BookCard({ id, title, author, image }) {
  return (
    <NavLink to={`/catalog/${id}`}>
      <div className=" w-40 lg:w-44 h-60 justify-between bg-white rounded-2xl overflow-hidden shadow-md md:max-w-50 md:h-76 hover:shadow-2xl transition">
        <img
          src={image}
          alt={title}
          className="w-full h-34 md:h-46 object-cover"
        />
        <div className="p-2 flex flex-col flex-1 md:p-3">
          <h3 className="font-semibold text-base md:text-lg">{title}</h3>
          <p className="text-gray-600 text-sm md:text-base mt-1 ">{author}</p>
        </div>
      </div>
    </NavLink>
  );
}

export default BookCard;
