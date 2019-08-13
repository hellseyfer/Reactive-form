export class Image {
  file: any;
  url: any;
}

export class Product {
  _id: string;
  title: string;
  brand: string;
  price: number;
  materials: Array<string>;
  images: Array<Image>;
}

