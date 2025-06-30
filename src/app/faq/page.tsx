"use client";

import React, { useState } from "react";

type FAQ = {
  question: { en: string; te: string };
  answer: { en: string; te: string };
};

const faqs: FAQ[] = [
  {
    question: {
      en: "How much subsidy will I get?",
      te: "సబ్సిడీ ఎంత వస్తుంది?",
    },
    answer: {
      en: "₹30,000 for 1kW, ₹60,000 for 2kW, and up to ₹78,000 for 3kW–10kW.",
      te: "1kW కి ₹30,000, 2kW కి ₹60,000, 3kW–10kW కి ₹78,000 వరకూ వస్తుంది.",
    },
  },
  {
    question: {
      en: "Why ₹78,000 subsidy even for 10kW?",
      te: "4kW, 5kW, 10kW వేసినా కూడా ₹78,000 ఎందుకు?",
    },
    answer: {
      en: "The government's intention is to support every middle-class and lower-income family. That's why the full subsidy of up to ₹78,000 is provided only up to 3kW. Those installing systems larger than 3kW (4kW, 5kW, 10kW) likely have higher power needs and are more financially capable.",
      te: "ప్రభుత్వ ఉద్దేశం – ప్రతి మధ్యతరగతి & కింది తరగతి కుటుంబాలకు మద్దతు ఇవ్వడమే. అందుకే 3kW వరకే పూర్తి సబ్సిడీ ఇవ్వడం – ₹78,000 వరకు. 3kW కంటే ఎక్కువ కెపాసిటీ (4kW, 5kW, 10kW) వేసేవాళ్లు అంటే ఎక్కువ పవర్ అవసరం ఉన్నవాళ్లు కాస్త డబ్బున్నవాళ్లు.",
    },
  },
  {
    question: {
      en: "Will solar turn off during power cuts?",
      te: "కరంటు పోతే సోలార్ కూడా ఆఫ్ అవుతుందా?",
    },
    answer: {
      en: "Yes, in an On-Grid solar system, when there's a power cut, the solar system also turns off. This is for safety reasons, to prevent reverse power from being sent into the grid lines. Since solar is connected to the government's electricity board, it must turn off when power goes out – it's mandatory!",
      te: "అవును, On-Grid సోలార్ సిస్టమ్‌లో కరెంటు పోయినప్పుడు సోలార్ కూడా ఆఫ్ అవుతుంది. ఇది భద్రత కోసమే. రివర్స్ పవర్‌ను లైన్‌లోకి పంపకూడదనే ఉద్దేశ్యం. సోలార్ గవర్నమెంటు కరెంటు బోర్డుతో కనెక్ట్ అయి ఉంటుంది. అందుకే పవర్ పోతే, అది కూడా ఆఫ్ అవుతుంది – అది తప్పనిసరి!",
    },
  },
  {
    question: {
      en: "Benefits of on-grid solar?",
      te: "On-grid సోలార్ వల్ల మాకేం లాభం?",
    },
    answer: {
      en: `✅ ₹0 electricity bill\n✅ Net metering savings\n✅ Govt subsidy\n✅ Low maintenance\n✅ Payback in 3–5 years`,
      te: `✅ విద్యుత్ బిల్లు ₹0 అవుతుంది\n✅ నెట్ మీటరింగ్ లాభం\n✅ సబ్సిడీ వస్తుంది\n✅ తక్కువ మెయింటెనెన్స్\n✅ 3–5 ఏళ్లలో పెట్టుబడి తిరిగి వస్తుంది`,
    },
  },
  {
    question: {
      en: "Some companies offer ₹1 lakh with ₹78k subsidy + ₹22k discount. What about your offer?",
      te: "కొన్ని కంపెనీలు ₹78వేలు సబ్సిడీ + ₹22వేలు డిస్కౌంట్ అంటూ ₹1లక్ష ఆఫర్ అంటున్నారు. మరి మీ ఆఫర్ ఏం?",
    },
    answer: {
      en: `Take a quotation from them and compare.\n\nThey often inflate the initial price and then call it a discount.\n\nExample: If an item worth ₹100 is quoted as ₹150, and then shown with ₹40 discount – who actually loses ₹10?\n\nThink about it.`,
      te: `వారిదగ్గర నుంచి కొటేషన్ తీసుకోండి.. కంపేర్ చేయండి.\n\nవాళ్ళు ముందు చెప్పడమే ఎక్కువగా చెప్పి దానిలో డిస్కౌంట్ అని అంటారు.\n\nఉదాహరణకు: ₹100 విలువ చేసే వస్తువుని ₹150 అని చెప్పి, ఆపై ₹40 డిస్కౌంట్ అంటే... ₹10 నష్టం అయ్యేది ఎవరు?\n\nఆలోచించండి.`,
    },
  },

  {
    question: {
      en: "How much will this solar system reduce my electricity bill?",
      te: "ఈ సోలార్ సిస్టమ్ కరెంటు బిల్లును ఎంత వరకు తగ్గిస్తుంది?",
    },
    answer: {
      en: `It depends on the solar system size and your load usage pattern.\n\nFor example, a 3kW system typically generates an average of 350–400 units per month.\n\nIf your monthly electricity bill is between ₹2,000 and ₹3,000, it's likely to become almost ₹0.`,
      te: `అది సోలార్ సిస్టమ్ సైజ్ మరియు మీ లోడ్ వాడే విధానం మీద ఆధారపడి ఉంటుంది.\n\nఉదాహరణకి 3kW సిస్టమ్ నెలకు సగటుగా 350–400 యూనిట్లు ఉత్పత్తి చేస్తుంది.\n\nమీ నెల బిల్లు ₹2,000 నుంచి ₹3,000 మధ్యలో ఉంటే, ఇది దాదాపు ₹0 అయ్యే అవకాశం ఉంటుంది.`,
    },
  },
  {
    question: {
      en: "What about warranty and maintenance?",
      te: "వారంటీ మరియు మెయింటెనెన్స్ ఎలా ఉంటుంది?",
    },
    answer: {
      en: `* Solar Panels: Have a warranty of 25 to 30 years. This 30-year warranty covers performance, applying if panels do not produce voltage or stop working. It does not apply to glass damage.\n* Inverter: Comes with a 7-year warranty.\n* Entire System: Has a 5-year warranty from Vortex.\n\nSince there are no batteries, maintenance is very low. Wiping the solar panels with water once a month is sufficient.`,
      te: `* సోలార్ పానెల్స్: కి 25 నుంచి 30 సంవత్సరాల వరకు వారంటీ ఉంటుంది. ఈ 30 సంవత్సరాలు పెర్ఫార్మెన్స్‌లో వారంటీ ఉంటుంది. పానెల్స్ వోల్టేజ్ రాకపోయినా ప్యానల్ పని చేయకపోయినా వారంటీ వర్తిస్తుంది.\n* గ్లాస్ డామేజ్ కి వర్తించదు.\n* ఇన్వెర్టర్: 7 సంవత్సరాల వారంటీ ఉంటుంది.\n* పూర్తి సిస్టమ్: కు 5 సంవత్సరాల వరకు వొర్టెక్స్ నుంచి వారంటీ ఉంటుంది.\n\nబ్యాటరీలు ఉండవు కాబట్టి మెయింటెనెన్స్ చాలా తక్కువ.\nనెలకు ఒక్కసారి సోలార్ ప్లేట్‌లను నీటితో కడగడం సరిపోతుంది.`,
    },
  },
  {
    question: {
      en: "Does the system generate power during rain and cloudy weather?",
      te: "వర్షా కాలంలో మరియు మబ్బులు వచ్చినప్పుడు కూడా పవర్ ఉత్పత్తి అవుతుందా?",
    },
    answer: {
      en: `Yes, it does, but the power generation will be lower.\n\nSolar panels work even with sunlight through clouds. However, since there isn't full sunshine, fewer units will be generated.\n\nThe system does not work at night as there is no sun.\n\nYou can check the daily unit generation on a mobile app.`,
      te: `అవును... కానీ తక్కువగా ఉత్పత్తి అవుతుంది.\n\nమబ్బులు ఉన్నా కూడా సూర్యకాంతి వెలుతురు వలన పానెల్స్ పనిచేస్తాయి. అయితే పూర్తి సూర్యరశ్మి లేనందున యూనిట్లు తక్కువగా వస్తాయి.\n\nరాత్రి సూర్యుడు ఉండడు కనుక రాత్రి పని చేయదు.\n\nరోజు ఎంత యూనిట్లు వచ్చాయి అని మొబైల్ యాప్‌లో చూసుకోవచ్చు.`,
    },
  },
  {
    question: {
      en: "How do we know how much solar power we sold to the government?",
      te: "గవర్నమెంటుకు మనం సోలార్ ఎంత అమ్మినామని మాకెట్ల తెలుస్తాది?",
    },
    answer: {
      en: `After installing the solar system, DISCOM (Distribution Company, i.e., the electricity board) will change your current meter.

Your current meter is a unidirectional meter, meaning power only comes from the government to you.

The meter they change it to is a bidirectional meter, also known as a solar meter. This means you can send the power you generate to the government, and you can also receive power from the government. Both import and export happen in both directions. These import/export readings are recorded separately in the meter.`,
      te: `సోలార్ సిస్టమ్‌ని ఇన్‌స్టాల్ చేసాక డిస్కామ్ వాళ్ళు మీ ప్రస్తుత మీటర్‌ను చేంజ్ చేస్తారు.
ప్రస్తుతం ఉన్నది యునీడైరెక్షనల్ మీటర్ అంటే పవర్ గవర్నమెంటు నుంచి మనకు మాత్రమే వస్తుంది.
తరువాత చేంజ్ చేసేది బై డైరెక్షనల్ మీటర్ అదే సోలార్ మీటర్ అంటే మనం చేసిన ఉత్పత్తిని గవర్నమెంటుకు పంపొచ్చు, గవర్నమెంటు నుంచి మనము తీసుకోవచ్చు. రెండు వైపులా ఎగుమతి, దిగుమతి అవుతుంది. ఈ import/export రీడింగ్స్ మీటర్‌లో సెపరేట్‌గా రికార్డ్ అవుతాయి.
`,
    },
  },
  {
    question: {
      en: "What is the process? How to register? What documents are needed?",
      te: "ప్రాసెస్ ఏంటి? రిజిస్ట్రేషన్ ఎలా చేసుకోవడం? డాక్యుమెంట్స్ ఏమేం కావాలి?",
    },
    answer: {
      en: `Our company handles everything from consultation to installation.
Vortex takes full responsibility for the entire document process; you only need to sign. For PM Surya Ghar registration, you'll also need to share the OTPs received on your mobile.

Required Documents:
Aadhaar Card
Electricity Bill
PAN Card
Bank Passbook
Mobile Number
Email ID
Signatures on the Agreement`,
      te: `మొత్తం కన్సల్టేషన్ నుంచి ఇన్‌స్టాలేషన్ దాకా అన్నీ మా కంపెనీ చూసుకుంటుంది.
పూర్తి డాక్యుమెంట్స్ ప్రాసెస్ అంతా వొర్టెక్స్ బాధ్యత. కేవలం మీరు సంతకాలు చేస్తే సరిపోతుంది. మరియు పీఎం సూర్యఘర్ రిజిస్ట్రేషన్ కోసం ఆన్‌లైన్‌లో మీ మొబైల్‌కి వచ్చే OTPలను మాతో పంచుకోవాలి.

కావాల్సిన డాక్యుమెంట్స్:
ఆధార్ కార్డ్
ఎలక్ట్రిసిటీ బిల్లు
పాన్ కార్డ్
బ్యాంక్ బుక్
మొబైల్ నంబర్
మెయిల్ ఐడి
అగ్రిమెంట్‌పై సంతకాలు`,
    },
  },

  {
    question: {
      en: `Is everything included in the price you quoted?`,
      te: `మీరు ఇచ్చిన ధరలోనే అన్నీ చేసి పెడతారా..?`,
    },
    answer: {
      en: `Yes, the price we quote includes everything from A to Z! This covers:

* Registration
* Documentation
* Material supply
* Lifting
* Installation
* Commissioning
* Testing
* Meter fitting
* Department-side logistics
* 5 years of service.

The only additional costs you might incur are if your current meter's capacity is too low. In that case, there could be charges up to ₹2400 per kW to add extra load, and a solar meter charge of up to ₹2500, which will be added to your first electricity bill. You'll be responsible for these specific charges.`,
      te: `అవును.. మేము ఇచ్చిన ధరలోనే మీకు రిజిస్ట్రేషన్, డాక్యుమెంట్స్, మెటీరియల్స్ సప్లై, లిఫ్టింగ్, ఇన్‌స్టాలేషన్, కమిషనింగ్, టెస్టింగ్, మీటర్ ఫిట్, డిపార్ట్‌మెంట్ వైపు లాజిస్టిక్స్, 5 సంవత్సరాల సర్వీసు A2Z అన్నీ మేము చూసుకుంటాము.
కేవలం మీ మీటర్ యొక్క కెపాసిటీ తక్కువ ఉంటే అదనపు లోడ్ యాడ్ చేసుకోవడానికి 1kW కి ₹2400 వరకు ఛార్జీలు మరియు సోలార్ మీటర్ ఛార్జి ₹2500 వరకు మీ మొదటి బిల్లులో యాడ్ అయ్యి వస్తుంది, అది మాత్రం మీరు కట్టుకోవాలి.
`,
    },
  },

  {
    question: {
      en: `When will I receive the Subsidy?`,
      te: `సబ్సిడీ ఎప్పుడు వస్తుంది..?`,
    },
    answer: {
      en: `After your installation is complete, all documents will be prepared and uploaded to the PM Surya Ghar website. Once uploaded, government officials will inspect, take photos, and approve. After approval, the subsidy will be credited to your bank account within 15 to 30 days.`,
      te: `ఇన్‌స్టాలేషన్ పూర్తి అయిన తరువాత డాక్యుమెంట్స్ అన్నీ రెడీ చేసి పీఎం సూర్యఘర్ వెబ్‌సైట్‌లో అప్‌లోడ్ చేయడం జరుగుతుంది. అప్‌లోడ్ చేశాక గవర్నమెంటు వాళ్ళు ఇన్‌స్పెక్షన్‌కి వచ్చి ఫోటోలు తీసుకొని అప్రూవ్ ఇస్తారు. అలా అప్రూవ్ అయిన 15 నుంచి నెల రోజుల్లోపు సబ్సిడీ మీ యొక్క సొంత బ్యాంక్ అకౌంట్‌లో జమ అవుతుంది.`,
    },
  },

  {
    question: {
      en: `Will my AC, geyser, and washing machine work with solar?`,
      te: `మా ఇంట్లో ఏసీ ఉంది, గీసర్ ఉంది, వాషింగ్ మెషిన్ ఉంది. అవన్నీ పని చేస్తాయా..?`,
    },
    answer: {
      en: `Absolutely! All appliances connected to your meter at home, including your AC, geyser, and washing machine, will work perfectly fine with solar power. The solar inverter's output is 230 volts, which is the same voltage as your home's power supply. Anything that operates on 230 volts will work with your solar system.`,
      te: `సందేహమే లేదు! మీ ఇంట్లో మీ మీటర్‌కు ఏమేం లోడ్‌లు ఉన్నాయో అవన్నీ సోలార్ వల్ల పని చేస్తాయి. సోలార్ ఇన్వెర్టర్ అవుట్‌పుట్ 230 వోల్టులు... ఇంటికి వచ్చే పవర్ కూడా 230 వోల్టులే. 230 వోల్టులతో పని చేసే ప్రతిదీ మన సోలార్ వల్ల పని చేస్తుంది.`,
    },
  },

  {
    question: {
      en: `Can I shift my installed system to another place or another floor?`,
      te: `నేను ఇన్‌స్టాల్ చేసుకున్న సిస్టమ్‌ని వేరే ప్లేస్‌కి షిఫ్ట్ చేసుకోవచ్చా, లేదా ఇంకో అంతస్తు వేసుకొని దానిపైకి షిఫ్ట్ చేసుకోవచ్చా??`,
    },
    answer: {
      en: `Yes, you can! The system can be dismantled and re-installed. However, you will incur labor charges, wiring charges, and fitting charges.

If you're moving it to another floor within the same house, there won't be any additional meter-related application. However, if the place changes, you'll need to obtain approval from the meter department.`,
      te: `చేసుకోవచ్చు. డిస్‌మాంటిల్ చేసి రీ-ఇన్‌స్టాల్ చేస్తారు. లేబర్ ఛార్జీలు, వైరింగ్ ఛార్జీలు, ఫిట్టింగ్ ఛార్జీలు అవుతాయి.

ఒకవేళ అదే ఇంట్లో ఇంకో అంతస్తు వేసి దానిపైకి షిఫ్ట్ చేసుకున్నట్లయితే మీటర్‌కు సంబంధించి ఎలాంటి అప్లికేషన్ ఉండదు. ప్లేస్ చేంజ్ అయితే మీటర్ వైపు అప్రూవల్ తీసుకోవాల్సి ఉంటుంది.
`,
    },
  },
];

