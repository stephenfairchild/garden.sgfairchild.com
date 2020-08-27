import Head from "next/head";
import { getAllCategories } from "../content-api";
import Navbar from "../components/navbar";

export async function getServerSideProps() {
    const data = await getAllCategories();

    return {
        props: {
            categories: data
        }
    };
}

export default function Index(props) {
    const { categories } = props;

    return (
        <>
            <Navbar />
            <div>
                <div>
                    {categories.map(category => (
                        <div className="float-left bg-gray-700 w-64 h-24 m-2 relative cursor-pointer">
                            <div className="bg-gray-300 w-64 z-10 h-10 p-2 absolute bottom-0 hover:font-light">
                                <a href={`/category/${category.slug.current}`}>
                                    {category.title}
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
