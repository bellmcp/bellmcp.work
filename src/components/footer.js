import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import footerStyles from "./footer.module.scss";

export default function Footer() {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `);

  return (
    <footer>
      <p className={footerStyles.footer}>
        Copyright © 2020 {data.site.siteMetadata.author}, All rights reserved.
      </p>
    </footer>
  );
}
