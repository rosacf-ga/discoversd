import { Image } from 'semantic-ui-react';
import './AttractionImage.css';

export default function AttractionImage({photoUrl}){
  return (
    <img src={`${photoUrl}`} />
  )
}