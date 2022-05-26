import { Card, Icon, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";
import AttractionImage from '../AttractionImage/AttractionImage';
import './AttractionCard.css';

export default function AttractionCard({attraction, deleteAttraction, user}) {
  const card = {
    'width': '530px',
    'margin': '10px auto'
  }

  let clickHandler = null;
  if (user) {
      clickHandler = attraction.user._id === user._id ? () => deleteAttraction(attraction._id) : null;
  }

  return(
    
    <Card style={card} key={attraction._id} raised>
    <AttractionImage photoUrl={attraction.photoUrl}/>
    <Card.Content>
    <Link to={`/attractions/${attraction.attractionName}`}>
      <Card.Header className='title'>{attraction.attractionName}</Card.Header>
    </Link>
    </Card.Content>
    {user && user._id === attraction.user._id ?
    <Card.Content extra textAlign={"right"}>
    <Icon
      className='trash'
      name={"trash alternate outline"}
      // size="large"
      onClick={clickHandler}
    />
  </Card.Content> : "" }
  </Card>
);
}