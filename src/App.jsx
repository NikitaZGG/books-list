import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Layout from "./layout/Layout";
import "./index.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Catalog from "./pages/Catalog";
import BookDetails from "./pages/BookDetails";

function App() {
  const [error, setError] = useState(null);
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchBooks = async () => {
    setError(null);
    setLoading(true);
    try {
      const url = `https://gutendex.com/books/`;
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error(`Данные не найдены`);
      }
      const data = await res.json();

      const formattedBooks = data.results.map((book) => ({
        id: book.id,
        title: book.title,
        image: book.formats?.["image/jpeg"] || "/default-book.jpg",
        author: book.authors[0]?.name || "Неизвестен",
        summaries: book.summaries,
      }));

      setBooks(formattedBooks);
      console.log(formattedBooks);
    } catch (err) {
      setError(err.message);
      console.log(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={<Home initialBooks={books} loading={loading} />}
        />
        <Route path="about" element={<About />} />
        <Route
          path="catalog"
          element={<Catalog initialBooks={books} loading={loading} />}
        />
        <Route path="catalog/:id" element={<BookDetails books={books} />} />
      </Route>
    </Routes>
  );
}

export default App;
