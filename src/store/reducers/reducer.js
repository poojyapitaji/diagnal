import { GET_NEXT_MOVIE_LIST, GET_MOVIE_BY_QUERY } from "../constant";
import data1 from "../../api/CONTENTLISTINGPAGE-PAGE1.json";
import data2 from "../../api/CONTENTLISTINGPAGE-PAGE2.json";
import data3 from "../../api/CONTENTLISTINGPAGE-PAGE3.json";

const allData = [...data1?.page?.["content-items"]?.content, ...data2?.page?.["content-items"]?.content, ...data3?.page?.["content-items"]?.content];
const perPage = parseInt(data1?.page?.["page-size-requested"])

const initialState = {
    data: allData.slice(0, perPage),
    totalItem: data1?.page?.["total-content-items"],
    pageNumber: data1?.page?.["page-num-requested"]
}
export default function movieList(state = initialState, action) {
    switch (action.type) {
        case GET_NEXT_MOVIE_LIST:
            return {
                data: allData.slice(0, perPage * action.payload.pageNumber),
                totalItem: data1?.page?.["total-content-items"],
                pageNumber: action.payload.pageNumber
            }
        case GET_MOVIE_BY_QUERY:
            let data = allData.filter(allData => allData.name.toLocaleLowerCase().includes(action.payload.query.toLocaleLowerCase()))
            if (action.payload.query === '') {
                return {
                    data: allData.slice(0, perPage),
                    totalItem: data1?.page?.["total-content-items"],
                    pageNumber: data1?.page?.["page-num-requested"]
                }
            } else {
                return {
                    data: data,
                    totalItem: data.length,
                    pageNumber: 1
                }
            }

        default:
            return state
    }
}