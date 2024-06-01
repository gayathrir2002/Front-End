import '../styles/Home.css';
import { Link } from 'react-router-dom';

function Home() {
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
        <br/>
        <br/>
        <br/>
        <section>
            <div className="slideimg">
            <img src="./images/home1.jpg" alt="" height={400} width={1100} />
            </div>
            <div className="text1">
            <h1>DON'T BE SHY, YOU ARE JUST ONE CLICK AWAY FROM THE CAKE HEAVEN !</h1>
            </div>
            <div className="text2">
            <h2> Our BestSelling Product</h2>
            </div>
            <div className="row">
            <div className="column1">
                <img src="./images/sel1.png" alt="" height={200} width={300}/>
                <h5>Le Chocolate Heaven<br/>From: Rs.150/-</h5>
            </div>
            <div className="column2">
               <img src="./images/sel2.jpg" alt="" height={200} width={300}/>
               <h5>Chocotrio<br/>From: Rs.180/-</h5>
            </div>
            <div className="column3">
               <img src="./images/sel3.jpg" alt="" height={200} width={300}/>
               <h5>Biscuits Fruits<br/>From:Rs.220/-</h5>
            </div>
            <div className="column4">
               <img src="./images/sel4.jpg" alt="" height={200} width={300}/>
               <h5>Opera<br/>From: Rs.250/-</h5>
            </div>
            </div>    
        </section>
        <Link to="/AllProduct"><button className="buttonproduct">All Product</button></Link> 
        <br/><br/> 
        <div className="wrapper">
            <div className="logo2">
               <img src="./images/cooker.png" alt='' height={100} width={150} />
               <div className="minilogo">
               <h2>540</h2>
               <p>Baker & Chef</p>
               </div>
            </div>
            <div className="logo2">
               <img src="./images/food.png" alt='' height={100} width={150}/>
               <div className="minilogo">
               <h2>2130</h2>
               <p>Recepies</p>
               </div>
            </div>
            <div className="logo2">
            <div className="minilogo">
               <img src="./images/bread.png" alt='' height={100} width={150}/>
               <h2>3450</h2>
               <p>Bread Per Day</p>
               </div>
            </div>
            <div className="logo2">
            <div className="minilogo">
               <img src="./images/supermarket.png" alt=''height={100} width={150}/>
               <h2>357</h2>
               <p>Kilos Of Flour</p>
               </div>
            </div>

        </div>  
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


export default Home;