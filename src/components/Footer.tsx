import Logo from "../assets/logo-text.png";

const Footer = () => {
    return (
        <div className="border-t border-gray-100 bg-white">
            <div className="container mx-auto py-14">
                <div className="flex flex-row justify-between gap-10">
                    <div>
                        <img
                            src={Logo}
                            alt="DevStack Logo"
                            className="h-9 w-auto"
                        />

                        <p className="mt-4 max-w-md text-sm text-[#64748B]">
                            Curated tools, technologies, and resources for
                            developers building modern software.
                        </p>

                        <ul
                            className="mt-6 flex gap-5 font-semibold text-[#475569]"
                            style={{
                                fontFamily: "Plus Jakarta Sans, sans-serif",
                            }}
                        >
                            <li>GitHub</li>
                            <li>Twitter</li>
                            <li>LinkedIn</li>
                        </ul>
                    </div>

                    <ul>
                        <h3
                            className="mb-4 text-xs font-bold text-[#0F172A]"
                            style={{
                                fontFamily: "Plus Jakarta Sans, sans-serif",
                            }}
                        >
                            PRODUCT
                        </h3>

                        <li className="mb-3 text-[#64748B]">Home</li>
                        <li className="mb-3 text-[#64748B]">
                            Technologies
                        </li>
                        <li className="text-[#64748B]">Projects</li>
                    </ul>

                    <ul>
                        <h3
                            className="mb-4 text-xs font-bold text-[#0F172A]"
                            style={{
                                fontFamily: "Plus Jakarta Sans, sans-serif",
                            }}
                        >
                            COMPANY
                        </h3>

                        <li className="mb-3 text-[#64748B]">About</li>
                        <li className="mb-3 text-[#64748B]">Contact</li>
                        <li className="text-[#64748B]">Careers</li>
                    </ul>

                    <ul>
                        <h3
                            className="mb-4 text-xs font-bold text-[#0F172A]"
                            style={{
                                fontFamily: "Plus Jakarta Sans, sans-serif",
                            }}
                        >
                            LEGAL
                        </h3>

                        <li className="mb-3 text-[#64748B]">
                            Privacy Policy
                        </li>
                        <li className="text-[#64748B]">
                            Terms of Service
                        </li>
                    </ul>
                </div>

                <div className="mt-10 border-t border-gray-100 pt-7">
                    <div className="flex flex-row items-center justify-between text-xs text-[#94A3B8]">
                        <p>© 2026 Dev Stack. All rights reserved.</p>

                        <ul className="flex gap-5">
                            <li>Privacy</li>
                            <li>Terms</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
