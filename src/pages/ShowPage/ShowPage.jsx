import {useState, useEffect} from 'react';
import Header from '../../components/Header/Header';
import AttractionImage from '../../components/AttractionImage/AttractionImage';
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import * as attractionApi from '../../utils/attractionApi';
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import './ShowPage.css';

export default function ShowPage({user, handleLogout}){
  const [error, setError] = useState("");
  // const [user, setUser] = useState({});
  const [attractions, setAttractions] = useState([]);
  // We need to grab the attractionName out of the url,
  const { attractionName } = useParams();


  async function getAttraction() {
    try {
      const data = await attractionApi.getAttraction(attractionName);
      console.log(data, " < -- data");
      // .attraction coming from 'show' controller function
      setAttractions(() => data.attraction);
    } catch (err) {
      console.log(err);
      setError("Profile Doesn't exists, CHECK YOUR TERMINAL FOR EXPRESS!");
    }
  }

  useEffect(() => {
    getAttraction();
  }, []);

  console.log('show page stuff')
  console.log(attractions.photoUrl)

  return(
    <>
    <Header handleLogout={handleLogout} user={user}/>
    <h2>{attractionName}</h2>
    <div className="detail-container">
    <div>
    <AttractionImage photoUrl={attractions.photoUrl} />
    </div>
    <div>
    <div className='description'>{attractions.description}</div>
    <div className="detail-btn">
    <a href={attractions.website} target='_blank'><button>LEARN MORE</button></a>
    </div>
    </div>
    </div>
    </>
  )
}