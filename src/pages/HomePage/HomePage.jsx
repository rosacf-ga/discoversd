import { Link } from 'react-router-dom';

export default function HomePage(){
  return(
    <>
    <Link to='/login'><button>Log In</button></Link>
    <Link to='/signup'><button>Sign Up</button></Link>
    </>
  )
}