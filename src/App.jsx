
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Books from "./pages/Books";
import BooksDetail from "./components/BooksDetails";

import "./index.css";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/books/:bookId" element={<BooksDetail />} />
      </Routes>
    </Router>
  );

}
