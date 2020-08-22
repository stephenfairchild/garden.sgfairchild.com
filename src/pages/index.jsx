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
                    <div className="container mx-auto text-center">
                        <h1 className="text-xl">
                            Active personal and family projects
                        </h1>
                        <ul>
                            {categories.map(category => (
                                <a href={`/category/${category.slug.current}`}>
                                    <li className="cursor-pointer hover:font-light">
                                        {category.title}
                                    </li>
                                </a>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}
