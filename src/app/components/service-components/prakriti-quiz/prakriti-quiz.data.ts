export interface PrakritiQuestion {
  readonly id: number;
  readonly questionEn: string;
  readonly questionHi: string;
  readonly options: readonly PrakritiOption[];
}

export interface PrakritiOption {
  readonly guna: 'sattva' | 'rajas' | 'tamas';
  readonly textEn: string;
  readonly textHi: string;
}

export const PRAKRITI_QUESTIONS: readonly PrakritiQuestion[] = [
  {
    id: 1,
    questionEn: 'How do you choose food?',
    questionHi: 'आप खाने को कैसे चुनते हैं?',
    options: [
      { guna: 'sattva', textEn: 'Healthy, home-cooked, nourishes body & mind', textHi: 'हेल्दी, घर का बना, शरीर व मन दोनों के लिए अच्छा' },
      { guna: 'rajas', textEn: 'Flavor, brand, social-media trend foods', textHi: 'स्वाद, ब्रांड और सोशल मीडिया ट्रेंड वाला खाना' },
      { guna: 'tamas', textEn: 'Junk, instant, anything quick', textHi: 'जंक फूड, इंस्टेंट, जो मिल जाए वही' },
    ],
  },
  {
    id: 2,
    questionEn: 'First thing you do after waking up?',
    questionHi: 'सुबह उठते ही सबसे पहले क्या करते हैं?',
    options: [
      { guna: 'sattva', textEn: 'Meditation, reflection or light reading', textHi: 'ध्यान, योग या आत्मनिरीक्षण' },
      { guna: 'rajas', textEn: 'Phone, emails, Instagram/news', textHi: 'फोन, ईमेल, इंस्टाग्राम/न्यूज़' },
      { guna: 'tamas', textEn: 'Snooze repeatedly, go back to sleep', textHi: 'स्नूज़ मारना, फिर से सो जाना' },
    ],
  },
  {
    id: 3,
    questionEn: 'When choosing work/career?',
    questionHi: 'काम चुनते समय आपकी सोच?',
    options: [
      { guna: 'sattva', textEn: 'Learning, purpose, societal benefit', textHi: 'जहाँ सीखने व समाज में योगदान हो' },
      { guna: 'rajas', textEn: 'Pay, prestige, power & show-off', textHi: 'जहाँ पैसा, पोजिशन और शो ऑफ मिले' },
      { guna: 'tamas', textEn: 'Easy work, minimal effort', textHi: 'जहाँ काम कम हो, टाइमपास जैसा हो' },
    ],
  },
  {
    id: 4,
    questionEn: 'When feeling stressed/tired mentally?',
    questionHi: 'मानसिक थकान में क्या करते हैं?',
    options: [
      { guna: 'sattva', textEn: 'Nature walk, music, mindfulness', textHi: 'प्रकृति में वॉक, ध्यान, संगीत' },
      { guna: 'rajas', textEn: 'Shopping, ordering food, binge shows', textHi: 'शॉपिंग, नेटफ्लिक्स, खाना ऑर्डर' },
      { guna: 'tamas', textEn: 'Lie down, binge, avoid everything', textHi: 'लेट जाना, नशा/बिंग वॉचिंग' },
    ],
  },
  {
    id: 5,
    questionEn: 'How you spend your weekend?',
    questionHi: 'वीकेंड कैसे बिताते हैं?',
    options: [
      { guna: 'sattva', textEn: 'Time with family, self-growth, planning', textHi: 'परिवार, ग्रोथ, प्लानिंग' },
      { guna: 'rajas', textEn: 'Partying, outings, excitement', textHi: 'पार्टी, आउटिंग, एक्साइटमेंट' },
      { guna: 'tamas', textEn: 'Oversleep, scroll, do nothing', textHi: 'लेट उठना, मोबाइल पर टाइमपास' },
    ],
  },
  {
    id: 6,
    questionEn: 'In relationships, what\'s important?',
    questionHi: 'रिश्तों में प्राथमिकता?',
    options: [
      { guna: 'sattva', textEn: 'Real conversation, trust & growth', textHi: 'समझ, भरोसा, विकास' },
      { guna: 'rajas', textEn: 'Looks, social image, appearances', textHi: 'लुक्स, स्टेटस, दिखावा' },
      { guna: 'tamas', textEn: 'Casual flings, physical satisfaction only', textHi: 'टाइमपास, शारीरिक ज़रूरत' },
    ],
  },
  {
    id: 7,
    questionEn: 'Fitness attitude?',
    questionHi: 'फिटनेस की आदत?',
    options: [
      { guna: 'sattva', textEn: 'Regular exercise/yoga as lifestyle', textHi: 'नियमित योग/एक्सरसाइज़' },
      { guna: 'rajas', textEn: 'Gym or diet for appearance', textHi: 'जिम/डायट सिर्फ फिट दिखने के लिए' },
      { guna: 'tamas', textEn: 'No routine, only if mood strikes', textHi: 'मूड से कभी-कभी, नहीं करता' },
    ],
  },
  {
    id: 8,
    questionEn: 'Your view on money?',
    questionHi: 'पैसों को कैसे देखते हैं?',
    options: [
      { guna: 'sattva', textEn: 'For service, freedom, integrity', textHi: 'सेवा व स्वतंत्रता का ज़रिया' },
      { guna: 'rajas', textEn: 'Status, luxury, power, social recognition', textHi: 'पैसा ही पॉवर और रेस' },
      { guna: 'tamas', textEn: 'Avoid thinking about it, feel confused', textHi: 'टेंशन या डर' },
    ],
  },
  {
    id: 9,
    questionEn: 'If you make a mistake?',
    questionHi: 'गलती होने पर आप?',
    options: [
      { guna: 'sattva', textEn: 'Admit, reflect & improve', textHi: 'स्वीकार कर सुधार करता हूँ' },
      { guna: 'rajas', textEn: 'Blame others, get defensive', textHi: 'दूसरों को दोष' },
      { guna: 'tamas', textEn: 'Ignore or try to deny the mistake', textHi: 'बचता हूँ या इग्नोर करता हूँ' },
    ],
  },
  {
    id: 10,
    questionEn: 'Before sleeping, what do you do?',
    questionHi: 'सोने से पहले क्या करते हैं?',
    options: [
      { guna: 'sattva', textEn: 'Daily reflection, reading or meditation', textHi: 'दिन की समीक्षा, किताब' },
      { guna: 'rajas', textEn: 'Scroll reels/videos until sleepy', textHi: 'फोन, रील्स, वीडियो' },
      { guna: 'tamas', textEn: 'Fall asleep randomly without planning', textHi: 'जो हो रहा है वही' },
    ],
  },
  {
    id: 11,
    questionEn: 'How do you see learning?',
    questionHi: 'सीखने का दृष्टिकोण?',
    options: [
      { guna: 'sattva', textEn: 'Want to learn new things daily', textHi: 'रोज़ कुछ नया' },
      { guna: 'rajas', textEn: 'Learn only if it gives advantage', textHi: 'फायदे वाला स्किल' },
      { guna: 'tamas', textEn: 'Find it boring, often avoid it', textHi: 'सीखना बोरिंग लगता है' },
    ],
  },
  {
    id: 12,
    questionEn: 'If someone criticizes you?',
    questionHi: 'आलोचना मिलने पर?',
    options: [
      { guna: 'sattva', textEn: 'Listen and assess calmly', textHi: 'सुनता हूँ, समझता हूँ' },
      { guna: 'rajas', textEn: 'Ego hurt, ready to argue', textHi: 'ईगो हर्ट, बहस करता हूँ' },
      { guna: 'tamas', textEn: 'Stay silent, cut off or block person', textHi: 'चुप रहता हूँ, ब्लॉक करता हूँ' },
    ],
  },
  {
    id: 13,
    questionEn: 'When someone moves ahead of you?',
    questionHi: 'दूसरों की सफलता देखकर?',
    options: [
      { guna: 'sattva', textEn: 'Feel inspired, focus on yourself', textHi: 'प्रेरणा मिलती है' },
      { guna: 'rajas', textEn: 'Feel competitive, want to surpass them', textHi: 'तुलना करता हूँ' },
      { guna: 'tamas', textEn: 'Feel jealousy or depressed', textHi: 'जलन होती है' },
    ],
  },
  {
    id: 14,
    questionEn: 'In traffic jams, how do you react?',
    questionHi: 'ट्रैफिक में फँसने पर?',
    options: [
      { guna: 'sattva', textEn: 'Calmly listen music or audiobook', textHi: 'पॉडकास्ट/मंत्र सुनता हूँ' },
      { guna: 'rajas', textEn: 'Honk, get irritated quickly', textHi: 'हॉर्न बजाता हूँ, चिढ़ता हूँ' },
      { guna: 'tamas', textEn: 'Curse, feel sluggish or overwhelmed', textHi: 'गालियाँ या दोष देता हूँ' },
    ],
  },
  {
    id: 15,
    questionEn: 'On a day off?',
    questionHi: 'छुट्टी के दिन?',
    options: [
      { guna: 'sattva', textEn: 'Work on pending tasks or self-improvement', textHi: 'मनन, लेखन, रचना' },
      { guna: 'rajas', textEn: 'Shopping, social plans, outings', textHi: 'शॉपिंग, सोशल प्लान' },
      { guna: 'tamas', textEn: 'Sleep late, do nothing', textHi: 'स्क्रीन या नींद में' },
    ],
  },
  {
    id: 16,
    questionEn: 'When someone gives advice, how do you respond?',
    questionHi: 'सलाह मिलने पर क्या करते हैं?',
    options: [
      { guna: 'sattva', textEn: 'Listen carefully, use what helps', textHi: 'ध्यान से सुनता हूँ, काम का अपनाता हूँ' },
      { guna: 'rajas', textEn: 'Listen but do what you want', textHi: 'सुनता हूँ पर अपनी करता हूँ' },
      { guna: 'tamas', textEn: 'Ignore advice or feel insulted', textHi: 'इग्नोर या बुरा मानता हूँ' },
    ],
  },
  {
    id: 17,
    questionEn: 'Working in a team, how are you?',
    questionHi: 'टीम में काम करते समय?',
    options: [
      { guna: 'sattva', textEn: 'Cooperative and communicates positively', textHi: 'सहयोग और सकारात्मक संवाद' },
      { guna: 'rajas', textEn: 'Try to stand out as the key person', textHi: 'खुद को हीरो दिखाने की कोशिश' },
      { guna: 'tamas', textEn: 'Procrastinate or act irresponsibly', textHi: 'टालमटोल या गैरजिम्मेदारी' },
    ],
  },
  {
    id: 18,
    questionEn: 'If you\'re caught making an error?',
    questionHi: 'गलती पकड़ी जाए तो?',
    options: [
      { guna: 'sattva', textEn: 'Accept and try to fix it', textHi: 'स्वीकार कर सुधारता हूँ' },
      { guna: 'rajas', textEn: 'Become defensive', textHi: 'बचाव करता हूँ' },
      { guna: 'tamas', textEn: 'Deny or lie about it', textHi: 'झूठ बोलता या इनकार करता हूँ' },
    ],
  },
  {
    id: 19,
    questionEn: 'If someone needs help, what do you do?',
    questionHi: 'किसी को मदद चाहिए तो?',
    options: [
      { guna: 'sattva', textEn: 'Offer help if appropriate', textHi: 'उचित हो तो मदद करता हूँ' },
      { guna: 'rajas', textEn: 'Check whether there\'s benefit for you', textHi: 'फायदा देखता हूँ' },
      { guna: 'tamas', textEn: 'Avoid helping or ignore', textHi: 'बचता या इग्नोर करता हूँ' },
    ],
  },
  {
    id: 20,
    questionEn: 'While shopping online, how do you think?',
    questionHi: 'ऑनलाइन शॉपिंग में सोच?',
    options: [
      { guna: 'sattva', textEn: 'Buy based on need & quality', textHi: 'ज़रूरत और क्वालिटी से खरीदता हूँ' },
      { guna: 'rajas', textEn: 'Influenced by brand, offers, comparison', textHi: 'ब्रांड, ऑफर, तुलना से प्रभावित' },
      { guna: 'tamas', textEn: 'Buy impulsively or without need', textHi: 'बिना सोचे खरीद लेता हूँ' },
    ],
  },
  {
    id: 21,
    questionEn: 'Faced with a challenging task, what do you do?',
    questionHi: 'कठिन काम सामने आए तो?',
    options: [
      { guna: 'sattva', textEn: 'Plan and act calmly', textHi: 'शांति से योजना बनाकर करता हूँ' },
      { guna: 'rajas', textEn: 'Rush so that you can impress', textHi: 'जल्दी करता हूँ ताकि इम्प्रेस कर सकूँ' },
      { guna: 'tamas', textEn: 'Avoid or give up saying "can\'t do it"', textHi: 'टालता हूँ या "नहीं होगा" कहता हूँ' },
    ],
  },
  {
    id: 22,
    questionEn: 'If you fall sick, what\'s your approach?',
    questionHi: 'बीमार होने पर क्या करते हैं?',
    options: [
      { guna: 'sattva', textEn: 'Rest and follow medical advice', textHi: 'आराम और डॉक्टर की सलाह' },
      { guna: 'rajas', textEn: 'Continue working to avoid judgment', textHi: 'काम जारी रखता हूँ ताकि कोई जज न करे' },
      { guna: 'tamas', textEn: 'Delay treatment or ignore till later', textHi: 'इलाज टालता हूँ या इग्नोर करता हूँ' },
    ],
  },
  {
    id: 23,
    questionEn: 'If someone else is praised, how do you feel?',
    questionHi: 'किसी और की तारीफ हो तो?',
    options: [
      { guna: 'sattva', textEn: 'Feel happy and genuinely appreciate', textHi: 'खुश होता हूँ, सच्ची तारीफ करता हूँ' },
      { guna: 'rajas', textEn: 'Try to prove you\'re better', textHi: 'खुद को बेहतर साबित करने की कोशिश' },
      { guna: 'tamas', textEn: 'Stay silent or feel jealousy', textHi: 'चुप रहता हूँ या जलन होती है' },
    ],
  },
  {
    id: 24,
    questionEn: 'How do you reflect on your own mistakes?',
    questionHi: 'अपनी गलतियों पर कैसे सोचते हैं?',
    options: [
      { guna: 'sattva', textEn: 'Introspect and resolve to improve', textHi: 'आत्मनिरीक्षण और सुधार का संकल्प' },
      { guna: 'rajas', textEn: 'Try to show it wasn\'t your fault', textHi: 'दिखाने की कोशिश कि मेरी गलती नहीं' },
      { guna: 'tamas', textEn: 'Don\'t think about it, scared to take blame', textHi: 'सोचता नहीं, दोष लेने से डरता हूँ' },
    ],
  },
  {
    id: 25,
    questionEn: 'Feeling bored in life — what do you do?',
    questionHi: 'जीवन में बोरियत लगे तो?',
    options: [
      { guna: 'sattva', textEn: 'Learn something new or introspect', textHi: 'कुछ नया सीखता हूँ या आत्मनिरीक्षण' },
      { guna: 'rajas', textEn: 'Seek entertainment — movies, outings', textHi: 'मनोरंजन — फिल्में, आउटिंग' },
      { guna: 'tamas', textEn: 'Sleep, scroll social media, waste time', textHi: 'सोना, सोशल मीडिया, टाइमपास' },
    ],
  },
];
