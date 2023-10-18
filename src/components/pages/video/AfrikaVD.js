import React from 'react';
import { Player } from 'video-react';
import { MDBBtn } from 'mdb-react-ui-kit';
import { Link } from "react-router-dom";

export default function AfrikaVD() {
    const style = {
        link: {
            color: "#fff"
        }
    }
return (
    <>
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
            <br />
            <div className='container'>
                <Player
                    playsInline
                    poster="/assets/poster.png"
                    src="https://6526fd566c39070efbd45046--jolly-crostata-d94159.netlify.app/Videodarslar/Африкаматериги.mp4"
                />
            </div>
    </>
);
};