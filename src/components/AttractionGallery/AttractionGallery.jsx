import React from 'react';
import { Card, Dimmer, Segment, Image  } from 'semantic-ui-react'
import AttractionCard from '../AttractionCard/AttractionCard';

export default function AttractionFeed({attractions, numPhotosCol, user }){

    return (
        <Card.Group itemsPerRow={numPhotosCol} stackable>
        {attractions.map((attraction) => {
          return (
            <AttractionCard
              attraction={attraction}
              key={attraction._id}
              // addLike={addLike}
              // removeLike={removeLike}
              user={user}
            />
          );
        })}
      </Card.Group>
  
    )
  }