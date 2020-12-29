import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import Head from "../components/head";
import "../styles/index.scss";

export default function IndexPage() {
  return (
    <Layout>
      <Head title="About" />
      <h2>About</h2>
      <h3>Education</h3>
      <ul>
        <li>
          2017 - Present | Expected: May 2021
          <br />
          <b>B.S. Computer Science</b>
          <br />
          <b>Chulalongkorn University</b> (Bangkok, Thailand)
        </li>
        <li>
          2010 - 2016
          <br />
          <b>Montfort College</b> (Chiang Mai, Thailand)
        </li>
      </ul>
      <h3>Work Experience</h3>
      <ul>
        <li>
          Jun - Jul 2020 | Internship
          <br />
          <b>Frontend Developer</b> at <a href="#">Wongnai Media Co., Ltd.</a>
        </li>
        <li>
          May 2019 - Present | Part-time
          <br />
          <b>Web Developer & Art Director</b> at{" "}
          <a href="#">Soscity Space Co., Ltd.</a>
        </li>
        <li>
          Oct 2017 - May 2019 | Freelance
          <br />
          <b>Graphic Designer</b>
        </li>
      </ul>
      <h3>Professional Activities</h3>
      <ul>
        <li>
          2019
          <br />
          <b>Head of Public Relations</b> at 20th CUCM Camp
          <br />
          <b>Head of Public Relations</b> at 25th CSCU Camp
        </li>
      </ul>
    </Layout>
  );
}
