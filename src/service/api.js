import axios from "axios";

const API_URL = "https://raw.githubusercontent.com/sing2gather/impala-exercise/main/data.json";

export const getBooks = async () => {
    try {
        return (await axios.get(`${API_URL}`)).data.books
    } catch (err) {
        return [];
    }
}

export const getBookById = async (id) => {
    try {
        const books = await getBooks();
        const book = books.find((_book) => _book.id === id);

        if (!book) {
            throw new Error("Book not found");
        }

        book.books = books.filter((_book) => _book.author === book.author)

        return book;
    } catch (err) {
        return null;
    }
}