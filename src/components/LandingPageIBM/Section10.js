import './LandingPage.css';
import { Row, Col } from 'antd';
import React, { Component } from 'react';

export default class Section10 extends Component {
  render() {
    return (
      <div className="LandingPage-section10">

        <Row className="LandingPage-content">

          <Col className='LandingPage-text'>
            <Row className="LandingPage-title">
              <h2 style={{ textAlign: "center", marginTop: '50px', color: 'white' }}>
                START YOUR ULTIMATE MACHINE LEARNING<br />
                BY MAKING A MESS</h2>
            </Row>

          </Col>
        </Row>

      </div>

    );
  }
}