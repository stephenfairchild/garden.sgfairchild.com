import imageBuilder from "../image-builder";

export default function Post({ post }) {
    const { title, mainImage, slug } = post;

    return (
        <article className="overflow-hidden rounded-lg shadow-lg">
            <a href="#">
                <img
                    alt="Placeholder"
                    className="block h-auto w-full"
                    src={imageBuilder(mainImage).height(400).width(600).url()}
                />
            </a>
            <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                <h1 className="text-lg">
                    <a
                        className="no-underline hover:underline text-black"
                        href="#"
                    >
                        {title}
                    </a>
                </h1>
                <p className="text-grey-darker text-sm">#2020</p>
            </header>
        </article>
    );
}
