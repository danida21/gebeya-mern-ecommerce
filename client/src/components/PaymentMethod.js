import React, { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import CheckoutSteps from './subComponetns/CheckoutSteps';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Store } from '../Store';
import { useNavigate } from 'react-router-dom';

const PaymentMethod = () => {
  const navigate = useNavigate();

  const { state, dispatch: ctxDispatch } = useContext(Store);

  const {
    cart: { shippingAddress, paymentMethod },
  } = state;

  const [paymentMethodName, setPaymentMethodName] = useState(
    paymentMethod || 'Paypal'
  );

  useEffect(() => {
    if (!shippingAddress.address) {
      navigate('/shipping');
    }
  }, [shippingAddress, navigate]);

  const submitHandler = (e) => {
    e.preventDefault();
    ctxDispatch({ type: 'SAVE_PAYMENT_METHOD', payload: paymentMethodName });
    localStorage.setItem('paymentMethod', paymentMethodName);
    navigate('/placeorder');
  };
  return (
    <div>
      <CheckoutSteps step1 step2 step3></CheckoutSteps>
      <div className="container sm-container">
        <Helmet>
          <title>Payment Method</title>
        </Helmet>
        <h1>Payment Method</h1>
        <Form onSubmit={submitHandler}>
          <div className="mb-3">
            <Form.Check
              type="radio"
              id="Paypal"
              label="PayPal"
              value="Paypal"
              checked={paymentMethodName === 'Paypal'}
              onChange={(e) => setPaymentMethodName(e.target.value)}
            />
            <Form.Check
              type="radio"
              id="Stripe"
              label="Stripe"
              value="Stripe"
              checked={paymentMethodName === 'Stripe'}
              onChange={(e) => setPaymentMethodName(e.target.value)}
            />
            <div className="mb-3">
              <Button type="submit">Continue</Button>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default PaymentMethod;
