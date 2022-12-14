import React from 'react'
import Footer from '../comps/footer'
import Navbar from '../comps/navbar'
import styles from '../styles/faq.module.css'

import { UilHome } from '@iconscout/react-unicons'
import { Link } from 'react-router-dom'

function Faq() {
  return (
    <>
    <Navbar /> 
      <div className={styles.container}>
        <div className={styles.faqs}>
          <p>
          SHIPPING QUESTIONS <br />

          <br />WE WILL BE PROVIDING THE FOLLOWING OPTIONS: <br />

 

<br />USPS PRIORITY 	DOMESTIC	1-3 DAYS <br />
UPS GROUND 	DOMESTIC	5-7 DAYS <br />
USPS PRIORITY MAIL INTL	INTERNATIONAL	4-8 DAYS <br />
USPS FIRST CLASS MAIL INTL <br />
INTERNATIONAL	7-10 DAYS <br />
 

<br />WHERE DO YOU SHIP? <br />

<br />WE SHIP WORLDWIDE. PLEASE HAVE A LOOK AT SHIPPING RATES AND TAXES DERIVED FROM YOUR ORDER FOR GEOGRAPHICAL SPECIFICS. <br />

BY PLACING AN ORDER WITH US, YOU AUTHORIZE US OR OUR DESIGNEE TO FACILITATE SHIPMENT TO YOUR ADDRESS OUTSIDE CANADA &. THE UNITED STATES. YOU ALSO ACKNOWLEDGE THAT, PURSUANT TO THE CUSTOMS LAWS OF YOUR PLACE OF DELIVERY, THE SHIPMENT MAY INCUR DUTIES AND IMPORT TAXES UPON DELIVERY. THIS CHARGE IS DETERMINED BY YOUR LOCAL CUSTOMS AUTHORITY. PAYMENT OF THESE MAY BE NECESSARY TO RELEASE YOUR ORDER FROM CUSTOMS. FOR MORE INFORMATION, PLEASE CONSULT YOUR LOCAL CUSTOMS OFFICE. <br />

 

<br />HOW LONG UNTIL MY ORDER SHIPS? <br />

<br />ALTHOUGH WE DO NOT ANTICIPATE ANY ISSUES, ALL ORDERS ARE STILL SUBJECT TO DELAYS DUE TO INCLEMENT WEATHER, COVID-19 RESTRICTIONS AND OTHER GENERAL DELAYS. FOR ORDERS PLACED ON THE NIGHT OF A DROP PLEASE ALLOW ADDITIONAL TIME FOR THE ORDER TO PROCESS AND SHIP. <br />

 

<br />WHAT IF THERE IS AN ERROR ON MY SHIPPING ADDRESS? <br />

<br />PLEASE BE SURE TO DOUBLE CHECK ALL INFORMATION BEFORE CHECKING OUT TO ENSURE A QUICK SHIPPING PROCESS. IF YOU NOTICE AN ERROR, CONTACT CUSTOMER SERVICE IMMEDIATELY. (PROVIDE THE CORRECT ADDY INFO) <br />

 

<br />HOW CAN I TRACK MY ORDER? <br />

<br />ONCE YOUR PACKAGE HAS SHIPPED, YOU WILL RECEIVE AN EMAIL WITH CORRESPONDING TRACKING INFORMATION. <br />

 

<br />WHEN WILL MY HOLIDAY ORDER SHIP? <br />

<br />DUE TO THE HIGH VOLUME, DELAYS ARE EXPECTED. ORDERS MAY NOT SHIP UNTIL DECEMBER 10TH. <br />

 

<br />WHAT IF MY PACKAGE IS LOST? <br />

<br />WE WILL ENSURE YOUR PACKAGE IS SENT OUT IN TIME BUT ONCE THE PACKAGE LEAVES OUR FACILITY, IT FALLS UNDER THE LIABILITY OF THE COURIER AND CAN BE SUBJECT TO ISSUES THAT ARE OUT OF OUR CONTROL. YOU WILL NEED TO CONTACT THE ACCORDING SHIPPING SERVICE FOR UPDATES ON ANY DELAYS OR SHIPPING ERRORS. <br />

PLEASE MAKE INQUIRIES ON IDLE PACKAGES WITHIN 30 DAYS FROM THE ORDER DATE. <br />

 

<br />HOW DO I CANCEL MY ORDER? <br />

<br />ONCE AN ORDER IS SUBMITTED, WE CANNOT CANCEL OR MODIFY IT. <br />

 

<br />WHAT IS THE REFUND POLICY? <br />

<br />ALL SALES ARE FINAL. IN THE CASE OF DAMAGED OR INCORRECT GOODS RECEIVED, PLEASE CONTACT CUSTOMER SERVICE IMMEDIATELY TO REVIEW AND RESOLVE. <br />

PLEASE MAKE INQUIRIES ON DAMAGED OR INCORRECT GOODS WITHIN 7 DAYS OF THE DELIVERY DATE. NO INQUIRIES WILL BE ACCEPTED BEYOND THE 7 DAY PERIOD. <br />

 

<br />CAN I RETURN MY HOLIDAY/BLACK FRIDAY ORDER? <br />

<br />ALL SALES ARE FINAL. PLEASE MAKE INQUIRIES ON DAMAGED OR INCORRECT GOODS WITHIN 7 DAYS OF THE DELIVERY DATE. <br />

 

<br />I???M IN CANADA, WHY IS MY ORDER DELAYED? <br />

<br />TO ALL OUR CANADIAN CUSTOMERS; THE PROVINCE OF BRITISH COLUMBIA(BC). CANADA HAS DECLARED A STATE OF EMERGENCY DUE TO DEVASTATING FLOODING AND MUDSLIDES. THE NATURAL DISASTER IS HAVING SIGNIFICANT IMPACT ON ALL MODES OF TRANSPORTATION. THIS MAY CAUSE DELIVERY DELAYS WITH YOUR ORDER. THE COURIERS WILL PROCEED WITH DELIVERY AS SOON AS IT IS SAFE TO DO SO. WE APPRECIATE YOUR CONTINUED PATIENCE AND UNDERSTANDING. <br />

 

<br />WHAT IF SOMETHING IS OUT OF STOCK? <br />

<br />STAY TUNED ON OUR SOCIAL MEDIA CHANNELS  AND SUBSCRIBE TO THE LATTER HOUSE NEWSLETTER FOR ANY FUTURE RESTOCK ANNOUNCEMENTS AND FURTHER DROPS. <br />

 

<br />WHAT IF I HAVE MORE QUESTIONS? <br />

<br />PLEASE REACH OUT TO CUSTOMER SERVICE <br /> INFO@LATTERHOUSE.CA FOR ANY FURTHER QUESTIONS. <br />
          </p>
        </div>

        <div className={styles.home}>
        <Link style={{textDecoration: 'none', color: 'white'}} to="/">
          <UilHome />
        </Link>
      </div>
        
      </div>

      <Footer />
    </>
  )
}

export default Faq