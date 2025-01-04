import React from 'react'
import HomeSec1 from '../components/HomeSec1';
import HomeSec2 from '../components/HomeSec2';
import HeadingSec from '../components/HeadingSec';
import HomeSec3 from '../components/HomeSec3';
import HomeSec4 from '../components/HomeSec4';
import HomeLabel from '../components/HomeLabel';
import HomeSec5 from '../components/HomeSec5';
const Home = () => {
  return (
  <>
  <HomeSec1/>
  <HomeSec2/>
  <HeadingSec/>
  <HomeSec3/>
  <HomeSec4/>
  <HomeSec3 item = {true} />
  <HomeLabel/>
  <HomeSec5/>
  </>
  )
}

export default Home
