import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import footerStyles from "./footer.module.scss";

export default function Footer() {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          name
        }
      }
    }
  `);

  return (
    <footer>
      <p className={footerStyles.footer}>
        Copyright © 2020 {data.site.siteMetadata.name}, All rights reserved.
      </p>
    </footer>
  );
}
