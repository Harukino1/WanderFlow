import { CatalogItem } from './CatalogItem';

export class TourPackage extends CatalogItem {
    constructor(id, title, location, description, rating, reviewCount, price, imageUrl, durationHours, groupSize, inclusions, category = 'All experiences') {
        super(id, title, location, description, rating, price, imageUrl, `Tour photo placeholder — ${title}`);
        this.type = 'tour';
        this.reviewCount = reviewCount;
        this.durationHours = durationHours;
        this.groupSize = groupSize;
        this.inclusions = inclusions;
        this.category = category;
    }

    getFormattedDuration() {
        return `${this.durationHours} Hours`;
    }

    getFormattedPrice() {
        return `₱${this.price.toLocaleString()}/person`;
    }
}