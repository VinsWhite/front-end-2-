import { Container, Row, Col, ListGroup, Button } from "react-bootstrap";
import { Trash } from "react-bootstrap-icons";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { removeFromFavourite } from "../actions";

const FavouritesPage = () => {
  const favourites = useSelector(state => state.main.favourite.list);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  return (
    <Container>
      <Row>
        <Col xs={10} className="d-flex align-items-center mx-auto my-3">
          <h1 className="display-4 me-auto">Favourites</h1>
          <Button variant="outline-primary" onClick={() => navigate("/")}>
            go to Home
          </Button>
        </Col>
        <Col xs={10} className="mx-auto my-3">
          <ListGroup>
            {favourites.length > 0 ? (
              favourites.map((fav, i) => (
                <ListGroup.Item key={i}>
                  <Trash
                    color="red"
                    className="me-2"
                    onClick={() => dispatch(removeFromFavourite(fav))}
                  />
                  <Link to={"/" + fav}>{fav}</Link>
                </ListGroup.Item>
              ))
            ) : (
              <ListGroup.Item>
                No favourites yet, go <Link to="/">back to Homepage</Link> to select some
              </ListGroup.Item>
            )}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default FavouritesPage;
