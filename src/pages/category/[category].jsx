import Head from "next/head";
import {
    getAllPostsInCategory,
    getAllCategories,
    getCategoryBySlug
} from "../../content-api";
import ListOfPosts from "../../components/ListOfPosts";
import PhotoPosts from "../../components/PhotoPosts";

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

    const displayPosts = () => {
        if (category.type.includes("list")) {
            return <ListOfPosts posts={posts} />;
        } else if (category.type.includes("photo")) {
            return <PhotoPosts posts={posts} />;
        }
    };

    return <>{displayPosts()}</>;
}
