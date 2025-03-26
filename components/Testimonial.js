"use client";
import { sliderProps } from "@/utility/sliderProps";
import Slider from "react-slick";
import Link from "next/link";

// TODO: Add testimonials from the json file
const testimonials = [
  {
    id: 1,
    name: "John Doe",
    company: "MiduDev",
    rating: 5,
    comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    link: "https://midu.dev/"
  },
  {
    id: 2,
    name: "Jane Smith",
    company: "Bridgestone",
    rating: 4, 
    comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    link: "https://www.cholovazquez.com.ar/"
  },
  {
    id: 3,
    name: "Jim Beam",
    company: "FreeCodeCamp",
    rating: 3,  
    comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    link: "https://www.freecodecamp.org/"
  }
];

const Testimonial = () => {
  return (
    <div className="client-feedback">
      <h2 className="main-common-title">Trusted By 12+ Clients</h2>
      <Slider
        {...sliderProps.testimonialSlider}
        className="row client-feedback-slider"
      >
        {testimonials.map((testimonial) => (
          <div className="feedback-item" key={testimonial.id}>
          <div className="feedback-top-info">
            <div className="rating">
              {Array.from({ length: testimonial.rating }, (_, index) => (
                <i key={index} className="fas fa-star" />
              ))}
            </div>
            <div className="website">
              <Link href={testimonial.link} target="_blank" rel="noopener noreferrer">
                {testimonial.company}
                <svg
                  className="arrow-up"
                  width={14}
                  height={15}
                  viewBox="0 0 14 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.91634 4.5835L4.08301 10.4168"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M4.66699 4.5835H9.91699V9.8335"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
          </div>
          <div className="details">
            <p>
              {testimonial.comment}
            </p>
          </div>
          <div className="designation">
            <p>
              <span>{testimonial.name}</span> - {testimonial.company}
            </p>
          </div>
        </div>
        ))}
      </Slider>
    </div>
  );
};
export default Testimonial;
