import { Card, Container, Row, Col, Image } from "react-bootstrap";
import duneImage from "../assets/images/trending/dune.jpg";
import everythingImage from "../assets/images/trending/everything.jpg";
import infiniteImage from "../assets/images/trending/infinite.jpg";
import jokerImage from "../assets/images/trending/joker.jpg";
import lightyearImage from "../assets/images/trending/lightyear.jpg";
import morbiusImage from "../assets/images/trending/morbius.jpg";

const Trending = () => {
  return (
    <div>
      <Container>
        <br></br>
        <h1 className="text-white">Trending Movies</h1>
        <Row>
          <Col md={4} className="movieWrapper" id="trending">
            <Card className=" text-dark  bg-dark text-white movieImage">
              <Image src={duneImage} alt="Dune Movie" className="images" />

              <Card.Title className="text-center">Card title</Card.Title>
              <Card.Text className="text-left">
                This is a wider card with supporting text below as a natural
                lead-in to additional content.
              </Card.Text>
              <Card.Text className="text-left">
                Last updated 3 mins ago
              </Card.Text>
            </Card>
          </Col>

          <Col md={4} className="movieWrapper">
            <Card className=" text-dark  bg-dark text-white movieImage">
              <Image
                src={everythingImage}
                alt="Dune Movie"
                className="images"
              />

              <Card.Title className="text-center">Card title</Card.Title>
              <Card.Text className="text-left">
                This is a wider card with supporting text below as a natural
                lead-in to additional content.
              </Card.Text>
              <Card.Text className="text-left">
                Last updated 3 mins ago
              </Card.Text>
            </Card>
          </Col>

          <Col md={4} className="movieWrapper">
            <Card className=" text-dark  bg-dark text-white movieImage">
              <Image
                src={infiniteImage}
                alt="Infinite Movie"
                className="images"
              />

              <Card.Title className="text-center">Card title</Card.Title>
              <Card.Text className="text-left">
                This is a wider card with supporting text below as a natural
                lead-in to additional content.
              </Card.Text>
              <Card.Text className="text-left">
                Last updated 3 mins ago
              </Card.Text>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className=" text-dark  bg-dark text-white movieImage">
              <Image src={jokerImage} alt="Joker Movie" className="images" />

              <Card.Title className="text-center">Card title</Card.Title>
              <Card.Text className="text-left">
                This is a wider card with supporting text below as a natural
                lead-in to additional content.
              </Card.Text>
              <Card.Text className="text-left">
                Last updated 3 mins ago
              </Card.Text>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className=" text-dark  bg-dark text-white movieImage">
              <Image
                src={lightyearImage}
                alt="Lightyear Movie"
                className="images"
              />

              <Card.Title className="text-center">Card title</Card.Title>
              <Card.Text className="text-left">
                This is a wider card with supporting text below as a natural
                lead-in to additional content.
              </Card.Text>
              <Card.Text className="text-left">
                Last updated 3 mins ago
              </Card.Text>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className=" text-dark  bg-dark text-white movieImage ">
              <Image
                src={morbiusImage}
                alt="Morbius Movie"
                className="images"
              />

              <Card.Title className="text-center">Card title</Card.Title>
              <Card.Text className="text-left">
                This is a wider card with supporting text below as a natural
                lead-in to additional content.
              </Card.Text>
              <Card.Text className="text-left">
                Last updated 3 mins ago
              </Card.Text>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Trending;
