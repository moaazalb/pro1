import './Hero.css'
import { FaSquareFacebook,FaSquareInstagram,FaSquareWhatsapp, FaSquareXTwitter } from "react-icons/fa6";
const Hero = () => {
    return (
 <div className='hero row g-0 text-center'>
    <div class="col-sm-6 col-md-3">
    <h1>Address</h1>
    <h2>Damascus-zahera </h2>
    <div className='h3'>Phone: <a>+963 999 888 595</a></div>
    <div className='h4'>Email: <a>mobileshop@gmail.com</a></div>
    <div className='para'>
        
      <a className='bx bxl-facebook' href='#'>< FaSquareFacebook/></a>
      <a className='p' href='#'><FaSquareInstagram/></a>
      <a className='p' href='#'><FaSquareWhatsapp/></a>
      <a className='p' href='#'><FaSquareXTwitter/></a>
    </div>
    </div>
    <div class="col-6 col-md-3">
     <div className='a1'>Useful Link</div>   
    <div className="a2"> <a className="nav-link" href="#">Home</a></div>
    <div className='a3'> <a className="nav-link" href="#">About</a> </div>
    <div className='a4'> <a className="nav-link" href="#">Shop</a></div>
    <div className='a5'> <a className="nav-link" href="#">Mobile</a></div>
    </div>
   
        
        
        </div>

    )
}
export default Hero;