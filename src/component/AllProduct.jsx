import "../styles/AllProduct.css";
import { Link } from 'react-router-dom';

function AllProduct() {
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
        <h1 className="product">PRODUCTS</h1>
        <section>
        <div className="row">
            <div className="content">
            <img src="./images/p1.jpg" alt="" height={200} width={300}/>
            <h4>Baba</h4>
            <p>Agricultural rhum and vanilla and citrus fruits.</p>
            </div>
            <div className="content">
            <img src="./images/p2.jpg" alt="" height={200} width={300}/>
            <h4>Cassis</h4>
            <p>Cassis, raspberry and almond milk.</p>
            </div>
            <div className="content">
            <img src="./images/p3.jpg" alt="" height={200} width={300}/>
            <h4>cheesecake</h4>
            <p>Sable reconstitue, creamcheese, raspberry confit.</p>
            </div>
            <div className="content">
            <img src="./images/p4.jpg" alt="" height={200} width={300}/>
            <h4>Sicilien</h4>
            <p>Pistachio biscuit, creamy passion fruit and orange, vanilla mousse with raspberry chunks.</p>
            </div>
            <div className="content">
            <img src="./images/p5.jpg" alt="" height={200} width={300}/>
            <h4>Eclair</h4>
            <p>Choux pastry filled with various creams.</p>
            </div>
            <div className="content">
            <img src="./images/p6.jpg" alt="" height={200} width={300}/>
            <h4>Chantilly and raspberry choux</h4>
            <p>Choux pastry with Give vanilla chantilly in berries and raspberries.</p>
            </div>
            <div className="content">
            <img src="./images/p7.jpg" alt="" height={200} width={300}/>
            <h4>Baguette</h4>
            <p>Marine flour type 1 flour, water, salt, natural yeast.</p>
            </div>
            <div className="content">
            <img src="./images/p8.jpg" alt="" height={200} width={300}/>
            <h4>Mini Baguette</h4>
            <p>Marine flour type 1 flour.</p>
            </div>
            <div className="content">
            <img src="./images/p9.jpg" alt="" height={200} width={300}/>
            <h4>Rye</h4>
            <p>Mulino Marino rye ground whole wheat flour, water, salt, natural yeast.</p>
            </div>
            <div className="content">
            <img src="./images/p10.jpg" alt="" height={200} width={300}/>
            <h4>Farro</h4>
            <p>With flour from the piezza mill of Garfagnana.</p>
            </div>
            <div className="content">
            <img src="./images/p11.jpg" alt="" height={200} width={300}/>
            <h4>Olive Bread</h4>
            <p>Semolina pasta, Gaeta olives pitted by hand.</p>
            </div>
            <div className="content">
            <img src="./images/p12.jpg" alt="" height={200} width={300}/>
            <h4>Bread with dried tomato</h4>
            <p>Durum wheat flour, water, salt, natural yeast.</p>
            </div>
        </div>
        </section>
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

export default AllProduct;