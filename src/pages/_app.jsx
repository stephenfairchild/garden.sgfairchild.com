import "../styles/index.css";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";
import "fontisto";
import Header from "../components/Header";

function App({ Component, pageProps }) {
    return (
        <>
            <div className="md:container mx-auto">
                <Header />
                <Component {...pageProps} />
            </div>
        </>
    );
}

export default App;
