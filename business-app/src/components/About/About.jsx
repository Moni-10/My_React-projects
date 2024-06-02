import React from 'react';
import './About.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBusinessTime, faChartPie, faTruckFast, faUserClock, faHouseLaptop, faPhone } from '@fortawesome/free-solid-svg-icons';
import AboutImage from '../../assets/about/about_img.jpg';

export default function About() {
    // Icons
    const faBusinessIcon = <FontAwesomeIcon icon={faBusinessTime} />
    const faChartPieIcon = <FontAwesomeIcon icon={faChartPie} />
    const faTruckFastIcon = <FontAwesomeIcon icon={faTruckFast} />
    const faUserClockIcon = <FontAwesomeIcon icon={faUserClock} />
    const faHouseLaptopIcon = <FontAwesomeIcon icon={faHouseLaptop} />
    const faPhoneIcon = <FontAwesomeIcon icon={faPhone} />

  return (
    <>
    <section id="about">
        <div class="container">
            <div className="title_headling">
                <h3>We Provides Shortage Remarkable Ideas!</h3>
                <p>If you have any specific questions, need assistance, or want to share more about the remarkable ideas you provide, feel free to provide more details. Whether it's related to development, creative projects, or any other area, I'm here to help or discuss further.</p>
            </div>
            <div className="about_box_wrapper">
                <div className="about_box">
                    <div className="about_icon">
                        {faBusinessIcon}
                    </div>
                    <div className="about_content">
                        <h5>Development</h5>
                        <p>I'm here to help with development-related questions or topics. If you have a specific question or if there's a particular aspect of development.</p>
                    </div>
                </div>
                <div className="about_box">
                    <div className="about_icon green_icon">
                        {faChartPieIcon}
                    </div>
                    <div className="about_content">
                        <h5>Integration</h5>
                        <p>! Integration in software development typically involves combining different software systems and making them work together as a unified whole.</p>
                    </div>
                </div>
                <div className="about_box">
                    <div className="about_icon blue_icon">
                        {faTruckFastIcon}
                    </div>
                    <div className="about_content">
                        <h5>Branding</h5>
                        <p>Branding is a crucial aspect of marketing and business strategy that involves creating a unique and memorable identity for a product, service, or company.</p>
                    </div>
                </div>
            </div>

            <div className="about_box_details">
                <div className="about_col">
                    <div className="about_image">
                        <img src={AboutImage} alt="about" className="about_main"/>
                    </div>
                    <div className="img_info__box">
                        <h6 className="img_info__title">GET A PRICE QUOTE TODAY!</h6>
                        <p> obtaining a price quote typically involves contacting the business or service provider directly. Here's a general template you can use to request a price quote:</p>
                        <a href="/">{faPhoneIcon} <span>8368486216</span></a>
                    </div>
                </div>
                <div className="about_col more_space">
                    <h3>We have business skills that will increase your earnings</h3>
                    <p> If you're offering services or products aimed at improving business skills and increasing earnings for individuals or organizations, it's essential to communicate the value proposition clearly.</p>

                    <div className="grid_info">
                        <div className="icon">{faUserClockIcon}</div>
                        <div className="detail">
                            <h4>Start your own business in minutes</h4>
                            <p>Starting your own business is an exciting venture, but it typically involves careful planning and execution rather than being an instantaneous process.</p>
                        </div>
                    </div>
                    <div className="grid_info">
                        <div className="icon green_icon">{faHouseLaptopIcon}</div>
                        <div className="detail">
                            <h4>Open a business account online</h4>
                            <p>Opening a business account online is a convenient and efficient way to manage your business finances. </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}
