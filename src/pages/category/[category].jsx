import Head from "next/head";
import {
    getAllPostsInCategory,
    getAllCategories,
    getCategoryBySlug
} from "../../content-api";

import Post from "../../components/Post";

export async function getStaticProps(context) {
    const posts = await getAllPostsInCategory(context.params.category);
    const category = await getCategoryBySlug(context.params.category);

    return {
        props: {
            posts,
            category
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
    const { posts, category } = props;
    return (
        <div className="container my-12 mx-auto px-4 md:px-12">
            <div className="flex flex-wrap -mx-1 lg:-mx-4">
                {posts.map(post => (
                    <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                        <Post post={post} />
                    </div>
                ))}
                {posts.length === 0 && (
                    <div>No posts to show at this time...</div>
                )}
            </div>
        </div>
    );
}
