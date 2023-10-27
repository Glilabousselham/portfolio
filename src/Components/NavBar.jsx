export default function NavBar({ activeSection, onNavigate }) {
    return (
        <div className="w-screen h-28 bg z-50 fixed bg-black">
            <div className="flex justify-center  px-10">
                <ul className="nav-font-family  text-md md:text-md w-fit xs:w-full gap-2 md:gap-5 lg:gap-10 xl:text-xl text-gray-300 flex items-center justify-around h-20
            ">
                    <li>
                        <a onClick={() => onNavigate(1)} role="button" className={`${activeSection == 1 ? "text-lime-500" : ""} hover:text-lime-500  transition-colors`}>ABOUT</a>
                    </li>
                    <li>
                        <a onClick={() => onNavigate(2)} role="button" className={`${activeSection == 2 ? "text-lime-500" : ""} hover:text-lime-500  transition-colors`}>SKILLS</a>
                    </li>
                    <li>
                        <a onClick={() => onNavigate(3)} role="button" className={`${activeSection == 3 ? "text-lime-500" : ""} hover:text-lime-500  transition-colors`}>PORTFOLIO</a>
                    </li>
                    <li>
                        <a onClick={() => onNavigate(4)} role="button" className={`${activeSection == 4 ? "text-lime-500" : ""} hover:text-lime-500  transition-colors`}>CONTACT</a>
                    </li >
                </ul >
            </div >


        </div >
    )
}