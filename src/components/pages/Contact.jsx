import React from 'react'
import Slider from "react-slick";
import OwnerPic from "../../assets/ownerpic.png"

const TestimonialData = [
  {
    id: 1,
    name: " Name : Rupas",
    role: "Role : SDE",
    email: "Email :rupas092003@gmail.com",
    phno : " Mobile : 8897193242 ",
    img: "../../assets/ownerpic.png",
  },
  {
    id: 2,
    name: " Name : ",
    role: "Role : ",
    email: "Email :",
    phno : " Mobile : ",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 3,
    name: " Name : ",
    role: "Role : ",
    email: "Email : ",
    phno : " Mobile : ",
    img: "https://picsum.photos/104/104",
  },
  
];







export const Contact = () => {

  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };



  return (
    <div>
        <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200 ">
      <div className="h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z[8]"></div>
          
          <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                 
                   
          </div>


          <div className="py-10 mb-10">
      <div className="container">
        {/* header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
                <i><h1
                    data-aos="zoom-out"
                    data-aos-duration="500"
                    data-aos-once="true"
                    className="text-5xl sm:text-6xl lg:text-7xl font-bold"
                  >Contact us</h1></i>
         
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Head 
          </h1>
          <div data-aos="zoom-in">
                          
            <br/>                  
             <img src={OwnerPic} alt='Home-image'  className="max-w-[400px] h-[400px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover"/>
          
            </div>

          <br/>
          <p data-aos="fade-up" className="text-xs text-gray-400">
              Head of the department 
          </p>

          <div className='space-y-6 max-w-xl mx-auto  rounded-full'>
                   <p data-aos="fade-up" className="text-1xl !text-center sm:text-left sm:text-1xl font-semibold  ">
                    Name : Prasanna  <br/> Role : manager<br/> Contact : 7964196321 <br/> Email : Prasu@gmail.com
                    </p>
                  </div>
        </div>

        {/* Testimonial cards */}
        <div data-aos="zoom-in">
        <p data-aos="fade-up" className="text-5xl text-primary text-center font-bold">

This is our Team
</p>
          <Slider {...settings}>
            {TestimonialData.map((data) => (
              <div className="my-6">
                
                <div
                  key={data.id}
                  className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative"
                >
                  
                   <div data-aos="zoom-in">
                          
                          <br/>                  
                           <img src={OwnerPic} alt='Home-image'  className="max-w-[200px] h-[200px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover"/>
                        
                          </div>
                  <div className="mb-4">
                    {/* <img
                      src={data.img}
                      alt=""
                      className="rounded-full w-20 h-20"
                    /> */}
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <div className="space-y-3">
                      
                      <h1 className="text-xl font-bold text-black/80 dark:text-white">
                        {data.name}
                      </h1>
                      <p className="text-l text-black-700">{data.role}</p>
                      <p className="text-l text-black-700">{data.email}</p>
                      <p className="text-l text-black-700">{data.phno}</p>
                    </div>
                  </div>
                  <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                    
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>

      


      
      </div>
    </div>
  )
}
