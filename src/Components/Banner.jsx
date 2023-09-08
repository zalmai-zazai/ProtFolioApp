import React from 'react';
import bannerImg from '../assets/banner.jpg';
import { SocialIcon } from 'react-social-icons';
import { FaPhoneVolume } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

function Banner() {
  return (
    <div className="banner">
      <div className="profile-img"></div>
      <div className="content">
        <h1>ZALMAI ZAZAI</h1>
        <h2>FULL STACK DEVLOPER</h2>
        <h5>
          <FcGoogle className="contact-icon ml-4" />
          {'   '}
          Shahzalmai98@gmail.com
        </h5>
        <h5>
          <FaPhoneVolume className="contact-icon ml-4" /> {'   '}
          (+1-360-590-9080)
        </h5>
        <div className="social-media">
          <ul>
            <li>
              <SocialIcon url="https://github.com/zalmai-zazai" />
            </li>
            <li>
              <SocialIcon url="https://instagram.com/zalmai.king.1" />
            </li>
            <li>
              <SocialIcon url="https://twitter.com/ZalmaiShah" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Banner;
