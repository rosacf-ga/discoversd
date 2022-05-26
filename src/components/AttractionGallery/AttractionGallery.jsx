import React from 'react';
import { Card } from 'semantic-ui-react';
import AttractionCard from '../AttractionCard/AttractionCard';
import './AttractionGalley.css';

export default function AttractionGallery({attractions, filterText, deleteAttraction, numPhotosCol, user }){

    return (
      <div className='card-section'>
        <Card.Group itemsPerRow={numPhotosCol} stackable>
        {attractions.map((attraction) => {
          if (
            attraction.attractionName.toLowerCase().indexOf(
              filterText.toLowerCase()
            ) === -1
          ) {
            return;
          }
          
          return (
            <AttractionCard
              attraction={attraction}
              key={attraction._id}
              user={user}
              deleteAttraction={deleteAttraction}
              
            />
          );
        })}
      </Card.Group>
      </div>
  
    )
  }