import React from 'react'
import PropTypes from 'prop-types'
import ViewsTitle from '../../components/ViewsTitle'

const TabListItem = ({ text }) => (
    <div className='mk-works-tab-right-list-item'>{text}</div>
)

const Tabs = ({ list }) => {
    return (
        <div>
            {(list || []).map((item, i) => (
                <div key={i} className='mk-works-tab'>
                    <div className='mk-works-tab-left'>
                        <div data-aos="zoom-in-left">
                            <div className='mk-works-tab-left-button mk-works-tab-left-button-selected'
                            >{item.company}</div>
                        </div>
                    </div>
                    <div className='mk-works-tab-right'>
                        <div
                            data-aos="zoom-in-right"
                            className='mk-works-tab-right-title'>
                            {`${item.role} @ ${item.company}`}
                        </div>
                        <div
                            data-aos="zoom-in-right" className='mk-works-tab-right-duration'>{item.duration}</div>
                        <div
                            data-aos="zoom-in-right" className='mk-works-tab-right-list'>
                            {(item.points || []).map((text, j) => (
                                <TabListItem key={j} text={text} />
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}


const Works = ({ data: {
    heading,
    experiences,
} }) => {
    return (
        <div
            className='mk-works'>
            <div className='container h100per-min100vh d-flex justify-content-center'>
                <div

                    data-aos="fade-down-left"
                    className='mk-works-container'>
                    <ViewsTitle
                        text={heading}
                    />
                    <Tabs
                        list={experiences}
                    />
                </div>
            </div>
        </div>
    )
}

Works.propTypes = {}

export default Works