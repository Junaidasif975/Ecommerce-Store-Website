interface navbarType{
    name:string;
    Product?:string[];
}
export const navbar:navbarType[] = [
  {
    name: "Home",
  },
  {
    name: "About us",
  },
  {
    name: "Product",
    Product: [
      "Mobile",
      "Laptops",
      "Smart Watch",
      "Polarid",
      "Iphone",
      "Camera",
      "Camera Roll",
      "Drown Camera",
    ]
  },

  {
    name: "Contact",
  },
];
