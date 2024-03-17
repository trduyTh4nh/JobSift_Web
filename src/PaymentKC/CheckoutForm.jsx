import { useStripe, useElements, PaymentElement } from '@stripe/react-stripe-js';
import axios from 'axios';
import { API_URL } from '../ipConfig';

const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();

    const user = JSON.parse(localStorage.getItem('user'))

    let data = JSON.stringify({
        "iduser": user.id_user
    });

    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'http://localhost:3001/ntdmuckc',
        headers: {
            'Content-Type': 'application/json'
        },
        data: data
    };

    console.log(user)

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        try {

            axios.request(config)
                .then((response) => {
                    console.log(JSON.stringify(response.data));
                })
                .catch((error) => {
                    console.log(error);
                });

            const result = await stripe.confirmPayment({
                elements,
                confirmParams: {
                    return_url: "http://localhost:3000/dashboard/diamondDashboard",
                },

            })

            // console.log("ID USER: " + user.id_user);

        } catch (error) {
            console.error('Error:', error);
        }

    };

    return (
        <form style={{
            marginTop: 100,
            paddingLeft: 50,
            paddingRight: 50
        }} onSubmit={handleSubmit}>
            <PaymentElement />
            <button disabled={!stripe} style={{
                backgroundColor: '#E2F368',
                padding: 20,
                marginTop: 20,
                borderRadius: 10,
                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                fontWeight: 700
            }}>Submit</button>

        </form>
    )
};

export default CheckoutForm;