import {aboutUsTextType, aboutUsType, Allproduct, bannerType, CardType, clientType, ContactUsType, serviceType } from "./type";

export const bannerData: bannerType[] = [
    {
      id: 1,
      heading: "Precision in Every Stitch",
      paragraph: "Experience precision tailoring where every stitch perfects your style, enhancing every ensemble with unmistakable elegance.",
      button: "Our Services",
      image_url: "/images/banner.png",
    },
    {
      id: 2,
      heading: "Tailored for Perfection",
      paragraph: "Elevate your wardrobe with bespoke garments tailored to fit your unique style and personality perfectly.",
      button: "Our Services",
      image_url: "/images/banner6.png",
    },
    {
      id: 3,
      heading:"Modern Crafted Style",
      paragraph: "Blend timeless craftsmanship with modern designs, ensuring each piece is as unique and stylish as you are.",
      button: "Our Services",
      image_url: "/images/banner4.png",
    },
  ];

  export const allProduct: Allproduct[] = [
    {
      id: 1,
      image_url: "/images/product.png",
      Productname: "Shalwar Kameez",
      catagory:"cotton" ,
      symbol: "PKR",
      price: 175,
    },
    {
      id: 2,
      image_url: "/images/product2.png",
      Productname: "Shalwar Kameez",
      catagory: "cotton",
      symbol: "PKR",
      price: 173,
    },
    {
      id: 3,
      image_url: "/images/product3.png",
      Productname: "Shalwar Kameez",
      catagory: "cotton",
      symbol: "PKR",
      price: 176,
    },
    {
      id: 4,
      image_url: "/images/product4.png",
      Productname: "Kurta Pajma",
      catagory: "cotton",
      symbol: "PKR",
      price: 175,
    },
    {
      id: 4,
      image_url: "/images/product5.png",
      Productname: "Kurta Pajma",
      catagory:"cotton" ,
      symbol: "PKR",
      price: 135,
    },
  ];  

  export const about: aboutUsType[] = [
    {
      id: 1,
      heading:"Welcome to S.S Tailors and Graments",
      title:"Crafting Elegance, One Stitch at a Time",
      paragraph:"At S.S Tailors and Graments, we believe in the power of bespoke tailoring to transform not just wardrobes, but lives. Our skilled artisans are dedicated to creating custom garments that reflect your unique style and personality. From the finest fabrics to the perfect fit, we ensure every detail is meticulously crafted to perfection. Discover the art of personalized fashion with us",
      image_url: "/images/about.png",
      
      
      
    },
  ]; 


  export const abouttext: aboutUsTextType[] = [
    {
        id: 1,
        heading: "About Our Tailor House",
        text: "With decades of experience, we specialize in crafting bespoke garments that fit you perfectly. Our dedication to quality and precision sets us apart.",
        paragraph: "At our tailor house, every stitch is a promise of excellence. We combine traditional craftsmanship with modern techniques to deliver garments that are both timeless and trendy.",
        image_url: "/images/about2.png",
        link: "More About"
    },
];
 

  export const client: clientType[] = [
    {
      id: 1,
      name:"David",
      image:"/images/client1.png",
      review:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur ipsum cupiditate earum soluta, sed suscipit enim vitae quaerat pariatur nemo sit velit nam animi laborum eligendi doloremque? Beatae, totam rerum?"
    },
    {
      id: 2,
      name:"Sophia Patel",
      image:"/images/client2.png",
      review:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur ipsum cupiditate earum soluta, sed suscipit enim vitae quaerat pariatur nemo sit velit nam animi laborum eligendi doloremque? Beatae, totam rerum?"
    },
    {
      id: 3,
      name:"Emily Johnson",
      image:"/images/client3.png",
      review:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur ipsum cupiditate earum soluta, sed suscipit enim vitae quaerat pariatur nemo sit velit nam animi laborum eligendi doloremque? Beatae, totam rerum?"
    },
  ]; 

  export const services: serviceType[] = [
    {
        id: 1,
        heading: "Custom Suits",
        image: "/images/service1.png",
        paragraph: "Get a perfect fit with our custom suit tailoring, designed to your exact measurements and style preferences."
    },
    {
        id: 2,
        heading: "Expert Alterations",
        image: "/images/service2.png",
        paragraph: "Expert alterations and repairs to ensure your garments fit like new, every time."
    },
    {
        id: 3,
        heading: "Wedding Attire",
        image: "/images/service3.png",
        paragraph: "Tailored wedding attire that adds elegance to your special day, from suits to gowns."
    },
    {
        id: 4,
        heading: "Casual Tailoring",
        image: "/images/service4.png",
        paragraph: "Personalized tailoring for your everyday wear, combining comfort with style."
    },
];



  export const contactUs: ContactUsType[] = [
    {
      id: 1,
      heading:"Get in Touch with Us!",
      image_url:"/images/contact2.png",
      paragraph:"We would love to hear from you! Whether you have a question about our services, need assistance with an order, or just want to share your thoughts, we are here to help. At S.S Tailors and Graments, customer satisfaction is our top priority "
    },
   
  ]; 
  

  export const CardItems: CardType[] = [
    {
      id: 1,
      heading:"Total Customers",
      value:500,
      //update: "update july 16 2025"
    },
    {
      id: 2,
      heading:"Total Orders",
      value:500,
     // update: "update july 16 2025"
    },
    {
      id: 3,
      heading:"Total Revenue",
      value:500,
      //update: "update july 16 2025"
    },
  ];
  
  