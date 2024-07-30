import styles from "./Cart.module.css";
/* import StripeCheckout from '../components/StripeCheckout'; */
import { Link, useOutletContext } from "react-router-dom";
import CartList from "../components/CartList";
import React, { useState, useEffect } from "react";
/* import { loadStripe } from "@stripe/stripe-js"; */
/* import { Elements } from "@stripe/react-stripe-js"; */
import shopLocation from "../JS_Data/shopLocation";
import { useAuth } from "../components/contexts/AuthContext";

/* import CheckoutForm from "../components/CheckoutForm"; */

/* const stripePromise = loadStripe(
  "pk_test_51Pgfnm2MAyR1R09oOpueeVf2DuNMAUJev4PEItFtqoOE97jifuUwFZ3nNosJYQWPlc0Hpe3FMg6pZ9omUypXyDI200gFgKZRmc"
); */

const Cart = () => {
  /* const [clientSecret, setClientSecret] = useState(""); */

  // useEffect(() => {
  //   // Create PaymentIntent as soon as the page loads
  //   fetch("/create-payment-intent", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({ items: [{ id: "xl-tshirt" }] }),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => setClientSecret(data.clientSecret));
  // }, []);

  /* const appearance = {
    theme: "stripe",
  };
  const options = {
    clientSecret,
    appearance,
  }; */

  const [selectedLocation, setSelectedLocation] = useState("");
  const [isOpeneded, setIsOpeneded] = useState(false);
  const [outletContextObj] = useOutletContext();
  const chosenFoods = outletContextObj['chosenFoods'];
  const setIsBlankPage = outletContextObj['isBlankPage'][1];
  const shoppingDataPool = outletContextObj['shoppingDataPool'][0];
  const setShoppingDataPool = outletContextObj['shoppingDataPool'][1];
  const { currentUser } = useAuth();

  let discount = 0;

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
    let totalPrice = 0;
    chosenFoods.map((foodItem, index) => {
      totalPrice += foodItem.price * foodItem.quantity
    })
    console.log(totalPrice)
    return(totalPrice)
  }
  function countTotalItem(chosenFoods) {
    let totalItem = 0;
    chosenFoods.map((foodItem, index) => {
      totalItem += foodItem.quantity
    })
    return(totalItem)
  }
  function getDate() {
    let dateObj = new Date();
    let month = String(dateObj.getMonth() + 1).padStart(2, '0');
    let day = String(dateObj.getDate()).padStart(2, '0');
    let year = dateObj.getFullYear();
    let hour = dateObj.getHours();
    let minute = dateObj.getMinutes();
    let second = dateObj.getSeconds();
    let output = `${year}-${month}-${day},${hour}:${minute}:${second}`;
    return output
  }
  function handleDropdownButton() {
    setIsOpeneded(! isOpeneded)
  }
  function handleDropdownItem(loction) {
    setIsOpeneded(! isOpeneded)
    setSelectedLocation(loction)
  }
  const handleScrollToTop = (num, str) => {
    window.scrollTo({
      top: num,
      behavior: str
    });
  };
  async function handleProceedButton() {
    /* await fetch("/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: [{ id: "xl-tshirt" }] }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
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
    } */

    /* 
        {'order': chosenFoods,
        'location': selectedLocation,
        'totalPrice': totalPrice,
        'orderDate': orderDate},
    */

    if(selectedLocation === "") {
      alert('Please select a shop')
      return
    } else {
      /* data['order'] = chosenFoods
      data['locaion'] = selectedLocation
      console.log(data)
      setShoppingDataPool(data) */
      /* setShoppingDataPool((prevData) => {
          const updatedData = [...prevData];
          
          updatedData['order'] = chosenFoods
          updatedData['locaion'] = selectedLocation
          return updatedData;
      }); */
      let data = {
        'order': chosenFoods,
        'location': selectedLocation,
        'totalPrice': countTotalPrice(chosenFoods),
        'orderDate': getDate(),
        /* 'email': currentUser.email, */
      }
      setShoppingDataPool(data)
      console.log(shoppingDataPool)
      /* console.log(currentUser.email) */
      console.log(shoppingDataPool['location'])
      setIsBlankPage(true)
    }
  }
  function handleContinueButton() {
    setTimeout(() => {
      handleScrollToTop(900, 'smooth');
    }, 100) 
  }

  return (
    <div>
      <div className={styles.cartContainer}>
        <div className={styles.leftContainer}>
          <div className={styles.pickShop}>
            <h2 className={styles.pickShopTitle}>Pick a Shop</h2>
            <button onClick={() => handleDropdownButton()} className={styles.dropdownButton}>
              <label className={styles.dropdownButton_lbl}>
                {selectedLocation === "" ? "Please Select" : selectedLocation}
              </label>
              <div className={styles.dropdownButton_svg}>
                <svg className="w-2.5 h-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                </svg>
              </div>
            </button>
            {isOpeneded && 
            (<div className={styles.dropdownMenu}>
              <ul>
                {shopLocation.map((loction, index) => (
                  <li key={index}>
                    <button onClick={() => handleDropdownItem(loction)} className={styles.btn_location}>{loction}</button>
                  </li>
                ))}
              </ul>
            </div>)}
            
          </div>
          <div className={styles.orderSummary}>
            <h2 className={styles.orderSummaryTitle}>Order Summary</h2>
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
              <span>${countTotalPrice(chosenFoods) - discount}</span>
            </div>
            <div className={styles.summaryButtons}>
              {selectedLocation === "" ? 
              (<button className={styles.proceedButton} onClick={() => handleProceedButton()}>
                Proceed to Payment
              </button>) :
              (<Link to="/pay" className={styles.proceedButton} onClick={() => handleProceedButton()}>
                Proceed to Payment
              </Link>)
              }
              <Link to="/home" className={styles.continueButton} onClick={() => handleContinueButton()}>
                Continue to Shop
              </Link>
            </div>
          </div>
          {/* <div className={styles.pickPaymentMethod}>
            <h2>Pick a Payment Method</h2>
            <div className={styles.selectContainer}>
              <div className="flex items-center">
                <input id="country-option-1" type="radio" name="countries" value="Visa" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300"/>
                <label className="block ms-2  text-sm font-medium text-gray-900">
                  Visa
                </label>
              </div>
              <div className="flex items-center">
                <input id="country-option-2" type="radio" name="countries" value="Mastercard" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300"/>
                <label className="block ms-2  text-sm font-medium text-gray-900">
                  Mastercard
                </label>
              </div>
              <div className="flex items-center">
                <input id="country-option-3" type="radio" name="countries" value="American Express" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300"/>
                <label className="block ms-2  text-sm font-medium text-gray-900">
                  American Express
                </label>
              </div>
            </div>
          </div> */}
        </div>
        <div className={styles.shoppingCard_container}>
          <div className={styles.shoppingCard}>{showCartItem(chosenFoods)}</div>
        </div>
        {/* <div className={showPopupPayment()}> */}
          {/* {<div>
              {clientSecret && (
                <Elements options={options} stripe={stripePromise}>
                  <CheckoutForm />
                </Elements>
              )}
          </div>} */}
        {/* </div> */}
      </div>
    </div>
  );
};

export default Cart;
