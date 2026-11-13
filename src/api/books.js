const API__URL = "/api/books";

const getBooks = async () => {
    const response = await fetch(API__URL);

    return response.json();
}

export {getBooks};