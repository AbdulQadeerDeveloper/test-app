import React from 'react'
import { MdOutlineFileUpload } from "react-icons/md";
import { Link } from 'react-router-dom';
import { MdGraphicEq } from 'react-icons/md';
function RapidTest() {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-6'>
                    <div className='heading'>
                        <h1><span><MdGraphicEq /></span>RapidTest.<span className='color-ai'>AI</span></h1>
                    </div>
                    <div className='Get-heading-start'>
                        <h1>Let’s get started!</h1>
                        <div className='row'>
                            <div className='col-md-6'><p>Test Panel of 5 Reviewers</p></div>
                            <div className='col-md-6'><button>Upgrade for more!</button></div>
                        </div>
                    </div>
                    <div className='msq-test-order-list'>
                        <ol>
                            <li>What do you want to test?</li><br />
                        </ol>
                        <div className='inline-display'>
                            <input type="radio" id="html" name="fav_language" value="HTML" />
                            <label for="html">Images</label><br />
                            <input type="radio" id="html" name="fav_language" value="HTML" />
                            <label for="html">Audio Files</label><br />
                            <input type="radio" id="html" name="fav_language" value="HTML" />
                            <label for="html">Video Files</label><br />
                        </div>
                        <ol>
                            <li>How many versions do you want to test?</li>
                        </ol>
                        <div className='inline-display1'>
                            <input type="radio" id="html" name="fav_language" value="HTML" />
                            <label for="html">One(1)</label><br />
                            <input type="radio" id="html" name="fav_language" value="HTML" />
                            <label for="html">Two(2)</label><br />
                            <input type="radio" id="html" name="fav_language" value="HTML" />
                            <label for="html">Three(3)</label><br />
                            <input type="radio" id="html" name="fav_language" value="HTML" />
                            <label for="html">Four(4)</label><br />
                        </div>
                        <ol>
                            <li>Upload your files <span>10MB per file</span></li>
                        </ol>
                        <div className='inline-display2'>
                            <button><MdOutlineFileUpload /> <span>File 1</span></button>
                            <button><MdOutlineFileUpload /> <span>File 2</span></button>
                            <button><MdOutlineFileUpload /> <span>File 3</span></button>

                        </div>
                        <ol>
                            <li>Name and discribe what you are testing?</li>
                        </ol>
                        <div className="form-group">
                            <input type="text" className='form-control' placeholder="Give your test a name (e.g. Logos for new healthcare startup)" />
                        </div>
                        <br />
                        <div className="form-group">
                            <textarea cols={4} rows={4} className='form-control' placeholder="Description (e.g. I have a created 3 different intros for my new song . I'm looking for one that creates a excitement. Would love help in finding the best fit of these three options."></textarea>
                        </div>
                    </div>
                </div>
                <div className='col-md-6 text-end text-right'>
                    <div className='preview-btn'><Link>See Preview</Link></div>
                </div>
            </div>

        </div>
    )
}

export default RapidTest