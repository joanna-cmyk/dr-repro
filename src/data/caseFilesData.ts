export interface CaseFile {
  id: number;
  title: string;
  emoji: string;
  scenario: string;
  charactersInTrouble: string;
  realLifeIssue: string;
  code: string;
}

export const caseFiles: CaseFile[] = [
  {
    id: 1,
    title: "The Tired Eggmakers",
    emoji: "🥚",
    scenario: "The Egg Maker is feeling tired - \"I'm crowded inside —I produced many eggs but none of them is big enough to leave for monthly dispatch on time.\" The Fally received a message. \"Your delivery is a bit late this month.\"",
    charactersInTrouble: "Ovaries",
    realLifeIssue: "PCOD – Many eggs start but none mature on time, causing irregular cycles.",
    code: "263003"
  },
  {
    id: 2,
    title: "The Hormone Storm",
    emoji: "⚡",
    scenario: "The Egg Makers were ready to work, but suddenly hormones came to their place uninvited— some shouting at twin egg makers - \"Grow!\" while others said \"Stop!\" Because of the confusion, only a few eggs started growing, and some eggs stayed asleep. Some tiny eggs tried to grow but couldn't finish, they formed into little bubbles. The womb downstairs waited, \"Why are eggs not ready, and what are these little bubbles appearing on twins?\"",
    charactersInTrouble: "Ovaries",
    realLifeIssue: "PCOS – Hormone imbalance affects egg growth and cycles.",
    code: "263003"
  },
  {
    id: 3,
    title: "Walls Gone Wild",
    emoji: "🏰",
    scenario: "The womb was decorating her walls to make a cozy place, but the walls grew too thick and outside her palace. Now, everything hurts badly and it's hard to move inside!",
    charactersInTrouble: "Uterus",
    realLifeIssue: "Endometriosis – Womb lining grows outside the uterus, causing pain.",
    code: "263003"
  },
  {
    id: 4,
    title: "The Scary Spot",
    emoji: "🔍",
    scenario: "The Gatekeeper noticed a dark, uneven spot on her door. \"It wasn't there before, and it hurts and bleeds abnormally during periods/after sex or menopause\" The womb said, \"Lets go to see Dr. Repro.\"",
    charactersInTrouble: "Cervix",
    realLifeIssue: "Cervical Cancer Warning – Spot needs medical attention.",
    code: "263003"
  },
  {
    id: 5,
    title: "The Itchy Entrance",
    emoji: "🚪",
    scenario: "\"It's itchy, sore, and has thick white discharge like cheese!\" cried Vaggie.",
    charactersInTrouble: "Vagina",
    realLifeIssue: "Yeast or Vaginal Infection – Itching, soreness, and unusual discharge.",
    code: "263003"
  },
  {
    id: 6,
    title: "The Retiring Duo",
    emoji: "🌅",
    scenario: "The Egg Makers sat quietly and said, \"We've worked for years, time to rest now.\" The Nest nodded, \"Everything's changing, but we'll adjust together.\"",
    charactersInTrouble: "Ovaries",
    realLifeIssue: "Menopause – Natural aging changes the body's cycles.",
    code: "263003"
  },
  {
    id: 7,
    title: "The Overcrowded Womb",
    emoji: "🏠",
    scenario: "The womb was busy decorating herself, but suddenly guests who are big, round and soft balls appeared inside her walls and made her feel congested. She cried. Every month, her monthly cleaning got heavier and more painful. The Egg Makers watched from above, worried about the womb's discomfort.",
    charactersInTrouble: "Uterus",
    realLifeIssue: "Fibroids – Non-cancerous growths in the womb causing heavy periods and discomfort.",
    code: "263003"
  },
  {
    id: 8,
    title: "The Twisted Courier Line",
    emoji: "🌀",
    scenario: "Fally was supposed to carry eggs to the womb but suddenly one path got twisted like a knot. \"I can't move properly!\" shouted Fally. Some eggs got stuck, and the womb worried.",
    charactersInTrouble: "Fallopian tube",
    realLifeIssue: "Twisted Fallopian Tube – Rare condition where the tube twists, stopping egg travel; causes sudden pain and possible infertility.",
    code: "263003"
  },
  {
    id: 9,
    title: "The Sore Womb",
    emoji: "💢",
    scenario: "Every month, the womb started contracting tightly to push out the old lining. 'Ouch! It hurts so much in my lower belly!' she cried in pain. The Egg Makers tried to rest, but the womb's strong contractions made everyone tense.",
    charactersInTrouble: "Uterus",
    realLifeIssue: "Menstrual cramps",
    code: "263003"
  }
];
