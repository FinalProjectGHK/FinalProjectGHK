import styles from "./Cart.module.css";
/* import StripeCheckout from '../components/StripeCheckout'; */
import { Link, useOutletContext } from "react-router-dom";
import CartList from "../components/CartList";
import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import CheckoutForm from "../components/CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51Pgfnm2MAyR1R09oOpueeVf2DuNMAUJev4PEItFtqoOE97jifuUwFZ3nNosJYQWPlc0Hpe3FMg6pZ9omUypXyDI200gFgKZRmc"
);

const Cart = () => {
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: [{ id: "xl-tshirt" }] }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, []);

  const appearance = {
    theme: "stripe",
  };
  const options = {
    clientSecret,
    appearance,
  };

  const [outletContextObj] = useOutletContext();
  const chosenFoods = outletContextObj["chosenFoods"];
  let totalPrice = 0;
  let totalItem = 0;
  let discount = 0;

  console.log(chosenFoods); // Test

  function showCartItem(chosenFoods) {
    return chosenFoods.map((foodItem, index) => (
      <CartList
        key={index}
        chineseName={foodItem.chineseName}
        foodPic={foodItem.foodPic}
        price={foodItem.price}
        quantity={foodItem.quantity}
      />
    ));
  }
  function countTotalPrice(chosenFoods) {
    chosenFoods.map((foodItem, index) => {
      totalPrice += foodItem.price * foodItem.quantity;
      console.log(totalPrice);
    });
    return totalPrice;
  }
  function countTotalItem(chosenFoods) {
    chosenFoods.map((foodItem, index) => {
      totalItem += foodItem.quantity;
      console.log(totalItem);
    });
    return totalItem;
  }
  async function handleProceedButton() {
    try {
      let result = await fetch("http://localhost:3001/sales", {
        method: "PATCH",
        body: JSON.stringify(chosenFoods),
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  }
  function handleContinueButton() {
    return;
  }

  return (
    <div>
      <div className={styles.cartContainer}>
        <div className={styles.shoppingCard}>{showCartItem(chosenFoods)}</div>
        <div className={styles.orderSummary}>
          <h2>Order Summary</h2>
          <div className={styles.summaryItem}>
            <span>Total Item:</span>
            <span>{countTotalItem(chosenFoods)}</span>
          </div>
          <div className={styles.summaryItem}>
            <span>Subtotal:</span>
            <span>${countTotalPrice(chosenFoods)}</span>
          </div>
          <div className={styles.summaryItem}>
            <span>Discount:</span>
            <span>${discount}</span>
          </div>
          <hr />
          <div className={styles.summaryItem}>
            <span>Total:</span>
            <span>${totalPrice - discount}</span>
          </div>

          <div className={styles.summaryButtons}>
            <button
              className={styles.proceedButton}
              onClick={() => handleProceedButton()}
            >
              <Link to="/">Proceed to Payment</Link>
            </button>
            <button
              className={styles.continueButton}
              onClick={() => handleContinueButton()}
            >
              <Link to="/home">Continue to Shop</Link>
            </button>
          </div>
        </div>
        <div>
          {clientSecret && (
            <Elements options={options} stripe={stripePromise}>
              <CheckoutForm />
            </Elements>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
