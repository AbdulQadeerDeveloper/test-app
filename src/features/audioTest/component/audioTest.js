import React from 'react'
import { FaPen } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { MdGraphicEq } from "react-icons/md";
import { SiAudiomack } from 'react-icons/si';
function AudioTest() {
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
            <table className='table-wrapper'>
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
                                <div className='col-md-4'>
                                    <h4>Option 1</h4>
                                    <div className='audio-circle'>

                                        <span className='video'><FaYoutube /></span>
                                    </div>
                                </div>
                                <div className='col-md-4'>
                                    <h4>Option 3</h4>
                                    <div className='audio-circle'>
                                        <span className='video'><FaYoutube /></span>
                                    </div>
                                </div>
                                <div className='col-md-4'>
                                    <h4>Option 3</h4>
                                    <div className='audio-circle'>
                                        <span className='video'><FaYoutube /></span>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-6 text-end'>
                                <span className='pen-audio1'><FaPen /></span>
                            </div>

                        </div>
                    </th>
                </tr>

            </table>
        </div>
    )
}

export default AudioTest