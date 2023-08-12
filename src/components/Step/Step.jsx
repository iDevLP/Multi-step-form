import './step.css'
export default function Step({stepNumber,stepTitle, isActive}){
    const step = `STEP ${stepNumber}`;
    return (
        <article className="step">
            <div className={isActive?"step-active":"step-number"}>
                <span>{stepNumber}</span>
            </div>
            <div className="step-text">
                <span>{step}</span>
                <h6>{stepTitle}</h6>
            </div> 
        </article>
    );
}