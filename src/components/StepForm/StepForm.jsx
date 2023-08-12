import { useContext, useState } from 'react';
import YourInfo from '../YourInfo/YourInfo'
import SelectPlan from '../SelectPlan/SelectPlan';
import './step-form.css'
import { StepContext } from '../../context/stepContext';
import PickAddons from '../PickAddons/PickAddons';
import Summary from '../Summary/Summary';
import { initialForm } from '../../constants/constants.js'
import Thanks from '../Thanks/Thanks'
export default function StepForm() {
    const [formData, setFormData] = useState(initialForm);
    function addPersonalInfo(name, email, phoneNumber) {
        setFormData({ ...formData, name: name, email: email, phoneNumber: phoneNumber });
    }
    function addSelectPlan(radio, time) {
        setFormData({ ...formData, radio: radio, time: time });
    }
    function addPickAddons(onlineService, largerStorage, customProfile) {
        setFormData({ ...formData, onlineService: onlineService, largerStorage: largerStorage, customProfile: customProfile })
    }
    const { step } = useContext(StepContext);
    return (
        <section className='step-form'>
            {step == 1 &&
                <YourInfo
                    addPersonalInfo={addPersonalInfo} />}
            {step == 2 &&
                <SelectPlan
                    initialRadio={formData.radio}
                    initialTime={formData.time}
                    addSelectPlan={addSelectPlan} />}
            {step == 3 &&
                <PickAddons
                    time={formData.time}
                    onlineInput={formData.onlineService}
                    largerInput={formData.largerStorage}
                    customInput={formData.customProfile}
                    addPickAddons={addPickAddons} />}
            {step == 4 &&
                <Summary
                    data={formData} />}
            {step == 5 &&
             <Thanks/>}
        </section>

    );
}