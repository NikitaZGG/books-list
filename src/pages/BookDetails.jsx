import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function BookDetails({ books }) {
  const { id } = useParams();
  const book = books.find((b) => b.id === Number(id));
  if (!book) {
    return (
      <div className="text-center py-10">
        <p className="text-gray-600">Книга не найдена</p>
        <Link to="/catalog" className="text-amber-600 underline">
          Вернуться в каталог
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-6xl w-full px-4 py-8 flex flex-col gap-5 md:mx-auto">
      <Link
        to="/catalog"
        className="inline-block w-fit px-4 py-2 bg-gray-300 hover:bg-gray-400 text-gray-800 rounded-full transition"
      >
        ← Вернуться в каталог
      </Link>
      <div className="flex flex-col mx-auto gap-6 md:flex-row md:gap-14">
        <img
          src={book.image}
          alt={book.title}
          className="w-77 h-90  rounded-2xl shadow-2xl md:w-111 md:h-134"
        />
        <div className="flex-1 leading-9">
          <h1 className="text-2xl font-bold md:text-4xl">{book.title}</h1>
          <p className="text-lg text-gray-700 mt-2">Автор: {book.author}</p>
          <p className="text-gray-600">
            {book.description || "Описание отсутствует"}
          </p>
        </div>
      </div>
    </div>
  );
}
export default BookDetails;
