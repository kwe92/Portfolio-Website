import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

// Use sanity client to fetch data from sanity dashboard 
export const client = sanityClient({
    projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
    dataset: "production",
    apiVersion: "2023-01-21",
    useCdn: true,
    token: process.env.REACT_APP_TOKEN,
});

const builder = imageUrlBuilder(client);

// callback that accepts a SanityImageSource
// SanityImageSource is recieved as ab object when you call the sanity client with client.fetch()
export const urlfor = (source: SanityImageSource) => builder.image(source);