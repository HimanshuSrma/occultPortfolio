export type Element = 'air' | 'fire' | 'earth' | 'space' | 'water';

export interface ElementOption {
  readonly element: Element;
  readonly textEn: string;
  readonly textHi: string;
}

export interface ElementQuestion {
  readonly id: number;
  readonly questionEn: string;
  readonly questionHi: string;
  readonly options: readonly ElementOption[];
}

export const ELEMENT_LABELS: Record<Element, { en: string; hi: string; icon: string; color: string; keyword: string }> = {
  air:   { en: 'Air',   hi: 'वायु',   icon: '🌬️', color: '#4ade80', keyword: 'Growth' },
  fire:  { en: 'Fire',  hi: 'अग्नि',  icon: '🔥', color: '#f59e0b', keyword: 'Joy' },
  earth: { en: 'Earth', hi: 'पृथ्वी', icon: '🌍', color: '#a78bfa', keyword: 'Nurture' },
  space: { en: 'Space', hi: 'आकाश', icon: '🌌', color: '#60a5fa', keyword: 'Order' },
  water: { en: 'Water', hi: 'जल',    icon: '🌊', color: '#22d3ee', keyword: 'Depth' },
} as const;

export const ELEMENT_QUESTIONS: readonly ElementQuestion[] = [
  {
    id: 1,
    questionEn: 'Which sense do you rely on most while making decisions?',
    questionHi: 'आप निर्णय लेते समय सबसे ज़्यादा किस इंद्रिय पर भरोसा करते हैं?',
    options: [
      { element: 'air',   textEn: 'Planning instinct',    textHi: 'योजना बनाने की प्रवृत्ति' },
      { element: 'fire',  textEn: 'Heartfelt emotion',    textHi: 'दिल से महसूस करना' },
      { element: 'earth', textEn: 'Gut feeling',          textHi: 'अंतर्मन की आवाज़' },
      { element: 'space', textEn: 'Logical observation',  textHi: 'तर्कपूर्ण निरीक्षण' },
      { element: 'water', textEn: 'Intuitive knowing',    textHi: 'सहज ज्ञान' },
    ],
  },
  {
    id: 2,
    questionEn: 'What triggers your strongest memories?',
    questionHi: 'आपकी सबसे गहरी यादें किस चीज़ से जुड़ती हैं?',
    options: [
      { element: 'air',   textEn: 'Sounds / Shouting',   textHi: 'तेज़ आवाज़ / चिल्लाना' },
      { element: 'fire',  textEn: 'Laughs / Warmth',     textHi: 'हँसी / गर्मजोशी' },
      { element: 'earth', textEn: 'Food / Family',       textHi: 'खाना / परिवार' },
      { element: 'space', textEn: 'Scents / Grief',      textHi: 'सुगंध / शोक' },
      { element: 'water', textEn: 'Silence / Depth',     textHi: 'मौन / गहराई' },
    ],
  },
  {
    id: 3,
    questionEn: 'Which emotion hits you first in tough situations?',
    questionHi: 'कठिन हालात में सबसे पहले कौन-सा भाव आता है?',
    options: [
      { element: 'air',   textEn: 'Frustration / Anger',    textHi: 'झुंझलाहट / ग़ुस्सा' },
      { element: 'fire',  textEn: 'Excitement / Joy',       textHi: 'उत्साह / खुशी' },
      { element: 'earth', textEn: 'Worry / Sympathy',       textHi: 'चिंता / सहानुभूति' },
      { element: 'space', textEn: 'Sadness / Grief',        textHi: 'दुख / विषाद' },
      { element: 'water', textEn: 'Fear / Awe',             textHi: 'भय / विस्मय' },
    ],
  },
  {
    id: 4,
    questionEn: 'What kind of overload affects you the most?',
    questionHi: 'किस तरह का ओवरलोड आपको असहज करता है?',
    options: [
      { element: 'air',   textEn: 'Pressure / Stress',         textHi: 'दबाव / तनाव' },
      { element: 'fire',  textEn: 'Noise / Chaos',             textHi: 'शोर / अफरा-तफरी' },
      { element: 'earth', textEn: 'Overeating / Overcaring',   textHi: 'ज़रूरत से ज़्यादा खाना / देखभाल' },
      { element: 'space', textEn: 'Over-control / Criticism',  textHi: 'कंट्रोल / आलोचना' },
      { element: 'water', textEn: 'Isolation / Fear',          textHi: 'अकेलापन / भय' },
    ],
  },
  {
    id: 5,
    questionEn: 'What instantly soothes you?',
    questionHi: 'आपको तुरंत सुकून किस चीज़ से मिलता है?',
    options: [
      { element: 'air',   textEn: 'Movement / Wind',           textHi: 'गति / हवा' },
      { element: 'fire',  textEn: 'Warmth / Laughter',         textHi: 'गर्मी / हँसी' },
      { element: 'earth', textEn: 'Familiar food / Touch',     textHi: 'जाना-पहचाना खाना / स्पर्श' },
      { element: 'space', textEn: 'Clean air / Structure',     textHi: 'स्वच्छता / अनुशासन' },
      { element: 'water', textEn: 'Stillness / Water',         textHi: 'स्थिरता / जल' },
    ],
  },
  {
    id: 6,
    questionEn: 'What experience do you value the most?',
    questionHi: 'आप किस तरह के अनुभव को सबसे ज़्यादा महत्व देते हैं?',
    options: [
      { element: 'air',   textEn: 'Progress / Growth',      textHi: 'तरक्की / ग्रोथ' },
      { element: 'fire',  textEn: 'Passion / Drama',        textHi: 'जुनून / ड्रामा' },
      { element: 'earth', textEn: 'Harmony / Belonging',    textHi: 'सामंजस्य / अपनापन' },
      { element: 'space', textEn: 'Purity / Clarity',       textHi: 'शुद्धता / स्पष्टता' },
      { element: 'water', textEn: 'Mystery / Solitude',     textHi: 'रहस्य / एकांत' },
    ],
  },
  {
    id: 7,
    questionEn: 'What kind of environment feels energizing to you?',
    questionHi: 'कैसा माहौल आपको ऊर्जा से भर देता है?',
    options: [
      { element: 'air',   textEn: 'Trees / Vision boards',     textHi: 'पेड़-पौधे / विज़न बोर्ड' },
      { element: 'fire',  textEn: 'Fireplaces / Red lights',   textHi: 'लाल लाइट / चूल्हा' },
      { element: 'earth', textEn: 'Kitchen / Garden',          textHi: 'रसोई / बग़ीचा' },
      { element: 'space', textEn: 'White walls / Order',       textHi: 'सफ़ेद दीवारें / अनुशासन' },
      { element: 'water', textEn: 'Cave / Dark water',         textHi: 'गुफ़ा / अंधा जल' },
    ],
  },
  {
    id: 8,
    questionEn: 'When do you feel most alive?',
    questionHi: 'आप खुद को सबसे ज़्यादा जीवंत कब महसूस करते हैं?',
    options: [
      { element: 'air',   textEn: 'Challenge / Adventure',      textHi: 'चुनौती / रोमांच' },
      { element: 'fire',  textEn: 'Love / Connection',          textHi: 'प्रेम / संबंध' },
      { element: 'earth', textEn: 'Caring / Stability',         textHi: 'देखभाल / स्थिरता' },
      { element: 'space', textEn: 'Structure / Refinement',     textHi: 'संरचना / निपुणता' },
      { element: 'water', textEn: 'Depth / Reflection',         textHi: 'चिंतन / आत्मनिरीक्षण' },
    ],
  },
  {
    id: 9,
    questionEn: "What's the first thing you notice in a space?",
    questionHi: 'किसी जगह पर सबसे पहले आप क्या नोटिस करते हैं?',
    options: [
      { element: 'air',   textEn: 'Energy / Movement',    textHi: 'ऊर्जा / हलचल' },
      { element: 'fire',  textEn: 'Vibe / Heat',          textHi: 'माहौल / गर्मी' },
      { element: 'earth', textEn: 'Clutter / Warmth',     textHi: 'बिखराव / अपनापन' },
      { element: 'space', textEn: 'Air / Cleanliness',    textHi: 'साफ़-सफाई / हवा' },
      { element: 'water', textEn: 'Mood / Quiet',         textHi: 'मूड / ख़ामोशी' },
    ],
  },
  {
    id: 10,
    questionEn: "What's your guilty pleasure?",
    questionHi: "आपकी सबसे प्यारी 'गिल्टी प्लेज़र' क्या है?",
    options: [
      { element: 'air',   textEn: 'Exploration / Expansion',    textHi: 'घूमना / विस्तार' },
      { element: 'fire',  textEn: 'Social fun / Play',          textHi: 'मस्ती / खेल' },
      { element: 'earth', textEn: 'Comfort food / Ritual',      textHi: 'आरामदायक खाना / रिवाज़' },
      { element: 'space', textEn: 'Neatness / Clean space',     textHi: 'सफ़ाई / सलीका' },
      { element: 'water', textEn: 'Immersion / Baths',          textHi: 'नहाना / जल में डूबना' },
    ],
  },
  {
    id: 11,
    questionEn: 'How do you usually act?',
    questionHi: 'आपकी सामान्य कार्यशैली कैसी है?',
    options: [
      { element: 'air',   textEn: 'Assertive / Driven',           textHi: 'निडर / प्रेरित' },
      { element: 'fire',  textEn: 'Spontaneous / Charismatic',    textHi: 'स्वतःस्फूर्त / आकर्षक' },
      { element: 'earth', textEn: 'Supportive / Nurturing',       textHi: 'सहयोगी / nurturing' },
      { element: 'space', textEn: 'Controlled / Methodical',      textHi: 'नियंत्रित / methodical' },
      { element: 'water', textEn: 'Withdrawn / Fluid',            textHi: 'अंतर्मुखी / बहाव में' },
    ],
  },
  {
    id: 12,
    questionEn: 'What makes you feel powerful?',
    questionHi: 'आपको शक्ति का अनुभव कब होता है?',
    options: [
      { element: 'air',   textEn: 'Strategic planning',       textHi: 'रणनीति / योजना' },
      { element: 'fire',  textEn: 'Expressive presence',      textHi: 'प्रस्तुति / भावनात्मक उपस्थिति' },
      { element: 'earth', textEn: 'Loyalty & Service',        textHi: 'वफ़ादारी / सेवा' },
      { element: 'space', textEn: 'Precision & Rules',        textHi: 'नियम / सटीकता' },
      { element: 'water', textEn: 'Silence & Depth',          textHi: 'मौन / गहराई' },
    ],
  },
  {
    id: 13,
    questionEn: 'How do you respond under stress?',
    questionHi: 'तनाव में आप कैसे प्रतिक्रिया देते हैं?',
    options: [
      { element: 'air',   textEn: 'Anger / Push through',        textHi: 'ग़ुस्सा / डटे रहना' },
      { element: 'fire',  textEn: 'Panic / Dramatic burst',      textHi: 'घबराहट / नाटकीय प्रतिक्रिया' },
      { element: 'earth', textEn: 'Worry / Self-sacrifice',      textHi: 'चिंता / बलिदान' },
      { element: 'space', textEn: 'Judging / Shutting down',     textHi: 'जजमेंट / बंद हो जाना' },
      { element: 'water', textEn: 'Withdrawal / Freeze',         textHi: 'अलगाव / जम जाना' },
    ],
  },
  {
    id: 14,
    questionEn: "What's your natural talent?",
    questionHi: 'आपकी प्राकृतिक प्रतिभा क्या है?',
    options: [
      { element: 'air',   textEn: 'Leadership / Vision',          textHi: 'नेतृत्व / दृष्टि' },
      { element: 'fire',  textEn: 'Entertainment / Inspiration',  textHi: 'मनोरंजन / प्रेरणा' },
      { element: 'earth', textEn: 'Teaching / Healing',           textHi: 'शिक्षा / उपचार' },
      { element: 'space', textEn: 'Organizing / Managing',        textHi: 'आयोजन / प्रबंधन' },
      { element: 'water', textEn: 'Counseling / Listening',       textHi: 'परामर्श / सुनना' },
    ],
  },
  {
    id: 15,
    questionEn: 'How is your energy expressed?',
    questionHi: 'आपकी ऊर्जा कैसे प्रकट होती है?',
    options: [
      { element: 'air',   textEn: 'Bold & fast',            textHi: 'तेज़ और तीव्र' },
      { element: 'fire',  textEn: 'High & scattered',       textHi: 'ऊँची और बिखरी हुई' },
      { element: 'earth', textEn: 'Soft & supportive',      textHi: 'मुलायम और सहायक' },
      { element: 'space', textEn: 'Clear & restrained',     textHi: 'स्पष्ट और नियंत्रित' },
      { element: 'water', textEn: 'Deep & conserved',       textHi: 'गहरी और बचाई हुई' },
    ],
  },
  {
    id: 16,
    questionEn: "Which organ feels most 'you' when you're active?",
    questionHi: 'आप में सबसे ज़्यादा सक्रिय अंग कौन-सा लगता है?',
    options: [
      { element: 'air',   textEn: 'Liver / Decision-making',   textHi: 'यकृत / निर्णय लेना' },
      { element: 'fire',  textEn: 'Heart / Expression',        textHi: 'हृदय / भावनाएँ' },
      { element: 'earth', textEn: 'Spleen / Digestion',        textHi: 'तिल्ली / पाचन' },
      { element: 'space', textEn: 'Lungs / Boundaries',        textHi: 'फेफड़े / सीमाएँ' },
      { element: 'water', textEn: 'Kidney / Willpower',        textHi: 'गुर्दा / इच्छाशक्ति' },
    ],
  },
  {
    id: 17,
    questionEn: "How are you when you're healthiest?",
    questionHi: 'जब आप सबसे स्वस्थ होते हैं, तब आप कैसे होते हैं?',
    options: [
      { element: 'air',   textEn: 'Motivated & Directed',     textHi: 'प्रेरित और केंद्रित' },
      { element: 'fire',  textEn: 'Energetic & Joyful',       textHi: 'आनंदमय और ऊर्जावान' },
      { element: 'earth', textEn: 'Grounded & Content',       textHi: 'ज़मीन से जुड़े / संतुष्ट' },
      { element: 'space', textEn: 'Disciplined & Clear',      textHi: 'अनुशासित और स्पष्ट' },
      { element: 'water', textEn: 'Peaceful & Rested',        textHi: 'शांत और विश्रामपूर्ण' },
    ],
  },
  {
    id: 18,
    questionEn: "What breaks down first when you're unwell?",
    questionHi: 'बीमार होने पर सबसे पहले क्या कमजोर होता है?',
    options: [
      { element: 'air',   textEn: 'Coordination / Anger',       textHi: 'तालमेल / ग़ुस्सा' },
      { element: 'fire',  textEn: 'Sleep / Restlessness',       textHi: 'नींद / बेचैनी' },
      { element: 'earth', textEn: 'Digestion / Worry',          textHi: 'पाचन / चिंता' },
      { element: 'space', textEn: 'Breath / Sadness',           textHi: 'साँस / उदासी' },
      { element: 'water', textEn: 'Will / Fear',                textHi: 'इच्छा शक्ति / डर' },
    ],
  },
  {
    id: 19,
    questionEn: 'Which part of your body do you instinctively protect?',
    questionHi: 'आप अपने शरीर के किस हिस्से को सबसे ज़्यादा सुरक्षा देते हैं?',
    options: [
      { element: 'air',   textEn: 'Ribs / Sides',           textHi: 'पसलियाँ / साइड' },
      { element: 'fire',  textEn: 'Chest / Heart',          textHi: 'छाती / हृदय' },
      { element: 'earth', textEn: 'Abdomen / Stomach',      textHi: 'पेट / उदर' },
      { element: 'space', textEn: 'Skin / Lungs',           textHi: 'त्वचा / फेफड़े' },
      { element: 'water', textEn: 'Spine / Kidney area',    textHi: 'रीढ़ / गुर्दा क्षेत्र' },
    ],
  },
  {
    id: 20,
    questionEn: 'What boosts your energy quickly?',
    questionHi: 'तुरंत ऊर्जा बढ़ाने के लिए आप क्या करते हैं?',
    options: [
      { element: 'air',   textEn: 'Stretching / Herbs',         textHi: 'स्ट्रेचिंग / जड़ी-बूटियाँ' },
      { element: 'fire',  textEn: 'Movement / Warmth',          textHi: 'चलना / गर्मी' },
      { element: 'earth', textEn: 'Nutrition / Rest',           textHi: 'पोषण / आराम' },
      { element: 'space', textEn: 'Breathing / Decluttering',   textHi: 'साँस / सफ़ाई' },
      { element: 'water', textEn: 'Sleep / Stillness',          textHi: 'नींद / स्थिरता' },
    ],
  },
  {
    id: 21,
    questionEn: 'Which identity suits you best?',
    questionHi: 'कौन-सी पहचान आपके स्वभाव से मेल खाती है?',
    options: [
      { element: 'air',   textEn: 'Leader / Rebel',        textHi: 'लीडर / विद्रोही' },
      { element: 'fire',  textEn: 'Star / Performer',      textHi: 'स्टार / परफ़ॉर्मर' },
      { element: 'earth', textEn: 'Healer / Host',         textHi: 'उपचारक / मेज़बान' },
      { element: 'space', textEn: 'Judge / Thinker',       textHi: 'न्यायाधीश / विचारक' },
      { element: 'water', textEn: 'Sage / Seeker',         textHi: 'साधु / खोजकर्ता' },
    ],
  },
  {
    id: 22,
    questionEn: "What's your biggest inner block?",
    questionHi: 'आपका सबसे बड़ा अंदरूनी अवरोध क्या है?',
    options: [
      { element: 'air',   textEn: 'Rage / Control issues',            textHi: 'क्रोध / नियंत्रण की प्रवृत्ति' },
      { element: 'fire',  textEn: 'Scattered / Over-stimulated',      textHi: 'बिखराव / अत्यधिक उत्तेजना' },
      { element: 'earth', textEn: 'Overgiving / Boundaries',          textHi: 'दूसरों के लिए खुद को भूल जाना' },
      { element: 'space', textEn: 'Perfectionism / Guilt',            textHi: 'पूर्णता की ज़िद / अपराधबोध' },
      { element: 'water', textEn: 'Overwhelm / Fear',                 textHi: 'भय / दबाव' },
    ],
  },
  {
    id: 23,
    questionEn: 'What helps you reset your energy?',
    questionHi: 'थकने पर आप कैसे खुद को रीसेट करते हैं?',
    options: [
      { element: 'air',   textEn: 'Nature / Challenge',           textHi: 'प्रकृति / चुनौती' },
      { element: 'fire',  textEn: 'Music / Dance',                textHi: 'संगीत / नृत्य' },
      { element: 'earth', textEn: 'Hugs / Food / Familiarity',    textHi: 'गले लगना / जाना-पहचाना' },
      { element: 'space', textEn: 'Order / Structure',            textHi: 'व्यवस्था / संरचना' },
      { element: 'water', textEn: 'Isolation / Crying',           textHi: 'अकेलापन / रोना' },
    ],
  },
  {
    id: 24,
    questionEn: "What's your dominant inner quality?",
    questionHi: 'आपकी सबसे प्रमुख आंतरिक विशेषता क्या है?',
    options: [
      { element: 'air',   textEn: 'Vision / Growth',          textHi: 'दृष्टि / ग्रोथ' },
      { element: 'fire',  textEn: 'Passion / Expression',     textHi: 'अभिव्यक्ति / भावनाएँ' },
      { element: 'earth', textEn: 'Support / Empathy',        textHi: 'सहयोग / सहानुभूति' },
      { element: 'space', textEn: 'Rules / Morality',         textHi: 'नैतिकता / नियम' },
      { element: 'water', textEn: 'Wisdom / Reflection',      textHi: 'ज्ञान / आत्मचिंतन' },
    ],
  },
  {
    id: 25,
    questionEn: 'What does spirituality mean to you?',
    questionHi: 'आपके लिए अध्यात्म का अर्थ क्या है?',
    options: [
      { element: 'air',   textEn: 'Purpose / Direction',       textHi: 'उद्देश्य / दिशा' },
      { element: 'fire',  textEn: 'Devotion / Compassion',     textHi: 'भक्ति / करुणा' },
      { element: 'earth', textEn: 'Service / Balance',         textHi: 'सेवा / संतुलन' },
      { element: 'space', textEn: 'Purification / Clarity',    textHi: 'शुद्धता / स्पष्टता' },
      { element: 'water', textEn: 'Surrender / Depth',         textHi: 'समर्पण' },
    ],
  },
] as const;
