import "./select-plan.css"
import arcade from "../../assets/images/icon-arcade.svg"
import advanced from "../../assets/images/icon-advanced.svg"
import pro from "../../assets/images/icon-pro.svg"
import toggleOff from "../../assets/images/toggleOff.svg"
import toggleOn from "../../assets/images/toggleOn.svg"
import { useContext, useState } from "react"
import { StepContext } from "../../context/stepContext"

export default function SelectPlan({addSelectPlan,initialRadio,initialTime}) {
    const [time, setTime] = useState(initialTime);
    const {prevStep, nextStep} = useContext(StepContext);
    const [inputRadio, setInputRadio] = useState(initialRadio);
    function handleOnSubmit(e){
        e.preventDefault();
        addSelectPlan(inputRadio,time)
        nextStep();
    }
    return (
        <section className="select-plan">
            <h1>Select your plan</h1>
            <p className="select-plan-description">You have the option of monthly or yearly billing.</p>
            <form className="select-plan-form" onSubmit={handleOnSubmit}>
                <div className="select-plan-form-radio">
                    <div className={(inputRadio=="Arcade")?"select-plan-option active":"select-plan-option"} onClick={()=> setInputRadio("Arcade")}>
                        <img src={arcade} alt="icono arcade" />
                        <label htmlFor="arcade">Arcade</label>
                        <span className="select-plan-price">{(time=="Monthly")?"$9/mo":"$90/yr"}</span>
                        {
                        time=="Yearly" &&
                        <p className="free-month">2 months free</p>
                        }
                        
                    </div>
                    <div className={(inputRadio=="Advanced")?"select-plan-option active":"select-plan-option"} onClick={()=> setInputRadio("Advanced")}>
                        <img src={advanced} alt="icono advanced" />
                        <label htmlFor="advanced">Advanced</label>
                        
                        <span className="select-plan-price">{(time=="Monthly")?"$12/mo":"$120/yr"}</span>
                        {
                        time=="Yearly" &&
                        <p className="free-month">2 months free</p>
                        }
                    </div>
                    <div className={(inputRadio=="Pro")?"select-plan-option active":"select-plan-option"} onClick={()=> setInputRadio("Pro")}>
                        <img src={pro} alt="icono pro" />
                        <label htmlFor="pro">Pro</label>
                        <span className="select-plan-price">{(time=="Monthly")?"$15/mo":"$150/yr"}</span>
                        {
                        time=="Yearly" &&
                        <p className="free-month">2 months free</p>
                        }
                    </div>
                </div>
                <div className="select-plan-time">
                    <span onClick={() => setTime("Monthly")} className={time=="Monthly" && "select-plan-time-option"}>Monthly</span>
                    {time=="Monthly"?
                    <img src={toggleOff} alt="" />:
                    <img src={toggleOn} alt="" />}
                    <span onClick={() => setTime("Yearly")} className={time=="Yearly" && "select-plan-time-option"}>Yearly</span>
                </div>
                <div>
                    <button className="btn-secondary" onClick={prevStep}>Go Back</button>
                    <button type="submit" className="btn">Next Step</button>
                </div>
            </form>
        </section>
    );
}