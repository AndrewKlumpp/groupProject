import { Link } from 'react-router-dom';
import nookLogo from '/nooklogo.jpeg';

const Header = (props) => {
  const {title} = props
  return (
    <div className='container'>
      <div className='d-flex col'>
        <div className='col-sm-3 mt-2'>
          <img className='nook-logo' src={nookLogo} alt="NeighborHood Nook Logo"/>
        </div>
        <div className='col-lg-9'>
          <div className="navigation row">
            <Link className='btn btn-primary m-2 col' to={'/'}>Home</Link>
            <Link className='btn btn-primary m-2 col' to={'/events'}>Events</Link>
            <Link className='btn btn-primary m-2 col' to={'/about'}>About</Link>
            <Link className='btn btn-primary m-2 col' to={'/login'}>Login</Link>
          </div>
          <br />
          <div className="title row">
            <h1 className='text-left'>{title}</h1>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Header
