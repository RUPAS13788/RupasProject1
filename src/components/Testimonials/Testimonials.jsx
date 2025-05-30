import React from "react";
import Slider from "react-slick";

const TestimonialData = [
  {
    id: 1,
    name: "-Rupas",
    text: "✅Fast, friendly, and flawless!' I needed urgent prints for a presentation and these guys delivered within the hour — no fuss, no errors. The quality was fantastic and the service was even better ⭐️⭐️⭐️⭐️⭐️",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 2,
    name: "-Maghana",
    text: "✅Fast, affordable, and top-quality! I always come here for my printing needs, whether it's office documents or personal photo prints. Highly recommended!⭐️⭐️⭐️⭐️",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 3,
    name: "-Prasanna",
    text: "✅Best print shop in town! The prices are pocket-friendly, and the quality is just elite. My college projects have never looked better!⭐️⭐️⭐️⭐️",
    img: "https://picsum.photos/104/104",
  },
  {
    id: 5,
    name: "-Ramesh",
    text: "✅Excellent service and super helpful staff. The prints were sharp and vibrant. Plus, they delivered on time. Will definitely come back!⭐️⭐️⭐️⭐️",
    img: "https://picsum.photos/103/103",
  },
];

const Testimonials = () => {
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
    <div className="py-10 mb-10">
      <div className="container">
        {/* header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">
            What our customers are saying
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Testimonials
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
          We don’t just print — we pour love into every page.
          </p>
        </div>

        {/* Testimonial cards */}
        <div data-aos="zoom-in">
          <Slider {...settings}>
            {TestimonialData.map((data) => (
              <div className="my-6">
                <div
                  key={data.id}
                  className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative"
                >
                  <div className="mb-4">
                    <img
                      src={data.img}
                      alt=""
                      className="rounded-full w-20 h-20"
                    />
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <div className="space-y-3">
                      <p className="text-xs text-gray-500">{data.text}</p>
                      <h1 className="text-xl font-bold text-black/80 dark:text-white">
                        {data.name}
                      </h1>
                    </div>
                  </div>
                  <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                    ,,
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
