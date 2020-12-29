import React from "react";
import Header from "./header";
import Footer from "./footer";

export default function Layout(props) {
  return (
    <div class="container">
      <div class="row py-5">
        <Header />
        <div class="col-7" id="main">
          <section>{props.children}</section>
          <Footer />
        </div>
      </div>
    </div>
  );
}
