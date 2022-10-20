import Search from "./Search";

const Navbar = () => {
    return <div className="fixed top-0 w-screen md:h-[192px] flex justify-between items-center bg-navbar-image bg-no-repeat bg-cover bg-top py-5 md:py-2 px-5">
        <div className="flex justify-center items-center gap-3 md:gap-6">
            <img src="./assets/Back.png" alt="back" className="h-4 md:h-8" />
            <p className="text-white text-md md:text-[32px]">Romantic Comedy</p>
        </div>
        <div>
        <Search />
        </div>
    </div>

}

export default Navbar;