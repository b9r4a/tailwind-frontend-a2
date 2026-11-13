const API__URL = "/api/books";

const getBooks = async () => {
  const response = await fetch(API__URL);

  return response.json();
};
const createBook = async (book) => {
  const response = await fetch(API__URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(book),
  });
  return response.json();
};

const deleteBook = async (id) => {
  const response = await fetch(`${API__URL}/${id}`, {
    method: "DELETE",
  });
  return response.json();
};
export { getBooks, createBook, deleteBook };
