import email from "./pattern/Email.js";
import telephone from "./pattern/Telephone.js";
import url from "./pattern/URL.js";
import currency from "./pattern/Currency.js";
import ip from "./pattern/IP.js";
import mac from "./pattern/Mac.js";
import letters from "./pattern/Letters.js";
import password from "./pattern/Password.js";
import fileExt from "./pattern/FileExtension.js";
import creditCard from "./pattern/CreditCard.js";
import htmlAttrs from "./pattern/HtmlAttributes";

import match from "./match";

export default {
  pattern: {
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
  },
  match,
};
