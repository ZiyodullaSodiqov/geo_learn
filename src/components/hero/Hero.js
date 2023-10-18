/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import Earth from '../../assets/images/earth.png'
import { Link } from "react-router-dom";
import { MDBBtn } from 'mdb-react-ui-kit';

const Hero = () => {

    const style = {
        h1: {
            color: "#252a31",
            fontSize: "40px",
            fontWeight: "700",
            marginTop: "200px"
        },
        p: {
            color: "#4f5e71",
            fontSize: "30px",
            marginTop: "40px",
            fontWeight:"500"
        },
        link: {
            color: "#fff"
        }
    }

    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <h1 style={style.h1}>
                            Materiklar va okeanlar
                            tabiiy geografiyasi
                        </h1>
                        <p style={style.p}>
                            30+ Foydali malumotlar
                            va darslar.
                        </p>
                        <MDBBtn
                            rounded
                            className='mx-2 changeX1'
                            color='info'>
                            <Link
                                to="/category"
                                style={style.link}>
                                Kirish
                            </Link>
                        </MDBBtn>
                    </div>
                    <div className="col-6">
                        <img
                            src={Earth}
                            alt="This is earth image"
                            className="site-hero_logo" />
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Hero;