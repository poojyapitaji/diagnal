import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useIntersection } from "../hooks/useIntersection";
import { getNextMovieList } from "../store/actions/action";

const MovieList = () => {
    const lastItemRef = useRef();
    const dispatch = useDispatch();
    const data = useSelector((state) => state);
    const movieList = data?.movieList?.data;
    const { setHasMore } = useIntersection(lastItemRef, () => {
        if (data?.movieList?.totalItem > movieList.length) {
            dispatch(getNextMovieList({ pageNumber: parseInt(data?.movieList?.pageNumber) + 1 }));
            setHasMore(true);
            console.log("true")
        } else {
            setHasMore(false);
            console.log("false");
        }
    });

    const handleImageError = e => {
        e.target.src = './assets/placeholder_for_missing_posters.png'
    }

    return (<>
        {movieList?.map((item, i) => {
            if (movieList.length === i + 1) {
                return <div key={Date.now() + i}>
                    <img
                        ref={lastItemRef}
                        src={`./assets/${item["poster-image"]}`}
                        onError={handleImageError}
                        className="aspect-[2/3] w-full" />
                    <p className="py-2 text-white truncate ...">
                        {item.name}
                    </p>
                </div>
            } else {
                return <div key={Date.now() + i}>
                    <img
                        src={`./assets/${item["poster-image"]}`}
                        onError={handleImageError}
                        className="aspect-[2/3] w-full" />
                    <p className="py-2 text-white truncate ...">
                        {item.name}
                    </p>
                </div>
            }
        })}
    </>)
}

export default MovieList;