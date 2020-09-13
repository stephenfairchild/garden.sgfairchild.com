import "../styles/index.css";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";
import "fontisto";

function App({ Component, pageProps }) {
    return (
        <>
            <div className="md:container mx-auto">
                <Component {...pageProps} />
            </div>
        </>
    );
}

export default App;
