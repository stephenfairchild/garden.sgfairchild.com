function Header() {
    return (
        <>
            <nav className="bg-white px-1 pt-2">
                <div className="-mb-px flex justify-center">
                    <a
                        className="no-underline text-teal-dark border-b-2 border-teal-dark uppercase tracking-wide font-bold text-xs py-3 mr-8"
                        href="/"
                    >
                        Home
                    </a>
                    <a
                        className="no-underline text-teal-dark border-b-2 border-teal-dark uppercase tracking-wide font-bold text-xs py-3 mr-8"
                        href="/category/culinary"
                    >
                        #Culinary
                    </a>
                    <a
                        className="no-underline text-teal-dark border-b-2 border-teal-dark uppercase tracking-wide font-bold text-xs py-3"
                        href="/category/horticulture"
                    >
                        #Horticulture
                    </a>
                </div>
            </nav>
        </>
    );
}

export default Header;
