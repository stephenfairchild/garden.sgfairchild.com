import Head from "next/head";

export default function ListOfPosts(props) {
    const { posts } = props;

    return (
        <>
            <h1 className="text-xl">Most recent</h1>
            <ul>
                {posts.map(post => (
                    <a href={`/posts/${post.slug}`}>
                        <li className="cursor-pointer hover:font-light">
                            {post.title}
                        </li>
                    </a>
                ))}
            </ul>
        </>
    );
}
