import {  useState } from 'react';
import * as attractionApi from '../../utils/attractionApi';
import AttractionForm from '../../components/AttractionForm/AttractionForm';
import PageHeader from '../../components/Header/Header';
import { useNavigate } from "react-router-dom";

export default function AddAttractionPage({user, handleLogout}){
  const [attractions, setAttractions] = useState([]);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  async function handleAddAttraction(attraction) {
    try {
      const data = await attractionApi.create(attraction); // our server is going to return
      // the created post, that will be inside of data, which is the response from
      // the server, we then want to set it in state
      setAttractions([data.attraction, ...attractions]);
      navigate('/attractions');
    } catch (err) {
      console.log(err);
      setError(err.message);
    }
  }

  return (
    <>
    <PageHeader handleLogout={handleLogout} user={user}/>
    <AttractionForm handleAddAttraction={handleAddAttraction}/>
    </>
  )
}