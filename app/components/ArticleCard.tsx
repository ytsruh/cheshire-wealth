import React from "react";

interface ArticleCardProps {
  title: string;
  image: string;
  excerpt: string;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ title, image, excerpt }) => (
  <div className="bg-white rounded-lg shadow p-3 flex flex-col">
    <img src={image} alt={title} className="rounded mb-2 w-full h-32 object-cover" />
    <div className="font-semibold text-gray-900 text-base mb-2">{title}</div>
    <div className="text-base text-gray-500">{excerpt}</div>
  </div>
);

export default ArticleCard;
