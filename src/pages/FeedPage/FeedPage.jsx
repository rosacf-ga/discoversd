import { useState, useEffect } from "react";
import PageHeader from "../../components/Header/Header";
import * as attractionApi from "../../utils/attractionApi";
import AttractionGallery from "../../components/AttractionGallery/AttractionGallery";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import { Grid } from "semantic-ui-react";

export default function FeedPage({ user, handleLogout }) {
  const [attractions, setAttractions] = useState([]);
  const [error, setError] = useState("");

  // R read in crud
  async function getAttractions() {
    try {
      const data = await attractionApi.getAll();
      setAttractions([...data.attractions]);
    } catch (err) {
      setError(err.message);
    }
  }

  // useEffect runs once
  // the component is first rendered (whenever you first view the component)
  // Component Lifecycle in react
  useEffect(() => {
    getAttractions();
  }, []);

  async function deleteAttraction(attractionId){
    try{
      const data = await attractionApi.deleteAttraction(attractionId);
      //filter creates new array and is gonna look at fridges in original array but only save fridges that are not the deleted fridge
      const attractionArr = await attractions.filter(attraction => attraction._id !== attractionId);
      setAttractions(attractionArr);
    } catch(err){
      setError(err);
    }
  }

  if (error) {
    return (
      <>
        <PageHeader handleLogout={handleLogout} user={user} />
        <ErrorMessage error={error} />;
      </>
    );
  }

  return (
  <Grid centered>
    <Grid.Row>
      <Grid.Column>
        <PageHeader handleLogout={handleLogout} user={user}/>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column style={{ maxWidth: 1400 }}>
        <AttractionGallery
          attractions={attractions}
          numPhotosCol={3}
          deleteAttraction={deleteAttraction}
          user={user}
        />
      </Grid.Column>
    </Grid.Row>
  </Grid>


  );
}
