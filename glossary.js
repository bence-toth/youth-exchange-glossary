const glossary = [
  {
    term: { en: "Sex" },
    description: {
      en: "Sex refers to the biological and physiological characteristics that define humans as female or male. These sets of biological characteristics are not mutually exclusive, as there are individuals who possess both, but these characteristics tend to differentiate humans as females or males.",
    },
  },
  {
    term: { en: "Gender identity" },
    description: {
      en: "Gender is a social, psychological and cultural construct and it is developed in the process of socialization. Different societies and cultures may therefore have different understandings of what is ‘masculine’ or ‘feminine’. Societies create norms and expectations related to gender, and these are learned in the course of people’s lives. Gender is not necessarily defined by biological sex: a person’s gender may or may not correspond to their biological sex. Gender is more about identity and how we feel about ourselves. People may self-identify as male, female, transgender, other or none (indeterminate/unspecified).",
    },
  },
  {
    term: { en: "Gender expression " },
    description: {
      en: "Gender expression is how a person publicly expresses or presents their gender. This can include behavior and outward appearance such as dress, hair, make-up, body language and voice. A person’s chosen name and pronoun are also common ways of expressing gender. Others perceive a person’s gender through these attributes.",
    },
  },
  {
    term: { en: "Sexual orientation" },
    description: {
      en: "Sexual orientation is an emotional, romantic or sexual attraction to other people. Note: an individual’s sexual orientation is independent of their gender identity.",
    },
  },
  {
    term: { en: "Gay" },
    description: {
      en: "Refers to a man who has a romantic and/or sexual orientation towards men. Also a generic term for lesbian and gay sexuality - some women define themselves as gay rather than lesbian. Some non-binary people may also identify with this term.",
    },
  },
  {
    term: { en: "Lesbian" },
    description: {
      en: "Refers to a woman who has a romantic and/or sexual orientation towards women. Some non-binary people may also identify with this term.",
    },
  },
  {
    term: { en: "Transgender" },
    description: {
      en: "An umbrella term for those individuals whose gender identity does not match with that assigned for their physical sex",
    },
  },
  {
    term: { en: "Stereotype" },
    description: {
      en: "Stereotype, in psychology, a fixed, oversimplified, and often biased belief about a group of people. Stereotype are typically rationally unsupported generalizations, and, once a person becomes accustomed to stereotypical thinking, they/he/she may not be able to see individuals for who they are.",
    },
  },
  {
    term: { en: "Confirmation bias" },
    description: {
      en: "The tendency to process information by looking for, or interpreting, information that is consistent with one's beliefs or biases.",
    },
  },
  {
    term: { en: "Intersectional feminism" },
    description: {
      en: "Intersectional feminism takes into account the many different ways each woman experiences discrimination. It centres on the voices of those experiencing overlapping, concurrent forms of oppression in order to understand the depths of the inequalities and the relationships among them in any given context.",
    },
  },
  {
    term: { en: "Queer" },
    description: {
      en: "Queer is an umbrella term that takes into account the idea that sex, gender, gender expression and sexual orientation are a spectrum and not binaries. Therefore it can be used to identify someone who identifies within these spectrums. It is often used to describe a sexual or gender identity that is different from traditional ideas about sex and gender (mainly cisgender and heterosexuality).",
    },
  },
  {
    term: { en: "Microaggression" },
    description: {
      en: "Microaggression is a form of discrimination which can be intentional or accidental and consists of a comment or an action that negatively targets a marginalized group or person. Even if the aggressor may not recognize their action as an aggressive one, as the mechanism is subtle, it still consists as one.",
    },
  },
  {
    term: { en: "Jinealogy" },
    description: {
      en: "Jineology, the science of women, is a form of feminism, of gender equality advocated by the Kurdistan Workers' Party (PKK) and the broader Kurdistan Communities Union. Jineology is built on the principle that there cannot be freedom of society without the freedom of women. ",
    },
  },
  {
    term: { en: "Ableism" },
    description: {
      en: "Discrimination in favour of able-bodied people and social prejudice against people with disabilities based on the belief that typical abilities are superior.",
    },
  },
  {
    term: { en: "Sexism" },
    description: {
      en: "Prejudice, stereotyping, or discrimination, typically against women, on the basis of sex. Sexism can also be a belief that one sex is superior to or more valuable than another sex.",
    },
  },
  {
    term: { en: "Dunning-Kruger effect" },
    description: {
      en: "The Dunning-Kruger effect occurs when a person's lack of knowledge and skills in a certain area cause them to overestimate their own competence. By contrast, this effect also causes those who excel in a given area to think the task is simple for everyone, and underestimate their relative abilities as well. ",
    },
  },
  {
    term: { en: "Conservatism bias" },
    description: {
      en: "Conservatism bias is a mental process in which people maintain their past views or predictions at the cost of recognizing new information. It is the tendency to revise one's belief insufficiently when presented with new evidence.",
    },
  },
  {
    term: { en: "Bandwagon effect" },
    description: {
      en: "The bandwagon effect is the term used to describe the tendency for people to adopt certain behaviors, styles, or attitudes simply because others are doing so.",
    },
  },
  {
    term: { en: "Availability heuristic" },
    description: {
      en: "The availability heuristic, also known as availability bias, is a mental shortcut that relies on immediate examples that come to a given person's mind when evaluating a specific topic, concept, method, or decision. This heuristic, operating on the notion that, if something can be recalled, it must be important, or at least more important than alternative solutions not as readily recalled,[1] is inherently biased toward recently acquired information.",
    },
  },
  {
    term: { en: "Unconscious bias" },
    description: {
      en: "Unconscious biases, or implicit biases, are attitudes that are held subconsciously and affect the way individuals feel and think about others around them. Could be racist, homophobic, sexist prejudice. ",
    },
  },
  {
    term: { en: "Choice-supportive bias" },
    description: {
      en: "Choice-supportive bias is the tendency to remember our choices as better than they actually were, because we tend to over attribute positive features to options we chose and negative features to options not chosen.",
    },
  },
  {
    term: { en: "Cognitive bias" },
    description: {
      en: "Cognitive bias is a systematic thought process caused by the tendency of the human brain to simplify information processing through a filter of personal experience and preferences.",
    },
  },
  {
    term: { en: "Non-binary" },
    description: {
      en: "Not identifying solely as man or women. Could be a combination of both or neither.",
    },
  },
  {
    term: { en: "Prejudice" },
    description: {
      en: "Any preconceived opinion or feeling, either favorable or unfavorable. unreasonable feelings, opinions, or attitudes, especially of a hostile nature, regarding an ethnic, racial, social, or religious group.",
    },
  },
  {
    term: { en: "Authority bias" },
    description: {
      en: "Defined as having an incorrectly high belief that the information verified by a person with formal authority is correct, and therefore an individual is likely to be more influenced by them.",
    },
  },
  {
    term: { en: "Toxic masculinity" },
    description: {
      en: "Toxic masculinity involves cultural pressures for men to behave in a certain way. Toxic masculinity refers to a notion of “manliness” that often perpetuates domination, misogyny, homophobia, and aggression.",
    },
  },
  {
    term: { en: "Equality" },
    description: {
      en: "Equality is about ensuring that every individual has an equal opportunity to make the most of their lives and talents.",
    },
  },
  {
    term: { en: "Equity" },
    description: {
      en: "Equity relates to racial and social justice. It means meeting communities where they are and allocating resources and opportunities as needed to create equal outcomes for all community members. The concept of equity is synonymous with fairness and justice. E.g., The little girl should only carry 1 kg of apples while the big man should carry 3 kg. (They should not carry 2 kg each). ",
    },
  },
  {
    term: { en: "Agender" },
    description: {
      en: "An individual  who does not identify with any gender.",
    },
  },
  {
    term: { en: "Genderfluid" },
    description: {
      en: "Gender which varies over time. ",
    },
  },
  {
    term: { en: "Cisgender" },
    description: {
      en: "Individuals whose gender identity matches their sex assigned at birth.",
    },
  },
  {
    term: { en: "Non-cisgender " },
    description: {
      en: "Individuals whose gender identity does not match their sex assigned at birth.",
    },
  },
  {
    term: { en: "Male (sex)" },
    description: {
      en: "A person with male sex characteristics (chromosome patterns, gonads, or genitals).",
    },
  },
  {
    term: { en: "Female (sex)" },
    description: {
      en: "A person with female sex characteristics (chromosome patterns, gonads, or genitals).",
    },
  },
  {
    term: { en: "Intersex" },
    description: {
      en: "People born with both male and female sex characteristics (chromosome patterns, gonads, or genitals).",
    },
  },
  {
    term: { en: "Drag" },
    description: {
      en: "A type of political art/entertainment where people (often men) dress up in hyper-feminine or hyper-masculine clothing while singing, dancing, doing comedy, etc. E.g., RuPaul.",
    },
  },
  {
    term: { en: "Transman" },
    description: {
      en: "A man born with female sex characteristics (chromosome patterns, gonads, or genitals) but who identifies as a man. Some gets surgery but not all.",
    },
  },
  {
    term: { en: "Transwoman" },
    description: {
      en: "A woman born with male sex characteristics (chromosome patterns, gonads, or genitals) but who identifies as a woman. Some gets surgery but not all.",
    },
  },
  {
    term: { en: "Racism" },
    description: {
      en: "Prejudice, discrimination, or antagonism by an individual, community, or institution against a person or people on the basis of their membership of a particular racial or ethnic group, typically one that is a minority or marginalized.",
    },
  },
  {
    term: { en: "Patriarchy " },
    description: {
      en: "A system of society or government in which men hold the power and women are largely excluded from it.",
    },
  },
  {
    term: { en: "Social assimilation" },
    description: {
      en: "1. The process by which two or more cultures or cultural groups are gradually merged, although one is likely to remain dominant. 2. The process by which individuals are absorbed into the culture or mores of the dominant group.",
    },
  },
  {
    term: { en: "Masculine (gender expression)" },
    description: {
      en: "Having qualities or appearance traditionally associated with men.",
    },
  },
  {
    term: { en: "Feminine (gender expression)" },
    description: {
      en: "Having qualities or an appearance traditionally associated with women.",
    },
  },
  {
    term: { en: "Androgynous (gender expression)" },
    description: {
      en: "Having the characteristics of both male and female. Neither just feminine or masculine.",
    },
  },
  {
    term: { en: "Pronouns" },
    description: {
      en: "She/her, he/him, they/them etc.",
    },
  },
  {
    term: { en: "Two-spirited" },
    description: {
      en: "Two-spirited refers to a person who identifies as having both a masculine and a feminine spirit, and is used by some Indigenous people to describe their sexual, gender and/or spiritual identity.",
    },
  },
  {
    term: { en: "Bisexual " },
    description: {
      en: "A person who is sexually attracted to both men and women.",
    },
  },
  {
    term: { en: "Pansexual" },
    description: {
      en: "Individuals who can experience sexual, romantic, or emotional attraction to any person, regardless of that person’s gender, sex, or sexuality.",
    },
  },
  {
    term: { en: "Asexual" },
    description: {
      en: "Individuals who don’t experience sexual attraction to others of any gender.",
    },
  },
  {
    term: { en: "Demisexual" },
    description: {
      en: "Individuals who experience sexual attraction only under specific circumstances, e.g., having an emotional connection with a person.",
    },
  },
  {
    term: { en: "Monogamy" },
    description: {
      en: "When an individual has only one partner during their lifetime or when an individual has only one partner at any one time (serial monogamy). ",
    },
  },
  {
    term: { en: "Polyamory" },
    description: {
      en: "Polyamorous people have multiple loving, intentional, and intimate relationships at the same time. Polyamory is a type of open or non-monogamous relationship that follows certain guidelines. ",
    },
  },
  {
    term: { en: "Misogyny" },
    description: {
      en: "The hatred of, contempt for, or prejudice against women. It is a form of sexism that keeps women at a lower social status than men, thus maintaining the societal roles of patriarchy.",
    },
  },
  {
    term: { en: "Binary " },
    description: {
      en: "Relating to, composed of, or involving two things. The two things are often seen as opposites - man/woman, good/bad, white/black. Binaries are usually a system where one dominates the other.",
    },
  },
  {
    term: { en: "Genderqueer" },
    description: {
      en: "A gender variant person whose gender identity is neither male nor female, is between or beyond genders, or is some combination of genders.",
    },
  },
  {
    term: { en: "FTM / MTF" },
    description: {
      en: "Female to male / male to female.",
    },
  },
  {
    term: { en: "AMAB / AFAB" },
    description: {
      en: "Assigned male at birth / assigned female at birth.",
    },
  },
  {
    term: { en: "Polyandry" },
    description: {
      en: "Polyandry is the marriage of a woman to two or more men at the same time; the term derives from the Greek polys, “many,” and anēr, andros, “man”.",
    },
  },
  {
    term: { en: "Polyginia " },
    description: {
      en: "Polygyny, marriage in which two or more women share a husband.",
    },
  },
];

// const languages = [
//   { name: "English", code: "en" },
//   { name: "Portuguese", code: "pt" },
// ];

// document.getElementById("language-switcher").innerHTML = languages
//   .map(
//     (language) => `
//       <li>
//             <a href="./?language=${language.code}">${language.name}</a>
//       </li>
// `
//   )
//   .join("");

const defaultLanguage = "en";

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const language = urlParams.get("language") || defaultLanguage;

document.getElementById("glossary-wrapper").innerHTML = glossary
  .sort((a, b) => (a.term[language] < b.term[language] ? -1 : 1))
  .map(
    (item) => `
        <dt>${item.term[language]}</dt>
        <dd>${item.description[language]}</dd>
    `
  )
  .join("");
