import React from "react";
import Button from "./Button";

interface PricingPlanCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  featured?: boolean;
}

const PricingPlanCard: React.FC<PricingPlanCardProps> = ({ title, price, description, features, featured = false }) => (
  <div className={`rounded-lg border ${featured ? 'border-indigo-600 shadow-lg' : 'border-gray-200'} bg-white p-6 flex flex-col items-center text-center`}>  
    <div className="text-xl font-semibold text-gray-900 mb-2">{title}</div>
    <div className="text-4xl font-bold text-indigo-600 mb-3">{price}</div>
    <div className="text-gray-500 mb-6 text-base">{description}</div>
    <ul className="mb-6 space-y-2 text-gray-700 text-base">
      {features.map((f, i) => <li key={i}>{f}</li>)}
    </ul>
    <Button variant={featured ? "primary" : "secondary"}>Start Trial</Button>
  </div>
);

export default PricingPlanCard;
