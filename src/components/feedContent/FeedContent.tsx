import React from "react";
import styles from "./FeedContent.module.css";
import { useGetAllFishPost } from "../../api/fishPost/useGetAllFishPost";

export const FeedContent = () => {
  console.log(useGetAllFishPost());

  return <div className={styles.posts}>feedContent</div>;
};
