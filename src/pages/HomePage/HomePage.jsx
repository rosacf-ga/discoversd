import { Link } from 'react-router-dom';
import Title from '../../components/Title/Title';

export default function HomePage(){
  return(
    <>
    <Title/>
    <Link to='/login'><button>Log In</button></Link>
    <Link to='/signup'><button>Sign Up</button></Link>
    </>
  )
}