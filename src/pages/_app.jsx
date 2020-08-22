import "../styles/index.css";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";

function App({ Component, pageProps }) {
    return (
        <>
            <Component {...pageProps} />
        </>
    );
}

export default App;
