import React from 'react'
import BannerImg from "../../assets/women/women5.jpeg";
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";
import Banner from "../../assets/website/orange-pattern.jpg";
import Img1 from "../../assets/shirt/cal.png";
import Img2 from "../../assets/shirt/pen.png";
import Img3 from "../../assets/shirt/notebook.png";
import Img4 from "../../assets/shirt/lebelroll1.png"
import Img5 from "../../assets/shirt/lebelroll2.png"
import Img6 from "../../assets/shirt/lebelroll3.png"
import Img7 from "../../assets/shirt/house1.png"
import Img8 from "../../assets/shirt/house2.png"
import Img9 from "../../assets/shirt/house3.png"
import Img10 from "../../assets/shirt/A1.png"
import Img11 from "../../assets/shirt/A2.png"
import Img12 from "../../assets/shirt/A3.png"
import Img13 from "../../assets/shirt/P1.png"
import Img14 from "../../assets/shirt/P2.png"
import Img15 from "../../assets/shirt/P3.png"
import { FaStar } from "react-icons/fa";


const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Deli | SKU: 1589P Calculator",
    description:
      "Deli Modern Compact Calculator 12 Digit",
  },
  {
    id: 2,
    img: Img2,
    title: "Rotring Tikky Pen",
    description:
      "Rotring Tikky Pastel Ballpoint Pen, Blue Ink.",
  },
  {
    id: 3,
    img: Img3,
    title: "Classmate Notebook",
    description:
      " Single line,300 Pages,Wiro,240 x 180mm"
    },
  
];

const ProductsDatas = [
  {
    id: 1,
    img: Img4,
    title: "Roll Labels",
    description:
      "Deli Modern Compact Calculator 12 Digit",
  },
  {
    id: 2,
    img: Img5,
    title: "Inventory Labels",
    description:
      "Inventory Labels come in a wide variety of materials, shapes, sizes, and colors.",
  },
  {
    id: 3,
    img: Img6,
    title: "Sheet Labels",
    description:
      " They are, in fact, the label version of the printer paper. The A4 sheet of labels is intended for use in inkjet and laser printers."
    },
  
];


const ProductsDatasHouse = [
  {
    id: 1,
    img: Img7,
    title: "Kitchen cleaning products",
    description:
      "Drain Openers,Multi-Surface Cleaners ,Hard Water Mineral Removers",
  },
  {
    id: 2,
    img: Img8,
    title: "Bathroom Cleaning Products",
    description:
      "Disinfectant Cleaners ,Daily Shower Cleaners,Toilet Bowl Cleaners",
  },
  {
    id: 3,
    img: Img9,
    title: "Multi Surface Cleaners",
    description:
      " Glass Cleaners,Floor Cleaners,Carpet and Rug Cleaners"
    },
  
];


const ProductsDataA = [
  {
    id: 1,
    img: Img10,
    title: "A4 Colore Papers",
    description:
      "Artyom A4 Vivid Paper 80gsm Assorted 500 Pack ",
  },
  {
    id: 2,
    img: Img11,
    title: "A4 Size Paper Bundle",
    description:
      "White A4 Size Paper Bundle, Packaging Size 500 Sheets Per Pack.",
  },
  {
    id: 3,
    img: Img12,
    title: "Glossy Photo Paper A4",
    description:
      "LRS 180 GSM High Glossy Photo Paper A4 Size for Inkjet Printer (White) Water-resistant, Dries Quickly DIY Printing Label Art - Pack of 100 Sheets"
    },
  
];




const ProductsDatap = [
  {
    id: 1,
    img: Img13,
    title: "Flex Digital Printing",
    description:
      "Directly prints from a digital file using inkjet or laser printers ",
  },
  {
    id: 2,
    img: Img14,
    title: "Color,Black and White Printing",
    description:
      "Produces vibrant and full-color output and Economical printing for text-based documents",
  },
  {
    id: 3,
    img: Img15,
    title: "Lamination & Print",
    description:
      "Printing followed by lamination for durability and shine."
    },
  
];


