import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";

import headerStyles from "./header.module.scss";
import hero from "../images/hero.jpg";

export default function Header() {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <div class="col-2" id="sticky-sidebar">
        <div class="sticky-top">
          <ul className={headerStyles.navList}>
            <li>
              <Link
                className={headerStyles.navItem}
                activeClassName={headerStyles.activeNavItem}
                to="/"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className={headerStyles.navItem}
                activeClassName={headerStyles.activeNavItem}
                to="/work"
              >
                Work
              </Link>
            </li>
            <li>
              <Link
                className={headerStyles.navItem}
                activeClassName={headerStyles.activeNavItem}
                to="/project"
              >
                Project
              </Link>
            </li>
            <li>
              <Link
                className={headerStyles.navItem}
                activeClassName={headerStyles.activeNavItem}
                to="/service"
              >
                Service
              </Link>
            </li>
            <li>
              <Link
                className={headerStyles.navItem}
                activeClassName={headerStyles.activeNavItem}
                to="/other"
              >
                Other
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div class="col-3" id="sticky-sidebar">
        <div class="sticky-top">
          <img
            className={headerStyles.heroImage}
            src={hero}
            alt="Wutipat Khamnuansin"
          />
          <h2>{data.site.siteMetadata.title}</h2>
          <p>
            montfort 56
            <br />
            comsci 25
            <br />
            chulalongkorn 101
          </p>
          <hr />
          <h3>Contact</h3>
          <p>wutipat.k@gmail.com</p>
          <p>
            LINE : <a href="#">bellmcp</a>
            <br />
            GitHub : <a href="#">bellmcp</a>
            <br />
            LinkedIn : <a href="#">bellmcp</a>
            <br />
          </p>
          <button type="button" class="btn btn-outline-dark">
            <b>Download Resume</b>
          </button>
        </div>
      </div>
    </>
  );
}
