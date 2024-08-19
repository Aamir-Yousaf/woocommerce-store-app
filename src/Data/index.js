import { v4 } from "uuid";


export const SliderItems = [
  {
    src: "/Imgs/slide1.png",
    altText: "Slide 1",
    caption:
      "These headphones feature large ear cups that fully enclose the ears, providing excellent sound isolation and rich, immersive audio. ",
    key: 1,
  },
  {
    src: "./Imgs/slide2.png",
    altText: "Slide 2",
    caption:
      "On-ear headphones rest on the ears rather than around them. They are more compact and portable than over-ear models, making them great for on-the-go use. ",
    key: 2,
  },
  {
    src: "/Imgs/slide3.png",
    altText: "Slide 3",
    caption:
      " In-ear headphones are small, lightweight, and fit snugly inside the ear canal. They are highly portable, offering good sound quality and noise isolation, making them perfect for workouts and travel.",
    key: 3,
  },
];
export const USDprice = 278;

export const NewArrivalItems = [
  {
    id: v4(),
    name: "Urban Fit T-shirt",
    price: {
      PKR: 1000,
      USD: 1000 / USDprice,
    },
    image: [
      "/Imgs/headphone.jpg",
      "https://cdn.pixabay.com/photo/2024/02/06/18/10/ai-generated-8557635_640.jpg",
      "https://cdn.pixabay.com/photo/2013/07/18/10/57/polo-shirt-163562_640.jpg",
      "https://cdn.pixabay.com/photo/2016/07/17/20/19/t-shirt-1524677_640.jpg",
      "https://cdn.pixabay.com/photo/2024/04/17/18/40/ai-generated-8702726_640.jpg",
    ],
    shortDescription: "Modern fit for the urban lifestyle.",
    description:
      "The Urban Fit T-shirt is designed for those who live life in the fast lane. Crafted from a blend of premium cotton and polyester, this shirt offers a perfect balance of comfort and durability. Its modern cut and stylish design make it ideal for both casual and semi-formal occasions. The fabric is breathable and quick-drying, ensuring you stay cool and comfortable throughout the day. Available in a range of trendy colors, the Urban Fit T-shirt is a must-have for anyone looking to elevate their wardrobe.",
    category: "Urban Wear",
    reviews: [
      { stars: 5, text: "Fits perfectly and looks great!" },
      { stars: 4, text: "Good quality but runs a bit small." },
    ],
  },
  {
    id: v4(),
    name: "Vintage Crew Neck T-shirt",
    price: {
      PKR: 1600,
      USD: 1600 / USDprice,
    },
    image: [
      "/Imgs/headphone7.jpg",
      "https://cdn.pixabay.com/photo/2013/07/18/10/57/polo-shirt-163562_640.jpg",
      "https://cdn.pixabay.com/photo/2016/07/17/20/19/t-shirt-1524677_640.jpg",
      "https://cdn.pixabay.com/photo/2024/04/17/18/40/ai-generated-8702726_640.jpg",
    ],
    shortDescription: "Classic crew neck with a vintage touch.",
    description:
      "Step back in time with the Vintage Crew Neck T-shirt, featuring a timeless design and retro-inspired colors. Made from soft, high-quality cotton, this shirt is comfortable enough for everyday wear. The ribbed collar and sleeves add a touch of vintage charm, while the relaxed fit ensures that you can move freely. Whether you're pairing it with jeans for a casual look or dressing it up with a blazer, this T-shirt is sure to become a staple in your wardrobe.",
    category: "Vintage Wear",
    reviews: [
      { stars: 5, text: "Love the vintage vibe!" },
      { stars: 4, text: "Great fit, but could use more color options." },
    ],
  },
  {
    id: v4(),
    name: "Eco-friendly Organic T-shirt",
    price: {
      PKR: 1500,
      USD: 1500 / USDprice,
    },
    image: [
      "./Imgs/headphone6.jpg",
      "https://cdn.pixabay.com/photo/2013/07/18/10/57/polo-shirt-163562_640.jpg",
      "https://cdn.pixabay.com/photo/2016/07/17/20/19/t-shirt-1524677_640.jpg",
      "https://cdn.pixabay.com/photo/2024/04/17/18/40/ai-generated-8702726_640.jpg",
    ],
    shortDescription: "Sustainable fashion made from organic materials.",
    description:
      "The Eco-friendly Organic T-shirt is made from 100% organic cotton, making it a great choice for the environmentally conscious consumer. The fabric is soft, breathable, and free from harmful chemicals, ensuring both comfort and sustainability. Its simple yet stylish design makes it easy to pair with any outfit, whether you're going for a casual look or something more polished. Join the movement towards sustainable fashion with this eco-friendly T-shirt.",
    category: "Eco Wear",
    reviews: [
      { stars: 5, text: "Feels great and love the eco-friendly aspect." },
      {
        stars: 4,
        text: "Comfortable, but a bit pricey for an everyday T-shirt.",
      },
    ],
  },
  {
    id: v4(),
    name: "Graphic Print T-shirt",
    price: {
      PKR: 900,
      USD: 900 / USDprice,
    },
    image: [
      "/Imgs/headphone3.jpg",
      "https://cdn.pixabay.com/photo/2013/07/18/10/57/polo-shirt-163562_640.jpg",
      "https://cdn.pixabay.com/photo/2016/07/17/20/19/t-shirt-1524677_640.jpg",
      "https://cdn.pixabay.com/photo/2024/04/17/18/40/ai-generated-8702726_640.jpg",
    ],
    shortDescription: "Bold graphics for a standout look.",
    description:
      "Make a statement with the Graphic Print T-shirt, featuring bold designs that are sure to turn heads. Made from soft, breathable cotton, this shirt is comfortable enough for all-day wear. The vibrant colors and unique prints make it a great addition to any wardrobe, whether you're dressing it up with a jacket or keeping it casual with shorts. Perfect for expressing your personality and adding a touch of flair to your everyday outfits.",
    category: "Graphic Wear",
    reviews: [
      { stars: 5, text: "The print is amazing and the quality is top-notch!" },
      { stars: 4, text: "Love the design, but wish it came in more colors." },
    ],
  },
];


