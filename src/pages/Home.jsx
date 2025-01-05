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
  <HomeSec3 
  heading = {"how to earn with Boze Coin?"} 
  para = {"user can Earn while interacting with tasks, Monotized Socials Media accounts, Blogs, and Other Tasks. user will be rewarded against doing tasks as Boze Coin Points."}
  img = {'/images/mobile/1.png'}
  container1 = {'Watch Youtube'}
  container2 = {'Digit Coded Videos'}
  container3 = {'Follow'}
  container4 = {'Like'}
  container5 = {'Comment'}
  container6 = {'Subscribe'}
  />
  <HomeSec4/>
  <HomeSec3 item = {true} />
  <HomeLabel/>
  <HomeSec5/>
  </>
  )
}

export default Home
