import React from 'react';
import { MDBBtn } from 'mdb-react-ui-kit';
import { Link } from "react-router-dom";

    function Category() {

        const style = {
            link: {
                color: "#fff"
            }
        }

        return(
            <React.Fragment>
                <div className="container-xl">
                    <br />
                    <div className="row">
                        <div className="col-6">
                            <MDBBtn
                                size='lg'
                                floating
                                style={{
                                    backgroundColor: '#54b4d3',
                                    width: "50px",
                                    height:"50px"
                                }}
                                href='#'>
                                <Link
                                    to="/"
                                    style={style.link}>
                                    <i class="fas fa-arrow-left-long fa-lg changeX4">
                                    </i>
                                </Link>
                            </MDBBtn>
                        </div>
                    </div>
            </div>
            <br />
            <div className="container-xl">
                <div className="row">
                    <div 
                        className="col-3 changeX3 bgX1"
                        style={{
                            backgroundImage:"url(https://i.pinimg.com/564x/85/ee/24/85ee24f4dbed2dd06ec1f57e427b63f7.jpg)"
                        }}>
                        <Link to="/taqdimot-oceans-atlantika">
                            <p className='spnX1'>
                                Atlantika okeani
                            </p>
                        </Link>
                    </div>  
                    <div 
                        className="col-3 changeX3 bgX2" 
                        style={{
                            backgroundImage:"url(https://i.pinimg.com/564x/ea/a1/2d/eaa12dc3b832824acb8dacad19a2b6a3.jpg)"
                    }}>
                    <Link to="/taqdimot-oceans-hind">
                            <p className='spnX1'>
                                Hind okeani
                            </p>
                        </Link>
                    </div>
                    <div 
                        className="col-3 changeX3 bgX2" 
                        style={{
                            backgroundImage:"url(https://i.pinimg.com/564x/7a/ea/d2/7aead23f55dd4a47c9dfbf8a5e6eabe5.jpg)"
                    }}>
                    <Link to="/taqdimot-oceans-okeaniya">
                            <p className='spnX1'>
                                Okeaniya
                            </p>
                        </Link>
                    </div>
                    <div 
                        className="col-3 changeX3 bgX2" 
                        style={{
                            backgroundImage:"url(https://i.pinimg.com/564x/61/43/25/614325573b82dc7907834dce8cd615c6.jpg)"
                    }}>
                    <Link to="/taqdimot-oceans-shimoliy-muz">
                            <p className='spnX1'>
                                Shimoliy muz okeani
                            </p>
                        </Link>
                    </div>
                    <div 
                        className="col-3 changeX3 bgX2" 
                        style={{
                            backgroundImage:"url(https://i.pinimg.com/564x/b8/ea/59/b8ea59c72bd2a2bbf0353e0c212e2332.jpg)"
                    }}>
                    <Link to="/taqdimot-oceans-tinch">
                            <p className='spnX1'>
                                Tinch okeani
                            </p>
                        </Link>
                    </div>
                </div>
            </div>
            </React.Fragment>
        )
    }

    export default Category;