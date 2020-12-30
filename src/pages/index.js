import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import Head from "../components/head";
import "../styles/index.scss";

export default function IndexPage() {
  return (
    <Layout>
      <Head title="about" />
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
          <b>Head of Public Relations</b> at 20<sup>th</sup> CUCM Camp
          <br />
          <b>Head of Public Relations</b> at 25<sup>th</sup> CSCU Camp
        </li>
        <li>
          2018
          <br />
          <b>Graphic Designer</b> at SCIREN Club
          <br />
          <b>Head of Public Relations</b> at 23<sup>rd</sup> Baanlaijai
        </li>
        <li>
          2017
          <br />
          <b>Public Relations</b> at CU Band
          <br />
          <b>Public Relations</b> at 23<sup>rd</sup> CU Student Council
        </li>
      </ul>
      <h3>Skills</h3>

      <table class="table">
        <tbody>
          <tr>
            <td width="25%">
              <b>Languages</b>
            </td>
            <td>HTML, (S)CSS, JavaScript, TypeScript, Python, Java, SQL</td>
          </tr>
          <tr>
            <td>
              <b>Frameworks</b>
            </td>
            <td>ReactJS, React Native, NodeJS, Express, Jest</td>
          </tr>
          <tr>
            <td>
              <b>Tools</b>
            </td>
            <td>Git, MongoDB, Firebase, WordPress</td>
          </tr>
          <tr>
            <td>
              <b>UX/UI Design</b>
            </td>
            <td>XD, Sketch, Figma</td>
          </tr>
          <tr>
            <td>
              <b>Graphic Design</b>
            </td>
            <td>Photoshop, Illustrator, InDesign</td>
          </tr>
          <tr>
            <td>
              <b>Media Production</b>
            </td>
            <td>Premiere Pro, Animate</td>
          </tr>
        </tbody>
      </table>
    </Layout>
  );
}
