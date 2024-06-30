import React, { createContext, useState } from "react";
export const AppContext = createContext();
export const AppProvider = (props) => {
    const [selectedMealType, setSelectedMealType] = useState("break");
    const [addMealActive, setAddMealActive] = useState(false);
    const [dayPlan, setDayPlan] = useState([
        {
            mealType: "Breakfast",
            mealItems: [],
        },
        {
            mealType: "Morning Snacks",
            mealItems: [],
        },
        {
            mealType: "Lunch",
            mealItems: [],
        },
        {
            mealType: "Evening Snacks",
            mealItems: [],
        },
        {
            mealType: "Dinner",
            mealItems: [],
        },
    ]);

    const [testDayPlan, setTestDayPlan] = useState([
        {
            mealType: "Breakfast",
            mealItems: [
                { name: "Oatmeal with berries", calories: "250" },
                { name: "Scrambled eggs with spinach", calories: "180" },
            ],
        },
        {
            mealType: "Morning Snacks",
            mealItems: [{ name: "Greek yogurt with granola", calories: "150" }],
        },
        {
            mealType: "Lunch",
            mealItems: [
                {
                    name: "Chicken salad sandwich on whole wheat bread",
                    calories: "300",
                },
                {
                    name: "Tuna salad on whole wheat crackers",
                    calories: "250",
                },
                {
                    name: "Black bean soup with a side salad",
                    calories: "280",
                },
            ],
        },
        {
            mealType: "Evening Snacks",
            mealItems: [{ name: "Carrot sticks with hummus", calories: "100" }],
        },
        {
            mealType: "Dinner",
            mealItems: [
                { name: "Salmon with roasted vegetables", calories: "400" },
                { name: "Chicken stir-fry with brown rice", calories: "350" },
            ],
        },
    ]);
    return (
        <AppContext.Provider
            value={{
                selectedMealType,
                setSelectedMealType,
                addMealActive,
                setAddMealActive,
                dayPlan,
                setDayPlan,
            }}
        >
            {props.children}
        </AppContext.Provider>
    );
};
