import React from "react";

import BlogSummaryCard from "@/components/BlogSummaryCard";

import { getBlogPostList } from "@/helpers/file-helpers";
import { BLOG_TITLE } from "@/constants";

import styles from "./homepage.module.css";

export const metadata = {
  title: BLOG_TITLE,
};

async function Home() {
  const blogPostList = await getBlogPostList();

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.mainHeading}>Latest Content:</h1>

      {blogPostList.map(({ slug, title, abstract, publishedOn }) => (
        <BlogSummaryCard
          key={slug}
          slug={slug}
          title={title}
          abstract={abstract}
          publishedOn={publishedOn}
        />
      ))}
    </div>
  );
}

export default Home;
