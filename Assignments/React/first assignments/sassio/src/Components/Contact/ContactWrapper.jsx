import React from 'react';

export default function ContactWrapper() {
    return (
        <div className="contact wrapper-md">
            <div className="row contact-intro text-center">
                <div className="col-1 contact-info">
                    <h3>London</h3>
                    <p>328 Queensberry Street, North Melbourne VIC 3051, Australia.</p>
                    <p className="dark">+(1) 123 456 7890</p>
                    <p>hi@sassio.com</p>
                    <a href="">
                        <p>Open Google Map</p>
                    </a>
                </div>
                <div className="divider"></div>
                <div className="col-1 contact-info">
                    <h3>New York</h3>
                    <p>328 Queensberry Street, North Melbourne VIC 3051, Australia.</p>
                    <p className="dark"> +(1) 123 456 7890</p>
                    <p>hi@sassio.com</p>
                    <a href="">
                        <p>Open Google Map</p>
                    </a>
                </div>
                <div className="divider"></div>
                <div className="col-1 contact-info">
                    <h3>Istanbul</h3>
                    <p>328 Queensberry Street, North Melbourne VIC 3051, Australia.</p>
                    <p className="dark">+(1) 123 456 7890</p>
                    <p>hi@sassio.com</p>
                    <a href="">
                        <p>Open Google Map</p>
                    </a>
                </div>
            </div>
            <div className="contact-form">
                <div className="text-contact text-center">
                    <button className="speciale contact-us">Message</button>
                    <h1 className="dark">Tell us about yourself</h1>
                </div>
                <div className="container">
                    <form action="#">
                        <div className="form-row">
                            <div className="input-data">
                                <input type="text" required />
                                <div className="underline"></div>
                                <label htmlFor="">Full Name</label>
                            </div>
                            <div className="input-data">
                                <input type="text" required />
                                <div className="underline"></div>
                                <label htmlFor="">Your Email Address</label>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="input-data">
                                <input type="text" required />
                                <div className="underline"></div>
                                <label htmlFor="">Your Subject</label>
                            </div>
                            <div className="input-data">
                                <input type="text" required />
                                <div className="underline"></div>
                                <label htmlFor="">Phone Number</label>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="input-data textarea">
                                <textarea rows="20" cols="180" required></textarea>
                                <br />
                                <div className="underline"></div>
                                <label htmlFor="">Message</label>
                                <br />
                            </div>
                        </div>
                        <div className="bottom-part">
                            <div className="input-check">
                                <input type="checkbox" name="" id="" />
                                <label>I am bound by the terms of the Service I accept Privacy Policy.</label>
                            </div>
                            <button className="pro-btn contact-us">Send your message</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="row">
                <div className="col-3 map-pic">
                    <iframe className="iframe-map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46940.16392808568!2d21.11752767997125!3d42.66643583189325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13549ee605110927%3A0x9365bfdf385eb95a!2sPristina!5e0!3m2!1sen!2s!4v1711409851264!5m2!1sen!2s"
                        style={{ border: 0 }} allowFullScreen="" loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
            <div className="row end">
                <div className="col-1 text-center">
                    <img src="assets/images/contact-llpt-pic.png" alt="Sales Support" />
                    <h3 className="dark">Sales Support</h3>
                    <p>
                        Looking for a custom quote? need to tell us more about your project? or want a
                        demonstration?
                        drop us a line to <a href="contact@sassio.com">contact@sassio.com</a>
                    </p>
                </div>
                <div className="divider"></div>
                <div className="col-1 text-center">
                    <img src="assets/images/contact-technical-pic.png" alt="Technical Support" />
                    <h3 className="dark">Technical Support</h3>
                    <p>
                        Looking for a custom quote? need to tell us more about your project? or want a
                        demonstration?
                        drop us a line to <a href="contact@sassio.com">contact@sassio.com</a>
                    </p>
                </div>
            </div>
        </div>
    );
}
