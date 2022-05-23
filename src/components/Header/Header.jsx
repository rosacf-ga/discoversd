import { Link } from 'react-router-dom';
import Title from '../Title/Title';

export default function Header({user, handleLogout}){
  return(
  <>
  <nav>
    <Link to='/attractions'>Home</Link>
    {/* <Link to='/attractions/new'>Add Attraction</Link> */}
    <Link to='/' onClick={handleLogout}>Log Out</Link>
  </nav>
  <Title/>
  </>
  )
}