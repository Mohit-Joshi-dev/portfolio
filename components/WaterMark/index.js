import React, { useEffect, useState } from 'react'

const consoleMyName = () => {
    console.log(``)
  }

const WaterMark = () => {
    useEffect(consoleMyName, [])
    return <></>
}

export default React.memo(WaterMark)
