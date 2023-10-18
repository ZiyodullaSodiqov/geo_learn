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
                            backgroundImage:"url(https://i.pinimg.com/564x/c4/89/f2/c489f237dd647fcd3450d784c12e579e.jpg)"
                        }}>
                        <Link to="/second/ctg">
                            <p className='spnX1'>
                                Materiklar
                            </p>
                        </Link>
                    </div>  
                    <div 
                        className="col-3 changeX3 bgX2" 
                        style={{
                            backgroundImage:"url(https://i.pinimg.com/564x/b8/ea/59/b8ea59c72bd2a2bbf0353e0c212e2332.jpg)"
                    }}>
                    <Link to="/oceans">
                            <p className='spnX1'>
                                Okeanlar
                            </p>
                        </Link>
                    </div>   
                </div>
            </div>
            </React.Fragment>
        )
    }

    export default Category;