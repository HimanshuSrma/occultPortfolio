export type Planet = 'ketu' | 'venus' | 'sun' | 'moon' | 'mars' | 'rahu' | 'jupiter' | 'saturn' | 'mercury';

export interface PlanetOption {
  readonly planet: Planet;
  readonly textEn: string;
  readonly textHi: string;
}

export interface PlanetQuestion {
  readonly id: number;
  readonly questionEn: string;
  readonly questionHi: string;
  readonly options: readonly PlanetOption[];
}

export const PLANET_LABELS: Record<Planet, { en: string; hi: string; icon: string; color: string }> = {
  ketu:    { en: 'Ketu',    hi: 'केतु',    icon: '🔮', color: '#8b5cf6' },
  venus:   { en: 'Venus',   hi: 'शुक्र',   icon: '🌸', color: '#ec4899' },
  sun:     { en: 'Sun',     hi: 'सूर्य',    icon: '☀️', color: '#f59e0b' },
  moon:    { en: 'Moon',    hi: 'चंद्र',    icon: '🌙', color: '#94a3b8' },
  mars:    { en: 'Mars',    hi: 'मंगल',    icon: '🔥', color: '#ef4444' },
  rahu:    { en: 'Rahu',    hi: 'राहु',    icon: '🌀', color: '#6366f1' },
  jupiter: { en: 'Jupiter', hi: 'बृहस्पति', icon: '📘', color: '#f97316' },
  saturn:  { en: 'Saturn',  hi: 'शनि',    icon: '🔧', color: '#64748b' },
  mercury: { en: 'Mercury', hi: 'बुध',     icon: '🗣️', color: '#22c55e' },
};

