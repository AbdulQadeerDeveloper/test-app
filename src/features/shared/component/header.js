import React from 'react'
import { Link } from 'react-router-dom'
import { MdGraphicEq } from 'react-icons/md';

function Header() {
    return (
        <header class="header">
            <nav class="navbar navbar-expand-lg">
                <div class="container">
                    <a class="navbar-brand" href="#"> <div className='heading'>
                        <h1><span><MdGraphicEq /></span></h1>
                    </div></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ms-auto">
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/video-test">Brand</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/audio-test">Video</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/signin">Sign In</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/signup">Sign Up</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header
