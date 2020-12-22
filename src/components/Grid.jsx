import { useState } from "react";
import imageBuilder from "../image-builder";

export default function Grid(props) {
    const { posts } = props;
    const showImage = src => imageBuilder(src).height(400).width(400).url();
    const [title, setTitle] = useState(null);

    return posts.map(post => (
        <div className="relative" onMouseEnter={() => setTitle(post.title)}>
            <img
                className="lg:float-left sm:w-full sm:h-full md:w-64 md:h-64 p-1"
                src={showImage(post.mainImage)}
            />
        </div>
    ));
}
