import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { NavLink } from "react-router-dom";

function MenusCarousel(props) {

  const menus = props.menus;

  return (
    <Row xs={1} md={3} className="g-4 bg-light p-3">
      {menus.map((menu, idx) => (
        <Col key={idx} className="p-3">
          <NavLink
            to={`/menus/${menu.id}`}
            className="text-decoration-none text-dark"
          >
            <Card className="card-block">
              <div className="">
                <div className="d-flex flex-row justify-content-center">
                  <Card.Img
                    variant="top"
                    src={menu.imgUrl}
                    className="w-50 col-md-6 mx-auto d-flex justify-content-center p-4"
                    style={{ minHeight: "150px" }}
                  />
                </div>
              </div>
              <Card.Body>
                <Card.Title>
                  <h3 className="px-3 mb-1 text-center">{menu.name}</h3>
                </Card.Title>
                <Card.Text className="px-3"></Card.Text>
              </Card.Body>
            </Card>
          </NavLink>
        </Col>
      ))}
    </Row>
  );
}

export default MenusCarousel;
