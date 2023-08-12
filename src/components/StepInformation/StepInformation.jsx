import { useContext } from "react";
import Step from "../Step/Step";
import "./step-information.css";
import { StepContext } from "../../context/stepContext";

export default function StepInformation(){
    const {step} = useContext(StepContext);
    return (
        <section className="step-information">
            <Step isActive={step == 1} stepNumber={1} stepTitle={"your info"} />
            <Step isActive={step == 2} stepNumber={2} stepTitle={"select plan"} />
            <Step isActive={step == 3} stepNumber={3} stepTitle={"add-ons"} />
            <Step isActive={step == 4} stepNumber={4} stepTitle={"summary"} />
        </section>
    );
}