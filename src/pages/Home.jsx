import Button from "../components/Button";
import BookCard from "../components/BookCard";
import { Link, NavLink } from "react-router-dom";

function Home({ initialBooks, loading }) {
  const hotBooks = initialBooks;
  const newBooks = initialBooks;

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <section className="max-w-6xl w-full mx-auto flex  flex-col-reverse p-3 md:items-center md:flex-row md:justify-between">
        <div className="max-w-md w-full flex flex-col gap-2 md:gap-4">
          <h1 className="text-4xl font-bold">Книги от А до Я</h1>
          <p className="text-base text-gray-600">
            В нашем магазине можно найти книгу на любой вкус. Большой
            ассортимент. Приятные цены. Интересные сюжеты.
          </p>
          <Link
            to="/catalog"
            className="bg-cyan-50 hover:bg-cyan-100 text-center px-6 py-2 rounded-md w-52 transition"
          >
            Перейти в каталог
          </Link>
        </div>
        <img
          className="max-w-2xl w-full max-h-md h-full"
          src="book.png"
          alt="1"
        />
      </section>
      <section className="mt-12 mb-12">
        <h2 className="text-3xl font-bold mb-6">Горячие новинки</h2>
        {loading && <div> Загрузка книг</div>}
        {!loading && (
          <div className=" justify-items-center items-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
            {hotBooks.slice(0, 5).map((book) => (
              <BookCard key={book.id} {...book} />
            ))}
          </div>
        )}
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Горячие новинки</h2>
        {loading && <div> Загрузка книг</div>}

        {!loading && (
          <div className=" justify-items-center items-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
            {newBooks.slice(0, 5).map((book) => (
              <BookCard key={book.id} {...book} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
export default Home;
