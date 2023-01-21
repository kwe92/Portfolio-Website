import { SanityImageSource } from "@sanity/image-url/lib/types/types";

export default interface About {
    title: string,
    description: string,
    imageUrl: SanityImageSource,
 };