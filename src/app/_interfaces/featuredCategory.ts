import { FeaturedSubCategory } from "./featSubCategory";

export interface FeaturedCategory {
    id: number;
    title: string;
    imageUrl: string;
    package: boolean;
    subCategories: FeaturedSubCategory[];
}
