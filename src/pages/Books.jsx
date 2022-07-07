
import { useEffect, useState } from "react";
import { Table, Avatar } from "flowbite-react";
import { Link } from "react-router-dom";

import { getBooks } from "../service/api"

export default function Books() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    (async function fetchBooks() {
      setBooks(await getBooks())
    })()
  }, [])

  return (
    <>
      <Table striped hoverable>
        <Table.Head>
          <Table.HeadCell className="text-xl">Cover</Table.HeadCell>
          <Table.HeadCell className="text-xl">Title</Table.HeadCell>
          <Table.HeadCell className="text-xl">Author</Table.HeadCell>
          <Table.HeadCell className="text-xl">More information</Table.HeadCell>
        </Table.Head>

        <Table.Body className="divide-y">
          {books.map((book) => (
            <Table.Row
              key={book.id}
              className="bg-white dark:border-gray-700 dark:bg-gray-800"
            >
              <Table.Cell>
                <Avatar img={book.cover} rounded size="lg" />
                {/* <img src={book.cover} alt="Cover" className="w-1/3" /> */}
              </Table.Cell>
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {book.title}
              </Table.Cell>
              <Table.Cell>{book.author}</Table.Cell>
              <Table.Cell>
                <Link to={`/books/${book.id}`} >
                  <button
                    type="button"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                  >
                    More information
                  </button>
                </Link>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </>
  );
}