import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Spinner, ListGroup } from "flowbite-react";


import { getBookById } from "../service/api"

export default function BooksDetail() {
    const { bookId } = useParams()
    const [book, setBook] = useState()

    useEffect(() => {
        (async function fetchBook() {
            setBook(await getBookById(bookId))
        })()
    }, [bookId])

    return (
        <div className="w-full h-screen flex items-center justify-center">
            {book ? (
                <div className="max-w-sm bg-white place-items-center mx-auto gap-4 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                    <div>
                        <a>
                            <img src={book.cover} alt="cover" />
                        </a>
                        <div className="p-5">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{book.title}</h5>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{book.author}</p>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">isbn: {book.isbn}</p>

                            <h2 className="mb-4 text-lg">From the same author</h2>

                            <ListGroup>
                                {book.books.map((book) => (
                                    <ListGroup.Item>
                                        <Link to={`/books/${book.id}`} key={book.id}>
                                            <p className="">
                                                {book.title}
                                            </p>
                                        </Link>
                                    </ListGroup.Item>
                                ))}
                            </ListGroup>

                            <Link to={"/"} >
                                <button
                                    type="button"
                                    className=" mt-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                                >
                                    Back to list
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            ) : (
                <Spinner
                    aria-label="Loading data"
                    size="xl"
                />
            )}
        </div>
    )
}