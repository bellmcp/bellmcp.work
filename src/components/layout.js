import React from "react";
import Header from "./header";
import Footer from "./footer";

import layoutStyles from "./layout.module.scss";

export default function Layout(props) {
  return (
    <div className={layoutStyles.container}>
      <div className="container">
        <div className="row">
          <Header />
          <div className="col-7" id="main">
            <section>{props.children}</section>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
