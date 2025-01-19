import React from 'react'
import {Helmet} from "react-helmet";
import HomeSec1 from '../components/HomeSec1';
import HomeSec2 from '../components/HomeSec2';
import HeadingSec from '../components/HeadingSec';
import HomeSec3 from '../components/HomeSec3';
import HomeSec4 from '../components/HomeSec4';
import HomeLabel from '../components/HomeLabel';
import HomeSec5 from '../components/HomeSec5';
import HomeSec6 from '../components/HomeSec6';
const Home = () => {
  return (
  <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Boze Coin | HOME</title>
                <link rel="canonical" href="https://bozecoin.com/" />
            </Helmet>
  <HomeSec1/>
  <HomeSec2/>
  <HeadingSec/>
  <HomeSec3 
  heading = {"What is Boze Coin?"} 
  para = {"Boze Coin is a revenue-sharing project powered by a Telegram-based bot. It’s like Aladdin and the wonderful lamp of Telegram—Boze and its incredible community!"}
  img = {'/images/mobile/1.png'}

  />
  <HomeSec4/>
  <HomeSec3 
  item = {true}
  heading = {"How to Earn with Boze Coin?"} 
  para = {"Users can earn by interacting with tasks, monetized social media accounts, blogs, and other activities. Users will be rewarded for completing tasks with Boze Coin Points."}
  img = {'/images/mobile/2.png'}
  container1 = {'Watch Youtube'}
  container2 = {'6 Digit Coded Videos'}
  container3 = {'Follow'}
  container4 = {'Like'}
  container5 = {'Comment'}
  container6 = {'Subscribe'}                                                                                                                        
  
  />
  <HomeSec6/>
  <HomeLabel/>
  <HomeSec5/>
  </>
  )
}

export default Home
