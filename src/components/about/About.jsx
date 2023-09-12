import React from 'react'
import { useTranslation } from "react-i18next";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./about.css"
const About = () => {
     const { t } = useTranslation();
  return (
    <>
      <div className="about my-5">
        <h1 className="text-center">{t("About")}</h1>
        <Container className='mt-5'>
          <Row className="g-3">
            <Col sm={12} md={12} lg={6}  className="left">
              <div className="heading">{t("AboutHeading")}</div>
              <p>
                {t("AboutSummery")}
              </p>
              <button className="btn btn-primary">{t("AboutBtn")}</button>
            </Col>
            <Col sm={12} md={12} lg={6} className="right">
              <div className="image">
                <img
                  src="https://images.unsplash.com/photo-1682685796467-89a6f149f07a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                  alt=""
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default About