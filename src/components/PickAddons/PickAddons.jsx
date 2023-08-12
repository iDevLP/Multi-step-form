import { useContext, useId, useState } from 'react';
import './pick-addons.css'
import { StepContext } from '../../context/stepContext';
export default function PickAddons({ time, addPickAddons ,onlineInput, largerInput, customInput }) {
    const { nextStep, prevStep } = useContext(StepContext)
    const [check, setCheck] = useState({
        onlineService: onlineInput,
        largerStorage: largerInput,
        customProfile: customInput
    })
    const onlineService = useId();
    const largerStorage = useId();
    const customProfile = useId();

    function handleOnSubmit(e) {
        e.preventDefault();
        addPickAddons(check.onlineService, check.largerStorage, check.customProfile);
        nextStep();
    }

    return (
        <section className="pick-addons">
            <h1>Pick Add-ons</h1>
            <p>Add-ons help enhance your gaming experience.</p>
            <form className='pick-addons-form' onSubmit={handleOnSubmit}>
                <div className={check.onlineService ? 'pick-addons-checkbox active' : 'pick-addons-checkbox'}>
                    <div className='pick-addons-option'>
                        <input checked={check.onlineService} className='checkbox' type="checkbox" id={onlineService} name='onlineService'  onChange={() => setCheck({ ...check, onlineService: !check.onlineService })} />
                        <div className='pick-addons-checkbox-text'>
                            <label htmlFor={onlineService}>Online service</label>
                            <span>Access to multiplayer games</span>
                        </div>
                    </div>
                    <div>
                        <span className='spanMoney'>{(time == "Monthly") ? "+$1/mo" : "+$10/yr"}</span>
                    </div>
                </div>
                <div className={check.largerStorage ? 'pick-addons-checkbox active' : 'pick-addons-checkbox'}>
                    <div className='pick-addons-option'>
                        <input checked={check.largerStorage} className='checkbox' type="checkbox" id={largerStorage} name='largerStorage' onChange={() => setCheck({ ...check, largerStorage: !check.largerStorage })} />
                        <div className='pick-addons-checkbox-text'>
                            <label htmlFor={largerStorage}>Larger storage</label>
                            <span>Extra 1TB of cloud save</span>
                        </div>
                    </div>
                    <div>
                        <span className='spanMoney'>{(time == "Monthly") ? "+$2/mo" : "+$20/yr"}</span>
                    </div>
                </div>
                <div className={check.customProfile ? 'pick-addons-checkbox active' : 'pick-addons-checkbox'}>
                    <div className='pick-addons-option'>
                        <input checked={check.customProfile} className='checkbox' type="checkbox" id={customProfile} name='customProfile' onChange={() => setCheck({ ...check, customProfile: !check.customProfile })} />
                        <div className='pick-addons-checkbox-text'>
                            <label htmlFor={customProfile}>Customizable profile</label>
                            <span>Custom theme on your profile</span>
                        </div>
                    </div>
                    <div>
                        <span className='spanMoney'>{(time == "Monthly") ? "+$2/mo" : "+$20/yr"}</span>
                    </div>
                </div>
                <div>
                    <button className="btn-secondary" onClick={prevStep}>Go Back</button>
                    <button className="btn" type='submit'>Next Step</button>
                </div>
            </form>
        </section>
    );
}