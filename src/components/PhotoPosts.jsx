import { useState } from "react";
import Head from "next/head";
import imageBuilder from "../image-builder";
import Scroller from "./Scroller";

export default function PhotoPosts(props) {
    const { posts } = props;
    const [grid, setGrid] = useState(true);
    const [displayImageSrc, setDisplayImageSrc] = useState("");

    const showGrid = () => {
        const showImage = src => imageBuilder(src).height(400).width(400).url();
        return posts.map(post => (
            <img
                className="lg:float-left sm:w-full sm:h-full md:w-64 md:h-64 p-1"
                src={showImage(post.mainImage)}
            />
        ));
    };

    const showFlipboard = () => {
        const showImage = src => imageBuilder(src).height(800).width(800).url();
        const images = posts.map(post => {
            return {
                key: post.slug,
                src: post.mainImage
            };
        });

        return (
            <>
                <div className="mt-3 mx-auto block text-center">
                    <Scroller
                        images={images}
                        maxItems={5}
                        onChange={src => setDisplayImageSrc(src)}
                    />
                </div>
                <img
                    className="mx-auto w-auto h-auto p-1"
                    src={showImage(displayImageSrc)}
                />
            </>
        );
    };

    return (
        <>
            <div className="text-right mt-3">
                <span
                    onClick={() => setGrid(!grid)}
                    className="bg-red-600 text-white p-2 m-1"
                >
                    <i
                        className={`fi fi-${grid ? "flipboard" : "microsoft"}`}
                    ></i>
                </span>
            </div>
            <div className="mt-4">
                {grid && showGrid()}
                {!grid && showFlipboard()}
            </div>
        </>
    );
}
