import Header from '../../components/Header/Header'

export default function FeedPage({user, handleLogout}){
  return(
    <>
    <Header handleLogout={handleLogout} user={user}/>
    {/* <h1>This is main feed once logged in!</h1> */}
    </>
    )
}