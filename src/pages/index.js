import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import Head from "../components/head";
import "../styles/index.scss";

export default function IndexPage() {
  return (
    <Layout>
      <Head title="About" />
      <h1>Hello.</h1>
      <h2>
        I'm Wutipat, a computer science student living in Bangkok, Thailand.
      </h2>
      <p>
        Need a developer? <Link to="/hiring">Contact me.</Link>
      </p>
    </Layout>
  );
}