export const PLANET_QUESTIONS: readonly PlanetQuestion[] = [
  {
    id: 1,
    questionEn: 'When you have to present yourself in a group...',
    questionHi: 'जब आपको खुद को किसी ग्रुप में प्रेजेंट करना हो...',
    options: [
      { planet: 'ketu',    textEn: 'Speak mystically or stay enigmatic',            textHi: 'गूढ़ या मिस्टिक बातें करते हैं' },
      { planet: 'venus',   textEn: 'Dress well, stylish & appealing',               textHi: 'स्टाइलिश कपड़े, अच्छा लुक बनाते हैं' },
      { planet: 'sun',     textEn: 'Speak with authority & clarity',                 textHi: 'अधिकार के साथ बोलते हैं' },
      { planet: 'moon',    textEn: 'Stay calm, speak with emotional depth',          textHi: 'शांत, पर गहराई से' },
      { planet: 'mars',    textEn: 'Direct & energetic delivery',                    textHi: 'सीधा, सीना तानकर' },
      { planet: 'rahu',    textEn: 'Steal the spotlight with bold moves',            textHi: 'सबका ध्यान अपनी ओर खींचते हैं' },
      { planet: 'jupiter', textEn: 'Teach with insights',                            textHi: 'गहराई से समझाते हैं' },
      { planet: 'saturn',  textEn: 'Ticking off each logical point',                 textHi: 'एक-एक पॉइंट टिक करते हैं' },
      { planet: 'mercury', textEn: 'Use wit, jokes, or wordplay to connect',         textHi: 'बातों से सबको इंप्रेस करते हैं' },
    ],
  },
  {
    id: 2,
    questionEn: 'When it\'s about money or spending...',
    questionHi: 'जब पैसे कमाने या खर्च करने का सवाल आता है...',
    options: [
      { planet: 'ketu',    textEn: '"Whatever little I have is enough"',             textHi: 'मिनिमल रहते हैं, "जितना है उतना काफ़ी"' },
      { planet: 'venus',   textEn: 'Spend on décor, brands & comforts',              textHi: 'ब्रांड्स, सुंदर चीज़ों में खर्च' },
      { planet: 'sun',     textEn: 'Maintain dignity & save responsibly',             textHi: 'सेविंग और इज्जत दोनों ध्यान में रखते हैं' },
      { planet: 'moon',    textEn: 'Spend on emotions, gifts, comfort',              textHi: 'भावनाओं पर खर्च करते हैं' },
      { planet: 'mars',    textEn: 'Earn fast, spend fast',                           textHi: 'तेजी से कमा लेते हैं' },
      { planet: 'rahu',    textEn: 'Show off through brands',                        textHi: 'दिखावा ज़रूरी है' },
      { planet: 'jupiter', textEn: 'Save for long-term goals',                       textHi: 'लॉन्ग टर्म प्लान बनाते हैं' },
      { planet: 'saturn',  textEn: 'Budget and cut-down mindset',                    textHi: 'धीरे-धीरे सेव करते हैं' },
      { planet: 'mercury', textEn: 'Log all income-expense, track everything',       textHi: 'खर्च और इनकम का डिटेल रिकॉर्ड रखते हैं' },
    ],
  },
  {
    id: 3,
    questionEn: 'When you have to give a presentation in office/team...',
    questionHi: 'जब ऑफिस या टीम में प्रेजेंटेशन देना हो...',
    options: [
      { planet: 'ketu',    textEn: 'Quiet but impactful statements',                 textHi: 'कम बोलते हैं, पर असरदार' },
      { planet: 'venus',   textEn: 'Top-class designs & aesthetics',                 textHi: 'स्लाइड्स और डिजाइन टॉप क्लास' },
      { planet: 'sun',     textEn: 'Command attention, direct style',                textHi: 'बोलना मेरा काम है, सब ध्यान से सुनते हैं' },
      { planet: 'moon',    textEn: 'Use emotional storytelling',                     textHi: 'कहानी सुनाते हैं' },
      { planet: 'mars',    textEn: 'Get straight to the point',                      textHi: 'पॉइंट-टू-पॉइंट समझाते हैं' },
      { planet: 'rahu',    textEn: 'Trendy lines, catchy format',                    textHi: 'Catchy लाइन, Trending टोन' },
      { planet: 'jupiter', textEn: 'Talk in depth, go philosophical',                textHi: 'गहरी बातों से समझाते हैं' },
      { planet: 'saturn',  textEn: 'Use structure, data-backed logic',               textHi: 'डेटा और मेहनत से तर्क देते हैं' },
      { planet: 'mercury', textEn: 'Win with jokes + facts',                         textHi: 'जोक और फैक्ट्स से हिट करते हैं' },
    ],
  },
  {
    id: 4,
    questionEn: 'When choosing a house/property...',
    questionHi: 'जब घर या प्रॉपर्टी लेनी हो...',
    options: [
      { planet: 'ketu',    textEn: 'Peaceful, spiritual places',                     textHi: 'शांत जगह, ध्यान वाली' },
      { planet: 'venus',   textEn: 'Vastu-compliant & beautiful interiors',          textHi: 'एस्थेटिक हो, सुंदर हो' },
      { planet: 'sun',     textEn: 'Prestigious, elite societies',                   textHi: 'प्रीमियम सोसाइटी हो' },
      { planet: 'moon',    textEn: 'Family-friendly locality',                       textHi: 'फैमिली फ्रेंडली हो' },
      { planet: 'mars',    textEn: 'Secure & practical layout',                      textHi: 'मजबूत और प्रैक्टिकल हो' },
      { planet: 'rahu',    textEn: 'Most trending or popular location',              textHi: 'जो सबसे ज्यादा फेमस हो' },
      { planet: 'jupiter', textEn: 'School & temples nearby',                        textHi: 'स्कूल, मंदिर पास हों' },
      { planet: 'saturn',  textEn: 'Budget-friendly and durable',                    textHi: 'बजट और सुविधा वाली हो' },
      { planet: 'mercury', textEn: 'Close to workplace, easy commute',               textHi: 'ऑफिस के पास हो, कन्विनियंस' },
    ],
  },
  {
    id: 5,
    questionEn: 'When you get free time...',
    questionHi: 'जब आपको थोड़ा टाइम मिलता है...',
    options: [
      { planet: 'ketu',    textEn: 'Meditation, mystic arts',                        textHi: 'मेडिटेशन, आर्ट्स' },
      { planet: 'venus',   textEn: 'Netflix, coffee, cozy space',                    textHi: 'Netflix, कॉफ़ी, सुंदर सेटअप' },
      { planet: 'sun',     textEn: 'Motivational TED Talks',                         textHi: 'कोई म्यूजिक, मोटिवेशनल वीडियो' },
      { planet: 'moon',    textEn: 'Journaling, music, writing',                     textHi: 'डायरी, म्यूजिक' },
      { planet: 'mars',    textEn: 'Hiking, gym, biking',                            textHi: 'एडवेंचर या रनिंग' },
      { planet: 'rahu',    textEn: 'Making trending reels',                          textHi: 'ट्रेंडिंग रील्स बनाना' },
      { planet: 'jupiter', textEn: 'Studying astrology/spirituality',                textHi: 'ऑनलाइन पढ़ाई या क्लास' },
      { planet: 'saturn',  textEn: 'Making DIY stuff',                               textHi: 'DIY चीज़ें बनाना' },
      { planet: 'mercury', textEn: 'Listening to podcasts, watching YouTube',         textHi: 'पॉडकास्ट या ब्लॉग सुनना' },
    ],
  },
  {
    id: 6,
    questionEn: 'When someone asks for help...',
    questionHi: 'जब कोई मदद माँगे तो आप...',
    options: [
      { planet: 'ketu',    textEn: 'Silent, anonymous help',                         textHi: 'चुपचाप मदद कर देते हैं' },
      { planet: 'venus',   textEn: 'Gifting, decorating, adding beauty',             textHi: 'गिफ्ट या सजावटी तरीकों से' },
      { planet: 'sun',     textEn: 'Offer direction or lead the way',                textHi: 'रास्ता दिखाते हैं' },
      { planet: 'moon',    textEn: 'Listen & give emotional support',                textHi: 'सुनते हैं, भावनात्मक सहारा' },
      { planet: 'mars',    textEn: 'Jump in to take action',                         textHi: 'तुरंत मदद करते हैं' },
      { planet: 'rahu',    textEn: 'Help publicly, share it too',                    textHi: 'सबको बताते हुए करते हैं' },
      { planet: 'jupiter', textEn: 'Offer deep guidance',                            textHi: 'समझदारी से गाइड करते हैं' },
      { planet: 'saturn',  textEn: 'Build a step-wise solution',                     textHi: 'सिस्टम बनाकर करते हैं' },
      { planet: 'mercury', textEn: 'Help through calls, messaging, discussions',     textHi: 'कनेक्शन और बात से करते हैं' },
    ],
  },
  {
    id: 7,
    questionEn: 'When dealing with clients or relatives...',
    questionHi: 'जब क्लाइंट या रिश्तेदार से डील करनी हो...',
    options: [
      { planet: 'ketu',    textEn: 'Stay observant, quiet',                          textHi: 'साइलेंट ऑब्जर्व करते हैं' },
      { planet: 'venus',   textEn: 'Sweet and polite talk',                          textHi: 'मीठा बोलते हैं' },
      { planet: 'sun',     textEn: 'Direct, to the point',                           textHi: 'सीधा पॉइंट पर आते हैं' },
      { planet: 'moon',    textEn: 'Build emotional rapport',                        textHi: 'रिलेशन बिल्ड करते हैं' },
      { planet: 'mars',    textEn: 'Close the deal quickly',                         textHi: 'डील फाइनल करने का फोकस' },
      { planet: 'rahu',    textEn: 'Impress through status',                         textHi: 'शो-ऑफ से इंप्रेस करते हैं' },
      { planet: 'jupiter', textEn: 'Talk with ethics & wisdom',                      textHi: 'लॉजिक और नैतिक बात करते हैं' },
      { planet: 'saturn',  textEn: 'Set clear boundaries & rules',                   textHi: 'नियम समझाते हैं' },
      { planet: 'mercury', textEn: 'Speak with facts, friendly tone',                textHi: 'स्माइल + पिच के साथ बात करते हैं' },
    ],
  },
  {
    id: 8,
    questionEn: 'When you feel lonely or face problems...',
    questionHi: 'जब कोई तकलीफ या अकेलापन हो...',
    options: [
      { planet: 'ketu',    textEn: 'Go into meditation or read',                     textHi: 'ध्यान या मंत्र का सहारा' },
      { planet: 'venus',   textEn: 'Watch movies, relax in comfort',                 textHi: 'मूवी, आरामदायक माहौल' },
      { planet: 'sun',     textEn: 'Stay composed & self-contained',                 textHi: 'खुद को सख्त बनाते हैं' },
      { planet: 'moon',    textEn: 'Cry or stay quiet to process',                   textHi: 'रो लेते हैं या चुप हो जाते हैं' },
      { planet: 'mars',    textEn: 'Workout or jump into action',                    textHi: 'वर्कआउट या एक्शन में उतर जाते हैं' },
      { planet: 'rahu',    textEn: 'Post on social media, express loudly',           textHi: 'पोस्ट डालते हैं, दिखाते हैं' },
      { planet: 'jupiter', textEn: 'Seek spiritual insight or mentor',               textHi: 'आध्यात्मिक गहराई में उतरते हैं' },
      { planet: 'saturn',  textEn: 'Dive deep into work',                            textHi: 'काम में लग जाते हैं' },
      { planet: 'mercury', textEn: 'Call or talk it out with someone',               textHi: 'बात करके हल निकालते हैं' },
    ],
  },
  {
    id: 9,
    questionEn: 'When it\'s about faith or life guidance...',
    questionHi: 'जब आप किसी धार्मिक या जीवन के नियम की बात करें...',
    options: [
      { planet: 'ketu',    textEn: 'Seek mystics, gurus, mantra',                    textHi: 'गुप्त साधना, ओझा, रुद्राक्ष' },
      { planet: 'venus',   textEn: 'Love temple ambiance, rituals',                  textHi: 'मंदिर की सुंदरता और रस्में' },
      { planet: 'sun',     textEn: 'Believe in truth and self-respect',              textHi: 'सच्चाई और नेतृत्व की बातें' },
      { planet: 'moon',    textEn: 'Trust emotions & devotion',                      textHi: 'भक्ति और भावना' },
      { planet: 'mars',    textEn: '"Work is worship" mindset',                      textHi: 'कर्म ही पूजा' },
      { planet: 'rahu',    textEn: 'Follow flashy spiritual influencers',            textHi: 'धर्म + ड्रामा' },
      { planet: 'jupiter', textEn: 'Study scriptures or attend satsangs',            textHi: 'शास्त्र और गीता' },
      { planet: 'saturn',  textEn: 'Be disciplined and timely',                      textHi: 'समय पर पूजा-पाठ' },
      { planet: 'mercury', textEn: 'Debate, forward articles, research',             textHi: 'फॉरवर्डेड आर्टिकल और डिबेट' },
    ],
  },
  {
    id: 10,
    questionEn: 'When a career growth opportunity arises...',
    questionHi: 'जब करियर ग्रोथ का मौका आता है...',
    options: [
      { planet: 'ketu',    textEn: 'Silently plan a surprise move',                  textHi: 'चुपचाप नया कदम उठाते हैं' },
      { planet: 'venus',   textEn: 'Improve image and grooming',                     textHi: 'इमेज और प्रेजेंटेशन सुधारते हैं' },
      { planet: 'sun',     textEn: 'Ask directly for promotion',                     textHi: 'प्रमोशन की बात करते हैं' },
      { planet: 'moon',    textEn: 'Take team along, collaborate',                   textHi: 'टीम को साथ लेकर चलते हैं' },
      { planet: 'mars',    textEn: 'Grab a new target, fast execution',              textHi: 'नया टारगेट लेते हैं' },
      { planet: 'rahu',    textEn: 'Promote yourself on social media',               textHi: 'मार्केटिंग या मीडिया से दिखाते हैं' },
      { planet: 'jupiter', textEn: 'Seek mentor blessings and clarity',              textHi: 'सीनियर से गाइडेंस लेते हैं' },
      { planet: 'saturn',  textEn: 'Prepare thoroughly, follow process',             textHi: 'मेहनत और डेडिकेशन से' },
      { planet: 'mercury', textEn: 'Use networking and casual chats',                textHi: 'नेटवर्किंग और कॉल से बात बनाते हैं' },
    ],
  },
  {
    id: 11,
    questionEn: 'When you achieve something big...',
    questionHi: 'जब कुछ हासिल हो जाए...',
    options: [
      { planet: 'ketu',    textEn: 'Stay low-key, inwardly fulfilled',               textHi: 'शांत, अंदर से संतुष्ट' },
      { planet: 'venus',   textEn: 'Celebrate in style, throw a party',              textHi: 'जश्न, मूड सेट' },
      { planet: 'sun',     textEn: 'Say "I told you so" confidently',                textHi: '"मैंने कहा था!" वाला स्टाइल' },
      { planet: 'moon',    textEn: 'Thank everyone with humility',                   textHi: 'सबको धन्यवाद देते हैं' },
      { planet: 'mars',    textEn: 'Set higher goals instantly',                     textHi: 'आगे की प्लानिंग में लगते हैं' },
      { planet: 'rahu',    textEn: 'Announce it everywhere, show it off',            textHi: 'लाइक्स और पोस्ट करते हैं' },
      { planet: 'jupiter', textEn: 'Share your learnings with others',               textHi: 'सीख सबको बताते हैं' },
      { planet: 'saturn',  textEn: 'Remain simple and consistent',                   textHi: 'Simple रहते हैं' },
      { planet: 'mercury', textEn: 'Blog it, vlog it, or podcast it',               textHi: 'सबके साथ शेयर करते हैं' },
    ],
  },
  {
    id: 12,
    questionEn: 'When facing low energy or rising expenses...',
    questionHi: 'जब बजट या एनर्जी डाउन हो...',
    options: [
      { planet: 'ketu',    textEn: 'Retreat into silence, meditation',               textHi: 'ध्यान, किताब में खो जाना' },
      { planet: 'venus',   textEn: 'Retail therapy or beauty breaks',                textHi: 'ट्रीट, फैशन शॉपिंग' },
      { planet: 'sun',     textEn: 'Remain calm and composed',                       textHi: 'शांत और संयमित' },
      { planet: 'moon',    textEn: 'Get emotional or isolate quietly',               textHi: 'इमोशनल होकर चुप रहना' },
      { planet: 'mars',    textEn: 'Push yourself into productivity',                textHi: 'जल्दी रीसेट करना' },
      { planet: 'rahu',    textEn: 'Blame external reasons',                         textHi: 'एक्सटर्नल ब्लेम' },
      { planet: 'jupiter', textEn: 'Reflect and find root cause',                    textHi: 'कारण ढूंढना' },
      { planet: 'saturn',  textEn: 'Create a recovery plan, control spending',       textHi: 'प्रैक्टिकल समाधान' },
      { planet: 'mercury', textEn: 'Track, organize, and bounce back with structure', textHi: 'खर्चा रिकॉर्ड कर वापस पटरी पर आना' },
    ],
  },
];
