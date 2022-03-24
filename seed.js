const mongoose = require("mongoose");
const Restaurant = require("./models/Restaurant.model");

const restaurants = [
  {
    name: "Sola Miami Beach",
    address: "1000 Collins Ave Miami Beach, FL 33139",
    cords: { lat: "25.780840", lng: "-80.131950" },
    priceRange: 1,
    cuisines: ["Contemporary American", "Cuban"],
    style: "Casual Elegant",
    dressCode: "Smart Casual",
    paymentOptions: "AMEX, Discover, MasterCard, Visa",
    rating: "4",
    headerImage:
      "https://resizer.otstatic.com/v2/photos/wide-huge/3/28779474.jpg",
    images: [
      "https://resizer.otstatic.com/v2/photos/xlarge/3/28779474.jpg",
      "https://resizer.otstatic.com/v2/photos/xlarge/2/43621039.jpg",
      "https://resizer.otstatic.com/v2/photos/xlarge/2/43621016.jpg",
      "https://resizer.otstatic.com/v2/photos/xlarge/2/43621008.jpg",
      "https://resizer.otstatic.com/v2/photos/xlarge/2/43621003.jpg",
    ],
    description:
      "Sola Miami Beach is located in the vibrant South Beach Area at The Fairwind Hotel, 1000 Collins Ave. Sola is very Famous for Brunch and Dinner any day of the week. We offer you an exhaustive New American Cuisine with a Latin Twist. Enjoy a Full Bar with Handcrafted Cocktails and Frozen Drinks, $25 Bottomless Mimosas & Sangrias and a Premium Liquor Brands Happy Hour! You can have your table inside or outside by the Beautiful Fountain or at one of our multiple Terraces. Sola is also a Hookah Lounge, and we have an All-Day Brunch on the Weekends with a Live Dj.",
  },
  {
    name: "STK – Miami Beach",
    address: "2305 Collins Avenue Miami, FL 33139",
    cords: { lat: "25.799320", lng: "-80.126953" },
    priceRange: 1,
    cuisines: [
      "Steakhouse",
      "Bar / Lounge / Bottle Service",
      "Contemporary American",
    ],
    style: "Casual Elegant",
    dressCode: "Smart Casual",
    paymentOptions: "AMEX, Discover, MasterCard, Visa",
    rating: "4",
    headerImage: "",
    images: [
      "https://images.otstatic.com/prod1/47150891/2/large.jpg",
      "https://images.otstatic.com/prod1/47150890/2/large.jpg",
      "https://images.otstatic.com/prod1/47150887/2/large.jpg",
      "https://images.otstatic.com/prod1/47150886/2/large.jpg",
      "https://images.otstatic.com/prod1/47150885/2/large.jpg",
      "https://images.otstatic.com/prod1/47150892/2/large.jpg",
    ],
    description:
      "STK artfully blends two concepts into one—the modern steakhouse and a chic lounge. A large central lounge area is furnished with creamy leather banquettes and textured crocodile tiles, and is surrounded by an elevated dining room for more formal dining. Theatrical lights illuminate each table, while a DJ creates an energetic vibe throughout the entire space. STK Miami is located in the heart of Miami Beach, bringing the pulse of New York to the rhythm of South Beach. Executive Chef Rafael Linares mans the kitchen of the bi-level venue located in the 1 Hotel and Resorts. As anticipated, steak is the main attraction. STK offers small, medium and large cuts of meat, as well as naturally raised options and market fresh fish entrees. Aside from steak, signature items include Parmesan Truffle Fries; Lil’ BRGs; Sweet Corn Pudding; and Jumbo Shrimp Cocktail.",
  },
  {
    name: "Restaurant 1",
    address: "",
    cords: { lat: 37.672, lng: -122.219 },
    priceRange: 1,
    cuisines: [""],
    style: "",
    dressCode: "",
    paymentOptions: "AMEX, Discover, MasterCard, Visa",
    rating: "4",
    headerImage: "",
    images: [""],
    description: "",
  },
  {
    name: "Restaurant 2",
    address: "",
    cords: { lat: 37.672, lng: -122.219 },

    priceRange: 1,
    cuisines: [""],
    style: "",
    dressCode: "",
    paymentOptions: "AMEX, Discover, MasterCard, Visa",
    rating: "4",
    headerImage: "",
    images: [""],
    description: "",
  },
  {
    name: "Restaurant 3",
    address: "",
    cords: { lat: 37.672, lng: -122.219 },

    priceRange: 1,
    cuisines: [""],
    style: "",
    dressCode: "",
    paymentOptions: "AMEX, Discover, MasterCard, Visa",
    rating: "4",
    headerImage: "",
    images: [""],
    description: "",
  },
  {
    name: "Restaurant 4",
    address: "",
    cords: { lat: 37.672, lng: -122.219 },

    priceRange: 1,
    cuisines: [""],
    style: "",
    dressCode: "",
    paymentOptions: "AMEX, Discover, MasterCard, Visa",
    rating: "4",
    headerImage: "",
    images: [""],
    description: "",
  },
  {
    name: "Restaurant 5",
    address: "",
    cords: { lat: 37.672, lng: -122.219 },

    priceRange: 1,
    cuisines: [""],
    style: "",
    dressCode: "",
    paymentOptions: "AMEX, Discover, MasterCard, Visa",
    rating: "4",
    headerImage: "",
    images: [""],
    description: "",
  },
  {
    name: "Restaurant 6",
    address: "",
    cords: { lat: 37.672, lng: -122.219 },

    priceRange: 1,
    cuisines: [""],
    style: "",
    dressCode: "",
    paymentOptions: "AMEX, Discover, MasterCard, Visa",
    rating: "4",
    headerImage: "",
    images: [""],
    description: "",
  },
  {
    name: "Restaurant 7",
    address: "",
    cords: { lat: 37.672, lng: -122.219 },

    priceRange: 1,
    cuisines: [""],
    style: "",
    dressCode: "",
    paymentOptions: "AMEX, Discover, MasterCard, Visa",
    rating: "4",
    headerImage: "",
    images: [""],
    description: "",
  },
  {
    name: "Restaurant 8",
    address: "",
    cords: { lat: 37.672, lng: -122.219 },

    priceRange: 1,
    cuisines: [""],
    style: "",
    dressCode: "",
    paymentOptions: "AMEX, Discover, MasterCard, Visa",
    rating: "4",
    headerImage: "",
    images: [""],
    description: "",
  },
  {
    name: "Restaurant 9",
    address: "",
    cords: { lat: 37.672, lng: -122.219 },

    priceRange: 1,
    cuisines: [""],
    style: "",
    dressCode: "",
    paymentOptions: "AMEX, Discover, MasterCard, Visa",
    rating: "4",
    headerImage: "",
    images: [""],
    description: "",
  },
  {
    name: "Restaurant 10",
    address: "",
    cords: { lat: 37.672, lng: -122.219 },

    priceRange: 1,
    cuisines: [""],
    style: "",
    dressCode: "",
    paymentOptions: "AMEX, Discover, MasterCard, Visa",
    rating: "4",
    headerImage: "",
    images: [""],
    description: "",
  },
  {
    name: "Restaurant 11",
    address: "",
    cords: { lat: 37.672, lng: -122.219 },

    priceRange: 1,
    cuisines: [""],
    style: "",
    dressCode: "",
    paymentOptions: "AMEX, Discover, MasterCard, Visa",
    rating: "4",
    headerImage: "",
    images: [""],
    description: "",
  },
  {
    name: "Restaurant 12",
    address: "",
    cords: { lat: 37.672, lng: -122.219 },

    priceRange: 1,
    cuisines: [""],
    style: "",
    dressCode: "",
    paymentOptions: "AMEX, Discover, MasterCard, Visa",
    rating: "4",
    headerImage: "",
    images: [""],
    description: "",
  },
  {
    name: "Restaurant 13",
    address: "",
    cords: { lat: 37.672, lng: -122.219 },

    priceRange: 1,
    cuisines: [""],
    style: "",
    dressCode: "",
    paymentOptions: "AMEX, Discover, MasterCard, Visa",
    rating: "4",
    headerImage: "",
    images: [""],
    description: "",
  },
  {
    name: "Restaurant 14",
    address: "",
    cords: { lat: 37.672, lng: -122.219 },

    priceRange: 1,
    cuisines: [""],
    style: "",
    dressCode: "",
    paymentOptions: "AMEX, Discover, MasterCard, Visa",
    rating: "4",
    headerImage: "",
    images: [""],
    description: "",
  },
  {
    name: "Restaurant 15",
    address: "",
    cords: { lat: 37.672, lng: -122.219 },

    priceRange: 1,
    cuisines: [""],
    style: "",
    dressCode: "",
    paymentOptions: "AMEX, Discover, MasterCard, Visa",
    rating: "4",
    headerImage: "",
    images: [""],
    description: "",
  },
  {
    name: "Restaurant 16",
    address: "",
    cords: { lat: 37.672, lng: -122.219 },

    priceRange: 1,
    cuisines: [""],
    style: "",
    dressCode: "",
    paymentOptions: "AMEX, Discover, MasterCard, Visa",
    rating: "4",
    headerImage: "",
    images: [""],
    description: "",
  },
  {
    name: "Restaurant 17",
    address: "",
    cords: { lat: 37.672, lng: -122.219 },

    priceRange: 1,
    cuisines: [""],
    style: "",
    dressCode: "",
    paymentOptions: "AMEX, Discover, MasterCard, Visa",
    rating: "4",
    headerImage: "",
    images: [""],
    description: "",
  },
  {
    name: "Restaurant 18",
    address: "",
    cords: { lat: 37.672, lng: -122.219 },

    priceRange: 1,
    cuisines: [""],
    style: "",
    dressCode: "",
    paymentOptions: "AMEX, Discover, MasterCard, Visa",
    rating: "4",
    headerImage: "",
    images: [""],
    description: "",
  },
];

mongoose
  .connect("mongodb://localhost/taybl", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((data) =>
    console.log(
      `Connected to Mongo! Database name: "${data.connections[0].name}"`
    )
  )
  .catch((err) => console.error("Error connecting to mongo", err));

Restaurant.deleteMany({})
  .then((results) => {
    console.log("Success", results);
    Restaurant.create(restaurants)
      .then((results) => {
        console.log("Success", results);
        mongoose.connection.close();
      })
      .catch((err) => {
        console.log("Something went wrong", err);
      });
  })
  .catch((err) => {
    console.log("Something went wrong", err);
  });
