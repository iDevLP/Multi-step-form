import { createContext , useState} from "react";

export const StepContext = createContext();

export default function StepProvider({ children }) {
    const [step, setStep] = useState(1);
    function nextStep() {
        const next = step + 1;
        setStep(next)
    }
    function prevStep() {
        const prev = step - 1;
        setStep(prev)
    }

    return (
        <StepContext.Provider
            value={
                {
                    step,
                    nextStep,
                    prevStep
                }
            }>
            {children}
        </StepContext.Provider>
    );

}
