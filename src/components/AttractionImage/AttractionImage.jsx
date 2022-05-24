import { Image } from 'semantic-ui-react';

export default function AttractionImage({photoUrl}){
  return (
    <Image src={`${photoUrl}`} wrapped ui={false} />
  )
}