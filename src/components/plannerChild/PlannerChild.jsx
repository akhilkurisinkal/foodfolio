import React, { useEffect } from "react";
import styles from "./PlannerChild.module.css";
import { useContext } from "react";
import { AppContext } from "../../AppContext";

const PlannerChild = (props) => {
    const appData = useContext(AppContext);

    const addMeal = () => {
        appData.setSelectedMealType(props.mealType);
        appData.setAddMealActive(true);
    };

    return (
        <div className={styles.container}>
            <div>
                <div>{props.name}</div>
                <div>{props.calories} Cal</div>
                <div>
                    <button className={styles.optionsBtn}>&nbsp;</button>
                </div>
            </div>
        </div>
    );
};

export default PlannerChild;
