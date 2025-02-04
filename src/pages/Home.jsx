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
                <meta name="title" content="Boze Coin | Best Meme Coin & Altcoin Revenue-Sharing Project 2025"/>
                <meta name="description" content="Boze Coin is an innovative meme coin and altcoin revenue-sharing platform. Earn crypto by watching videos, subscribing, and engaging with content via a secure Telegram bot. Invest in the best meme and altcoin projects for 2025."/>
                <meta name="keywords" content="Boze Coin, Meme Coin, Alt Coins, Meme vs Alt, Meme Coins are Best to Invest, Best Meme, Best Alt Coins, Best Coins, Best Meme Coins Project, 2025, Best Crypto Investments 2025, High ROI Crypto Projects, Long-Term Crypto Investment, Passive Income Crypto 2025, Best DeFi Investment Strategies, Web3 Investment Opportunities, Cryptocurrency Portfolio Management, Crypto Trading for Beginners, Earn Free Cryptocurrency, Free Bitcoin Earning Sites, Airdrop Crypto 2025, Best Free Airdrops 2025, Watch Videos and Earn Crypto, Earn Bitcoin Watching Ads, Social Media Engagement Rewards, Web3 Task-Based Earning, Play-to-Earn vs Watch-to-Earn, Best Crypto Referral Programs 2025, Passive Income Through Crypto Referrals, Web3 Affiliate Marketing, High-Paying Crypto Referral Programs, New Airdrops with Low Competition, Best Play-to-Earn Crypto Games, Web3 Social Media Rewards, NFT Staking for Passive Income, Play-to-Earn vs Free-to-Earn, Cloud Mining Free Trial, Best Proof-of-Stake Coins, No Deposit Free Crypto, Telegram Airdrops No Gas Fee, Passive Income Crypto Mining, Crypto Faucet List 2025, Upcoming Airdrops 2025, Free Tokens Without Investment, Best Blockchain Airdrops 2025, Crypto Insurance & Risk Management, Best Blockchain-Based Insurance Platforms, Decentralized Finance Insurance, Smart Contract Insurance Solutions, Boze Coin Free Earning, Free Learning & Crypto Rewards, Tap-to-Earn Crypto, Best Crypto Mining Without Investment, Watch and Earn Crypto, Best Staking Coins 2025"/>
                <meta property="og:title" content="Boze Coin | Best Meme Coin & Altcoin Revenue-Sharing Project 2025"/>
                <meta property="og:description" content="Join Boze Coin, the next-gen meme coin and altcoin project. Watch, subscribe, and engage to earn crypto rewards. The best revenue-sharing crypto project for 2025!"/>
                <meta property="og:url" content="https://www.bozecoin.com"/>
                <meta property="og:type" content="website"/>
                <meta property="og:image" content="https://www.bozecoin.com/images/bozecoin-banner.jpg"/>

                <meta name="twitter:card" content="summary_large_image"/>
                <meta name="twitter:title" content="Boze Coin | The Future of Meme Coins & Altcoins in 2025"/>
                <meta name="twitter:description" content="Boze Coin is a meme coin and altcoin revenue-sharing platform rewarding users for content engagement. The best crypto investment for 2025!"/>
                <meta name="twitter:image" content="https://www.bozecoin.com/images/bozecoin-banner.jpg"/>


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
