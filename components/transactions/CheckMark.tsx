"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

export function CheckMark() {
  return (
    <div className="bg-[#F5F5F7] rounded-2xl p-4 flex items-center justify-center min-h-[110px]">
      <div className="w-11 h-11 bg-[#1C1C1E] rounded-full flex items-center justify-center">
        <FontAwesomeIcon icon={faCheck} className="text-white text-lg" />
      </div>
    </div>
  );
}
