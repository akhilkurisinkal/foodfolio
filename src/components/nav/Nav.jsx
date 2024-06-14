import React from "react";
import styles from "./Nav.module.css";

const Nav=()=>{
    return(
        <div className={styles.nav}>
                <div>Planner</div>
                <div>Search</div>
                <div>Insights</div>
                <div>Profile</div>
        </div>
    )
}

export default Nav;