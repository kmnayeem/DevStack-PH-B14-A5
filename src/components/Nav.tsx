import Logo from "../assets/logo-text.png";

const Nav = () => {
    return (
        <nav className="fixed w-full h-16 bg-white border-b border-gray-100">
            <div className="container mx-auto flex h-full items-center justify-between px-4">
                <div>
                    <img
                        src={Logo}
                        alt="DevStack Logo"
                        className="h-9 w-auto"
                    />
                </div>

                <ul className="flex items-center gap-7">
                    <li className="cursor-pointer text-sm text-[#DB2777]">
                        Home
                    </li>
                    <li className="cursor-pointer text-sm text-[#475569] hover:text-[#DB2777]">
                        Technologies
                    </li>
                    <li className="cursor-pointer text-sm text-[#475569] hover:text-[#DB2777]">
                        Projects
                    </li>
                    <li className="cursor-pointer text-sm text-[#475569] hover:text-[#DB2777]">
                        About
                    </li>
                    <li className="cursor-pointer text-sm text-[#475569] hover:text-[#DB2777]">
                        Contact
                    </li>
                </ul>

                <div className="flex items-center gap-5">
                    <button className="cursor-pointer text-sm text-[#334155] hover:text-[#DB2777]">
                        Sign In
                    </button>

                    <button className="cursor-pointer rounded-full bg-[#DB2777] px-6 py-2 text-sm text-white hover:bg-[#BE185D]">
                        Sign Up
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Nav;
