import React, { useState, useEffect } from "react";
import { MessageCircleQuestionMark , ArrowRight, ArrowLeft, ChevronUp, ChevronDown   } from 'lucide-react';
import { motion, AnimatePresence } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";

function FaqsSection() {

    const location = useLocation();
    const [searchValue, setSearchValue] = useState("");
    const navigate = useNavigate();

    const [activeTab, setActiveTab] = useState("solutions");
    const [openIndex, setOpenIndex] = useState(null);
    const [activeSection, setActiveSection] = useState(1);
    const [showAll, setShowAll] = useState(false);
    const [selectedTitle, setSelectedTitle] = useState(""); 

    const SolutionData = [
        {
            title: 'Merchant Services',
            link : '#',
        },
        {
            title: 'Chargeback Management',
            link : '#',
        },
        {
            title: '3D Secure',
            link : '#',
        },
        {
            title: 'Payment Gateway',
            link : '#',
        },
        {
            title: 'MOTO Processing',
            link : '#',
        },
        {
            title: 'Mobile Payments',
            link : '#',
        },
        {
            title: 'Recurring Payments',
            link : '#',
        },
        {
            title: 'ACH Payments',
            link : '#',
        },
        {
            title: 'High-Risk Merchant Account',
            link : '#',
        },
        {
            title: 'Fraud Prevention',
            link : '#',
        },
        {
            title: 'Level 2 & 3 Processing',
            link : '#',
        },
        {
            title: 'Virtual Terminal',
            link : '#',
        },
        {
            title: 'Online Payments',
            link : '#',
        },
        {
            title: 'B2B Payments',
            link : '#',
        },
    ]

    const IndustriesData = [
        {
            title: "Call Centers",
            link : '#',
        },
        {
            title: "Outbound Product Selling Merchant Accounts",
            link : '#',
        },
        {
            title: "Restaurant Business Merchant Accounts",
            link : '#',
        },
        {
            title: "Medical-Related Business Merchant Accounts",
            link : '#',
        },
        {
            title: "Digital Books & eBook Sellers Merchant Accounts",
            link : '#',
        },
        {
            title: "Tech Support Merchant Accounts",
            link : '#',
        },
        {
            title: "Grocery Store Merchant Accounts",
            link : '#',
        },
        {
            title: "E-Commerce Website Merchant Accounts",
            link : '#',
        },
        {
            title: "Travel Business Merchant Accounts",
            link : '#',
        },
        {
            title: "Web Design & Marketing Merchant Accounts",
            link : '#',
        },
        {
            title: "Vape & E-Cigarette Merchant Accounts",
            link : '#',
        },
    ];

        
// Solutions Faqs
const merchantFaqs = [
  {
    title: 'What are merchant services?',
    description: 'Merchant services allow businesses to accept card payments securely both online and in-store.'
  },
  {
    title: 'Why do high-risk businesses need specialized merchant services?',
    description: 'High-risk businesses face more declines and chargebacks, so they require stronger underwriting and secure processing.'
  },
  {
    title: 'How fast can I get approved for merchant services?',
    description: 'Most merchants get approved within 24 hours after submitting documents.'
  },
  {
    title: 'Do merchant services support recurring or subscription billing?',
    description: 'Yes — recurring payments and subscription billing are supported.'
  },
  {
    title: 'Can merchant services integrate with my website or POS system?',
    description: 'Yes — the gateway connects easily with websites, apps, POS systems, and CRMs.'
  }
];

const Chargebackfaqs = [
  {
    title: 'What is chargeback management?',
    description: 'It’s a system that helps businesses prevent, monitor, and fight chargebacks to reduce financial loss.'
  },
  {
    title: 'Why do high-risk businesses need chargeback management?',
    description: 'High-risk industries face more disputes, so strong chargeback protection keeps accounts stable.'
  },
  {
    title: 'Does Crazy Merchants provide real-time chargeback alerts?',
    description: 'Yes — you get instant alerts to respond quickly before a dispute becomes a chargeback'
  },
  {
    title: 'Can chargeback management reduce my dispute rate?',
    description: 'Yes — fraud filters, alerts, and dispute tools help significantly lower chargeback ratios.'
  },
  {
    title: 'Does it work for both online and phone-based transactions?',
    description: 'Yes — chargeback protection covers all card transactions, including online and MOTO payments.'
  }
];

const threedsecurefaqs = [
  {
    title: 'What is 3D Secure?',
    description: 'It’s an extra verification step that confirms a customer’s identity during online payments.'
  },
  {
    title: 'How does 3D Secure reduce fraud?',
    description: 'It requires customers to authenticate the transaction, blocking unauthorized card use.'
  },
  {
    title: 'Is 3D Secure required for high-risk businesses?',
    description: 'It’s highly recommended because it lowers fraud and improves approval rates.'
  },
  {
    title: 'Does 3D Secure work on all major cards?',
    description: 'Yes — it supports Visa, Mastercard, and other major card networks.'
  },
  {
    title: 'Will 3D Secure affect customer checkout experience?',
    description: 'Customers simply confirm a code or app notification — a quick and secure step.'
  }
];

const paymentgatewayfaqs = [
  {
    title: 'What is a payment gateway?',
    description: 'It’s the system that securely transfers customer payment data between your website and the bank.'
  },
  {
    title: 'Can the payment gateway integrate with any website?',
    description: 'Yes — it supports Shopify, WordPress, custom websites, and API integrations.'
  },
  {
    title: 'How fast are payments processed through the gateway?',
    description: 'Transactions are processed instantly, with quick approvals and real-time reporting.'
  },
  {
    title: 'Is the gateway secure for high-risk industries?',
    description: 'Yes — it includes encryption, fraud filters, and 3D Secure for added protection.'
  },
  {
    title: 'Can I track all transactions from one dashboard?',
    description: 'Yes — you get a full merchant dashboard with reports, analytics, and transaction history.'
  }
];

const motofaqs = [
  {
    title: 'What is MOTO processing?',
    description: 'MOTO (Mail Order / Telephone Order) lets you accept payments manually without the customer being present.'
  },
  {
    title: 'Who uses MOTO processing?',
    description: 'Call centers, service providers, remote businesses, and any company taking phone orders.'
  },
  {
    title: 'Is MOTO processing secure?',
    description: 'Yes — transactions are encrypted and monitored with fraud tools to reduce risk.'
  },
  {
    title: 'Can I process card payments without a website?',
    description: 'Yes — MOTO allows you to take payments even if you don’t have an online checkout.'
  },
  {
    title: 'Does MOTO support recurring billing?',
    description: 'Yes — you can save customer details securely and charge recurring invoices.'
  }
];

const mobilefaqs = [
  {
    title: 'What are mobile payments?',
    description: 'Mobile payments let customers pay using their phone through apps, wallets, or contactless methods.'
  },
  {
    title: 'Can businesses accept payments on the go?',
    description: 'Yes — mobile payments work for delivery services, field staff, events, and retail.'
  },
  {
    title: 'Are mobile payments secure?',
    description: 'Yes — they use tokenization, encryption, and fraud protection.'
  },
  {
    title: 'Do mobile payments support high-risk industries?',
    description: 'Yes — Crazy Merchants supports mobile payment solutions for many high-risk businesses.'
  },
  {
    title: 'Can mobile payments accept card and wallet transactions?',
    description: 'Yes — you can accept Apple Pay, Google Pay, and card tap payments.'
  }
];

const recurringfaqs = [
  {
    title: 'What are recurring payments?',
    description: 'Recurring payments automatically charge customers at set intervals like weekly or monthly.'
  },
  {
    title: 'Who benefits from recurring billing?',
    description: 'Subscription services, memberships, coaching programs, SaaS platforms, and support plans.'
  },
  {
    title: 'Are recurring payments secure?',
    description: 'Yes — customer details are encrypted and stored safely in the vault.'
  },
  {
    title: 'Can I change or update billing schedules?',
    description: 'Yes — you can edit amounts, frequency, and customer details anytime.'
  },
  {
    title: 'Do recurring payments reduce late payments?',
    description: 'Yes — automation ensures customers are billed on time every cycle.'
  }
];

const achfaqs = [
  {
    title: 'What is ACH payment processing?',
    description: 'ACH allows businesses to accept payments directly from a customer’s bank account.'
  },
  {
    title: 'Why choose ACH over card payments?',
    description: 'ACH has lower fees, is secure, and works well for large or recurring transactions.'
  },
  {
    title: 'Are ACH payments safe?',
    description: 'Yes — ACH payments use secure bank-to-bank transfers with strong fraud controls.'
  },
  {
    title: 'Can ACH be used for subscriptions?',
    description: 'Yes — ACH is ideal for recurring billing, memberships, and monthly plans.'
  },
  {
    title: ' How long do ACH payments take to settle?',
    description: 'Most ACH transfers settle within 1–3 business days.'
  }
];

const highriskfaqs = [
  {
    title: 'What is a high-risk merchant account?',
    description: 'It’s a specialized account for businesses that traditional processors often decline due to higher chargeback or compliance risk.'
  },
  {
    title: 'Who needs a high-risk merchant account?',
    description: 'Industries like vape, travel, tech support, call centers, e-commerce, and digital services.'
  },
  {
    title: ' How fast can I get approved?',
    description: 'Most high-risk merchants get approved within 24 hours after submitting documents.'
  },
  {
    title: 'What extra protections come with a high-risk account?',
    description: 'Chargeback tools, fraud filters, 3D Secure, and more stable processing.'
  },
  {
    title: 'Can high-risk businesses accept global payments?',
    description: 'Yes — multi-currency processing is supported for international customers.'
  }
];

const fraudpreventionfaqs = [
  {
    title: 'What is fraud prevention in payment processing?',
    description: 'It’s a set of tools that detect and block suspicious or unauthorized transactions.'
  },
  {
    title: 'Why do high-risk businesses need strong fraud prevention?',
    description: 'Because they face more fraudulent attempts and chargebacks compared to low-risk industries.'
  },
  {
    title: 'Does Crazy Merchants offer real-time fraud monitoring?',
    description: 'Yes — transactions are scanned instantly to catch risky behavior before it becomes a loss.'
  },
  {
    title: 'What tools are included for fraud protection?',
    description: 'Filters, velocity checks, IP monitoring, 3D Secure, and chargeback alerts.'
  },
  {
    title: 'Will fraud prevention slow down checkout?',
    description: 'No — transactions remain fast while adding an extra security layer.'
  }
];

const levelprocessingfaqs = [
  {
    title: 'What is Level 2 & Level 3 processing?',
    description: 'It’s enhanced transaction data that lowers processing fees for B2B and corporate card payments.'
  },
  {
    title: 'Who benefits from Level 2 & 3 processing?',
    description: 'B2B companies, wholesalers, suppliers, and businesses that accept corporate or government cards.'
  },
  {
    title:  'How does Level 2 & 3 processing reduce costs?',
    description: 'By sending extra data with the transaction, businesses qualify for lower interchange rates.'
  },
  {
    title: 'Is Level 3 processing supported through the payment gateway?',
    description: 'Yes — Crazy Merchants supports Level 2 and Level 3 data fields automatically.'
  },
  {
    title: 'Do I need special hardware or software?',
    description: 'No — the gateway handles Level 2/3 data submission through API or virtual terminal.'
  }
];

const virtualterminalfaqs = [
  {
    title: 'What is a virtual terminal?',
    description: 'It’s an online dashboard that lets you manually enter and process customer card payments.'
  },
  {
    title: 'Who uses virtual terminals?',
    description: 'Call centers, remote businesses, service providers, and anyone taking payments over phone or email.'
  },
  {
    title:  'Do I need any hardware to use it?',
    description: 'No — it works from any computer or device with an internet connection.'
  },
  {
    title: 'Is the virtual terminal secure?',
    description: 'Yes — transactions are encrypted and include fraud protection tools.'
  },
  {
    title: 'Can I save customer details for future billing?',
    description: 'Yes — you can securely store cards and set up recurring payments'
  }
];

const onlinepaymentsfaqs = [
  {
    title: 'What are online payments?',
    description: 'Online payments let customers pay through your website, app, or checkout page using cards or digital wallets.'
  },
  {
    title: 'Are online payments secure?',
    description: 'Yes — they use encryption, fraud filters, and 3D Secure to protect every transaction.'
  },
  {
    title:  'Can online payments support high-risk businesses?',
    description: 'Yes — Crazy Merchants provides secure online payment solutions for many high-risk industries.'
  },
  {
    title: 'What methods can customers use to pay online?',
    description: 'Credit cards, debit cards, digital wallets, subscriptions, and ACH payments.'
  },
  {
    title: 'Can I track all online transactions in one place?',
    description: 'Yes — the merchant dashboard shows full reporting, analytics, and transaction history.'
  }
];

const b2bpaymentsfaqs = [
  {
    title: 'What are B2B payments?',
    description: 'B2B payments are transactions made between two businesses, often involving larger amounts and corporate cards.'
  },
  {
    title: 'Why do B2B companies need specialized payment solutions?',
    description: 'Because they require lower fees, higher security, faster invoicing, and support for corporate or government cards'
  },
  {
    title:  'Do B2B payments support Level 2 & 3 processing?',
    description: 'Yes — B2B merchants get reduced interchange rates through Level 2 and Level 3 data.'
  },
  {
    title: 'Can B2B companies accept recurring or invoice-based payments?',
    description: 'Yes — recurring billing, invoicing, and ACH are all supported.'
  },
  {
    title: 'Are B2B payments secure?',
    description: 'Yes — they include encryption, fraud tools, and advanced verification to protect large transactions.'
  }
];


// Industries Faqs
const callcentersfaqs = [
  {
    title: 'What makes Call Center businesses suitable for Crazy Merchants’ services?',
    description: 'Because Crazy Merchants specializes in high-risk merchant accounts, they support call centers — including telemarketing and customer-service centers — who often face difficulties with regular payment processors. '
  },
  {
    title: 'What are the main benefits of using Crazy Merchants for call center payment processing?',
    description: ' You get a high approval rate (99%), no setup fee, quick 24-hour approval, and built-in chargeback protection'
  },
  {
    title:  'Does Crazy Merchants offer fraud prevention and secure payment processing for call center merchants?',
    description: 'Yes — they provide secure processing, advanced fraud protection, 24/7 monitoring, and tailored high-risk payment gateway solutions for call centers. '
  },
  {
    title: 'Can my call center integrate Crazy Merchants’ payment processing with existing systems or e-commerce gateways?',
    description: 'Yes — Crazy Merchants supports fast integration with existing platforms and gateways to suit your system'
  },
  {
    title: 'Who would benefit most from choosing Crazy Merchants for a call center merchant account?',
    description: 'High-volume or high-risk call centers — including inbound or outbound, subscription-based, or those doing large sales volumes — will benefit from stable, scalable payment processing that regular processors might decline.'
  }
];

const outboundproductfaqs = [
  {
    title: 'Why do outbound product-selling businesses need a high-risk merchant account?',
    description: 'Because outbound sales have higher chargeback potential and traditional banks often decline these businesses.'
  },
  {
    title: 'How fast can an outbound sales business get approved?',
    description: 'Approvals are typically completed within 24 hours after submitting the required documents.'
  },
  {
    title:  'What payment methods can outbound product sellers accept?',
    description: 'You can accept credit cards, debit cards, recurring payments, and multi-currency transactions.'
  },
  {
    title: 'Does Crazy Merchants offer tools to reduce chargebacks for outbound sellers?',
    description: 'Yes — you get chargeback alerts, fraud filters, and secure processing to keep your risk low.'
  },
  {
    title: 'Can outbound call or sales teams integrate the gateway with their CRM or dialer system?',
    description: 'Yes — the gateway supports API integration for CRMs, dialers, and custom outbound sales platforms'
  }
];

const restaurantfaqs = [
  {
    title: 'Why do restaurants need a specialized merchant account?',
    description: 'Restaurants often handle high daily transactions and tips, so they need stable, secure, high-risk-friendly payment processing.'
  },
  {
    title: 'How quickly can a restaurant get approved for a merchant account?',
    description: 'Most restaurant accounts are approved within 24 hours once documents are submitted.'
  },
  {
    title:  'What payment options can restaurants accept with Crazy Merchants?',
    description: 'Restaurants can accept card payments, contactless payments, online orders, and recurring billing for memberships or meal plans.'
  },
  {
    title: 'Does Crazy Merchants support POS system integration for restaurants?',
    description: 'Yes — the payment gateway integrates smoothly with major POS systems, delivery platforms, and online ordering tools.'
  },
  {
    title: 'How does Crazy Merchants help restaurants manage chargebacks?',
    description: 'You get fraud filters, real-time alerts, and chargeback protection tools designed for high-volume businesses like restaurants.'
  }
];

const medicalbusinessfaqs = [
  {
    title: 'Why are medical-related businesses considered high risk?',
    description: 'Because they often sell specialised products or services that require strict compliance and face higher refund or dispute rates.'
  },
  {
    title: 'How fast can a medical business get approved?',
    description: 'Approvals typically take around 24 hours once all documents are submitted.'
  },
  {
    title:  'What types of medical businesses do you support?',
    description: 'We support clinics, suppliers, telemedicine providers, wellness services, and sellers of medical equipment.'
  },
  {
    title: 'Do medical businesses get secure payment processing?',
    description: 'Yes — you get PCI-compliant processing, fraud protection, and encrypted transactions for sensitive data'
  },
  {
    title: 'Can medical companies accept recurring or subscription payments?',
    description: 'Yes — recurring billing is supported for memberships, treatment plans, and refill programs.'
  }
];

const digitalbooksfaqs = [
  {
    title: 'Why do digital book sellers need a high-risk merchant account?',
    description: 'Digital goods often face higher refund and chargeback rates, so regular processors may decline them.'
  },
  {
    title: 'How fast can an eBook business get approved?',
    description: 'Most applications are approved within 24 hours after submitting the required documents.'
  },
  {
    title:  'What payment methods can digital book sellers accept?',
    description: 'You can accept credit cards, debit cards, global payments, and recurring subscriptions.'
  },
  {
    title: 'Does Crazy Merchants support automated delivery for digital products?',
    description: 'Yes — the gateway integrates with e-commerce platforms to automate digital file delivery after payment.'
  },
  {
    title: 'How does Crazy Merchants help reduce chargebacks for digital products?',
    description: 'You get fraud screening, clear billing descriptors, and real-time alerts to minimise disputes.'
  }
];  

const techsupportfaqs = [
  {
    title: 'Why is tech support considered a high-risk industry?',
    description: 'Because service results vary and support services often face higher chargeback or dispute rates.'
  },
  {
    title: 'How quickly can a tech support business get approved?',
    description: 'Approvals are usually completed within 24 hours once documents are submitted.'
  },
  {
    title:  'Does Crazy Merchants support remote and online tech support businesses?',
    description: 'Yes — you can process payments for remote support, software help, and online troubleshooting services.'
  },
  {
    title: 'What features help reduce chargebacks for tech support merchants?',
    description: 'Fraud filters, alerts, secure processing, and clear customer communication tools.'
  },
  {
    title: 'Can tech support companies accept recurring or subscription payments?',
    description: 'Yes — recurring billing is supported for monthly support plans or maintenance packages.'
  }
]; 

const grocerystoresfaqs = [
  {
    title: 'Why do grocery stores need a specialized merchant account?',
    description: 'Grocery stores handle high-volume daily transactions and need stable, fast, and secure payment processing.'
  },
  {
    title: 'How fast can a grocery business get approved?',
    description: 'Most grocery merchants receive approval within 24 hours after providing the required documents.'
  },
  {
    title:  'What payment types can grocery stores accept with Crazy Merchants?',
    description: 'They can accept credit/debit cards, contactless payments, EBT alternatives, and online order payments.'
  },
  {
    title: 'Does Crazy Merchants support POS and billing system integration for groceries?',
    description: 'Yes — the gateway works with major POS systems, barcode scanners, and online delivery platforms.'
  },
  {
    title: 'How does Crazy Merchants help grocery stores manage chargebacks?',
    description: 'You get fraud tools, chargeback alerts, and secure routing to prevent unnecessary disputes.'
  }
]; 

const eccomercewebsitefaqs = [
  {
    title: 'Why do e-commerce websites require a high-risk merchant account?',
    description: 'Online stores often face higher refund rates, product disputes, and global transactions, making them high-risk for standard processors.'
  },
  {
    title: 'How fast can an e-commerce business get approved?',
    description: 'Most e-commerce merchants receive approval within 24 hours after submitting their documents.'
  },
  {
    title:  'What payment methods can e-commerce stores accept?',
    description: 'They can accept credit/debit cards, digital wallets, subscriptions, and international payments.'
  },
  {
    title: 'Can Crazy Merchants integrate with platforms like Shopify, WooCommerce, or custom sites?',
    description: 'Yes — the gateway supports easy integration with major e-commerce platforms and custom-built stores.'
  },
  {
    title: 'What tools help reduce chargebacks for e-commerce websites?',
    description: 'Fraud filters, 3D Secure, billing transparency, and chargeback alerts to prevent disputes.'
  }
];

const travelbusinessfaqs = [
  {
    title: 'Why is the travel industry considered high risk?',
    description: 'Because bookings can be canceled, plans change, and disputes are more common, leading to higher chargeback rates.'
  },
  {
    title: 'How quickly can a travel business get approved?',
    description: 'Most travel merchants receive approval within 24 hours after submitting the required documents.'
  },
  {
    title:  'What types of travel businesses do you support?',
    description: 'Agencies, tour operators, ticketing services, hotels, vacation planners, and online booking platforms'
  },
  {
    title: 'Does Crazy Merchants offer fraud and chargeback protection for travel payments?',
    description: 'Yes — you get advanced fraud tools, alerts, and secure processing tailored for travel transactions.'
  },
  {
    title: 'Can travel businesses accept international payments?',
    description: 'Yes — multi-currency support is available for global customers and international bookings.'
  }
];

const webdesignfaqs = [
  {
    title: 'Why are web design and marketing businesses considered high risk?',
    description: 'Because results vary from client to client, and service-based industries face higher dispute and chargeback rates'
  },
  {
    title: 'How fast can a web design or marketing agency get approved?',
    description: 'Most agencies are approved within 24 hours once documents are submitted.'
  },
  {
    title:  'What payment types can these businesses accept?',
    description: 'Credit/debit cards, recurring subscriptions, invoicing, and international payments.'
  },
  {
    title: 'Can the payment gateway integrate with agency websites or CRM tools?',
    description: 'Yes — it supports API integration, invoicing systems, and popular agency CRMs.'
  },
  {
    title: 'How does Crazy Merchants help reduce chargebacks for agencies?',
    description: 'With fraud filters, alerts, secure processing, and transparent billing descriptors.'
  }
];

const vapefaqs = [
  {
    title: 'Why is the vape industry considered high risk?',
    description: 'Vape and e-cigarette sales have strict regulations and higher dispute rates, so regular processors often decline them.'
  },
  {
    title: 'How fast can a vape business get approved?',
    description: 'Most vape merchants get approved within 24 hours after submitting compliance documents.'
  },
  {
    title:  'Does Crazy Merchants support both online and retail vape stores?',
    description: 'Yes — you can process payments for physical shops, online stores, and subscription-based vape products.'
  },
  {
    title: 'What payment methods can vape businesses accept?',
    description: 'Credit/debit cards, recurring billing, and multi-currency payments for international customers.'
  },
  {
    title: 'What protections are available for high-risk vape transactions?',
    description: 'Fraud tools, chargeback alerts, and secure routing to keep risk levels low.'
  }
];

    // Map solution titles to their FAQ arrays
    const solutionFaqMap = {
        'Merchant Services': merchantFaqs,
        'Chargeback Management': Chargebackfaqs,
        '3D Secure': threedsecurefaqs,
        'Payment Gateway': paymentgatewayfaqs,
        'MOTO Processing': motofaqs,
        'Mobile Payments': mobilefaqs,
        'Recurring Payments': recurringfaqs,
        'ACH Payments': achfaqs,
        'High-Risk Merchant Account': highriskfaqs,
        'Fraud Prevention': fraudpreventionfaqs,
        'Level 2 & 3 Processing': levelprocessingfaqs,
        'Virtual Terminal': virtualterminalfaqs,
        'Online Payments': onlinepaymentsfaqs,
        'B2B Payments': b2bpaymentsfaqs,
    };

    // Map industry titles to their FAQ arrays
    const industryFaqMap = {
        'Call Centers': callcentersfaqs,
        'Outbound Product Selling Merchant Accounts': outboundproductfaqs,
        'Restaurant Business Merchant Accounts': restaurantfaqs,
        'Medical-Related Business Merchant Accounts': medicalbusinessfaqs,
        'Digital Books & eBook Sellers Merchant Accounts': digitalbooksfaqs,
        'Tech Support Merchant Accounts': techsupportfaqs,
        'Grocery Store Merchant Accounts': grocerystoresfaqs,
        'E-Commerce Website Merchant Accounts': eccomercewebsitefaqs,
        'Travel Business Merchant Accounts': travelbusinessfaqs,
        'Web Design & Marketing Merchant Accounts': webdesignfaqs,
        'Vape & E-Cigarette Merchant Accounts': vapefaqs,
    };

    // Get FAQs based on active tab and selected title
    const getCurrentFaqs = () => {
        if (!selectedTitle) return [];
        
        if (activeTab === "solutions") {
            return solutionFaqMap[selectedTitle] || [];
        } else {
            return industryFaqMap[selectedTitle] || [];
        }
    };

    const displayedFaqs = getCurrentFaqs();


    useEffect(() => {
        const query = new URLSearchParams(location.search);
        const search = query.get("search") || "";
        setSearchValue(search);

        if (search) {
            const section = document.getElementById("faqsSection");
            if (section) section.scrollIntoView({ behavior: "smooth" });

            const searchLower = search.toLowerCase();
            if (SolutionData.some(item => item.title.toLowerCase().includes(searchLower))) {
                setActiveTab("solutions");
            } else if (IndustriesData.some(item => item.title.toLowerCase().includes(searchLower))) {
                setActiveTab("industries");
            }
        }
    }, [location.search]);

    const displayedData = activeTab === "solutions" ? SolutionData : IndustriesData;

    const handleCardClick = (title) => {
        setSelectedTitle(title);
        setActiveSection(2);
        setOpenIndex(null); // Reset FAQ accordion
    };

    const handleBack = () => {
        setActiveSection(1);
        setSelectedTitle(""); // Reset selected title when going back
    };

    let filteredCards = searchValue
        ? [...SolutionData, ...IndustriesData].filter(card =>
            card.title.toLowerCase().includes(searchValue.toLowerCase())
        )
        : displayedData;

    if (!searchValue && !showAll) {
        filteredCards = filteredCards.slice(0, 6);
    }

    const handleReset = () => {
        setSearchValue(""); 
        setActiveTab("solutions"); 
        navigate(`/faqs`);
    };

    // Animation variants (unchanged)
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                duration: 0.8
            }
        }
    };

    const faqItemVariants = {
        closed: {
            height: "auto",
            transition: {
                duration: 0.3,
                ease: "easeInOut"
            }
        },
        open: {
            height: "auto",
            transition: {
                duration: 0.4,
                ease: "easeInOut"
            }
        }
    };

    const answerVariants = {
        closed: {
            opacity: 0,
            height: 0,
            y: -10,
            transition: {
                duration: 0.3,
                ease: "easeInOut"
            }
        },
        open: {
            opacity: 1,
            height: "auto",
            y: 0,
            transition: {
                duration: 0.4,
                ease: "easeOut",
                delay: 0.1
            }
        }
    };

    const iconVariants = {
        closed: { rotate: 0 },
        open: { rotate: 180 }
    };

    return (
        <div className='h-full min-h-[66vh]'>
            {/* Section 1 */}
            {activeSection === 1 && (
                <div id="faqsSection" className='py-10 lg:py-20 px-4 sm:px-10 md:px-20 lg:px-40 flex flex-col gap-10 lg:gap-20'>
                    <div className='flex justify-center items-center gap-6 lg:gap-8'>
                        <button onClick={() => setActiveTab("solutions")} className={`text-lg font-medium py-3 md:py-4 px-8 md:px-10 rounded-2xl cursor-pointer transition ${activeTab === "solutions" ? "bg-[#F29200] text-white" : "border border-[#F29200] text-black hover:bg-[#F29200] hover:text-white"}`}>Solutions</button>
                        <button onClick={() => setActiveTab("industries")} className={`text-lg font-medium py-3 md:py-4 px-8 md:px-10 rounded-2xl cursor-pointer transition ${activeTab === "industries" ? "bg-[#F29200] text-white" : "border border-[#F29200] text-black hover:bg-[#F29200] hover:text-white"}`}>Industries</button>
                    </div>
                    
                    <div className='grid grid-cols-1 lg:grid-cols-2 justify-center gap-6 lg:gap-6 px-0 lg:px-20'>
                        {filteredCards.length > 0 ? (
                            filteredCards.map((data, index) => (
                                <div 
                                    key={index} 
                                    onClick={() => handleCardClick(data.title)} 
                                    className='w-full p-4 py-7 rounded-2xl border-2 border-[#F29200]/40 shadow-md mx-auto flex flex-col gap-4 hover:bg-[#F29200] group hover:text-white cursor-pointer'
                                >
                                    <div className='flex justify-between items-center'>
                                        <div className='flex items-center gap-3 lg:gap-5'>
                                            <div className="bg-[#F29200]/20 p-3 rounded-xl w-12 sm:w-15 flex justify-center items-center group-hover:bg-white">
                                                <MessageCircleQuestionMark className='w-6 h-6 sm:w-7 sm:h-7 text-[#F29200]'/>
                                            </div>
                                            <h1 className='font-medium lg:font-medium text-sm sm:text-lg lg:text-lg'>{data.title}</h1>
                                        </div>
                                        <ArrowRight className='w-6 h-6 text-black group-hover:text-white' />
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="col-span-full text-center text-lg font-medium text-gray-500">
                                Not Found
                            </div>
                        )}
                    </div>
                    
                    {filteredCards.length > 0 && (
                        searchValue ? (
                            <button 
                                onClick={handleReset}
                                className='mx-auto text-lg font-medium py-3 md:py-4 px-8 md:px-10 rounded-2xl bg-[#F29200] hover:bg-amber-500 text-white cursor-pointer w-full max-w-xs text-center'
                            >
                                Show All
                            </button>
                        ) : (
                            !showAll ? (
                                <button 
                                    onClick={() => setShowAll(true)}
                                    className='mx-auto text-lg font-medium py-3 md:py-4 px-8 md:px-10 rounded-2xl bg-[#F29200] hover:bg-amber-500 text-white cursor-pointer w-full max-w-xs text-center'
                                >
                                    View All
                                </button>
                            ) : null
                        )
                    )}
                </div>
            )}

            {/* Section 2 */}
            {activeSection === 2 && (
                <div className='py-15 sm:py-15 lg:py-20 px-4 sm:px-6 md:px-10 lg:px-40 flex flex-col gap-10 sm:gap-15 lg:gap-20'>
                    {/* Header Section */}
                    <div className='flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 sm:gap-8 lg:gap-8'>
                        <button 
                            onClick={handleBack} 
                            className='flex lg:hidden gap-2 sm:gap-4 py-2 px-4 lg:py-3 lg:px-6 items-center border rounded-2xl text-base sm:text-lg lg:text-xl font-medium cursor-pointer hover:border-amber-500 hover:bg-white hover:text-amber-500 bg-amber-500 text-white transition-colors duration-300'
                        >
                            <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                            <span>Back</span>
                        </button>
                        <div>
                            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">{selectedTitle}</h1>
                            <p className="text-gray-600 mt-2">Frequently Asked Questions</p>
                        </div>
                        <button 
                            onClick={handleBack} 
                            className='hidden lg:flex gap-2 sm:gap-4 py-2 px-4 sm:py-3 sm:px-6 items-center border rounded-2xl text-base sm:text-lg lg:text-xl font-medium cursor-pointer hover:border-amber-500 hover:bg-white hover:text-amber-500 bg-amber-500 text-white transition-colors duration-300'
                        >
                            <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                            <span>Back</span>
                        </button>
                    </div>

                    {/* Main Content Grid */}
                    <div className="flex flex-col lg:grid lg:grid-cols-1 gap-15 sm:gap-15 lg:gap-5 w-full">
                        
                        {/* FAQ Section */}
                        <div className='relative overflow-hidden w-full'>
                            <motion.div 
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "0px" }}
                                variants={containerVariants}
                                className="w-full max-w-4xl mx-auto flex flex-col items-center justify-center px-0 sm:px-2 lg:px-8"
                            >
                                {/* FAQ Items */}
                                <motion.div 
                                    variants={containerVariants}
                                    className="w-full space-y-3 sm:space-y-3 lg:space-y-4"
                                >
                                    {displayedFaqs.length > 0 ? (
                                        displayedFaqs.map((faq, index) => (
                                            <motion.div
                                                key={index}
                                                className="border-b-2 border-[#F29200]/40 cursor-pointer w-full bg-white/50 backdrop-blur-sm pb-4 sm:pb-5"
                                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                                whileHover={{ scale: 1.01 }}
                                                whileTap={{ scale: 0.995 }}
                                            >
                                                <motion.div 
                                                    className="flex items-center justify-between"
                                                    variants={faqItemVariants}
                                                >
                                                    <motion.h3 
                                                        className="text-sm sm:text-base lg:text-lg font-medium text-slate-800 pr-3 sm:pr-4 lg:pr-6 leading-relaxed"
                                                        whileHover={{ color: "#f59e0b" }}
                                                        transition={{ duration: 0.2 }}
                                                    >
                                                        {faq.title}
                                                    </motion.h3>
                                                    <motion.div
                                                        variants={iconVariants}
                                                        whileHover={{ color: "#f59e0b" }}
                                                        animate={openIndex === index ? "open" : "closed"}
                                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                                        className="flex-shrink-0 text-xl sm:text-2xl lg:text-3xl font-medium text-slate-700"
                                                    >
                                                        {openIndex === index ?  
                                                            <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5"/> :
                                                            <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5"/> 
                                                        }
                                                    </motion.div>
                                                </motion.div>
                                                
                                                <AnimatePresence>
                                                    {openIndex === index && (
                                                        <motion.p 
                                                            variants={answerVariants}
                                                            initial="closed"
                                                            animate="open"
                                                            exit="closed"
                                                            className="text-xs sm:text-sm lg:text-base text-slate-600 mt-3 sm:mt-4 lg:mt-5 leading-relaxed sm:leading-loose"
                                                        >
                                                            {faq.description}
                                                        </motion.p>
                                                    )}
                                                </AnimatePresence>
                                            </motion.div>
                                        ))
                                    ) : (
                                        <div className="text-center text-lg font-medium text-gray-500 py-10">
                                            No FAQs found for this topic.
                                        </div>
                                    )}
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default FaqsSection;