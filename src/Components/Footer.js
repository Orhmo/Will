import React from 'react';
import {FaInstagram, FaFacebookF, FaTwitter} from  "react-icons/fa"

const Footer = () => {
  const services = ['Will Template', 'Will Examples', 'Will Generator'];
  const about_us = ['Contact Us', 'FAQs', 'Terms'];
  const company = ['Privacy Policy', 'Terms of Use', 'Blog'];

  return (
    

<div className="bg-black text-white">

    <div className=" px-16 py-16 grid grid-cols-2 gap-8 py-8 px-6 md:grid-cols-4">

        <div>
        <div className="p-2">
          <h1
            className="text-4xl font-bold text-purple-300">
             Will
            <span
              className="text2xl font-bold text-yellow-500">
                Generator
            </span>
            </h1>
        </div>

              <div className="flex mt-16 justify-between w-[100px] ">
                  <span className="mr-4"><FaFacebookF/></span>
                  <span className="mr-4"><FaInstagram/></span>
                  <span className=""><FaTwitter/></span>
                </div>

                <div>
                <p className="test-sm text-white mt-4"> &#169; 2022 WillGenerator</p>
                </div>

        </div>
        <div>
            <h2 class="mb-6 text-lg font-semibold text-white ">SERVICES</h2>
            {services.map((e) => (
          <div className="text-[14px] mb-2">
            <span>{e}</span>
          </div>
        ))}
	</div>

        <div>
            <h2 class="mb-6 text-lg font-semibold text-white">ABOUT US</h2>
            {about_us.map((e) => (
          <div className="text-[14px] mb-2">
            <span>{e}</span>
          </div>
        ))}
        </div>

        <div>
            <h2 class="mb-6 text-lg font-semibold text-white">COMPANY</h2>
            {company.map((e) => (
          <div className="text-[14px] mb-2">
            <span>{e}</span>
          </div>
        ))}
        </div>
    </div>
    </div>
  )
}
export default Footer;
