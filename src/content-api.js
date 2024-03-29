import groq from "groq";
import client from "./sanity-client";

export default async function getPostBySlug(slug) {
    const query = groq`*[_type == "post" && slug.current == $slug][0]{
      title,
      "name": author->name,
      "categories": categories[]->title,
      "authorImage": author->image,
      publishedAt,
      body
    }`;

    return client.fetch(query, { slug });
}

export async function getAllPosts() {
    const query = groq`*[_type == "post"]{
        title,
        description,
        slug,
        "mainImage": mainImage.asset->url,
      }`;

    return client.fetch(query, {});
}

export async function getAllCategories() {
    const query = groq`*[_type == "category"]{
        title,
        description,
        type,
        "image": coverImage.asset->url,
        slug,
      }`;

    return client.fetch(query, {});
}

export async function getCategoryBySlug(slug) {
    const query = groq`*[_type == "category" && slug.current == $slug][0]{
        title,
        description,
        type,
        "image": coverImage.asset->url,
        slug,
    }`;

    return client.fetch(query, { slug });
}

export async function getAllPostsInCategory(category) {
    const query = groq`*[_type=="post" && references(*[_type=="category" && slug.current == "${category}"]._id)]{
      "mainImage": mainImage.asset->url,
      title,
      "slug": slug.current
    }`;

    return client.fetch(query, { category });
}
