import Head from "next/head";
import { getAllCategories } from "../content-api";
import imageBuilder from "../image-builder";

export async function getStaticProps() {
    const data = await getAllCategories();

    return {
        props: {
            categories: data
        }
    };
}

export default function Index(props) {
    const { categories } = props;
    const showImage = src => imageBuilder(src).height(400).width(400).url();

    const goTo = url => (window.location.href = url);

    return (
        <>
            {categories.map(category => (
                <div
                    key={category.title}
                    onClick={() => goTo(`/category/${category.slug.current}`)}
                    className="relative float-left sm:w-full sm:h-full md:w-64 md:h-64 m-1 cursor-pointer"
                >
                    <img
                        className="relative object-scale-down h-full w-full"
                        src={showImage(category.image)}
                    />
                    <div className="absolute bottom-0 left-0">
                        <span className="text-white tracking-tighter ml-2 pl-1 pr-1 text-2xl bg-opacity-75 bg-black">
                            {category.title}
                        </span>
                    </div>
                </div>
            ))}
        </>
    );
}
