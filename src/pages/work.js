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
              title
              date
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
      <Head title="Work" />
      <title>bellmcp / about</title>
      <ol className={workStyles.works}>
        {data.allMarkdownRemark.edges.map((edge) => {
          return (
            <li className={workStyles.work}>
              <Link to={`/work/${edge.node.fields.slug}`}>
                <h2>{edge.node.frontmatter.title}</h2>
                <p>{edge.node.frontmatter.date}</p>
              </Link>
            </li>
          );
        })}
      </ol>
    </Layout>
  );
}
