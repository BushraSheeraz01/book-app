import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Book from '../Images/Book-logo2.jpg';
import { useHistory } from 'react-router';
import Books from '../Images/Book-picture.jpg';

function Home() {
  const history = useHistory();
  return (
    <>
      <div className="Home">
        <Card style={{ width: '14rem' }}>
          <Card.Img variant="top" src={Book} />
        </Card>
      </div>
      <div className="About">
        <Card style={{ width: '18rem', backgroundColor: '#65203ea1', color: 'white'}}>
          <Card.Body>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.Lorem ipsunm djsdahs dchdjsadh sdfjasha sfajsndniajh hdjahdab hbdjkawh bd dhbdja.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: '14rem' }}>
          <Card.Img variant="top" src={Books} />
        </Card>
      </div>
      <div className="Login">
        <Button variant="secondary" onClick={() => history.push('/login')}>Click Here to Login</Button>
      </div>
    </>
  );
}

export default Home;