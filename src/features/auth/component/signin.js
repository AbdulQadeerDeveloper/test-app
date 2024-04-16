import React from 'react'
import { Link } from 'react-router-dom';
import { FaApple, FaMusic } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { SiSony, SiSamsung } from 'react-icons/si';
import { HiDesktopComputer } from 'react-icons/hi';
import { MdVideocam } from 'react-icons/md';
import { BsMeta } from "react-icons/bs";
import { MdGraphicEq } from 'react-icons/md';
function Signin() {
    return (
        <React.Fragment>
            <div className="container">
                <div className='row'>
                    <div className='col-md-6'>
                        <div className='heading'>
                            <h1><span><MdGraphicEq /></span>RapidTest.<span className='color-ai'>AI</span></h1>
                        </div>
                        <form className='mt-5'>
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
                                <input type='checkbox' name="password" placeholder="Enter your password" />
                                <label style={{ marginLeft: "10px" }}>Remember me</label>
                                <div className="field1">
                                    <input type="submit" value="Sign Up" />
                                </div>
                            </div>

                            <div className='signIn-account-term'>
                                <span>
                                    <div className='line'></div>
                                    <p className='term-line'>Or Sign In with</p>
                                    <div className='line1'></div>
                                </span>
                            </div>
                        </form>
                        <div className='row signInGoogle'>
                            <div className='col-md-6'>
                                <button> <span><FcGoogle /></span> Sign up with Google</button>
                            </div>
                            <div className='col-md-6'>
                                <button> <span><FaApple /></span> Sign up with Apple ID</button>
                            </div>
                        </div>

                        <div className='signIn-account-term'>
                            <span>Dont have a <span>RapidTest.</span><span className='color-ai'>AI</span> account ? <Link to="/signup">Sign up</Link></span>
                        </div>
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

export default Signin