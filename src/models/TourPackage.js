import { CatalogItem } from './CatalogItem';

export class TourPackage extends CatalogItem {
    constructor(id, title, location, description, rating, reviewCount, price, imageUrl, durationHours, groupSize, inclusions) {
        super(id, title, location, description, rating, price, imageUrl);
        this.type = 'tour';
        this.reviewCount = reviewCount;
        this.durationHours = durationHours;
        this.groupSize = groupSize;
        this.inclusions = inclusions;
    }

    getFormattedDuration() {
        return `${this.durationHours} Hours`;
    }

    getFormattedPrice() {
        return `₱${this.price.toLocaleString()}/person`;
    }
}