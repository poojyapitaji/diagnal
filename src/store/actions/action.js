import { GET_NEXT_MOVIE_LIST, GET_MOVIE_BY_QUERY } from "../constant";


export const getNextMovieList = (payload) => {
    return {
        type: GET_NEXT_MOVIE_LIST,
        payload
    }
}

export const getMovieByQuery = (payload) => {
    return {
        type: GET_MOVIE_BY_QUERY,
        payload
    }
}