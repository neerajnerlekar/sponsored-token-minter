"use client";

import React from "react";
import { NavEnd } from "./NavEnd";
import { NavStart } from "./NavStart";

export const Header = () => {
  return (
    <div className="sticky lg:static top-0 navbar bg-base-100 min-h-0 flex-shrink-0 justify-between z-20 shadow-md shadow-secondary px-0 sm:px-2">
      <NavStart />
      <NavEnd />
    </div>
  );
};
