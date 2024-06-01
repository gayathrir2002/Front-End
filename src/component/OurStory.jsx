import { Link } from "react-router-dom"


export default function OurStory(){
    return(
        <>
      
            <header>
            <div className='home'>
            <div className='logo'>
                <img src="./images/logo.png" alt="" height={100} width={200} />
            </div>
            <div className='nav'>
            <nav>
                <ul className='nav1'>
                    <li><Link to="/">HOME</Link></li>
                    <li><Link to="/OurStory">OURSTORY</Link></li>
                    <li><Link to="/Menu">MENU</Link></li>
                    <li><Link to="/ContactUs">CONTACT US</Link></li>
                    <li><Link to="/CelebrationCakes">CELEBRATION CAKES</Link></li>
                    <li><Link to="/Special">SPECIAL</Link></li>
                </ul>
            </nav>
            </div>
            </div>
         </header>
        <p style={{color:'white'}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem dolorum iste, deserunt sed exercitationem cum molestiae repellat alias, quam eos quae nisi provident sunt. Mollitia porro ad quae odio animi.</p>
        <footer className='homefooter'>
            <div className="homefooter1">
                <h3>Queen <span>Of Tarts</span></h3>
                <div className='footerlink'>
                    <strong><Link style={{color:"white"}}to="/">HOME |</Link></strong>
                    <strong><Link style={{color:"white"}}to="/OurStory">OURSTORY |</Link></strong>
                    <strong><Link style={{color:"white"}}to="/Menu">MENU |</Link></strong>
                    <strong><Link style={{color:"white"}}to="/ContactUs">CONTACT </Link></strong>
                </div>
                <p>2020 Queen Of Tarts Cake Shop Pvt. Ltd.</p>
            </div>
            <div className="homefooter2">
                <p className='google'><i  class="bi bi-geo-alt-fill"></i>  309 - Rupa Solitaire, Bldg. </p> 
            <p>   No. A - 1, Sector - 1 Mahape, Navi Mumbai - 400710</p>
                <p><i class="bi bi-telephone-fill"></i>  +91 22-27782183</p>
                <p><i class="bi bi-envelope-fill"></i>  queenoftarts@gmail.com</p>
            </div>
            <div className="homefooter3">
                <h3>About Queen Of Tarts</h3>
                <p> We have Special Offer and skilled Baker, Design,</p>
                <p> Service and Humanities. Enjoy Your Day  With Us!!</p>
                <p>Make Your Special Moment with Us!!</p>
                <div className="footericon">
                  <span> <i class="bi bi-twitter"></i></span>
                  <span><i class="bi bi-facebook"></i></span>
                  <span> <i class="bi bi-instagram"></i></span>
                  <span> <i class="bi bi-youtube"></i>  </span>  
                </div>  
            </div>
        </footer>
        </>
    )
}