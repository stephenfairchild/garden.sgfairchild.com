import Head from "next/head";
import { getAllPostsInCategory } from "../../content-api";
import Navbar from "../../components/navbar";

export async function getStaticProps(context) {
    const { category = "" } = context.query;
    const data = await getAllPostsInCategory(category);

    return {
        props: {
            posts: data
        }
    };
}

export default function Category(props) {
    const { posts } = props;

    return (
        <>
            <Navbar />
            <div>
                <div>
                    <div className="container mx-auto text-center">
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
                    </div>
                </div>
            </div>
        </>
    );
}
