export class Review {
    constructor(id, targetId, author, rating, comment, date) {
        this.id = id;
        this.targetId = targetId; // hotelId or tourId
        this.author = author;
        this.rating = rating;
        this.comment = comment;
        this.date = date;
    }
}