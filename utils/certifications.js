import { openLink } from "./methods"

const certifications = {
    heading:  `Licenses & certifications`,
    list: [
        {
            size: 2,
            title: 'iOS & Swift - The Complete iOS App Development Bootcamp',
            platform: 'Udemy',
            link: '',
            date: 'Issued Sep 2022 · No Expiration Date',
            logo: '/assets/udemy.jpg',
            aos: 'zoom-out-left'
        },
        {
            size: 1,
            title: 'Getting started with Flutter Development',
            platform: 'Coursera',
            link: '',
            date: 'Issued Aug 2022 · No Expiration Date',
            logo: '/assets/coursera.png',
            aos: 'zoom-out-left'
        },
        {
            size: 1,
            title: 'Android App Development Bootcamp',
            platform: 'Udemy',
            link: '',
            date: 'Issued Jul 2018 · No Expiration Date',
            logo: '/assets/udemy.jpg',
            aos: 'zoom-out-left'
        },
        {
            size: 2,
            title: 'Developing Mobile Apps with Flutter Specialization',
            platform: 'IBM',
            link: '',
            date: 'Issued Feb 2019 · No Expiration DateIssued',
            logo: '/assets/ibm.png',
            aos: 'zoom-out-right'
        },
    ],
    handleIconClick: openLink
}

export default certifications