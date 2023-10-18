import React from 'react';
import { MDBBtn } from 'mdb-react-ui-kit';
import { Link } from "react-router-dom";

export default function Category() {

    const style = {
        link: {
            color: "#fff"
        }
    }

    return (
        <React.Fragment>
        <br />
            <div className="container-xl">
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
                    <div className="col-3 changeX3 bgX1">
                        <Link to="/materiks">
                            <p className='spnX1'>
                                Materiklar va okeanlar
                            </p>
                        </Link>
                    </div>  
                    <div className="col-3 changeX3 bgX2">
                    <Link to="/taqdimot">
                            <p className='spnX1'>
                                Taqdimotlar
                            </p>
                        </Link>
                    </div>  
                    <div className="col-3 changeX3 bgX3">
                    <Link to="/video-category">
                            <p className='spnX1'>
                                Video darslar
                            </p>
                        </Link>
                    </div>  
                    <div className="col-3 changeX3 bgX4">
                        <Link to="">
                            <p className='spnX1'>
                                Testlar
                            </p>
                        </Link>
                    </div>  
                </div>

                <br />
                { /* Second row */}

                <div className="row">
                    <div className="col-3 changeX3 bgX5">
                        <Link to="/world-category">
                            <p className='spnX1'>
                                Dunyo Ajoyibotlari
                            </p>
                        </Link>
                    </div>
                    <div className="col-3 changeX3 bgX6">
                        <Link to="/qiziq_geografiya">
                            <p className='spnX1'>
                            Qiziqarli Geografiya
                            </p>
                        </Link>
                    </div>
                    <div className="col-3 changeX3 bgX7">
                        <Link to="/maps">
                            <p className='spnX1'>
                                Atlas Xaritalar
                            </p>
                        </Link>
                    </div>
                    <div className="col-3 changeX3 bgX8">
                        <Link to="/exercises">
                            <p className='spnX1'>
                                Amaliy Topshiriqlar
                            </p>
                        </Link>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}