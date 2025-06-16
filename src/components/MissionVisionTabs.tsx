'use client';

import { useState } from 'react';
import Image from 'next/image';

type Lang = 'en' | 'te';
type Tab = 'mission' | 'vision';

const MissionVisionTabs = () => {
  const [activeTab, setActiveTab] = useState<Tab>('mission');
  const [lang, setLang] = useState<Lang>('en');

  const content = {
    mission: {
      en: {
        title: 'OUR MISSION',
        statement:
          'To empower communities with clean, sustainable, and affordable energy solutions using advanced solar technologies.',
        points: [
          '🌞 Promote solar adoption for homes and businesses with innovative solutions.',
          '🤝 Support government initiatives like the PM Surya Ghar Scheme by guiding households on subsidized solar installations.',
          '♻️ Drive environmental change by reducing carbon emissions and fossil fuel reliance.',
          '👨‍🔧 Deliver expert consultation, installation, and long-term support for every client.'
        ],
        image: '/mission.png'
      },
      te: {
        title: 'మా మిషన్',
        statement:
          'అధునాతన సోలార్ సాంకేతికతలతో శుభ్రమైన, స్థిరమైన మరియు సరసమైన శక్తి పరిష్కారాలను సమాజానికి అందించడం మా లక్ష్యం.',
        points: [
          '🌞 ఇళ్లకు మరియు వ్యాపారాలకు సోలార్ పరిష్కారాలను ప్రోత్సహించడం.',
          '🤝 PM సూర్య ఘర్ పథకాన్ని సబ్సిడీలతో గైడ్ చేయడం ద్వారా మద్దతు ఇవ్వడం.',
          '♻️ కర్బన్ ఉద్గారాలను తగ్గించడంలో సహాయపడటం.',
          '👨‍🔧 సలహా, సంస్థాపన మరియు సేవలలో నిపుణుల మద్దతు అందించడం.'
        ],
        image: '/mission.png'
      }
    },
    vision: {
      en: {
        title: 'OUR VISION',
        statement:
          'To be a leading force in making solar energy accessible, trusted, and impactful across all regions — urban or remote.',
        points: [
          '🌍 Build a greener, more energy-independent India.',
          '📈 Inspire innovation and accelerate adoption of clean technologies.',
          '🧭 Ensure sustainability in every process — from materials to maintenance.',
          '🏡 Make solar solutions accessible to every home, including those under the PM Surya Ghar Yojana.'
        ],
        image: '/vision.png'
      },
      te: {
        title: 'మా దృష్టికోణం',
        statement:
          'అన్ని ప్రాంతాల్లో — పట్టణాల నుండి పల్లెల వరకు — సోలార్ శక్తిని నమ్మదగినదిగా మరియు సులభతరంగా చేయడంలో ముందుండే శక్తిగా మారడం.',
        points: [
          '🌍 గ్రీన్ ఇండియాను నిర్మించడంలో భాగస్వామ్యం కావడం.',
          '📈 పరిశుద్ధ సాంకేతికతల వినియోగాన్ని వేగవంతం చేయడం.',
          '🧭 పదార్థాల నుండి నిర్వహణ వరకు ప్రతి దశలో స్థిరత్వాన్ని నిర్ధారించటం.',
          '🏡 ప్రతి ఇంటికీ సోలార్ సాంకేతికతను అందుబాటులోకి తీసుకురావడం.'
        ],
        image: '/vision.png'
      }
    }
  };

  const current = content[activeTab][lang];

  return (
    <section className="bg-green-50 py-12 px-6 md:px-16 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-8">
        <div className="space-x-4">
          <button
            onClick={() => setActiveTab('mission')}
            className={`px-6 py-2 text-lg font-semibold rounded-t-md transition ${
              activeTab === 'mission'
                ? 'bg-green-400 text-white shadow'
                : 'bg-green-100 text-green-800'
            }`}
          >
            {lang === 'en' ? 'Our Mission' : 'మా మిషన్'}
          </button>
          <button
            onClick={() => setActiveTab('vision')}
            className={`px-6 py-2 text-lg font-semibold rounded-t-md transition ${
              activeTab === 'vision'
                ? 'bg-green-400 text-white shadow'
                : 'bg-green-100 text-green-800'
            }`}
          >
            {lang === 'en' ? 'Our Vision' : 'మా దృష్టికోణం'}
          </button>
        </div>

        <button
          onClick={() => setLang(lang === 'en' ? 'te' : 'en')}
          className="px-4 py-1.5 text-sm bg-green-500 rounded shadow hover:bg-gray-300 transition"
        >
          {lang === 'en' ? 'తెలుగుకు మారండి' : 'Switch to English'}
        </button>
      </div>

      <div className="bg-white p-6 md:p-10 rounded-md shadow flex flex-col-reverse md:flex-row gap-10 items-center">
        <div className="md:w-2/3">
          <h2 className="text-3xl font-bold text-green-700 mb-4">{current.title}</h2>
          <p className="text-black font-semi-bold mb-4">{current.statement}</p>
          <ul className="list-disc list-inside text-yellow-900 font-600 space-y-3">
            {current.points.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </div>

        <div className="md:w-1/3 flex justify-center">
          <Image
            src={current.image}
            alt={`${current.title} Illustration`}
            width={400}
            height={300}
            className="rounded-lg shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default MissionVisionTabs;
