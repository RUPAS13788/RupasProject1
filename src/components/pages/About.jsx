import React from 'react'
import PamPlate from '../../assets/pamplate.jpg';

export const About = () => {
  return (
    <div>
        <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200 ">
      <div className="h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z[8]"></div>
          
          <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                  <i><h1
                    data-aos="zoom-out" 
                    data-aos-duration="500"
                    data-aos-once="true"
                    className="text-5xl sm:text-6xl lg:text-7xl font-bold"
                  >About</h1></i>


                    <div data-aos="zoom-in">
                      
                      <br/>                  
                    <img src={PamPlate} alt='Home-image'  className="max-w-[900px] h-[550px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover"/>

                    </div>  
                              {/* <p
                                data-aos="fade-up"
                                data-aos-duration="500"
                                data-aos-delay="100"
                                className="text-sm"
                              >qwertyuiojhgfdsdxc bvcdfghbcxdfghvxrdcfg hdxfc ufyvbu gfub herrihienffkenilhernk nicghin ckehieken kggheihn</p> */}
                      </div>


      


      
      </div>
    </div>
  )
}
