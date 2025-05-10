import React from 'react'
import Homeimage from '../../assets/homeimage.jpg';
import Banner from "../../assets/website/orange-pattern.jpg";


const BannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

export const Home = () => {
  return (

    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200 ">
    <div className="h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z[8]"></div>
      
    <div className='container'>
    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200 ">
      <div className="h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z[8]"></div>
          
          <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">

          <i><h1
                      data-aos="zoom-out"
                      data-aos-duration="500"
                      data-aos-once="true"
                      className="text-5xl sm:text-6xl lg:text-7xl font-bold "
                    >Home page</h1></i>

                  <div data-aos="zoom-in">
                
                    <br/>                  
                  <img src={Homeimage} alt='Home-image'  className="max-w-[750px] h-[550px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover"/>

                  </div>  
                  <div className='flex flex-col justify-center gap-6 sm:pt-0'>
                  <h1
                    data-aos="zoom-out"
                    data-aos-duration="500"
                    data-aos-once="true"
                    className="text-5xl sm:text-6xl lg:text-7xl font-bold  " 
                  >Sree Surya Satya Durga Printers</h1>
                  <br/>
                 </div>
                 <div
                        data-aos="zoom-in"
                        className="mb-20 bg-gray-100 dark:bg-gray-800 text-white rounded-full w-20 h-20 "
                        style={BannerImg}
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
          </div>
                
          </div>
      </div>
      
      </div>
      
    </div>
    )
}
