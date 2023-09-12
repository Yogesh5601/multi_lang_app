
import React from 'react'
import "./home.css"
import { useTranslation } from "react-i18next";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


const Home = () => {
    const { t } = useTranslation();
  return (
    <>
      <div className="container mt-4">
        <Carousel className="mb-5">
          <Carousel.Item>
            <img
              src="https://images.unsplash.com/photo-1682685796467-89a6f149f07a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
            <Carousel.Caption>
              <h3>{t("Slide1")}</h3>
              <p>{t("SllideDesc1")}</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="https://images.unsplash.com/photo-1693956089429-e2394b22071e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
            <Carousel.Caption>
              <h3>{t("Slide2")}</h3>
              <p>{t("SllideDesc2")}</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className="image">
              <img
                src="https://images.unsplash.com/photo-1682687219640-b3f11f4b7234?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyOHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
            </div>
            <Carousel.Caption>
              <h3>{t("Slide3")}</h3>
              <p>{t("SllideDesc3")}</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <div className="main mb-5">
          <h1 className="text-center mb-4">{t("CardHeading")}</h1>
          <Row className="g-4">
            <Col sm={12} md={12} lg={6}>
              <Card Style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src="https://images.unsplash.com/photo-1693817027569-908462a0bca1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzOHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                />
                <Card.Body>
                  <Card.Title>{t("CardTitle")}</Card.Title>
                  <Card.Text>{t("CardDesc")}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={12} md={12} lg={6}>
              <Card Style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src="https://images.unsplash.com/photo-1682685797742-42c9987a2c34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw0Mnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                />
                <Card.Body>
                  <Card.Title>{t("CardTitle")}</Card.Title>
                  <Card.Text>{t("CardDesc")}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={12} md={12} lg={6}>
              <Card Style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src="https://images.unsplash.com/photo-1660114379219-12f838591194?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDMwfDNibm05NWlzSXhFfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
                />
                <Card.Body>
                  <Card.Title>{t("CardTitle")}</Card.Title>
                  <Card.Text>{t("CardDesc")}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={12} md={12} lg={6}>
              <Card Style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src="https://images.unsplash.com/photo-1682695798256-28a674122872?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw0N3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                />
                <Card.Body>
                  <Card.Title>{t("CardTitle")}</Card.Title>
                  <Card.Text>{t("CardDesc")}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}

export default Home