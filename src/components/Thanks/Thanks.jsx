import './thanks.css'
import thanksImage from '../../assets/images/icon-thank-you.svg'
export default function Thanks(){
    return(
        <section className='thanks'>
            <div>
                <img src={thanksImage} alt="Imagen de agradecimiento" />
                <h1>Thank you!</h1>
                <p>Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.</p>
            </div>
        </section>
    );
}