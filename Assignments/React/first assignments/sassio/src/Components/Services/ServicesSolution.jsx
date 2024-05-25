export default function ServicesSolution(){
    return(
        <div className=" wrapper-lg solution-section">
        <div className="row">
           <div className="col-1">
              <img src="assets/images/services-first.png" className="img-missions"/>
           </div>
           <div className="col-1 solution-info">
              <h1 className="solution-heading">IT solutions for your <br/> business.</h1>
              <p className="solution-paragraf">Praesent sollicitudin felis a ornare volutpat. Nullam malesuada sem sit
                 amet semper tristique.
                 Donec nec neque lectus. Nunc mattis, lectus eu lacinia pre tium, nisl nisi interdum tortor.
              </p>
              <div className="solutions">
                 <ul>
                    <li>
                       <div className="solutions-item">
                          <div className="icon-container">
                             <span className="material-symbols-outlined">check</span>
                          </div>
                          <span className="dark">Installation Guide</span>
                       </div>
                    </li>
                    <li>
                       <div className="solutions-item">
                          <div className="icon-container">
                             <span className="material-symbols-outlined">check</span>
                          </div>
                          <span className="dark">Easy setup process</span>
                       </div>
                    </li>
                    <li>
                       <div className="solutions-item">
                          <div className="icon-container">
                             <span className="material-symbols-outlined">check</span>
                          </div>
                          <span className="dark">Live call support</span>
                       </div>
                    </li>
                    <li>
                       <div className="solutions-item">
                          <div className="icon-container">
                             <span className="material-symbols-outlined">check</span>
                          </div>
                          <span className="dark">Start a private group video call</span>
                       </div>
                    </li>
                 </ul>
              </div>
              <button className="solution-btn">Explore</button>
           </div>
           <div className="row simple-section m-5 gap-6">
              <div className="col-1">
                 <button className="speciale-1">HOW OUR PROCESS WORKS</button>
                 <h2 className="simple">Simple 4-Step System</h2>
              </div>
              <div className="col-1">
                 <div className="simple-item">
                    <span className="material-symbols-outlined">remove</span>
                    <span className="dark">01 Strategy</span>
                 </div>
                 <div className="simple-item-content">
                    <p>When you buy Sassio, you get all you see in the demo but the images. We include SASS
                       files for styling, complete JS files with comments, all HTML variations. Besides we
                       include
                    </p>
                 </div>
                 <div className="simple-item">
                    <span className="material-symbols-outlined">add</span>
                    <span className="dark">02 Design</span>
                 </div>
                 <div className="simple-item">
                    <span className="material-symbols-outlined">add</span>
                    <span className="dark">03 Operation</span>
                 </div>
                 <div className="simple-item">
                    <span className="material-symbols-outlined">add</span>
                    <span className="dark">04 Launch</span>
                 </div>
              </div>
           </div>
           <div className="services">
              <div className="row create-service">
                 <h1>Services</h1>
                 <a href="">
                    <p className="info-service">Start your project</p>
                 </a>
              </div>
              <div className="row">
                 <div className="carousel">
                    <input type="radio" name="slide" id="slide1" checked/>
                    <input type="radio" name="slide" id="slide2"/>
                    <input type="radio" name="slide" id="slide3"/>
                    <input type="radio" name="slide" id="slide4"/>
                    <label for="slide1" className="arrow prev">&#10094;</label>
                    <div className="carousel-inner">
                       <div className="carousel-item">
                          <img src="assets/images/first.png" alt=""/>
                          <div className="carousel-text">
                             <h1>Mobile Data</h1>
                             <p>Achieve virtually any design and layout from within the one template.</p>
                          </div>
                       </div>
                       <div className="carousel-item">
                          <img src="assets/images/first.png" alt=""/>
                          <div className="carousel-text">
                             <h1>Financial Advisory</h1>
                             <p>Achieve virtually any design and layout from within the one template.</p>
                          </div>
                       </div>
                       <div className="carousel-item">
                          <img src="assets/images/first.png" alt=""/>
                          <div className="carousel-text">
                             <h1>Business Contracts</h1>
                             <p>Achieve virtually any design and layout from within the one template.</p>
                          </div>
                       </div>
                       <div className="carousel-item">
                          <img src="assets/images/first.png" alt=""/>
                          <div className="carousel-text">
                             <h1>Integration Dynamics</h1>
                             <p>Achieve virtually any design and layout from within the one template.</p>
                          </div>
                       </div>
                       <div className="carousel-item">
                          <img src="assets/images/first.png" alt=""/>
                          <div className="carousel-text">
                             <h1>Business Contractss</h1>
                             <p>Achieve virtually any design and layout from within the one template.</p>
                          </div>
                       </div>
                       <div className="carousel-item">
                          <img src="assets/images/first.png" alt=""/>
                          <div className="carousel-text">
                             <h1>Financial Advisory</h1>
                             <p>Achieve virtually any design and layout from within the one template.</p>
                          </div>
                       </div>
                    </div>
                    <label for="slide4" className="arrow next">&#10095;</label>
                    <label for="slide1" className="arrow prev">&#10094;</label>
                 </div>
              </div>
           </div>
        </div>
        <br/><br/>
        <div className="divided"></div>
        <div className="row m-10 gap-9 costumer-section service">
           <div className="col-1">
              <button className="speciale-1">EXPLORE NEW PLACES</button>
              <h2 className="costumer-header">What our costumer says</h2>
           </div>
           <div className="col-1 info">
              <h4>Design Quality</h4>
              <br/>
              <p>The template is really nice and offers quite a large set of options. Its beautiful and the
                 coding is
                 done quickly and seamlessly. Thank you!
              </p>
              <br/>
              <h4>Devon Lane</h4>
              <p>Team Leader, Paypal</p>
           </div>
           <div className="col-1 info">
              <h4>Design Quality</h4>
              <br/>
              <p>The template is really nice and offers quite a large set of options. Its beautiful and the
                 coding is
                 done quickly and seamlessly. Thank you!
              </p>
              <br/>
              <h4>Theresa Webb</h4>
              <p>Softwer Tester, Envato</p>
           </div>
        </div>
        <div className="row m-5  row-phone row-tablet">
           <div className="arrows service">
              <span className="material-symbols-outlined arrow west">west</span>
              <span className="material-symbols-outlined arrow east">east</span>
           </div>
        </div>
        <div className="row metrics service">
           <div className="col components">
              <h1>773</h1>
              <p>Components</p>
           </div>
           <div className="col downloads">
              <h1>1254</h1>
              <p>Downloads</p>
           </div>
           <div className="col followers">
              <h1>14941</h1>
              <p>Followers</p>
           </div>
           <div className="col users">
              <h1>1254</h1>
              <p>New User</p>
           </div>
        </div>
        <div className="launch-section m-5 p-2 text-center">
           <h1 className="display-1 services"> We help startups launch and succeed very fast</h1>
           <p className="launch-text">We appreciate your trust greatly! Our clients choose us and our products because
              they<br/> know were the
              best.
           </p>
           <button className="pro-btn">GET STARTED</button><br/>
        </div>
        <footer className="footer-info-protofolio ">
           <div className="row">
              <span className="left-side">
                 <p>Privacy & Cookie Policy | Terms of Service</p>
              </span>
              <span className="middle-side">
                 <p>© Copyright 2021. Sassio</p>
              </span>
              <span className="right-side">
                 <img src="assets/images/fb.png" alt=""/>
                 <img src="assets/images/tw.png" alt=""/>
                 <img src="assets/images/insta.png" alt=""/>
                 <img src="assets/images/ln.png" alt=""/>
              </span>
           </div>
        </footer>
     </div>
    );
}