import './App.css';

// Images and Icons
import banner from './images/banner-bg.jpg';
import room from './images/img-1.jpg';
import penthouse from './images/img-2.jpg';
import img3 from './images/img-3.jpg';
import img4 from './images/img-4.jpg';
import img5 from './images/img-5.jpg';
import img6 from './images/img-6.jpg';


//Pages
import LayoutHeader from './layout/Header';
import LayoutFooter from './layout/Footer';
import PageBanner from './pages/Banner';


function App() {
  
return (

<div className='rentalwebsite'>
    
    {/* Main Page Banner Background Image */}
    <div className="banner-bg">
        <img src={banner}  alt="banner" />
        <div className='wave-effict'></div>
    </div>


    {/* Page Heder */}
    <header className='wraper '>
    <LayoutHeader />
    <PageBanner />
    </header>



 
    <main className='wraper'>

        {/* Page Title */}
        <section className='section-heading' tabIndex='2'>
            <h2>Explore</h2>
            <p>From one-guest rooms to penthouses with pools and gardens</p>
        </section>



          {/* Explore Section */}

        <section className='flex-box explore-section' >
            <figure tabIndex='3'>
                <img src={room}  alt="room" />
                <figcaption className='shadow-bg flex-box chapter-card fullWidth' >
                    <div>
                        <p>Room with one king-size bed</p>
                        <span className='gradient-bg'>35$</span>
                        <span className='gradient-bg'>28м²</span>
                    </div>
                    <div>
                        <button className='gradient-bg'>Book!</button>
                    </div>
                </figcaption>
            </figure>


            <figure tabIndex='4'>
                <img src={penthouse}  alt="penthouse" />
                <figcaption className='shadow-bg flex-box chapter-card fullWidth'>
                    <div>
                        <p>Penthouse for 8 person</p>
                        <span className='gradient-bg'>2039$</span>
                        <span className='gradient-bg'>438м²</span>
                    </div>
                    <div>
                        <button className='gradient-bg'>Book!</button>
                    </div>
                </figcaption>
            </figure>

        </section>


        { /* Page Title */}
        <section className='section-heading' tabIndex='5'>
            <h2>About Us</h2>
            <p>Allow us to tell you a short story...</p>
        </section>

        {/* About Us Section */}

        <section className='chapter-box'>

            <figure tabIndex='6'>
                <img src={img3} alt='Chapter I' />
                <figcaption className='shadow-bg flex-box chapter-card'>
                    <div>
                        <h4>Chapter I</h4>
                        <sub>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            incididun</sub>
                    </div>
                </figcaption>
            </figure>


            <figure tabIndex='7'>
                <img src={img5} alt="Chapter II"/>
                <figcaption className='shadow-bg flex-box chapter-card'>
                    <div>
                        <h4>Chapter III</h4>
                        <sub>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            incididun</sub>
                    </div>
                </figcaption>
            </figure>


            <figure tabIndex='8'>
                <img src={img4} alt='Chapter III'/>
                <figcaption className='shadow-bg flex-box chapter-card'>
                    <div>
                        <h4>Chapter II</h4>
                        <sub>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            incididun</sub>
                    </div>
                </figcaption>

            </figure>

            <figure tabIndex='9'>
                <img src={img6} alt='Chapter IV'/>
                <figcaption className='shadow-bg flex-box chapter-card'>
                    <div>
                        <h4>Chapter IV</h4>
                        <sub>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            incididun</sub>
                    </div>
                </figcaption>
            </figure>

        </section>
    </main>



    {/* Page Footer */}

    <footer className='wraper' >
     <LayoutFooter />
    </footer>

</div>

);
}

export default App;