import React from "react";

interface TestimonialCardProps {
  name: string;
  role: string;
  image: string;
  testimonial: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, role, image, testimonial }) => (
  <div className="flex flex-col items-center text-center">
    <img src={image} alt={name} className="w-12 h-12 rounded-full object-cover mb-2" />
    <p className="text-gray-600 text-base mb-2">“{testimonial}”</p>
    <div className="text-sm text-gray-900 font-semibold">{name}</div>
    <div className="text-sm text-gray-500">{role}</div>
  </div>
);

export default TestimonialCard;
