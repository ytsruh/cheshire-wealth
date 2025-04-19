import React from "react";

interface InsightsCardProps {
  image: string;
  date: string;
  title: string;
  excerpt: string;
}

const InsightsCard: React.FC<InsightsCardProps> = ({ image, date, title, excerpt }) => (
  <div className="flex flex-col">
    <img src={image} alt={title} className="rounded mb-4 w-full h-56 object-cover" />
    <span className="text-xs text-gray-500 mb-1">{date}</span>
    <div className="font-semibold text-lg text-gray-900 mb-1">{title}</div>
    <div className="text-base text-gray-700">{excerpt}</div>
  </div>
);

export default InsightsCard;
