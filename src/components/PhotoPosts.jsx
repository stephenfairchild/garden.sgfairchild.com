import Grid from "./Grid";

export default function PhotoPosts(props) {
    const { posts } = props;

    return (
        <>
            <div className="mt-4">{<Grid posts={posts} />}</div>
        </>
    );
}
