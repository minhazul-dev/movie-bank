import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useHistory } from 'react-router';


const SingleMovie = (props) => {
    const {id,title,poster_path} = props.movie
    const history = useHistory();
    const showDetails = id =>{
        const url =`/movie/${id}`;
        history.push(url)

    }
    return (
        <div className="col-md-3 my-3">

<Card >
  <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w1280/${poster_path}`} />
  <Card.Body>
    <Card.Title>{title}</Card.Title>
    {/* <Button onClick={()=> showDetails(id)} variant="primary">View Details</Button> */}
    <Button onClick={()=> showDetails(id)} variant="info"> Show Details</Button>
  </Card.Body>
</Card>
             
        </div>
    );
};

export default SingleMovie;