import { useState, useCallback, useEffect } from "react";
import React from "react-dom";
import { useNavigate } from "react-router-dom";
import classes from "./Plan.module.css";
import { API } from "../../../constants";
import Input from "../../../components/Input/Input";
import Button from "../../../components/Button/Button";

export default function Plan({ onChange }) {
  const [plans, setPlans] = useState([]);
  const navigate = useNavigate();

  const getApiData = useCallback(async () => {
    try {
      const result = await fetch(API.plans, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const apiData = await result.json();
      setPlans(apiData);
    } catch (error) {
      throw new Error(error);
    }
  }, []);

  useEffect(() => {
    getApiData();
  }, [getApiData]);

  return (
    <form>
      <div className={classes.inputContainer}>
        {plans &&
          plans.map((plan) => {
            return (
              <div className={classes.planContainer}>
                <p>{plan.title}</p>
                <p>Monthly cost: {plan.monthlyCost}</p>
                <p>Total cost: {plan.totalCost}</p>
                <Input
                  key={plan.id}
                  // label={plan.title}
                  type="radio"
                  name="plan"
                  onChange={onChange}
                  id="isChecked"
                  value={plan.id}
                />
              </div>
            );
          })}
      </div>
      <Button size="big" onClick={() => navigate("/subscribe/payment")}>
        Continue
      </Button>
    </form>
  );
}
