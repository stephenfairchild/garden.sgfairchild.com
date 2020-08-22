import BlockContent from "@sanity/block-content-to-react";
import client from "./sanity-client";

export default function RenderBodyContent(body) {
    const serializers = {
        list: props => (
            <ul className="pt-2 pl-10 list-disc">{props.children}</ul>
        ),
        types: {
            block(props) {
                switch (props.node.style) {
                    case "h1":
                        return <h1 className="">{props.children}</h1>;
                    case "blockquote":
                        return (
                            <blockquote className="">
                                {props.children}
                            </blockquote>
                        );

                    default:
                        return <p className="pt-2 pb-2">{props.children}</p>;
                }
            }
        }
    };

    return (
        <BlockContent
            serializers={serializers}
            blocks={body}
            imageOptions={{ w: 320, h: 240, fit: "max" }}
            {...client.config()}
        />
    );
}
