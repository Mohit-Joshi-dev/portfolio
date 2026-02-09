import { openLink } from "./methods";

const handleIconClick = (icon) => {
  const links = {
    github: "https://github.com/Mohit-Joshi-dev",
    twitter: "https://x.com/Mohitjoshi_007",
  };
  openLink(links[icon]);
};

const sideElements = {
  emailButton: {
    label: "mohitjoshi.main@gmail.com",
    onClick: () => openLink("mailto:mohitjoshi.main@gmail.com?subject=Hello"),
  },
  handleIconClick,
};

export default sideElements;
