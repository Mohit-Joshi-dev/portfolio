import { openLink } from "./methods";

const outer = {
  title1: `Hello, I'm`,
  title2: "Mohit Joshi,",
  decrypTexts: [
    "A Software Engineer",
    "A Mobile Developer",
    "I build things for the Mobile",
  ],
  desciption: `I’m a mobile developer with 5+ years of experience. I’ve built a wide range of apps—including e-commerce platforms, internal employee tools, and order management systems. My strengths lie in Flutter/Dart and iOS native development.`,
  button: {
    label: "Contact me!",
    onClick: () => openLink("mailto:mohitjoshi199923@gmail.com?subject=Hello"),
  },
};

export default outer;