const BannerImgs = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};



export const Service = (handleOrderPopup) => {
  return (

<div>
  <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200 ">

    <div className="min-h-[550px] flex justify-center items-center py-12 sm:py-0">
      
      <div className="h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z[8]"></div>
      <div className="container">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
          
          <div data-aos="zoom-in">
              
            <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10"> 
                    <i><h1
                      data-aos="zoom-out"
                      data-aos-duration="500"
                      data-aos-once="true"
                      className="text-5xl sm:text-6xl lg:text-7xl font-bold"
                    >Services</h1></i>
                    <p
                      data-aos="fade-up"
                      data-aos-duration="500"
                      data-aos-delay="100"
                      className="text-sm"
                    >----We don’t just print—we pour love into every page.</p>
                    <div data-aos="zoom-in">
                        <img
                          src={BannerImg}
                          alt=""
                          className="max-w-[600px] h-[350px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover"
                        />
                    </div>
            </div>
          </div>

        <div className="flex flex-col justify-center gap-6 sm:pt-0">
          <h1 data-aos="fade-up" className="text-3xl sm:text-4xl font-bold">
            ✅ We can Provide
            </h1>

            <div className="flex flex-col gap-4">
              <div data-aos="fade-up" className="flex items-center gap-4">
                <GrSecure className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-red-100 dark:bg-red-5000" />
                <p>A4-Paper supply</p>
              </div>
              <div data-aos="fade-up" className="flex items-center gap-4">
                <IoFastFood className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-100 dark:bg-orange-400" />
                <p>Printing</p>
              </div>
              <div data-aos="fade-up" className="flex items-center gap-4">
                <GiFoodTruck className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-green-100 dark:bg-green-400" />
                <p>Stationery Items </p>
              </div>
              <div data-aos="fade-up" className="flex items-center gap-4">
                <GrSecure className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100 dark:bg-violet-400" />
                <p>Label Rolls</p>
              </div>
              <div data-aos="fade-up" className="flex items-center gap-4">
                <GiFoodTruck className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-yellow-100 dark:bg-yellow-400" />
                <p>House keeping material</p>
              </div>
              
            </div>


          </div>

          
        </div>

        
      </div>
      
    </div>
    
    </div>
    {/* <div
      data-aos="zoom-in"
      className="mb-20 bg-gray-100 dark:bg-gray-800 text-white rounded-full w-20 h-20 "
      style={BannerImgs}
    >
                <div className='flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-full  dark:bg-gray-800 bg-primary/10 relative '> 
                <div className='container backdrop-blur-sm py-10 '>
                 <div className='space-y-6 max-w-xl mx-auto  rounded-full'>
                   <p data-aos="fade-up" className="text-1xl !text-center sm:text-left sm:text-1xl font-semibold  ">
                    "Welcome to Sree Surya Satya Durga Printers" <br /> Your trusted destination for all things printing and beyond!
                    We specialize in high-quality printing services, A4 paper supplies, office stationery, label rolls, and even housekeeping materials to support your business or personal needs. Whether you are printing important documents, labeling your products, or stocking up your office  we deliver affordable, reliable, and fast solutions with a smile.</p>
                  </div>
                  </div>
                </div>
          </div> */}
          
          
        {/* A4 paper supply */}
        <br/>
        
        <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
           
            <div>
                  <div className="container">
                    {/* Header section */}
                    <div className="text-left mb-24">
                      <p data-aos="fade-up" className="text-sm text-primary">
                        Top Rated Products for you
                      </p>
                      <h1 data-aos="fade-up" className="text-3xl font-bold">
                      A4 paper supply
                      </h1><br />
                      <p data-aos="fade-up" className="text-xs text-gray-400">
                      A4 paper products are among the most commonly used stationery items in homes, schools, and offices around the world. Measuring 210 mm x 297 mm (8.27 x 11.69 inches), A4 paper is a standard size under the ISO 216 international paper size system, making it universally compatible with printers, copiers, and filing systems.

A4 paper is widely appreciated for its versatility and convenience, serving a broad range of purposes—from printing documents, creating school assignments, and drafting official letters to producing marketing materials like flyers and handouts. Because of its balanced dimensions, A4 strikes the perfect middle ground—not too small to limit content, and not too large to be cumbersomeFrom plain printer paper and colored sheets to ruled notebooks, graph paper, and premium bond paper, A4 paper comes in many forms tailored for different needs. We’ll also touch on factors to consider when choosing A4 paper—such as GSM (thickness), finish (matte or glossy), and recyclability..
                      </p>
                    </div>
                    <br />
                    {/* Body section */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center">
                      {ProductsDataA.map((data) => (
                        <div
                          data-aos="zoom-in"
                          className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 group max-w-[300px]"
                        >
                          {/* image section */}
                          <div className="h-[100px]">
                            <img
                              src={data.img}
                              alt=""
                              className="max-w-[160px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md"
                            />
                          </div>
                          {/* details section */}
                          <div className="p-4 text-center">
                            {/* star rating */}
                            <div className="w-full flex items-center justify-center gap-1">
                              <FaStar className="text-yellow-500" />
                              <FaStar className="text-yellow-500" />
                              <FaStar className="text-yellow-500" />
                              <FaStar className="text-yellow-500" />
                            </div>
                            <h1 className="text-xl font-bold">{data.title}</h1>
                            <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">
                              {data.description}
                            </p>
                            <button
                              className="bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary"
                              onClick={handleOrderPopup}
                            >
                              Order Now
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>

                  </div>
                </div>
          </div>
          
          <br />
          {/* view all button */}
          <div className="flex justify-center">
            <button className="text-center mt-10 cursor-pointer bg-primary text-white py-1 px-5 rounded-md">
              View All Button
            </button>
          </div>

          <br />
          <br />


          {/* Printing */}
          
          <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
           
            <div>
                  <div className="container">
                    {/* Header section */}
                    <div className="text-left mb-24">
                      <p data-aos="fade-up" className="text-sm text-primary">
                        Top Rated Products for you
                      </p>
                      <h1 data-aos="fade-up" className="text-3xl font-bold">
                      Printing
                      </h1><br />
                      <p data-aos="fade-up" className="text-xs text-gray-400">
                      Printing is the process of reproducing text and images onto paper or other materials, typically using ink and a printing machine. It plays a crucial role in communication, education, advertising, and packaging. Printing is used to create a wide range of products such as books, newspapers, magazines, posters, brochures, labels, packaging materials, and business documents. Over time, printing technology has evolved from traditional manual methods to modern digital techniques that offer high speed and precision.

The importance of printing lies in its ability to share information quickly and efficiently to a large audience. It supports industries such as publishing, marketing, education, and retail by enabling mass production of materials with consistent quality. Today, printing also extends to textiles, ceramics, electronics, and even 3D printing, which allows the creation of physical objects from digital designs.

In addition to its functional uses, printing is also an art form, often used in creative expressions such as screen-printed apparel, artistic posters, and custom invitations. The continuous advancement in printing technologies ensures its relevance in both commercial and personal applications.
                      </p>
                    </div>
                    <br />
                    {/* Body section */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center">
                      {ProductsDatap.map((data) => (
                        <div
                          data-aos="zoom-in"
                          className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 group max-w-[300px]"
                        >
                          {/* image section */}
                          <div className="h-[100px]">
                            <img
                              src={data.img}
                              alt=""
                              className="max-w-[200px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md"
                            />
                          </div>
                          {/* details section */}
                          <div className="p-4 text-center">
                            {/* star rating */}
                            <div className="w-full flex items-center justify-center gap-1">
                              <FaStar className="text-yellow-500" />
                              <FaStar className="text-yellow-500" />
                              <FaStar className="text-yellow-500" />
                              <FaStar className="text-yellow-500" />
                            </div>
                            <h1 className="text-xl font-bold">{data.title}</h1>
                            <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">
                              {data.description}
                            </p>
                            <button
                              className="bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary"
                              onClick={handleOrderPopup}
                            >
                              Order Now
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>

                  </div>
                </div>
          </div>
          
          <br />
          {/* view all button */}
          <div className="flex justify-center">
            <button className="text-center mt-10 cursor-pointer bg-primary text-white py-1 px-5 rounded-md">
              View All Button
            </button>
          </div>

          <br />
          <br />




          {/* Stationery Items */}

          <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
            {/* <h1 data-aos="zoom-out"
                      data-aos-duration="500"
                      data-aos-once="true"
                      className="text-5xl sm:text-6xl lg:text-7xl font-bold">
            A4-Paper supply
            </h1> */}

            <div>
                  <div className="container">
                    {/* Header section */}
                    <div className="text-left mb-24">
                      <p data-aos="fade-up" className="text-sm text-primary">
                        Top Rated Products for you
                      </p>
                      <h1 data-aos="fade-up" className="text-3xl font-bold">
                      Stationery Items
                      </h1><br />
                      <p data-aos="fade-up" className="text-xs text-gray-400">
                      Gear your child with the right equipment for the new academic year in school, such as notebooks, textbooks, pencils, crayons and pens. Stationery does not have to just be for children, it can be for full-grown adults, as well. It can be office supplies, college supplies and office items. You can make DIY gifts, by giving them a personalized touch, for your loved one or your best friend. You can even bring back the old traditional ways of invitations - though greeting cards. Sit with your child and brag about the good old days when things were simpler, whilst making greeting cards right at home. You can help your child with his/her project right at home by bringing all the raw materials you need for that assignment and helping him/her create a masterpiece that your child can pride about at his/her school.
                      </p>
                    </div>
                    <br />
                    {/* Body section */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center">
                      {ProductsData.map((data) => (
                        <div
                          data-aos="zoom-in"
                          className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 group max-w-[300px]"
                        >
                          {/* image section */}
                          <div className="h-[100px]">
                            <img
                              src={data.img}
                              alt=""
                              className="max-w-[140px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md"
                            />
                          </div>
                          {/* details section */}
                          <div className="p-4 text-center">
                            {/* star rating */}
                            <div className="w-full flex items-center justify-center gap-1">
                              <FaStar className="text-yellow-500" />
                              <FaStar className="text-yellow-500" />
                              <FaStar className="text-yellow-500" />
                              <FaStar className="text-yellow-500" />
                            </div>
                            <h1 className="text-xl font-bold">{data.title}</h1>
                            <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">
                              {data.description}
                            </p>
                            <button
                              className="bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary"
                              onClick={handleOrderPopup}
                            >
                              Order Now
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>

                  </div>
                </div>
          </div>
          
          <br />
          {/* view all button */}
          <div className="flex justify-center">
            <button className="text-center mt-10 cursor-pointer bg-primary text-white py-1 px-5 rounded-md">
              View All Button
            </button>
          </div>

          <br />
          <br />
          






          {/* Labels on Sheets or Labels on Rolls */}

          <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
            {/* <h1 data-aos="zoom-out"
                      data-aos-duration="500"
                      data-aos-once="true"
                      className="text-5xl sm:text-6xl lg:text-7xl font-bold">
            A4-Paper supply
            </h1> */}

            <div>
                  <div className="container">
                    {/* Header section */}
                    <div className="text-left mb-24">
                      <p data-aos="fade-up" className="text-sm text-primary">
                        Top Rated Products for you
                      </p>
                      <h1 data-aos="fade-up" className="text-3xl font-bold">
                      Labels on Sheets or Labels on Rolls
                      </h1>
                      <br />
                      <p data-aos="fade-up" className="text-xs text-gray-400">
                      One very important aspect of running a successful business is labelling your products with clear and concise information such as descriptions and prices. When customers pick up a product in the store they expect to read useful information about it and decide whether they need it or not or whether the price suits them or not. Or, if you ship a parcel to a customer via a delivery agency you need to provide all the information necessary for the goods to get to the person who made the purchase. Furthermore, labels are necessary to set up a proper barcode system. All in all, you can’t imagine running a business without the use of labels. But which types do you need, labels on sheets or labels on rolls? Read on to find out about their differences and similarities.
                      </p>
                    </div>
                    <br />
                    {/* Body section */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center">
                      {ProductsDatas.map((data) => (
                        <div
                          data-aos="zoom-in"
                          className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 group max-w-[300px]"
                        >
                          {/* image section */}
                          <div className="h-[100px]">
                            <img
                              src={data.img}
                              alt=""
                              className="max-w-[140px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md"
                            />
                          </div>
                          {/* details section */}
                          <div className="p-4 text-center">
                            {/* star rating */}
                            <div className="w-full flex items-center justify-center gap-1">
                              <FaStar className="text-yellow-500" />
                              <FaStar className="text-yellow-500" />
                              <FaStar className="text-yellow-500" />
                              <FaStar className="text-yellow-500" />
                            </div>
                            <h1 className="text-xl font-bold">{data.title}</h1>
                            <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">
                              {data.description}
                            </p>
                            <button
                              className="bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary"
                              onClick={handleOrderPopup}
                            >
                              Order Now
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>

                  </div>
                </div>
          </div>
          <br />
          {/* view all button */}
          <div className="flex justify-center">
            <button className="text-center mt-10 cursor-pointer bg-primary text-white py-1 px-5 rounded-md">
              View All Button
            </button>
          </div>
          <br />
          <br />


          {/* House keeping material */}
          <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
            {/* <h1 data-aos="zoom-out"
                      data-aos-duration="500"
                      data-aos-once="true"
                      className="text-5xl sm:text-6xl lg:text-7xl font-bold">
            A4-Paper supply
            </h1> */}

            <div>
                  <div className="container">
                    {/* Header section */}
                    <div className="text-left mb-24">
                      <p data-aos="fade-up" className="text-sm text-primary">
                        Top Rated Products for you
                      </p>
                      <h1 data-aos="fade-up" className="text-3xl font-bold">
                      House Keeping Material
                      </h1><br />
                      <p data-aos="fade-up" className="text-xs text-gray-400">
                      Gear your child with the right equipment for the new academic year in school, such as notebooks, textbooks, pencils, crayons and pens. Stationery does not have to just be for children, it can be for full-grown adults, as well. It can be office supplies, college supplies and office items. You can make DIY gifts, by giving them a personalized touch, for your loved one or your best friend. You can even bring back the old traditional ways of invitations - though greeting cards. Sit with your child and brag about the good old days when things were simpler, whilst making greeting cards right at home. You can help your child with his/her project right at home by bringing all the raw materials you need for that assignment and helping him/her create a masterpiece that your child can pride about at his/her school.
                      </p>
                    </div>
                    <br />
                    {/* Body section */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center">
                      {ProductsDatasHouse.map((data) => (
                        <div
                          data-aos="zoom-in"
                          className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 group max-w-[300px]"
                        >
                          {/* image section */}
                          <div className="h-[100px]">
                            <img
                              src={data.img}
                              alt=""
                              className="max-w-[140px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md"
                            />
                          </div>
                          {/* details section */}
                          <div className="p-4 text-center">
                            {/* star rating */}
                            <div className="w-full flex items-center justify-center gap-1">
                              <FaStar className="text-yellow-500" />
                              <FaStar className="text-yellow-500" />
                              <FaStar className="text-yellow-500" />
                              <FaStar className="text-yellow-500" />
                            </div>
                            <h1 className="text-xl font-bold">{data.title}</h1>
                            <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">
                              {data.description}
                            </p>
                            <button
                              className="bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary"
                              onClick={handleOrderPopup}
                            >
                              Order Now
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>

                  </div>
                </div>
          </div>
          <br />
          {/* view all button */}
          <div className="flex justify-center">
            <button className="text-center mt-10 cursor-pointer bg-primary text-white py-1 px-5 rounded-md">
              View All Button
            </button>
          </div>
          <br />
          <br />







          
                      














  </div>
  );
};

export default Service;
