import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import Layout from "../components/layout";
import Head from "../components/head";

import workStyles from "./work.module.scss";

export default function WorkPage() {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              date
              title
              subtitle
              description
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <Head title="work" />
      <h2>Work</h2>
      <ol className={workStyles.works}>
        {data.allMarkdownRemark.edges.map((edge) => {
          return (
            <li className={workStyles.work}>
              <Link to={`/work/${edge.node.fields.slug}`}>
                <p>{edge.node.frontmatter.date}</p>
                <h3>{edge.node.frontmatter.title}</h3>
                <p>{edge.node.frontmatter.subtitle}</p>
                <hr />
                <p>{edge.node.frontmatter.description}</p>
              </Link>
            </li>
          );
        })}
      </ol>
    </Layout>
  );
}
