import React, { useContext, useEffect, useState } from "react";
import styles from "./Planner.module.css";
import PlannerChild from "../../components/plannerChild/PlannerChild";
import { AppContext } from "../../AppContext";
import AddMeal from "../../components/addMeal/AddMeal";

const Planner = () => {
    const appData = useContext(AppContext);
    const [dayPlan, setDayPlan] = useState([
        {
            mealType: "Breakfast",
            mealItems: [
                { name: "Oatmeal", calories: "355" },
                { name: "Banana Shake with Whey protein", calories: "150" },
            ],
        },
        {
            mealType: "Morning Snacks",
            mealItems: [{ name: "Apple slices", calories: "355" }],
        },
        {
            mealType: "Lunch",
            mealItems: [],
        },
    ]);

    const addFoodToMeal = (event) => {
        console.log(event.currentTarget.id + " testing button id");
        appData.setAddMealActive(true);
        appData.setSelectedMealType(event.currentTarget.id);
    };

    return (
        <div className={styles.planner}>
            <h2>Create meal plan</h2>

            <div className={styles.mealsContainer}>
                {dayPlan.map((meal, mealIndex) => (
                    <div key={mealIndex}>
                        <div className={styles.mealTypeHeader}>
                            <h3>{meal.mealType}</h3>
                            <span>771 Calories</span>
                        </div>

                        {meal.mealItems.map((item, itemIndex) => (
                            <PlannerChild
                                key={mealIndex}
                                title={meal.mealType}
                                name={item.name}
                                calories={item.calories}
                                mealType={meal.mealType}
                            />
                        ))}
                        <div className={styles.addBtnContainer}>
                            <button
                                id={meal.mealType}
                                className={styles.addFoodBtn}
                                onClick={addFoodToMeal}
                            >
                                <span className={styles.addIcon}>&nbsp;</span>
                                <span>Add food</span>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Planner;
