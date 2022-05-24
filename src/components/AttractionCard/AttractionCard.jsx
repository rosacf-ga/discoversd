import { Card, Icon, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";
import AttractionImage from '../AttractionImage/AttractionImage';

export default function AttractionCard({attraction, user}) {
  const style = {
    'width': '500px',
    'margin': '10px auto'
  }

  return(
    
    <Card style={style} key={attraction._id} raised>
    <AttractionImage photoUrl={attraction.photoUrl}/>
    <Card.Content>
    <Link to={`/attractions/${attraction.attractionName}`}><Card.Header>{attraction.attractionName}</Card.Header></Link>
    </Card.Content>
    
    {/* <Card.Content extra textAlign={"right"}>
      <Icon
        name={"heart"}
        size="large"
        color={likeColor}
        onClick={clickHandler}
      />
      {post.likes.length} Likes
    </Card.Content> */}
  </Card>
);
}