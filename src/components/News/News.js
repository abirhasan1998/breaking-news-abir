import React from 'react';
import {Card, Button} from 'react-bootstrap'
const News = () => {
    return (
<Card className="text-center">
<Card.Header>Breaking News</Card.Header>
<Card.Body>
<Card.Title>Live Breaking News</Card.Title>
<Card.Text>
With supporting text below as a natural lead-in to additional content.
</Card.Text>
<Button variant="primary">Live Telecast</Button>
</Card.Body>
<Card.Footer className="text-muted">2 Hours ago</Card.Footer>
</Card>
    );
};

export default News;