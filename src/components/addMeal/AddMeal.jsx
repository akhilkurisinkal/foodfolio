import React, { useEffect, useState } from "react";
import styles from "./AddMeal.module.css";
import { useContext } from "react";
import { AppContext } from "../../AppContext";

const AddMeal = () => {
    const appData = useContext(AppContext);

    const [meal, setMeal] = useState({ mname: "", mcal: "" });
    const setMealName = (e) => {
        setMeal({ ...meal, mname: e.target.value });
    };
    const setMealCal = (e) => {
        setMeal({ ...meal, mcal: e.target.value });
    };

    //test
    useEffect(() => {
        console.log(meal);
    }, [meal]);

    const addMealItem = (mealIndex, newItem) => {
        appData.setDayPlan((prevDayPlan) => {
            const updatedDayPlan = [...prevDayPlan];

            // Check if the mealIndex is valid
            if (mealIndex >= 0 && mealIndex < updatedDayPlan.length) {
                // Add the new item to the mealItems array of the specified meal
                updatedDayPlan[mealIndex].mealItems.push(newItem);
            } else {
                console.warn(`Invalid meal index: ${mealIndex}`);
            }

            return updatedDayPlan;
        });
    };

    const saveMeal = () => {
        switch (appData.selectedMealType) {
            case "Breakfast":
                addMealItem(0, meal);
                console.log(appData.dayPlan);
                break;
            case "Morning Snacks":
                addMealItem(1, meal);
                console.log(appData.dayPlan);
                break;
            case "Lunch":
                addMealItem(2, meal);
                console.log(appData.dayPlan);
                break;
            case "Evening Snacks":
                addMealItem(3, meal);
                console.log(appData.dayPlan);
                break;
            case "Dinner":
                addMealItem(4, meal);
                console.log(appData.dayPlan);
            default:
                console.log("Invalid meal type selected");
        }
        setMeal({ mname: "", mcal: "" });
        appData.setSelectedMealType("none");
        appData.setAddMealActive(false);
    };

    //test
    useEffect(() => {
        console.log(appData.plan);
    }, [appData.plan]);

    return (
        <div
            className={
                appData.addMealActive
                    ? `${styles.active} ${styles.pop}`
                    : `${styles.inactive}`
            }
        >
            <div className={styles.header}>
                <span>
                    <h4>Add food</h4>
                </span>
                <span>close</span>
            </div>

            <input
                className={styles.inputText}
                type="text"
                name="mealName"
                id="mealName"
                value={meal.mname}
                onChange={setMealName}
                placeholder="Name"
            />

            <input
                className={styles.inputText}
                type="text"
                name="cal"
                id="cal"
                value={meal.mcal}
                onChange={setMealCal}
                placeholder="Calories"
            />

            <button className={styles.addButton} onClick={saveMeal}>
                Add Meal
            </button>
        </div>
    );
};

export default AddMeal;
