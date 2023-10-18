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
                                    to="/category"
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
                            backgroundImage:"url(https://i.pinimg.com/564x/ac/09/88/ac09880190097a5c937a09947436193c.jpg)"
                        }}>
                        <Link to="/video-avstraliya-video">
                            <p className='spnX1'>
                                Avstraliya Materigi
                            </p>
                        </Link>
                    </div>  
                    <div 
                        className="col-3 changeX3 bgX2" 
                        style={{
                            backgroundImage:"url(https://i.pinimg.com/564x/b5/1e/22/b51e226c5b15ecdd4cce55b155d4c227.jpg)"
                    }}>
                    <Link to="/video-antarktida-video">
                            <p className='spnX1'>
                                Antarktida materigi
                            </p>
                        </Link>
                    </div>
                    <div 
                        className="col-3 changeX3 bgX2" 
                        style={{
                            backgroundImage:"url(https://i.pinimg.com/564x/ea/a1/2d/eaa12dc3b832824acb8dacad19a2b6a3.jpg)"
                    }}>
                    <Link to="/video-afrika-video">
                            <p className='spnX1'>
                                Afrika materigi
                            </p>
                        </Link>
                    </div>
                    <div 
                        className="col-3 changeX3 bgX2" 
                        style={{
                            backgroundImage:"url(https://i.pinimg.com/564x/ed/c8/24/edc824ccfad492c8994f012651acce98.jpg)"
                    }}>
                    <Link to="/video-yevrosiyo-video">
                            <p className='spnX1'>
                                Yevrosiyo materigi
                            </p>
                        </Link>
                    </div>
                    <div 
                        className="col-3 changeX3 bgX2" 
                        style={{
                            backgroundImage:"url(https://i.pinimg.com/736x/50/42/a7/5042a770c79f93fb82980cab7ac05b66.jpg)"
                    }}>
                    <Link to="/video-shimoliy-america-video">
                            <p className='spnX1'>
                                Shimoliy Amerika materigi
                            </p>
                        </Link>
                    </div>
                    <div 
                        className="col-3 changeX3 bgX2" 
                        style={{
                            backgroundImage:"url(https://i.pinimg.com/564x/8b/88/dc/8b88dce389669c0e761dc5d46dcc6c3c.jpg)"
                    }}>
                    <Link to="/video-janubiy-amrica-video">
                            <p className='spnX1'>
                                Janubiy Amerika materigi
                            </p>
                        </Link>
                    </div>
                </div>
            </div>
            </React.Fragment>
        )
    }

    export default Category;