export class Product {

    constructor(
        public id?: number,
        public name?: string,
        public category?: string,
        public description?: string,
        public price?: number) { }
}
//The Product class defines a constructor that accepts id, name, category, description, and price
//properties, which correspond to the structure of the data used to populate the RESTful web service