export default function FAQPage() {
  const [mode, setMode] = useState<"te" | "en">("te");

  const toggleMode = () => {
    setMode((prev) => (prev === "te" ? "en" : "te"));
  };

  return (
    <main className=" mx-auto px-4 sm:px-6 py-23  bg-white font-sans">
      {" "}
      {/* Adjusted px for better responsiveness */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4 sm:gap-0">
        {" "}
        {/* Added flex-col for small screens and gap */}
        <h1 className="text-3xl md:text-4xl font-extrabold text-green-700 tracking-tight text-center sm:text-left mb-4 sm:mb-0">
          {" "}
          {/* Centered title on small screens */}
          PM సూర్యఘర్ యోజన - FAQ
        </h1>
        <button
          onClick={toggleMode}
          className="bg-blue-600 hover:bg-blue-700 text-white text-sm md:text-base px-5 py-2.5 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50" // Enhanced button styles
        >
          {mode === "te" ? "Switch to English" : "తెలుగుకు మారండి"}
        </button>
      </div>
      <div className="space-y-5 sm:space-y-6">
        {" "}
        {/* Slightly reduced space for a tighter look or kept it the same based on preference */}
        {faqs.map((faq, idx) => (
          <div
            key={idx}
            className="bg-gray-50 border border-gray-200 rounded-xl p-5 shadow-sm transition duration-300 ease-in-out hover:shadow-md hover:bg-gray-100 cursor-pointer" // Added cursor-pointer and improved hover effect
          >
            <h3
              className={`text-lg font-semibold mb-2 ${
                // Added margin-bottom to question for better separation
                mode === "te" ? "text-blue-700" : "text-purple-700"
              }`}
            >
              {mode === "te" ? faq.question.te : faq.question.en}
            </h3>
            <p className="mt-2 text-gray-800 leading-relaxed whitespace-pre-line">
              {mode === "te" ? faq.answer.te : faq.answer.en}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}
