import { Card, Container, Row, Col, Image } from "react-bootstrap";
import antManImage from "../assets/images/superhero/antman.jpg";
import avengerImage from "../assets/images/superhero/avenger.jpg";
import batmanImage from "../assets/images/superhero/batman.jpg";
import robinhoodImage from "../assets/images/superhero/robinhood.jpg";
import spidermanImage from "../assets/images/superhero/spiderman-cover.jpg";
import supermanImage from "../assets/images/superhero/superman.jpg";

const SuperHero = () => {
  return (
    <div>
      <Container>
        <br></br>
        <h1 className="text-white">Super Hero Movies</h1>
        <Row>
          <Col md={4} className="movieWrapper" id="superhero">
            <Card className=" text-dark  bg-dark text-white movieImage">
              <Image src={antManImage} alt="antMan Movie" className="images" />

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
                src={avengerImage}
                alt="avenger Movie"
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
              <Image src={batmanImage} alt="batman Movie" className="images" />

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
                src={robinhoodImage}
                alt="robinhood Movie"
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
                src={spidermanImage}
                alt="spiderman Movie"
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
                src={supermanImage}
                alt="superman Movie"
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
export default SuperHero;
