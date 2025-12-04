import React from "react"
import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom"
import Layout from "./Layout/Layout.jsx"

const HomePage = React.lazy(()=> import('./pages/Home/HomePage.jsx'))
const PartnerwithCrazyMerchant = React.lazy(()=> import('./pages/PartnerwithCrazyMerchant/PartnerwithCrazyMerchant.jsx'))
const FAQs = React.lazy(()=> import('./pages/FAQs/FAQs.jsx'))
const Blogs = React.lazy(()=> import('./pages/Blogs/Blogs.jsx'))


// Industries Pages
const CallCenters = React.lazy(()=> import('./pages/Industries/CallCenters/CallCenters.jsx'))
const OutBound = React.lazy(()=> import('./pages/Industries/OutBound/OutBound.jsx'))
const Restaurants = React.lazy(()=> import('./pages/Industries/Restaurants/Restaurants.jsx'))
const Medical_Related = React.lazy(()=> import('./pages/Industries/Medical_Related/Medical_Related.jsx'))
const Digital_Books = React.lazy(()=> import('./pages/Industries/Digital_Books/Digital_Books.jsx'))
const Tech_Support = React.lazy(()=> import('./pages/Industries/Tech_Support/Tech_Support.jsx'))
const Groceries = React.lazy(()=> import('./pages/Industries/Groceries/Groceries.jsx'))
const Ecommerce_Websites = React.lazy(()=> import('./pages/Industries/Ecommerce_Websites/Ecommerce_Websites.jsx'))
const Travel = React.lazy(()=> import('./pages/Industries/Travel/Travel.jsx'))
const Vape = React.lazy(()=> import('./pages/Industries/Vape/Vape.jsx'))
const Web_Design = React.lazy(()=> import('./pages/Industries/Web_Design/Web_Design.jsx'))


// Solutions Pages
const HighRiskMerchant = React.lazy(()=> import('./pages/Solutions/HighRiskMerchant/HighRiskMerchant.jsx'))
const MerchantServices = React.lazy(()=> import('./pages/Solutions/MerchantServices/MerchantServices.jsx'))
const ACH = React.lazy(()=> import('./pages/Solutions/ACH/ACH.jsx'))
const ChargerBack_Management = React.lazy(()=> import('./pages/Solutions/ChargerBack_Management/ChargerBack_Management.jsx'))
const ThreedSecure = React.lazy(()=> import('./pages/Solutions/ThreedSecure/ThreedSecure.jsx'))
const Fraud_prevention = React.lazy(()=> import('./pages/Solutions/Fraud_prevention/Fraud_prevention.jsx'))
const Payment_Gateways = React.lazy(()=> import('./pages/Solutions/Payment_Gateways/Payment_Gateways.jsx'))
const MOTO_Processing = React.lazy(()=> import('./pages/Solutions/MOTO_Processing/MOTO_Processing.jsx'))
const Level23CreditCard_Processing = React.lazy(()=> import('./pages/Solutions/Level23CreditCard_Processing/Level23CreditCard_Processing.jsx'))
const Recurring_Payment = React.lazy(()=> import('./pages/Solutions/Recurring_Payment/Recurring_Payment.jsx'))
const Mobile_Payments = React.lazy(()=> import('./pages/Solutions/Mobile_Payments/Mobile_Payments.jsx'))
const Virtual_Terminal = React.lazy(()=> import('./pages/Solutions/Virtual_Terminal/Virtual_Terminal.jsx'))
const Online_Payment = React.lazy(()=> import('./pages/Solutions/Online_Payment/Online_Payment.jsx'))
const B2B_Payments = React.lazy(()=> import('./pages/Solutions/B2B_Payments/B2B_Payments.jsx'))


// Blogs
const Blog1 = React.lazy(()=> import('./pages/Blogs/Blog1.jsx'))


const App = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />

        {/* Industries Page */}
        <Route path="/callcenters" element={<CallCenters />} />  
        <Route path="/outbound" element={<OutBound />} />  
        <Route path="/restaurants" element={<Restaurants />} />  
        <Route path="/medical" element={<Medical_Related />} />  
        <Route path="/digitalbooks" element={<Digital_Books />} />  
        <Route path="/techsupport" element={<Tech_Support />} />  
        <Route path="/groceries" element={<Groceries />} />  
        <Route path="/ecommerce-websites" element={<Ecommerce_Websites />} />  
        <Route path="/travel" element={<Travel />} />  
        <Route path="/vape" element={<Vape />} />  
        <Route path="/web-design" element={<Web_Design />} />  


        {/* Solutions Page */}
        <Route path="/high-risk-merchant-account" element={<HighRiskMerchant />} />
        <Route path="/merchant-services" element={<MerchantServices />} />
        <Route path="/ach" element={<ACH />} />
        <Route path="/chargeback-management" element={<ChargerBack_Management />} />
        <Route path="/3d-secure" element={<ThreedSecure />} />
        <Route path="/fraud-prevention" element={<Fraud_prevention />} />
        <Route path="/payment-gateway" element={<Payment_Gateways />} />
        <Route path="/moto-processing" element={<MOTO_Processing />} />
        <Route path="/level-2-and-3-credit-card-processing" element={<Level23CreditCard_Processing />} />
        <Route path="/recurring-payment" element={<Recurring_Payment />} />
        <Route path="/mobile-payments" element={<Mobile_Payments />} />
        <Route path="/virtual-terminal" element={<Virtual_Terminal />} />
        <Route path="/online-payment" element={<Online_Payment />} />
        <Route path="/b2b-payments" element={<B2B_Payments />} />



        

        {/* Resources Page */}
        <Route path="/partnerwithcrazymerchant" element={<PartnerwithCrazyMerchant />} />

        <Route path="/faqs" element={<FAQs />} />
        <Route path="/blogs" element={<Blogs />} />
        
        {/* Blogs Sections */}
        <Route path="/highriskmerchantblog" element={<Blog1 />} />
        

        
      </Route>
    </>
  )
)

export default App