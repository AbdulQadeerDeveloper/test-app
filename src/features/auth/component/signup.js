import React from 'react'
import { Link } from 'react-router-dom';
import { FaApple, FaMusic } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { SiSony, SiSamsung } from 'react-icons/si';
import { HiDesktopComputer } from 'react-icons/hi';
import { MdVideocam } from 'react-icons/md';
import { BsMeta } from "react-icons/bs";
import { MdGraphicEq } from 'react-icons/md';
function Signup() {
    return (
        <React.Fragment>
            <div className="container">
                <div className='row'>
                    <div className='col-md-6'>
                        <div className='heading'>
                            <h1><span><MdGraphicEq style={{color:"black"}} /></span>RapidTest.<span className='color-ai'>AI</span></h1>
                        </div>
                        <form>
                            <div className='Get-heading-start'>
                                <h3>Get Started Now</h3>
                                <p>Join the world’s most affordable A/B testing platform…for anything!</p>
                            </div>
                            <div className='row signInGoogle'>
                                <div className='col-md-6'>
                                    <button>
                                        <span className='google-icon'><FcGoogle  style={{color:"black"}}/></span> 
                                        Sign up with Google
                                    </button>
                                </div>
                                <div className='col-md-6'>
                                    <button> <span><FaApple /></span> Sign up with Apple ID</button>
                                </div>
                            </div>
                            <hr />
                            <div className="form-group">
                                <label>Name</label><br />
                                <input type="text" name="name" className='form-control' placeholder="Enter your name" />
                            </div>
                            <div className="form-group">
                                <label>Email</label><br />
                                <input type="email" name="email" className='form-control' placeholder="william@company.com" />
                            </div>
                            <div className="form-group">
                                <label>Password</label><br />
                                <input type='password' name="password" className='form-control' placeholder="Enter your password" />
                            </div>
                            <br />
                            <div className="form-group">
                                <input type='radio' name="password" placeholder="Enter your password" />
                                <label style={{ marginLeft: "10px" }}>I agree to the <Link to="/terms">Term & Privacy</Link></label>
                            </div>
                            <div className="field">
                                <input type="submit" value="Sign Up" />
                            </div>
                            <div className='signIn-account-term'>
                                <span>Already have an account? <Link to="/signin">Sign In</Link></span>
                            </div>
                        </form>
                    </div>
                    <div className='col-md-6'>
                        <div className='contact-banner'>
                            <h1>
                                Get Instant Feedback on <br />
                                almost anything…for only $20
                            </h1>
                            <div className='contact-display-icon'>
                                <div className='row'>
                                    <div className='col-md-4'>
                                        <span className='icon'><HiDesktopComputer /></span>
                                    </div>
                                    <div className='col-md-4'>
                                        <span className='icon'><FaMusic /></span>
                                    </div>
                                    <div className='col-md-4'>
                                        <span className='icon'><MdVideocam /></span>
                                    </div>
                                </div>
                            </div>
                            <div className='contact-para'>
                                <p>
                                    Can’t decide on a new <span className='text-bold'>logo</span>? Need honest <br />
                                    feedback about a new <span className='text-bold'>song</span> intro? <br />
                                    Wondering what TikTok <span className='text-bold'>video</span> to post?
                                </p>
                            </div>
                            <div className='contact-para'>
                                <p>
                                    Tap into our global network of user testers <br />
                                    and receive rapid objective feedback, along <br />
                                    with an AI-powered assessment.
                                </p>
                            </div>
                            <div className='brand-name'>
                                <div className='row'>
                                    <div className='col-md-3'>
                                        <span className='icon-brand1'> <BsMeta /> Meta</span>
                                    </div>
                                    <div className='col-md-3'>
                                        <span className='icon-brand'><SiSony /></span>
                                    </div>
                                    <div className='col-md-3'>
                                        <span className='icon-brand1'>Google</span>
                                    </div>
                                    <div className='col-md-3'>
                                        <span className='icon-brand'><SiSamsung /></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </React.Fragment>
    )
}

export default Signup