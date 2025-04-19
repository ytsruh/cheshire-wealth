import React from "react";

interface FeatureCardProps {
  title: string;
  description: string;
  className?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, className = "" }) => (
  <div className={`bg-white shadow rounded-lg p-4 text-center ${className}`}>
    <h4 className="font-semibold text-gray-900 mb-1 text-lg">{title}</h4>
    <p className="text-gray-500 text-base">{description}</p>
  </div>
);

export default FeatureCard;
