import React from "react";
import styles from "./Footer.module.scss";
import { VscGithubAlt } from "react-icons/vsc";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <span>
          <a href="https://github.com/iriauli/">
            <VscGithubAlt />
          </a>
        </span>
      </div>
    </div>
  );
};

export default Footer;
