import React from 'react'
import { Card, Button } from 'react-bootstrap';

export default class SingleBook extends Component {

    state = {
        selected: false
    }

  render() {
    return (
        <>
            <Card className='selectedBook'>
                <Card.Img variant="top" src={this.book.img} onClick={() => this.setState({selected:true})} />
                <Card.Body>
                    <Card.Title>{this.book.title}</Card.Title>
                    <Card.Text>{this.book.category}</Card.Text>
                    <Button variant="secondary">Acquista</Button>
                </Card.Body>
            </Card>
        </>
    )
  }
}
