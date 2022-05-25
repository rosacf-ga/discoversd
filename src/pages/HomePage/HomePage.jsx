import { Link } from 'react-router-dom';
import Title from '../../components/Title/Title';
import './HomePage.css';

export default function HomePage(){
  return(
    <>
    <div className="signup-title">
    <Title/>
    </div>
    <div className="login-signup-btn">
    <Link to='/login'><button>LOG IN</button></Link>
    <Link to='/signup'><button>SIGN UP</button></Link>
    </div>
    </>
  )
}