export const BestSelling = [
  {
    id: v4(),
    name: "Classic Polo T-shirt",
    price: {
      PKR: 1200,
      USD: 1200 / USDprice,
    },
    image: [
      "/Imgs/headphone4.jpg",
      "https://cdn.pixabay.com/photo/2024/02/06/18/10/ai-generated-8557635_640.jpg",
      "https://cdn.pixabay.com/photo/2016/07/17/20/19/t-shirt-1524677_640.jpg",
      "https://cdn.pixabay.com/photo/2024/04/17/18/40/ai-generated-8702726_640.jpg",
    ],
    shortDescription: "Timeless style and comfort in a slim fit design.",
    description:
      "The Classic Polo T-shirt is the epitome of timeless style and comfort. Made from high-quality cotton, this shirt is perfect for any casual occasion. Its breathable fabric ensures that you stay cool, while the slim fit design flatters your figure. The vibrant colors and durable material make this polo a wardrobe staple for years to come. Whether you're pairing it with jeans for a relaxed weekend look or dressing it up with chinos for a more polished outfit, this polo delivers on all fronts.",
    category: "Casual Wear",
    reviews: [
      { stars: 5, text: "Great quality and fits perfectly!" },
      { stars: 4, text: "Comfortable, but a bit pricey." },
      { stars: 5, text: "Love the color and material." },
    ],
  },
  {
    id: v4(),
    name: "Sporty Polo T-shirt",
    price: {
      PKR: 1900,
      USD: 1900 / USDprice,
    },
    image: [
      "/Imgs/headphone5.jpg",
      "https://cdn.pixabay.com/photo/2024/02/06/18/10/ai-generated-8557635_640.jpg",
      "https://cdn.pixabay.com/photo/2013/07/18/10/57/polo-shirt-163562_640.jpg",
      "https://cdn.pixabay.com/photo/2024/04/17/18/40/ai-generated-8702726_640.jpg",
    ],
    shortDescription: "Modern style meets athletic functionality.",
    description:
      "Designed for the active individual, the Sporty Polo T-shirt combines functionality with modern style. The moisture-wicking fabric keeps you dry during intense activities, while the stretchable material provides maximum comfort. Whether you're hitting the gym or going for a run, this polo will keep you looking sharp and feeling comfortable. Its ergonomic design ensures freedom of movement, and the bold color options make it easy to stand out in a crowd.",
    category: "Sportswear",
    reviews: [
      { stars: 5, text: "Perfect for workouts!" },
      { stars: 4, text: "Good fit, but could use more colors." },
      { stars: 5, text: "Excellent for outdoor activities." },
    ],
  },
  {
    id: v4(),
    name: "Casual Polo T-shirt",
    price: {
      PKR: 1900,
      USD: 1900 / USDprice,
    },
    image: [
      "/Imgs/headphone4.jpg",
      "https://cdn.pixabay.com/photo/2024/02/06/18/10/ai-generated-8557635_640.jpg",
      "https://cdn.pixabay.com/photo/2013/07/18/10/57/polo-shirt-163562_640.jpg",
      "https://cdn.pixabay.com/photo/2016/07/17/20/19/t-shirt-1524677_640.jpg",
    ],
    shortDescription: "Relaxed fit for everyday wear.",
    description:
      "The Casual Polo T-shirt is perfect for everyday wear. With a relaxed fit and soft fabric, this shirt offers unmatched comfort. The subtle design details, like a ribbed collar and sleeve cuffs, add a touch of sophistication to your casual look. Available in a variety of colors, this polo is versatile enough to pair with jeans or shorts. It's the go-to shirt for a day out with friends or a laid-back weekend at home.",
    category: "Casual Wear",
    reviews: [
      { stars: 5, text: "Super comfortable for daily wear." },
      { stars: 4, text: "Nice shirt, but the fabric is a bit thin." },
      { stars: 4, text: "Good value for the price." },
    ],
  },
  {
    id: v4(),
    name: "Premium Polo T-shirt",
    price: {
      PKR: 1900,
      USD: 1900 / USDprice,
    },
    image: [
      "/Imgs/headphone6.jpg",
      "https://cdn.pixabay.com/photo/2013/07/18/10/57/polo-shirt-163562_640.jpg",
      "https://cdn.pixabay.com/photo/2016/07/17/20/19/t-shirt-1524677_640.jpg",
      "https://cdn.pixabay.com/photo/2024/04/17/18/40/ai-generated-8702726_640.jpg",
    ],
    shortDescription: "Luxury feel with a refined fit.",
    description:
      "Experience luxury with the Premium Polo T-shirt, crafted from the finest materials for a superior feel. This shirt is designed for those who appreciate the finer things in life, with a refined cut that enhances your silhouette. The fabric is not only soft to the touch but also highly durable, making it a long-lasting addition to your wardrobe. It's perfect for upscale casual occasions where you want to make a statement without sacrificing comfort.",
    category: "Luxury Wear",
    reviews: [
      { stars: 5, text: "Feels luxurious and fits great!" },
      { stars: 4, text: "Excellent quality, but a bit expensive." },
      { stars: 5, text: "Worth every penny." },
    ],
  },
  {
    id: v4(),
    name: "Eco-friendly Polo T-shirt",
    price: {
      PKR: 1900,
      USD: 1900 / USDprice,
    },
    image: [
      "/Imgs/headphone7.jpg",
      "https://cdn.pixabay.com/photo/2016/11/21/15/58/necklace-1845810_640.jpg",
      "https://cdn.pixabay.com/photo/2017/08/07/15/57/t-shirt-2606690_640.jpg",
      "https://cdn.pixabay.com/photo/2018/01/15/07/22/green-3082583_640.jpg",
    ],
    shortDescription: "Sustainable fashion with style.",
    description:
      "The Eco-friendly Polo T-shirt is made from organic cotton and recycled materials, combining sustainability with style. This shirt offers the same comfort and fit as traditional polos, but with a smaller environmental footprint. The fabric is soft, breathable, and perfect for eco-conscious consumers. Its earthy tones and minimalist design make it a versatile addition to any wardrobe, while also contributing to a more sustainable future.",
    category: "Eco Wear",
    reviews: [
      { stars: 5, text: "Love the eco-friendly concept!" },
      {
        stars: 4,
        text: "Very comfortable, but wish there were more color options.",
      },
      { stars: 5, text: "Great quality and sustainable." },
    ],
  },
  {
    id: v4(),
    name: "Vintage Polo T-shirt",
    price: {
      PKR: 1900,
      USD: 1900 / USDprice,
    },
    image: [
      "/Imgs/headphone9.jpg",
      "https://cdn.pixabay.com/photo/2016/11/22/21/42/fashion-1850012_640.jpg",
      "https://cdn.pixabay.com/photo/2017/08/07/15/57/t-shirt-2606690_640.jpg",
      "https://cdn.pixabay.com/photo/2018/01/15/07/22/green-3082583_640.jpg",
    ],
    shortDescription: "Classic design with a vintage vibe.",
    description:
      "The Vintage Polo T-shirt brings a touch of nostalgia to your wardrobe with its classic design and retro-inspired colors. Made from premium cotton, this shirt offers a soft feel and a relaxed fit. The vintage-style buttons and stitching add to its unique appeal, making it a great choice for those who love timeless fashion. Whether you're dressing up for a night out or keeping it casual, this polo is sure to turn heads.",
    category: "Retro Wear",
    reviews: [
      { stars: 5, text: "Love the retro look!" },
      { stars: 4, text: "Comfortable and stylish." },
      { stars: 4, text: "Nice vintage feel, but runs a bit large." },
    ],
  },
];

