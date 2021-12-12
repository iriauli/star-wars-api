import React from "react";
import Header from "../Header/index";
import Footer from "../Footer/index";

import styles from "./Layout.module.scss";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.data}>{children}</div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
