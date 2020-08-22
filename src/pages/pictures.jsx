import Navbar from "../components/navbar";

export default function Pictures(props) {
    const { title, publishedAt, body = [] } = props;
    return (
        <>
            <Navbar />
            <div>pictures</div>
        </>
    );
}
