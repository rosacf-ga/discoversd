import { Link } from 'react-router-dom';
import Title from '../Title/Title';
import './Header.css';

export default function Header({user, handleLogout}){
  return(
  <>
  <nav>
    <Link to='/attractions' className='link'>Home</Link>
    <Link to='/attractions/new' className='link'>Add Attraction</Link>
    <Link to='/' className='link' onClick={handleLogout}>Log Out</Link>
  </nav>
  <Title/>
  </>
  )
}