import { useContext, useState } from 'react';
import { StepContext } from "../../context/stepContext"
import './summary.css'
import { price } from '../../constants/constants.js'
export default function Summary({ data }) {
    const [time, setTime] = useState(data.time)
    const { prevStep, nextStep } = useContext(StepContext)
    console.log(data)
    let suma = 0;
    if (time == "Monthly") {
        if (data.radio == "Arcade") suma = price.ArcadeMonthPrice
        else if (data.radio == "Advanced") suma = price.AdvancedMonthPrice
        else suma = price.ProMonthPrice
    }
    else {
        if (data.radio == "Arcade") suma = price.ArcadeYearPrice
        else if (data.radio == "Advanced") suma = price.AdvancedYearPrice
        else suma = price.ProYearPrice
    }
    function sumar(valor) {
        suma = suma + valor
    }

    return (
        <section className="summary">
            <h1>Finishing up</h1>
            <p>Double-check everithing looks OK before confirming.</p>
            {
                time == "Monthly" ?
                    <ul>
                        <div className='summary-light-bg li-parent'>
                            <li className='summary-first-li'>
                                <div>
                                    <span className='primary-bold'>{data.radio}({time})</span>
                                    <button onClick={() => setTime("Yearly")}>Change</button>
                                </div>
                                {
                                    data.radio == "Arcade" &&
                                    <span className='primary-bold'>${price.ArcadeMonthPrice}/mo</span>
                                }
                                {
                                    data.radio == "Advanced" &&
                                    <span className='primary-bold'>${price.AdvancedMonthPrice}/mo</span>
                                }

                                {
                                    data.radio == "Pro" &&
                                    <span className='primary-bold'>${price.ProMonthPrice}/mo</span>

                                }

                            </li>
                            {
                                data.onlineService &&
                                <li className='summary-second-li'>
                                    <span className='list-gray-span'>Online service</span>
                                    <span className='price-span'>+${price.onlineServiceMonthPrice}/mo</span>
                                    {sumar(price.onlineServiceMonthPrice)}
                                </li>
                            }
                            {
                                data.largerStorage &&
                                <li>
                                    <span className='list-gray-span'>Large storage</span>
                                    <span className='price-span'>+${price.largerStorageMonthPrice}/mo</span>
                                    {sumar(price.largerStorageMonthPrice)}
                                </li>
                            }
                            {
                                data.customProfile &&
                                <li>
                                    <span className='list-gray-span'>Customizable profile</span>
                                    <span className='price-span'>+${price.customProfileMonthPrice}/mo</span>
                                    {sumar(price.customProfileMonthPrice)}
                                </li>
                            }


                        </div>
                        <li className='summary-total'>
                            <span className='list-gray-span'>Total(per month)</span>
                            <span className='secondary-bold'>+{suma}/mo</span>
                        </li>
                    </ul>

                    :
                    <ul>
                        <div className='summary-light-bg li-parent'>
                            <li className='summary-first-li'>
                                <div>
                                    <span className='primary-bold'>{data.radio}({time})</span>
                                    <button onClick={() => setTime("Monthly")}>Change</button>
                                </div>
                                {
                                    data.radio == "Arcade" &&
                                    <span className='primary-bold'>${price.ArcadeYearPrice}/yr</span>
                                }
                                {
                                    data.radio == "Advanced" &&
                                    <span className='primary-bold'>${price.AdvancedYearPrice}/yr</span>
                                }

                                {
                                    data.radio == "Pro" &&
                                    <span className='primary-bold'>${price.ProYearPrice}/yr</span>

                                }

                            </li>
                            {
                                data.onlineService &&
                                <li className='summary-second-li'>
                                    <span className='list-gray-span'>Online service</span>
                                    <span className='price-span'>+${price.onlineServiceYearPrice}/mo</span>
                                    {sumar(price.onlineServiceYearPrice)}
                                </li>
                            }
                            {
                                data.largerStorage &&
                                <li>
                                    <span className='list-gray-span'>Large storage</span>
                                    <span className='price-span'>+${price.largerStorageYearPrice}/yr</span>
                                    {sumar(price.largerStorageYearPrice)}
                                </li>
                            }
                            {
                                data.customProfile &&
                                <li>
                                    <span className='list-gray-span'>Customizable profile</span>
                                    <span className='price-span'>+${price.customProfileYearPrice}/yr</span>
                                    {sumar(price.customProfileYearPrice)}
                                </li>
                            }


                        </div>
                        <li className='summary-total'>
                            <span className='list-gray-span'>Total(per month)</span>
                            <span className='secondary-bold'>{suma}/yr</span>
                        </li>
                    </ul>


            }

            <div>
                <button className="btn-secondary" onClick={prevStep}>Go Back</button>
                <button className="btn-confirm" onClick={nextStep} > Confirm</button>
            </div>
        </section>
    );
}