import { Link } from 'react-router-dom';

export default function Header({handleLogout}){
  <>
  <nav>
    <Link to='/attractions'>Home</Link>
    <Link to='/attractions/new'>Add Attraction</Link>
    <Link to='/' onClick={handleLogout}></Link>
  </nav>
  </>
}