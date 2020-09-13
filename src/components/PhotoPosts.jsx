import Head from "next/head";
import imageBuilder from "../image-builder";

export default function PhotoPosts(props) {
    const { posts } = props;
    const showImage = src => imageBuilder(src).height(400).width(400).url();

    return (
        <>
            {posts.map(post => (
                <img
                    className="lg:float-left sm:w-full sm:h-full md:w-64 md:h-64 m-1 p-1"
                    src={showImage(post.mainImage)}
                />
            ))}
        </>
    );
}
