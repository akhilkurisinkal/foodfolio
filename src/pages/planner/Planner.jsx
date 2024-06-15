import React, { useState } from "react";
import styles from "./Planner.module.css";
import PlannerChild from "../../components/plannerChild/PlannerChild";

const Planner = () => {
    const [foodItem, setFoodItem] = useState({ fname: "", fcal: "" });

    const handleChangeFname = (event) => {
        setFoodItem({ ...foodItem, fname: event.target.value });
        console.log(foodItem.fname);
    };

    return (
        <div className={styles.planner}>
            <h3>Create meal plan</h3>

            <PlannerChild title="Breakfast" calories="390" />
            <PlannerChild title="Morning snacks" calories="200" />
            <PlannerChild title="Lunch" calories="550" />
            <PlannerChild title="Evening snacks" calories="200" />
            <PlannerChild title="Dinner" calories="680" />

            <div>
                this is a popup for adding food Items to create a meal
                <h4>Add food</h4>
                <label htmlFor="foodItemName">Name</label>
                <input
                    type="text"
                    name="foodItemName"
                    id="foodItemName"
                    value={foodItem.fname}
                    onChange={handleChangeFname}
                />
                <br />
                <label htmlFor="cal">Calories</label>
                <input type="text" name="cal" id="cal" />
                <br />
                <button>Add meal</button>
            </div>
        </div>
    );
};

export default Planner;
