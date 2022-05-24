import { Card, Icon, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default function AttractionCard({attraction, user}) {
  const style = {
    'width': '500px',
    'margin': '10px auto'
  }

  return(
    <Card style={style} key={attraction._id} raised>
    {/* <Link to={`/attractions/${attraction.attractionName}`}> */}
    <Image src={`${attraction.photoUrl}`} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{attraction.attractionName}</Card.Header>
    </Card.Content>
    {/* </Link> */}
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