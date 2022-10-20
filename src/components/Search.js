import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getNextMovieList, getMovieByQuery } from "../store/actions/action";

const Search = () => {
    const dispatch = useDispatch();
    const [showSearch, setShowSearch] = useState(false);
    const [query, setQuery] = useState("");

    useEffect(() => {
        dispatch(getMovieByQuery({ query }));
    }, [query])

    return (<>
        {showSearch && <div className="absolute top-0 left-0 w-full flex justify-center items-center bg-black-700 h-[64px] p-4">
            <input type="text" className="flex-1 rounded-sm" value={query} onChange={(e) => setQuery(e.target.value)} />
            <button className="bg-gray-600 px-3 text-white" onClick={() => { setShowSearch(!showSearch); setQuery(''); }}>Cancel</button>
        </div>}
        <img src="./assets/search.png" alt="back" className="h-4 md:h-8" onClick={() => setShowSearch(!showSearch)} />
    </>);
}

export default Search;