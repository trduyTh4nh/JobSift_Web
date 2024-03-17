import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { API_URL } from '../ipConfig';
const stripePromise = loadStripe('pk_test_51ODOjFDqDQ31HEFQwTDCiTH1AyfrMZGiFNjgitItFOyPkQliWEUJEC4RkcspbyNpm8n7sxwH5VZEdc7oy9ZHqGOT00LByYtfnn');
const options = {
    clientSecret: 'sk_test_51ODOjFDqDQ31HEFQoMajoFb6sEX4MK9Fut3sUuArNPEJBBhFDfll7aVqCg3G3keNtWY6VuCvY1wX8CTuqZO3Ppp700zX3wH6vo',
};

const Payment = () => {
    const [opt, setOpt] = useState()
    useEffect(() => {
        axios.post(`http://${API_URL}:3001/payment-sheet`, {price: 100000}).then(result => {
           setOpt({
            clientSecret: result.data.paymentIntent
           })
           console.log(result)
        }).catch(e => {
            console.log(e)
        })
    }, [])

    return opt ? (
        
    <Elements stripe={stripePromise} options={opt}>
        <CheckoutForm />
    </Elements>
    ) : (<></>)
}

export default Payment;