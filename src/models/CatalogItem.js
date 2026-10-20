export class CatalogItem {
    constructor(id, title, location, description, rating, price, imageUrl = "", imagePlaceholder = "Photo placeholder") {
        this.id = id;
        this.title = title;
        this.location = location;
        this.description = description;
        this.rating = rating;
        this.price = price;
        this.imageUrl = imageUrl;
        this.imagePlaceholder = imagePlaceholder;
    }
}