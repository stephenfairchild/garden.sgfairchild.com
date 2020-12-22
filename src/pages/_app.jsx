import "../styles/globals.css";
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
