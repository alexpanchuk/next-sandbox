import React from "react";
import NextHead from "next/head";
import { string } from "prop-types";

type Props = {
  title?: string;
  description?: string;
  url?: string;
  ogImage?: string;
};
const defaultTitle = "";
const defaultDescription = "";
const defaultOGURL = "";
const defaultOGImage = "";

const Head: React.FC<Props> = ({
  title = defaultTitle,
  description = defaultDescription,
  url = defaultOGURL,
  ogImage = defaultOGImage
}) => (
  <NextHead>
    <meta charSet="UTF-8" />
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/favicon.ico" />
    <meta property="og:url" content={url} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta name="twitter:site" content={url} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:image" content={ogImage} />
    <meta property="og:image" content={ogImage} />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
  </NextHead>
);

export default Head;
