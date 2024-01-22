// RowNewsComponent.tsx
import { Card, Col, Row } from "react-bootstrap";
import React from "react";
import { useNavigate } from "react-router-dom";

interface RowNewsComponentProps {
  news: { id: number, title: string; image_url: string; updated_at: string }[];
}

const RowNewsComponent: React.FC<RowNewsComponentProps> = ({ news }) => {

    const navigate = useNavigate()

  return (
    <Row>
      {news.map((article, index) => (
        <Col key={index} xs={12} md={6} xl={4}>
          <Card style={{ width: '18rem' }} className="mt-4">
            <Card.Img onClick={() => navigate(`/detail/${article.id}`)} style={{ height: '10rem' }} variant="top" src={article.image_url} />
            <Card.Body>
              <Card.Title>{article.title}</Card.Title>
              <Card.Text className="border p-1 text-secondary"> Data di pubblicazione: {article.updated_at}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default RowNewsComponent;
