import React from 'react'
import Background from '../components/global/header/background-image'
import Main from '../components/sections/location'


const Location = ({ map }) => (
  <>
    <Background imageUrl="url(https://upload.wikimedia.org/wikipedia/commons/f/f4/Carnival_Destiny_Miami_12-22-11.JPG)"/>
    <Main {...{ map }}/>
  </>
)


export default React.memo(Location)