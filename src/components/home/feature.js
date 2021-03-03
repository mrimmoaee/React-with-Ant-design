import React from "react";
import { Row, Col } from "antd";
import { Card } from "antd";

import image1 from "../../assets/images/modern-design.jpg";
import image2 from "../../assets/images/clean-design.jpg";
import image3 from "../../assets/images/great-support.jpg";
import image4 from "../../assets/images/easy-customise.jpg";
import image5 from "../../assets/images/unlimited-features.jpg";
import image6 from "../../assets/images/advanced-option.jpg";

const { Meta } = Card;

function AppFeature() {
  return (
    <div className='block featureBlock bgGray'>
      <div className='container-fluid'>
        <div className='titleHolder'>
          <h2>Types of Modern UI Design</h2>
          <p>Make design simpler</p>
        </div>
        <Row gutter={[16, 16]}>
          <Col span={8}>
            {" "}
            <Card
              hoverable
              cover={<img alt='Modern Website Design' src={image1} />}
            >
              <Meta title='Modern Website Design' />
            </Card>
          </Col>
          <Col span={8}>
            {" "}
            <Card
              hoverable
              cover={<img alt='Modern Website Design' src={image2} />}
            >
              <Meta title='Simplistics Design' />
            </Card>
          </Col>
          <Col span={8}>
            {" "}
            <Card
              hoverable
              cover={<img alt='Modern Website Design' src={image3} />}
            >
              <Meta title='Modern Website Design' />
            </Card>
          </Col>
          <Col span={8}>
            {" "}
            <Card
              hoverable
              cover={<img alt='Modern Website Design' src={image4} />}
            >
              <Meta title='Beautiful Colorful Design' />
            </Card>
          </Col>
          <Col span={8}>
            {" "}
            <Card
              hoverable
              cover={<img alt='Modern Website Design' src={image5} />}
            >
              <Meta title='Modern Website Design' />
            </Card>
          </Col>
          <Col span={8}>
            {" "}
            <Card
              hoverable
              cover={<img alt='Modern Website Design' src={image6} />}
            >
              <Meta title='Modern Website Design' />
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default AppFeature;
