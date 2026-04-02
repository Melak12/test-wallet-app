"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faApple,
  faAmazon,
} from "@fortawesome/free-brands-svg-icons";
import {
  faCreditCard,
  faCouch,
  faBullseye,
  faWifi,
  faBox,
  faMugHot,
  faStore,
} from "@fortawesome/free-solid-svg-icons";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface TransactionIconProps {
  icon: string;
  iconBg: string;
  name: string;
}

const iconMap: Record<string, IconDefinition> = {
  apple: faApple,
  "credit-card": faCreditCard,
  couch: faCouch,
  bullseye: faBullseye,
  wifi: faWifi,
  box: faBox,
  "mug-hot": faMugHot,
  amazon: faAmazon,
  store: faStore,
};

export function TransactionIcon({ icon, iconBg, name }: TransactionIconProps) {
  const iconDef = iconMap[icon] || faStore;
  
  // Special handling for known brand logos that should use actual images
  if (name === "IKEA") {
    return (
      <div 
        className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-xs"
        style={{ backgroundColor: iconBg }}
      >
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none">
          <rect x="2" y="6" width="20" height="12" fill="#FFDA1A" rx="1" />
          <text x="12" y="14" textAnchor="middle" fill="#0051BA" fontSize="6" fontWeight="bold">IKEA</text>
        </svg>
      </div>
    );
  }
  
  if (name === "Target") {
    return (
      <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-white border border-gray-100">
        <svg viewBox="0 0 24 24" className="w-7 h-7">
          <circle cx="12" cy="12" r="10" fill="#CC0000" />
          <circle cx="12" cy="12" r="7" fill="white" />
          <circle cx="12" cy="12" r="4" fill="#CC0000" />
        </svg>
      </div>
    );
  }
  
  return (
    <div 
      className="w-10 h-10 rounded-xl flex items-center justify-center"
      style={{ backgroundColor: iconBg }}
    >
      <FontAwesomeIcon icon={iconDef} className="text-white text-lg" />
    </div>
  );
}
