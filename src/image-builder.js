import client from "./sanity-client";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(client);

export default function imageBuilder(source) {
    return builder.image(source);
}
