import { useRef, useCallback } from "react";
import { Navbar, MovieList } from "./components";
function App() {
  return (
    <>
      <Navbar />
      <div
        style={{ height: "200px" }}
        className="grid grid-cols-3 gap-x-[30px] gap-y-[90px] p-5 mt-[40px] md:mt-[140px]">
        <MovieList />
      </div>
    </>
  );
}

export default App;
