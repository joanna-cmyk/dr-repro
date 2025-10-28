export interface QuizQuestion {
  id: number;
  question: string;
  options: {
    label: string;
    text: string;
    isCorrect: boolean;
  }[];
  tip: string;
  redFlag: string;
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "Tara started using an app to track her periods. Sometimes her period came after 25 days, sometimes 20, and once after 30 days. Her friend said, 'It should always be 28 days!' What's true?",
    options: [
      { label: "A", text: "Yes, it must be exactly 28 days", isCorrect: false },
      { label: "B", text: "No, anywhere between 21–35 days is normal", isCorrect: true },
      { label: "C", text: "40–50 days is fine", isCorrect: false },
      { label: "D", text: "The cycle length doesn't matter at all", isCorrect: false },
    ],
    tip: "Your period doesn't need to be a clock. 28 days is just the AVERAGE - like how average height is 5'4\" but everyone's different. Anywhere from 21-35 days is healthy! A few days' variation is normal.",
    redFlag: "If your cycle is regularly shorter than 21 days or longer than 35 days, consult a doctor.",
  },
  {
    id: 2,
    question: "Priya heard her grandmom say: 'Periods happen to clean your body.' Is this true?",
    options: [
      { label: "A", text: "Yes, periods clean your body", isCorrect: false },
      { label: "B", text: "No, periods happen because the uterus sheds its lining when pregnancy doesn't occur", isCorrect: true },
      { label: "C", text: "Periods are caused by stress or food", isCorrect: false },
      { label: "D", text: "Periods release toxins", isCorrect: false },
    ],
    tip: "Periods are not for detoxing. Our body has other organs, like the kidneys and liver, to remove waste and toxins. The uterus simply builds a soft lining each month to support a baby — if no baby comes, it sheds this lining naturally. Healthy biology, not 'cleaning'!",
    redFlag: "If you experience extremely heavy bleeding (soaking through a pad in an hour) or periods lasting more than 7 days, see a doctor.",
  },
  {
    id: 3,
    question: "Anika sometimes misses periods and feels some hair growth on her face. The doctor said she has PCOD. Her friend panicked, 'Does this mean you'll never get periods?' What is PCOD?",
    options: [
      { label: "A", text: "A condition where periods stop permanently and never return", isCorrect: false },
      { label: "B", text: "Ovaries make many eggs that don't fully develop and get stuck, not releasing on time", isCorrect: true },
      { label: "C", text: "A temporary phase that goes away on its own without treatment", isCorrect: false },
      { label: "D", text: "A condition that only affects women over 40 years old", isCorrect: false },
    ],
    tip: "PCOD is common (1 in 5 Indian women). The ovaries produce many eggs that don't fully develop — these underdeveloped eggs form small pockets or tiny bubbles (cysts) inside the ovary. This causes irregular, delayed, or missed periods. Healthy eating, exercise, and doctor guidance can help manage it.",
    redFlag: "Very irregular periods with severe pain, sudden weight gain or excess hair growth - If any of these happen, see a doctor, don't ignore it.",
  },
  {
    id: 4,
    question: "Riya has irregular periods, sudden weight gain, acne, and extra hair on her face. Sometimes she feels tired and frustrated because her body feels 'off balance.' The doctor said she might have PCOS. What is PCOS?",
    options: [
      { label: "A", text: "Her ovaries are completely broken", isCorrect: false },
      { label: "B", text: "Hormones are out of balance, affecting periods, egg release, weight, and skin", isCorrect: true },
      { label: "C", text: "It only happens if someone eats too much junk food", isCorrect: false },
      { label: "D", text: "She will never be able to get pregnant", isCorrect: false },
    ],
    tip: "PCOS affects hormones throughout the body, not just the ovaries. It can influence skin, weight, energy, and periods. Regular check-ups, a healthy lifestyle, and medical guidance can help manage symptoms and prevent complications.",
    redFlag: "Very irregular periods, sudden weight gain, excess facial hair, difficulty losing weight → see a doctor for proper diagnosis.",
  },
  {
    id: 5,
    question: "Meera has very severe period pain that stops her from going to school, pain even when she's not bleeding, and feels exhausted. What could this be?",
    options: [
      { label: "A", text: "Normal period cramps", isCorrect: false },
      { label: "B", text: "Endometriosis", isCorrect: true },
      { label: "C", text: "Just stress", isCorrect: false },
      { label: "D", text: "PCOD", isCorrect: false },
    ],
    tip: "Endometriosis happens when tissue similar to the lining inside the uterus grows OUTSIDE the uterus. It can cause heavy bleeding, severe cramps, or pain during periods.",
    redFlag: "If pain affects daily life, very heavy bleeding, or pain during sex → see a doctor. It's treatable, not just 'normal period pain'!",
  },
  {
    id: 6,
    question: "After learning about Meera's condition, you wonder - how many women have endometriosis?",
    options: [
      { label: "A", text: "1 in 100 women", isCorrect: false },
      { label: "B", text: "1 in 10 women", isCorrect: true },
      { label: "C", text: "1 in 1000 women", isCorrect: false },
      { label: "D", text: "It's extremely rare", isCorrect: false },
    ],
    tip: "About 10% of women (190 million worldwide!) have endometriosis. Many don't know because symptoms vary. Early diagnosis and treatment help manage pain and protect fertility!",
    redFlag: "If you or a friend has severe period pain, don't ignore it - see a doctor early. It's common and treatable.",
  },
  {
    id: 7,
    question: "Saina Nehwal, top Indian badminton player, and international swimmers don't stop during periods — they train and compete! Which is true?",
    options: [
      { label: "A", text: "Periods mean complete rest - no exercise or swimming", isCorrect: false },
      { label: "B", text: "Exercise and swimming are safe during periods", isCorrect: true },
      { label: "C", text: "Only walking is safe during periods", isCorrect: false },
      { label: "D", text: "Swimming during periods causes infections", isCorrect: false },
    ],
    tip: "Exercise can reduce cramps and improve mood! Swimming is safe — use tampons or menstrual cups. Some products even make it feel dry while swimming. Listen to your body - if you feel good, move! If tired, rest. Don't let periods stop your activities.",
    redFlag: "If you have extremely heavy flow or severe pain that stops you from daily activities → see a doctor. This isn't about periods themselves, but about the severity.",
  },
  {
    id: 8,
    question: "Riya noticed her period started bright red and ended dark brown. Is this normal?",
    options: [
      { label: "A", text: "Only bright red is normal", isCorrect: false },
      { label: "B", text: "Color change is normal", isCorrect: true },
      { label: "C", text: "Green or yellow is fine", isCorrect: false },
      { label: "D", text: "Only thin/watery blood is normal", isCorrect: false },
    ],
    tip: "Blood contains iron. Over time, blood exposed to air oxidizes - just like rust forms on iron doors. Dark brown blood is just older blood. Bright red = fresh blood (usually days 1-2). Dark red/brown = older blood (usually later days). This color change is totally normal!",
    redFlag: "Green, yellow, or foul-smelling blood may indicate infection — see a doctor.",
  },
  {
    id: 9,
    question: "According to NFHS-5 (National Family Health Survey), what percentage of Indian teen girls have low iron (anemia)?",
    options: [
      { label: "A", text: "10%", isCorrect: false },
      { label: "B", text: "30%", isCorrect: false },
      { label: "C", text: "59%", isCorrect: true },
      { label: "D", text: "80%", isCorrect: false },
    ],
    tip: "That's nearly 6 out of 10 girls! Heavy periods and low iron intake can make you tired, dizzy, pale, or short of breath. Eat iron-rich foods like: Spinach, jaggery, lentils, pomegranate, beetroot, eggs. Take doctor-recommended supplements if needed.",
    redFlag: "Constant tiredness, dizziness, very pale skin, or feeling breathless → get blood tested. Anemia is very treatable!",
  },
  {
    id: 10,
    question: "One week before her period, Riya notices she feels more tired, bloated, craves sweets, and feels more emotional than usual. What is this called?",
    options: [
      { label: "A", text: "A serious medical condition", isCorrect: false },
      { label: "B", text: "PMS (Premenstrual Syndrome)", isCorrect: true },
      { label: "C", text: "A sign of PCOS", isCorrect: false },
      { label: "D", text: "Being 'overly dramatic'", isCorrect: false },
    ],
    tip: "PMS = Pre (before) + Menstrual (periods) + Syndrome (group of symptoms). It happens because hormones fluctuate before your period. Your body and emotions responding to these changes is NORMAL, not weakness or 'being dramatic.' Common symptoms include: Physical - bloating, fatigue, breast tenderness, headaches; Emotional - feeling more sensitive, tearful, or easily frustrated; Cravings - wanting sweet or salty foods. About 3 out of 4 people experience PMS. It's biology, not personality!",
    redFlag: "If you feel hopeless, can't get out of bed, or symptoms severely affect daily life, talk to a doctor.",
  },
  {
    id: 11,
    question: "Mrs. Sharma hasn't had a period for 12 months straight at age 51. When does menopause usually happen?",
    options: [
      { label: "A", text: "25–30 years", isCorrect: false },
      { label: "B", text: "35–40 years", isCorrect: false },
      { label: "C", text: "45–55 years", isCorrect: true },
      { label: "D", text: "After 65", isCorrect: false },
    ],
    tip: "Menopause is natural — the ovaries stop releasing eggs and periods stop permanently. Average age is 51, but anywhere from 45–55 is normal. It's a natural life stage, not a disease.",
    redFlag: "If periods stop before 40, it's called early menopause — see a doctor.",
  },
  {
    id: 12,
    question: "Anisha asked, 'Which organ makes eggs?'",
    options: [
      { label: "A", text: "Uterus", isCorrect: false },
      { label: "B", text: "Ovary", isCorrect: true },
      { label: "C", text: "Cervix", isCorrect: false },
      { label: "D", text: "Fallopian tube", isCorrect: false },
    ],
    tip: "Ovaries are about the size of almonds and release eggs each month. They also make hormones (like estrogen and progesterone) that control your menstrual cycle and overall reproductive health.",
    redFlag: "Severe pain in the lower abdomen, especially on one side, could indicate ovarian cysts or other issues. See a doctor if pain is persistent.",
  },
  {
    id: 13,
    question: "Shalini wondered, 'What's the main job of the uterus?'",
    options: [
      { label: "A", text: "Releases hormones", isCorrect: false },
      { label: "B", text: "Grows a soft lining inside for pregnancy or sheds it during periods", isCorrect: true },
      { label: "C", text: "Produces eggs", isCorrect: false },
      { label: "D", text: "Connects to outside", isCorrect: false },
    ],
    tip: "The uterus builds a thick, blood-rich lining inside every month. If pregnancy happens, the baby grows there. If no pregnancy happens, the uterus sheds this lining - that's your period!",
    redFlag: "Severe cramping or extremely heavy bleeding during periods may indicate uterine fibroids or other conditions. Consult a doctor if symptoms are severe.",
  },
  {
    id: 14,
    question: "Devika asked, 'Which part acts like a gatekeeper of the uterus?'",
    options: [
      { label: "A", text: "Ovary", isCorrect: false },
      { label: "B", text: "Fallopian tube", isCorrect: false },
      { label: "C", text: "Cervix", isCorrect: true },
      { label: "D", text: "Vagina", isCorrect: false },
    ],
    tip: "The cervix is at the bottom of the uterus and controls what enters and exits. It produces protective mucus and opens during childbirth.",
    redFlag: "Unusual bleeding between periods, after sex, or post-menopause should be checked by a doctor. Regular Pap smears help detect cervical issues early.",
  },
  {
    id: 15,
    question: "Ritu heard about vaccines and wondered, 'Which one helps prevent cervical cancer?'",
    options: [
      { label: "A", text: "HPV", isCorrect: true },
      { label: "B", text: "COVID", isCorrect: false },
      { label: "C", text: "Flu", isCorrect: false },
      { label: "D", text: "There is no such vaccine", isCorrect: false },
    ],
    tip: "The HPV (Human Papillomavirus) vaccine protects against the virus that causes most cervical cancers. Best given between ages 9–14, but can be given up to age 26 or even 45. It's safe, effective, and can literally prevent cancer!",
    redFlag: "If you haven't received the HPV vaccine and are under 26, talk to your doctor. Early vaccination provides the best protection.",
  },
  {
    id: 16,
    question: "Neha learned that hormones are like tiny messengers in your blood that tell your body what to do. Which hormone is made by the ovaries and plays a key role in the menstrual cycle?",
    options: [
      { label: "A", text: "Insulin", isCorrect: false },
      { label: "B", text: "Estrogen", isCorrect: true },
      { label: "C", text: "Adrenaline", isCorrect: false },
      { label: "D", text: "Melatonin", isCorrect: false },
    ],
    tip: "Estrogen is a key hormone produced by your ovaries. It: helps eggs mature each month, signals the uterus to build its lining, plays a major role in controlling your menstrual cycle, and also affects your mood, skin, bones, and energy. Think of estrogen as one of the main conductors of your period orchestra - it keeps everything in rhythm!",
    redFlag: "Too much or too little estrogen can cause irregular periods, mood issues, or other problems. If cycles are very irregular, see a doctor.",
  },
  {
    id: 17,
    question: "Kavita noticed thick white discharge (like cottage cheese or curd) and itching down there. She feels embarrassed to ask anyone. What could this be?",
    options: [
      { label: "A", text: "Completely normal", isCorrect: false },
      { label: "B", text: "A yeast infection (very common and treatable!)", isCorrect: true },
      { label: "C", text: "A sign of PCOS", isCorrect: false },
      { label: "D", text: "Pregnancy", isCorrect: false },
    ],
    tip: "Yeast infections are super common - 3 out of 4 women will get one at some point! Symptoms include: thick, white discharge (looks like cottage cheese or curd), itching and irritation, sometimes burning when you pee. Caused by too much yeast growing (can happen with antibiotics, tight synthetic clothes, or hormonal changes). Treatment: Simple antifungal cream or tablet from a doctor or pharmacy. Don't be embarrassed - it's very common and easily treated!",
    redFlag: "If discharge is green/yellow, smells very bad, or comes with fever → see a doctor immediately (could be a different type of infection).",
  },
  {
    id: 18,
    question: "Kavya asked, 'How do I take care of my vagina and keep it healthy?'",
    options: [
      { label: "A", text: "Use scented soaps to stay fresh", isCorrect: false },
      { label: "B", text: "Wear tight synthetic underwear", isCorrect: false },
      { label: "C", text: "Wash with plain water and wear breathable cotton underwear", isCorrect: true },
      { label: "D", text: "Scrub aggressively to clean properly", isCorrect: false },
    ],
    tip: "Wash the outside area with plain water only - no scented soaps or harsh scrubs. The vagina is self-cleaning - it doesn't need special products inside! Wear breathable cotton underwear. Change pads/tampons every 4-6 hours during periods.",
    redFlag: "Itching, burning, unusual odor, or abnormal discharge → see a doctor. Don't try to treat yourself with random products.",
  },
];
