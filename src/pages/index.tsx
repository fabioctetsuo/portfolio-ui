import * as React from "react";
import Layout from "../components/Layout";
import SEO from "../components/seo";

// markup
const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Homepage" />
      <main>
        <title>Home Page</title>
        <h1>homepage</h1>
      </main>
    </Layout>
  );
};

export default IndexPage;
