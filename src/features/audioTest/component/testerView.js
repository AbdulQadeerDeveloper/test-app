import React from 'react'
import { FaPen } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { MdGraphicEq } from "react-icons/md";
import { SiAudiomack } from 'react-icons/si';
function VideoTestView() {
    return (
        <div className='container'>
            <div className='heading'>
                <h1><span><MdGraphicEq /></span>RapidTest.<span className='color-ai'>AI</span></h1>
            </div>
            <div className='Get-heading-start'>
                <h1>Preview</h1>
                <div className='row'>
                    <div className='col-md-6'></div>
                    <div className='col-md-6 text-right'><button>Submit</button></div>
                </div>
            </div>
            <div className='table-wrapper'>
                <tr>
                    <th>Logos for new healthcare startup  <span className='pen-audio'><FaPen /></span></th>
                </tr>
                <tr>
                    <td>
                        Description (e.g. I have created 3 different intros for my new song. I’m looking for one that creates a sense of excitement. Would love your help in finding the best fit of these
                        three options.)
                        <span className='pen-audio'><FaPen /></span>
                    </td>

                </tr>
                <tr>
                    <th>
                        <div className='row'>
                            <div className='col-md-6' id='option'>
                                <div className='col-md-4 colsm-12'>
                                    <h4>Option 1</h4>
                                    <div className='audio-circle'>
                                        <span className='video'><img width="150px" src='https://s3.amazonaws.com/cdn.designcrowd.com/blog/100-Famous-Brand%20Logos-From-The-Most-Valuable-Companies-of-2020/frito-lay-logo.png' /></span>
                                    </div>
                                    <div className='Round Dots'>
                                        <div className='RoundDots'>
                                            <span className='poor'>Poor</span>
                                            <span className='excellent'>Excellent</span>
                                        </div>
                                        <br />
                                        <span class="dot">1</span>
                                        <span class="dot">2</span>
                                        <span class="dot">3</span>
                                        <span class="dot1">4</span>
                                        <span class="dot">5</span>
                                    </div>
                                </div>
                                <div className='col-md-4'>
                                    <h4>Option 3</h4>
                                    <div className='audio-circle'>
                                        <span className='video'><img width="150px" src='https://s3.amazonaws.com/cdn.designcrowd.com/blog/100-Famous-Brand%20Logos-From-The-Most-Valuable-Companies-of-2020/gillette-logo.png' /></span>
                                    </div>
                                    <div className='Round Dots'>
                                        <div className='RoundDots'>
                                            <span className='poor'></span>
                                            <span className='excellent'></span>
                                        </div>
                                        <br />

                                        <span class="dot">1</span>
                                        <span class="dot">2</span>
                                        <span class="dot">3</span>
                                        <span class="dot1">4</span>
                                        <span class="dot">5</span>
                                    </div>
                                </div>
                                <div className='col-md-4'>
                                    <h4>Option 3</h4>
                                    <div className='audio-circle'>
                                        <span className='video'><img width="150px" src='https://s3.amazonaws.com/cdn.designcrowd.com/blog/100-Famous-Brand%20Logos-From-The-Most-Valuable-Companies-of-2020/walt-disney-logo.png' /></span>
                                    </div>
                                    <div className='Round Dots'>
                                        <div className='RoundDots'>
                                            <span className='poor'></span>
                                            <span className='excellent'></span>
                                        </div>
                                        <br />
                                        <span class="dot">1</span>
                                        <span class="dot">2</span>
                                        <span class="dot">3</span>
                                        <span class="dot1">4</span>
                                        <span class="dot">5</span>
                                    </div>
                                </div>


                            </div>

                            <div className='row pt-3'>
                                <div className='col-md-7'>
                                    <div className="form-group">
                                        <input type="text" className='form-control' placeholder="Feedback for Option 1" style={{ border: "1px solid black" }} />
                                    </div>
                                    <br />
                                    <div className="form-group">
                                        <input type="text" className='form-control' placeholder="Feedback for Option 2" style={{ border: "1px solid black" }} />
                                    </div>
                                    <br />
                                    <div className="form-group">
                                        <input type="text" className='form-control' placeholder="Feedback for Option 3" style={{ border: "1px solid black" }} />
                                    </div>
                                    <br />
                                </div>
                            </div>



                            <div className='col-md-6'></div>

                        </div>
                    </th>
                </tr>

            </div>
        </div>
    )
}

export default VideoTestView