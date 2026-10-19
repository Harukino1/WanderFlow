export class Room {
    constructor(id, hotelId, title, pricePerNight, capacity, features) {
        this.id = id;
        this.hotelId = hotelId;
        this.title = title;
        this.pricePerNight = pricePerNight;
        this.capacity = capacity;
        this.features = features;
    }

    getFormattedPrice() {
        return `₱${this.pricePerNight.toLocaleString()}/night`;
    }
}