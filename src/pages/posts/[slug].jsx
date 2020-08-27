import imageUrlBuilder from "@sanity/image-url";
import client from "../../sanity-client";
import getPostBySlug, { getAllPosts } from "../../content-api";
import moment from "moment";
import renderBodyContent from "../../render-body-content";
import Navbar from "../../components/navbar";

function urlFor(source) {
    return imageUrlBuilder(client).image(source);
}

export async function getStaticProps(context) {
    const data = await getPostBySlug(context.params.slug);

    return {
        props: data
    };
}

export async function getStaticPaths() {
    const posts = await getAllPosts();

    const paths = posts.map(post => ({
        params: { slug: post.slug.current }
    }));

    return { paths, fallback: false };
}

export default function Post(props) {
    const { title, publishedAt, body = [] } = props;
    return (
        <>
            <Navbar />
            <article className="p-8 mx-auto max-w-6xl">
                <h3 className="font-bold text-gray-500">
                    {moment(publishedAt).format("MMMM Do, YYYY")}
                </h3>
                <h1 className="text-4xl font-bold text-gray-800">{title}</h1>
                <div className="text-xl text-gray-700">
                    {renderBodyContent(body)}
                </div>
            </article>
        </>
    );
}
