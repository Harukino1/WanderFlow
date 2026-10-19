import { CatalogItem } from './CatalogItem';

export class Hotel extends CatalogItem {
    constructor(id, title, location, tagline, description, rating, reviewCount, basePrice, imageUrl, amenities, highlights, rooms = []) {
        super(id, title, location, description, rating, basePrice, imageUrl);
        this.type = 'hotel';
        this.tagline = tagline;
        this.reviewCount = reviewCount;
        this.amenities = amenities;
        this.highlights = highlights;
        this.rooms = rooms;
    }

    getFormattedPrice() {
        return `₱${this.price.toLocaleString()}/night`;
    }
}