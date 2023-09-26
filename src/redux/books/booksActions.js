import axios from 'axios';
import { FETCH_BOOKS_REQUEST, FETCH_BOOKS_SUCCESS, FETCH_BOOKS_FAILURE } from "./booksTypes";

const API_FETCH = 'https://epibooks.onrender.com';

export const fetchBooksRequest = () => {
    return {
        type: FETCH_BOOKS_REQUEST
    }
}

export const fetchBooksSuccess = (books) => {
    return {
        type: FETCH_BOOKS_SUCCESS,
        payload: books
    }
}

export const fetchBooksFailure = (error) => {
    return {
        type: FETCH_BOOKS_FAILURE,
        payload: error
    }
}

export const fetchBooks = (bookId) => {
    return (dispatch) => {
        dispatch(fetchBooksRequest)
        axios.get(API_FETCH + bookId)
            .then(response => {
                const books = response.data.slice(0, 150)
                dispatch(fetchBooksSuccess(books))
            })
            .catch(error => {
                const errorMsg = error.message
                dispatch(fetchBooksFailure(errorMsg))
            })
    }
}