import email from "./pattern/Email";
import telephone from "./pattern/Telephone";
import url from "./pattern/URL";
import currency from "./pattern/Currency";
import ip from "./pattern/IP";
import mac from "./pattern/Mac";
import letters from "./pattern/Letters";
import password from "./pattern/Password";
import fileExt from "./pattern/FileExtension";
import creditCard from "./pattern/CreditCard";
import htmlAttrs from "./pattern/HtmlAttributes";
import qs from "./pattern/QS";
import digit from "./pattern/Digit";
import hex from "./pattern/Hex";
import rgba from "./pattern/Rgba";
import p3 from "./pattern/P3";

import Match from "./match";

export const match = Match;
export const pattern = {
  email,
  telephone,
  url,
  currency,
  htmlAttrs,
  ip,
  mac,
  letters,
  password,
  fileExt,
  creditCard,
  qs,
  digit,
  hex,
  rgba,
  p3,
};

export default {
  pattern,
  match,
};
