import React from "react";
import { HomepageLeft } from "./HomepageLeft";
import { HomepageMid } from "./HomepageMid";
import { HomepageRight } from "./HomepageRight";
import styles from "../../styles/Homepage.module.css"

export const Homepage = ():JSX.Element => {
    return <div className={styles.homepage_cont}>
        <HomepageLeft/>
        <HomepageMid/>
        <HomepageRight/>
    </div>
}