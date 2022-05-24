import { useState, useEffect } from "react";
import PageHeader from "../../components/Header/Header";
import * as attractionApi from "../../utils/attractionApi";
import AttractionForm from "../../components/AttractionForm/AttractionForm";
import AttractionGallery from "../../components/AttractionGallery/AttractionGallery";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import { Grid } from "semantic-ui-react";

export default function FeedPage({ user, handleLogout }) {
  console.log(attractionApi, "<--attractionAPI");
  const [attractions, setAttractions] = useState([]);
  const [error, setError] = useState("");

  async function handleAddAttraction(attraction) {
    try {
      const data = await attractionApi.create(attraction); // our server is going to return
      // the created post, that will be inside of data, which is the response from
      // the server, we then want to set it in state
      console.log(data, " this is response from the server, in handleAddPost");
      setAttractions([data.attraction, ...attractions]);
    } catch (err) {
      console.log(err);
      setError(err.message);
    }
  }

  // R read in crud
  async function getAttractions() {
    try {
      const data = await attractionApi.getAll();
      console.log(data, " this is data,");
      setAttractions([...data.attractions]);
    } catch (err) {
      console.log(err.message, " this is the error");
      setError(err.message);
    }
  }

  // useEffect runs once
  // the component is first rendered (whenever you first view the component)
  // Component Lifecycle in react
  useEffect(() => {
    getAttractions();
  }, []);

  if (error) {
    return (
      <>
        <PageHeader handleLogout={handleLogout} user={user} />
        <ErrorMessage error={error} />;
      </>
    );
  }

  return (
    // <>
    //   <Header handleLogout={handleLogout} user={user} />
    //   <div>
    //   <AttractionForm handleAddAttraction={handleAddAttraction}/>
    //   </div>
    //   <h1>This is main feed once logged in!</h1>
    // </>

    <Grid centered>
    <Grid.Row>
      <Grid.Column>
        <PageHeader handleLogout={handleLogout} user={user}/>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column style={{ maxWidth: 450 }}>
        <AttractionForm handleAddAttraction={handleAddAttraction} />
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column style={{ maxWidth: 1400 }}>
        <AttractionGallery
          attractions={attractions}
          numPhotosCol={3}
          // addLike={addLike}
          // removeLike={removeLike}
          user={user}
        />
      </Grid.Column>
    </Grid.Row>
  </Grid>


  );
}
