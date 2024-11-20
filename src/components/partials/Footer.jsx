import {
  RiCopyrightLine,
  RiFacebookBoxFill,
  RiInstagramFill,
  RiTwitterXFill,
} from "@remixicon/react";
import React from "react";
import { Link } from "react-router-dom";

import getDate from "../../helpers/time/getDate";
import ProductCategoryLink from "../shared/links/ProductCategoryLink";

const Footer = () => {
  const { currentYear } = getDate();
  return (
    <footer className="flex shrink-0 flex-col items-center gap-16 bg-[#0E0E0E] px-4 py-8 text-center text-white md:p-12 lg:grid lg:grid-cols-2 xl:p-20">
      <div className="flex w-full flex-col items-center gap-16 lg:col-span-2 lg:row-start-1 lg:flex-row lg:justify-between">
        <p className="text-3xl font-extrabold xl:text-4xl">Sonic</p>

        <ProductCategoryLink />
      </div>
      <p className="font-light text-gray-400 lg:col-start-1 lg:row-start-2 lg:text-start">
        Sonic is an all in one stop to fulfill your audio needs. We're a small
        team of music lovers and sound specialists who are devoted to helping
        you get the most out of personal audio. Come and visit our demo facility
        - we’re open 7 days a week.
      </p>
      <p className="flex gap-1 font-medium text-gray-400 lg:col-start-1 lg:row-start-3">
        <span className="flex items-center gap-1">
          <RiCopyrightLine className="h-4 w-4" /> Copyright
        </span>
        {currentYear}. All Rights Reserved
      </p>
      <ul className="flex gap-5 lg:justify-self-end">
        <li>
          <RiFacebookBoxFill className="h-8 w-8" />
        </li>
        <li>
          <RiTwitterXFill className="h-8 w-8" />
        </li>
        <li>
          <RiInstagramFill className="h-8 w-8" />
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
