import React from "react";
import { Row, Col } from "antd";

const items = [
  {
    key: "1",
    icon: <i class='fas fa-chart-line'></i>,
    title: "High Performance",
    content:
      "Designing reliable, complex and dependable software systems is a continuous challenge to the software engineering community.",
  },
  {
    key: "2",
    icon: <i class='fas fa-palette'></i>,
    title: "Flat Design",
    content:
      "Flat design is a minimalist UI design genre which is currently used in graphical user interfaces for apps and websites.",
  },
  {
    key: "3",
    icon: <i class='fas fa-code'></i>,
    title: "Simplified Workflow",
    content:
      "Every board can represent one or more projects; however, the Simplified Workflow can only be used if a board represents a single project.",
  },
];

function AppAbout() {
  return (
    <div className='block aboutBlock'>
      <div className='container-fluid'>
        <div className='titleHolder'>
          <h2>About Us</h2>
          <p>
            The tech industry is focused around innovation, creation and growth.
            The companies dominating the industry at the moment are based in the
            US and known as the Big Five: Alphabet (Google), Amazon, Apple,
            Facebook and Microsoft.
          </p>
        </div>
        <div className='contentHolder'>
          <p>
            Our website developers provide expert web application development
            and web design services to our clients. Appnovation offers a variety
            of website design and development services, from creating mobile web
            development solutions and responsive website designs, to building
            custom e-commerce and intranet experiences using the latest and
            proven web technologies. With up to 85% of consumers visiting
            company’s or service provider’s website before making a purchase,
            more and more consumers make decisions based on their online
            experience: the appearance, usability and accessibility of your
            website is more important than ever, especially in an increasingly
            competitive market.
          </p>
        </div>
        <Row gutter={[16, 16]}>
          {items.map((item) => {
            return (
              <Col md={{ span: 8 }} key={item.key}>
                <div className='content'>
                  <div className='icon'>{item.icon}</div>
                  <h3>{item.title}</h3>
                  <p>{item.content}</p>
                </div>
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
}

export default AppAbout;
