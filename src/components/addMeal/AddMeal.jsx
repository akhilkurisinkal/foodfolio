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

    const saveMeal = () => {
        switch (appData.selectedMealType) {
            case "Breakfast":
                appData.setPlan({ ...appData.plan, breakfast: meal });
                break;
            case "Morning Snacks":
                appData.setPlan({ ...appData.plan, morningSnacks: meal });
                break;
            case "lunch":
                appData.setPlan({ ...appData.plan, lunch: meal });
                break;
            case "eveningSnacks":
                appData.setPlan({ ...appData.plan, eveningSnacks: meal });
                break;
            case "dinner":
                appData.setPlan({ ...appData.plan, dinner: meal });
            default:
                console.log("invalid meal type selected");
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
