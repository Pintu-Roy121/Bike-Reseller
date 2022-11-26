import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

const CheckOutForm = ({ booking }) => {
    const [cardError, setCardError] = useState('');
    const [clientSecret, setClientSecret] = useState("");
    const [processing, setProcessing] = useState(false);
    const [success, setSuccess] = useState();
    const [transectionId, setTransectionId] = useState();
    const stripe = useStripe();
    const elements = useElements()

    const { price, name, email, _id, productid } = booking;


    useEffect(() => {
        fetch('http://localhost:5000/create-payment-intent', {
            method: 'POST',
            headers: {
                // "Content-Type": "application/json"
                'content-type': 'application/json',
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({ price }),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, [price]);



    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(booking);
        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);
        if (card == null) {
            return;
        }
        // paymentMethod 
        const { error } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log(error);
            setCardError(error.message);
        }
        else {
            setCardError('')
        }
        setSuccess('')
        setProcessing(true);
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: name,
                        email: email
                    },
                },
            },
        );

        if (confirmError) {
            setCardError(confirmError.message)
            return
        }
        if (paymentIntent.status === 'succeeded') {
            setSuccess('Congrats! Your Payment Completed');
            setTransectionId(paymentIntent.id)
            const payment = {
                name,
                price,
                transectionId: paymentIntent.id,
                email,
                bookingId: _id,
                productid
            }
            console.log(payment);

            fetch('http://localhost:5000/payments', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify(payment)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.acknowledged) {
                        Swal.fire(
                            'Successful!',
                            'Payment Success',
                            'success'
                        )
                    }
                })

        }
        setProcessing(false);


    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1 className='text-xl underline font-bold mb-2 text-center'>Enter Your Card Num:</h1>
                <CardElement
                    className='border-2 border-info rounded-lg p-3'
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#111111',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />

                <button
                    className='btn btn-info btn-sm mt-5'
                    type="submit"
                    disabled={!stripe || !clientSecret || processing}
                >Pay
                </button>

            </form>
            <p className='text-lg text-error font-semibold'>{cardError}</p>
            {
                success && <div>
                    <div className="text-lg font-bold text-success">{success}</div>
                    <p className='text-lg font-semibold'>Transaction Id: <span className='text-orange-500'>{transectionId}</span></p>
                </div>
            }
        </div>
    );
};

export default CheckOutForm;