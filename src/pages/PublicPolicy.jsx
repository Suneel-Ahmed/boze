import React from 'react'

const PublicPolicy = () => {
  return (
  <div className="w-full min-h-[80vh] flex-col gap-[30px] flex justify-center items-center">
          <h1 className="text-white mt-[50px] text-[clamp(16px,2.6vw,50px)] uppercase quicksand">
          Boze Coin Privacy Policy
          </h1>
          <div className="w-[70%] min-h-fit py-[50px] flex flex-col gap-[50px]  px-[clamp(20px,5.3vw,100px)]  rounded-3xl ">
                <div className='flex flex-col text-white' >
                        <h1 className='text-4xl text-white' >Information We Collect</h1>
                            <div className='mt-[20px] ' >
                                <p>We collect the following data to improve user experience:</p>
                            <ul className='list-disc ms-4 mt-2 ' >
                                <li>Cookies & Tracking Data: To enhance website functionality and analyze traffic.</li>
                                <li>User Data: If you register or interact with our website, we may collect your email, IP address, and browsing behavior.</li>
                                <li>Communication Data: If you contact us, we may store the information necessary to respond to your inquiries.</li>
                            </ul>
                            </div>
                </div>
                <div className='flex flex-col text-white' >
                        <h1 className='text-4xl text-white' >How We Use Your Information</h1>
                            <div className='mt-[20px] ' >
                                <p>We use the collected data for:</p>
                            <ul className='list-disc ms-4 mt-2 ' >
                                <li>Enhancing User Experience – Remembering preferences and improving navigation.</li>
                                <li>Analytics & Performance – Understanding website traffic trends.</li>
                                <li>Advertising & Marketing – Displaying relevant ads through ads network.</li>
                                <li>Security & Compliance – Protecting users and preventing unauthorized access.</li>
                            </ul>
                            </div>
                </div>
                <div className='flex flex-col text-white' >
                        <h1 className='text-4xl text-white' >Cookies & Tracking Technologies</h1>
                            <div className='mt-[20px] ' >
                            <ul className='list-disc ms-4 mt-2 ' >
                                <li>We use cookies to store user preferences and improve browsing experience.</li>
                                <li>Third-party services (such as ads network) may use cookies to serve relevant ads.</li>
                                <li>Users can manage or disable cookies via browser settings.</li>
                            </ul>
                            </div>
                </div>
                <div className='flex flex-col text-white' >
                        <h1 className='text-4xl text-white' > Third-Party Sharing</h1>
                            <div className='mt-[20px] ' >
                                <p>We do not sell or trade user data. However, we may share necessary data with:</p>
                            <ul className='list-disc ms-4 mt-2 ' >
                                <li>Advertising Partners: ads network and similar platforms to serve ads.</li>
                                <li>Legal Authorities: If required by law.</li>
                            </ul>
                            </div>
                </div>
                <div className='flex flex-col text-white' >
                        <h1 className='text-4xl text-white' > Your Rights & Choices</h1>
                            <div className='mt-[20px] ' >
                                <p>Users may:</p>
                            <ul className='list-disc ms-4 mt-2 ' >
                                <li>Disable Cookies through browser settings.</li>
                                <li>Opt-Out of Targeted Ads via Google’s Ad Preferences.</li>
                                <li>Request Data Deletion by contacting us.</li>
                            </ul>
                            </div>
                </div>
                <div className='flex flex-col text-white' >
                        <h1 className='text-4xl text-white' > Changes to This Policy</h1>
                            <div className='mt-[20px] ' >
                                <p>We may update this Privacy Policy from time to time. Changes will be posted on this page.</p>
                           
                            </div>
                </div>
                <div className='flex flex-col text-white' >
                        <h1 className='text-4xl text-white' > Contact Us</h1>
                            <div className='mt-[20px] ' >
                                <p>If you have any questions, contact us at tajordermenow@gmail.com or visit https://bozecoin.com.
                                By using our website, you agree to this Privacy Policy.</p>
                           
                            </div>
                </div>
           
          </div>
        </div>
  )
}

export default PublicPolicy
