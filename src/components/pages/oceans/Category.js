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
                            backgroundImage:"url(https://i.pinimg.com/564x/5f/3b/6a/5f3b6a016af74ef62fb0839653b3289e.jpg)"
                        }}>
                        <Link to="/atlantika-text">
                            <p className='spnX1'>
                                Atlantika Okeani
                            </p>
                        </Link>
                    </div>  
                    <div 
                        className="col-3 changeX3 bgX2" 
                        style={{
                            backgroundImage:"url(https://i.pinimg.com/564x/ea/a1/2d/eaa12dc3b832824acb8dacad19a2b6a3.jpg)"
                    }}>
                    <Link to="/hind-text">
                            <p className='spnX1'>
                                Hind Okeani
                            </p>
                        </Link>
                    </div>   
                    <div 
                        className="col-3 changeX3 bgX2" 
                        style={{
                            backgroundImage:"url(https://i.pinimg.com/564x/b5/1e/22/b51e226c5b15ecdd4cce55b155d4c227.jpg)"
                    }}>
                    <Link to="/shimoliy-text">
                            <p className='spnX1'>
                                Shimoliy Muz Okeani
                            </p>
                        </Link>
                    </div>   
                    <div 
                        className="col-3 changeX3 bgX2" 
                        style={{
                            backgroundImage:"url(https://i.pinimg.com/564x/68/fe/a5/68fea51af5db0e2153c825241b7dc57d.jpg)"
                    }}>
                    <Link to="/tinch-text">
                            <p className='spnX1'>
                            Tinch Okeani
                            </p>
                        </Link>
                    </div>   
                </div>
            </div>
            </React.Fragment>
        )
    }

    export default Category;