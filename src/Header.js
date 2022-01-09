import React from 'react'
import './App.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>

            <div className='Header'>
                <div className='container'>
                    <div className='row'>

                        <div className='col-md-6'>

                        </div>
                        <div className='col-md-6' >
                            <ul>
                                <li>
                                    <Link to={"/home"}>
                                    Home
                                    </Link>
                                    </li>
                                <li>
                                    <Link  to ={"/About"} >
                                        About Us
                                    </Link>
                                </li>
                                <li>
                                    <Link to ={"/Contact"} >
                                        Contact Us
                                    </Link>
                                </li>
                            </ul>
                        </div>


                    </div>
                </div>

            </div>

        </div>
    )
}

export default Header
