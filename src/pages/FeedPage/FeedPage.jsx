import Header from '../../components/Header/Header';
import * as attractionApi from '../../utils/attractionApi';


export default function FeedPage({user, handleLogout}){

  return(
    <>
    <Header handleLogout={handleLogout} user={user}/>
    <h1>This is main feed once logged in!</h1>
    </>
    )
}