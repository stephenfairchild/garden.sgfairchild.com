import Navbar from "../components/navbar";

export default function Code(props) {
    const { title, publishedAt, body = [] } = props;
    return (
        <>
            <Navbar />
            <div>testing</div>
        </>
    );
}
