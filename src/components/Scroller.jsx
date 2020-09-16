import { useState, useEffect } from "react";
import imageBuilder from "../image-builder";

// images = [
//  {key: "", src: ""}
// ]
export default function Scroller(props) {
    const { images, onChange, maxItems = 5 } = props;
    const [start, setStart] = useState(0);
    const [highlightedImage, setHighlightedImage] = useState(null);

    const showImage = src => imageBuilder(src).height(100).width(100).url();

    useEffect(() => {
        onChange(images[0].src);
    }, []);

    const nextSlide = () => {
        setStart(prevStart =>
            Math.min(images.length - maxItems, prevStart + maxItems)
        );
    };

    const prevSlide = () => {
        setStart(prevStart => Math.max(0, prevStart - maxItems));
    };

    const selectImage = image => {
        setHighlightedImage(image.key);
        onChange(image.src);
    };

    return (
        <>
            <span
                onClick={() => prevSlide()}
                className="inline bg-red-600 text-white p-3 m-1"
            >
                <i className="fi fi-arrow-left"></i>
            </span>

            {images.slice(start, start + maxItems + 1).map(image => (
                <img
                    onClick={() => selectImage(image)}
                    className={`border inline md:w-12 md:h-12 p-1 ${
                        highlightedImage === image.key ? "border-black" : ""
                    }`}
                    src={showImage(image.src)}
                />
            ))}
            <span
                onClick={() => nextSlide()}
                className="inline bg-red-600 text-white p-3 m-1"
            >
                <i className="fi fi-arrow-right"></i>
            </span>
        </>
    );
}
