function Header() {
    return (
        <>
            <nav class="bg-white px-12 pt-2 shadow-md">
                <div class="-mb-px flex justify-center">
                    <a
                        class="no-underline text-teal-dark border-b-2 border-teal-dark uppercase tracking-wide font-bold text-xs py-3 mr-8"
                        href="/"
                    >
                        Home
                    </a>
                    <a
                        class="no-underline text-grey-dark border-b-2 border-transparent uppercase tracking-wide font-bold text-xs py-3 mr-8"
                        href="/category/culinary"
                    >
                        #Culinary
                    </a>
                    <a
                        class="no-underline text-grey-dark border-b-2 border-transparent uppercase tracking-wide font-bold text-xs py-3 mr-8"
                        href="/category/horticulture"
                    >
                        #Horticulture
                    </a>
                    <a
                        class="no-underline text-grey-dark border-b-2 border-transparent uppercase tracking-wide font-bold text-xs py-3 mr-8"
                        href="/category/brewing"
                    >
                        #Brewing
                    </a>
                    <a
                        class="no-underline text-grey-dark border-b-2 border-transparent uppercase tracking-wide font-bold text-xs py-3 mr-8"
                        href="/category/travel"
                    >
                        #Travel
                    </a>
                    <a
                        class="no-underline text-grey-dark border-b-2 border-transparent uppercase tracking-wide font-bold text-xs py-3"
                        href="/category/lego"
                    >
                        #LEGO
                    </a>
                </div>
            </nav>
        </>
    );
}

export default Header;
