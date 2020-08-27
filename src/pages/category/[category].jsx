import Head from "next/head";
import { getAllPostsInCategory, getAllCategories } from "../../content-api";
import Navbar from "../../components/navbar";

export async function getStaticProps(context) {
    const data = await getAllPostsInCategory(context.params.category);

    return {
        props: {
            posts: data
        }
    };
}

export async function getStaticPaths() {
    const categories = await getAllCategories();
    const paths = categories.map(category => ({
        params: { category: category.slug.current }
    }));

    return { paths, fallback: false };
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
