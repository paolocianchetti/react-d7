import { useState, useEffect } from "react";

const useFetchBooks = (url) => {
    const [books, setBooks] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const getBooks = async () => {
        try {
            setLoading(true);
            const response = await fetch(url);
            const data = await response.json();
            const fantasyBooks = data.slice(0, 150);
            setBooks(fantasyBooks);
            setLoading(false);
        } catch (err) {
            setError(err);
            alert(err);
        }
    }

    useEffect(() => {
        getBooks()
    }, []);

    return { books, loading, error }
}

export default useFetchBooks;