import React from "react";
import { Link } from "react-router";
import { Remark } from "react-remark";

interface InsightsCardProps {
  image: string;
  date: string;
  title: string;
  excerpt: string;
  link: string;
}

const InsightsCard: React.FC<InsightsCardProps> = ({
  image,
  date,
  title,
  excerpt,
  link,
}) => (
  <Link to={link}>
    <div className="flex flex-col p-2 rounded-md border border-transparent hover:border-teal-600">
      <img
        src={image}
        alt={title}
        className="rounded mb-4 w-full h-56 object-cover"
      />
      <span className="text-xs text-gray-500 mb-1">{date}</span>
      <div className="font-semibold text-lg text-gray-900 mb-1">{title}</div>
      <div className="text-base text-gray-700 prose">
        <Remark>{excerpt}</Remark>
      </div>
    </div>
  </Link>
);

export default InsightsCard;
