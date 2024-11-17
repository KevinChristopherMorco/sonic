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
    <footer className="shrink-0 bg-[#0E0E0E] text-white flex flex-col items-center gap-16 text-center px-4 py-8">
      <p className="text-3xl font-extrabold">Sonic</p>

      <ProductCategoryLink />

      <p className="font-light text-gray-300">
        Sonic is an all in one stop to fulfill your audio needs. We're a small
        team of music lovers and sound specialists who are devoted to helping
        you get the most out of personal audio. Come and visit our demo facility
        - we’re open 7 days a week.
      </p>
      <p className="text-gray-300 font-medium flex gap-1">
        <span className="flex gap-1 items-center">
          <RiCopyrightLine className="w-4 h-4" /> Copyright
        </span>
        {currentYear}. All Rights Reserved
      </p>
      <ul className="flex gap-5">
        <li>
          <RiFacebookBoxFill className="w-8 h-8" />
        </li>
        <li>
          <RiTwitterXFill className="w-8 h-8" />
        </li>
        <li>
          <RiInstagramFill className="w-8 h-8" />
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
