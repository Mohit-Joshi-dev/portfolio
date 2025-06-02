import { openLink } from "./methods"

const handleIconClick = (icon) => {
    const links = {
        'github': 'https://github.com/Mohit-Joshi-dev',
        'twitter': 'https://x.com/Mohitjoshi_007',
    }
    openLink(links[icon])
}

const sideElements = {
    emailButton: {
        label: 'mohitjoshi199923@gmail.com',
        onClick: () => openLink('mailto:mohitjoshi199923@gmail.com?subject=Hello')
    },
    handleIconClick,
}

export default sideElements