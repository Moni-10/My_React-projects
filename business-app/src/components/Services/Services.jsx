import React, { useState } from 'react';
import './Services.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLaptopCode,
  faChartBar,
  faCopy,
  faMarker,
  faUserGear,
  faCoins,
} from '@fortawesome/free-solid-svg-icons';

const Service = ({ icon, title, content }) => {
  const [isReadMore, setIsReadMore] = useState(false);

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  return (
    <div className="service_box">
      <div className={`service_icon ${isReadMore ? 'blue_icon' : ''}`}>{icon}</div>
      <h4 className="number">01</h4>
      <div className="service_content">
        <h5>{title}</h5>
        <p>{isReadMore ? content : `${content.slice(0, 50)}...`}</p>
        {content.length > 50 && (
          <a href="/" className="read" onClick={toggleReadMore}>
            {isReadMore ? 'Read less' : 'Read more'}
          </a>
        )}
      </div>
    </div>
  );
};

const Services = () => {
  const faLaptopCodeIcon = <FontAwesomeIcon icon={faLaptopCode} />;
  const faChartBarIcon = <FontAwesomeIcon icon={faChartBar} />;
  const faCopyIcon = <FontAwesomeIcon icon={faCopy} />;
  const faMarkerIcon = <FontAwesomeIcon icon={faMarker} />;
  const faUserGearIcon = <FontAwesomeIcon icon={faUserGear} />;
  const faCoinsIcon = <FontAwesomeIcon icon={faCoins} />;

  return (
    <div id="services">
      <div className="container">
        <div className="title_headling">
          <h3>What's Services We Are Offering to Our Customers</h3>
          <p>It seems like you want to communicate the services your business offers to potential customers. Crafting a clear and compelling list of services is crucial for attracting and informing your target audience.</p>
        </div>
        <div className="service_wrapper">
          <Service icon={faLaptopCodeIcon} title="Cloud Computing" content="Cloud computing is a technology paradigm that involves the delivery of computing services over the internet, allowing users to access and use resources like computing power, storage, and databases without the need for owning or maintaining the physical infrastructure. Cloud computing provides a flexible and scalable alternative to traditional on-premises IT solutions." />
          <Service icon={faChartBarIcon} title="Business Strategy" content="Business strategy is a set of actions and decisions that outline how a business will achieve its goals and objectives. It involves planning and making choices on allocating resources, establishing competitive advantages, and positioning the business in the market to achieve long-term success. A well-defined business strategy guides decision-making, resource allocation, and activities to fulfill the overall vision and mission of the organization." />
          <Service icon={faCopyIcon} title="Reports Analysis" content="Report analysis involves the examination and interpretation of data presented in reports to derive insights, make informed decisions, and support strategic planning. This process is crucial for businesses to understand performance, identify trends, and make data-driven decisions. Here's a breakdown of key components and steps involved in report analysis." />
          <Service icon={faMarkerIcon} title="Decision Maker" content="A Decision Maker is an individual or entity with the authority and responsibility to make choices, determinations, or judgments in various contexts. Decision makers play a crucial role in shaping the direction and outcomes of businesses, organizations, governments, and other entities. The term can be applied in a variety of settings, each with its own unique decision-making processes and responsibilities. " />
          <Service icon={faUserGearIcon} title="Customer Oriented" content="Customer-oriented refers to a business approach or organizational mindset that prioritizes and focuses on meeting the needs, preferences, and expectations of customers. A customer-oriented strategy emphasizes delivering high-quality products or services, building positive customer relationships, and ensuring overall customer satisfaction. This approach recognizes that satisfied and loyal customers are essential for the success and growth of a business." />
          <Service icon={faCoinsIcon} title="Solution Focused" content="Solution-focused refers to an approach, mindset, or methodology that focuses on identifying and implementing solutions rather than dwelling on problems. In various contexts, such as counseling, coaching, organizational management, and problem-solving, a solution-focused approach aims to move individuals or groups toward positive outcomes by concentrating on what is working or what can be done to achieve desired results." />
        </div>
      </div>
    </div>
  );
};

export default Services;
