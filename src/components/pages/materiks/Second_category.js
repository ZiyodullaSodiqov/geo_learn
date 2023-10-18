import React from 'react';
import { MDBBtn } from 'mdb-react-ui-kit';
import { Link } from "react-router-dom";

    function Second_category() {

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
                                    to="/materiks"
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
                            backgroundImage:"url(https://i.pinimg.com/564x/f6/17/41/f6174125a54514690300b3807b36931d.jpg)"
                        }}>
                        <Link to="/texts-afrika">
                            <p className='spnX1'>
                                Afrika Materigi
                            </p>
                        </Link>
                    </div>  

                    <div 
                        className="col-3 changeX3 bgX2" 
                        style={{
                            backgroundImage:"url(https://i.pinimg.com/564x/11/aa/79/11aa79453106561dccf35bfe25d83fc0.jpg)"
                    }}>
                    <Link to="/texts-antarktida">
                            <p className='spnX1'>                   
                                Antarktida Materigi
                            </p>
                        </Link>
                    </div>   

                    <div 
                        className="col-3 changeX3 bgX2" 
                        style={{
                            backgroundImage:"url(https://i.pinimg.com/564x/69/a0/7a/69a07ae7194ed6b964d144fc24043fc5.jpg)"
                    }}>
                    <Link to="/texts-avstraliya">
                            <p className='spnX1'>
                                Avstraliya Materigi
                            </p>
                        </Link>
                    </div>  

                    <div 
                        className="col-3 changeX3 bgX2" 
                        style={{
                            backgroundImage:"url(https://i.pinimg.com/564x/bd/08/1f/bd081f56396030adeff9352b6a4f848a.jpg)"
                    }}>

                    <Link to="/texts-america_janubiy">
                            <p className='spnX1'>
                            Janubiy Amerika Materigi
                            </p>
                        </Link>
                    </div>   
                    <div 
                        className="col-3 changeX3 bgX2" 
                        style={{
                            backgroundImage:"url(https://i.pinimg.com/564x/b8/ea/59/b8ea59c72bd2a2bbf0353e0c212e2332.jpg)"
                    }}>
                    <Link to="/texts-okeaniya">
                            <p className='spnX1'>
                                Okeaniya
                            </p>
                        </Link>
                    </div>   
                    <div 
                        className="col-3 changeX3 bgX2" 
                        style={{
                            backgroundImage:"url(https://i.pinimg.com/564x/b4/49/34/b4493457979fe8d8317fcc39ca7203cc.jpg)"
                    }}>
                    <Link to="/texts-america_shimoliy">
                            <p className='spnX1'>
                                Shimoliy Amerika Materigi
                            </p>
                        </Link>
                    </div>   
                    <div 
                        className="col-3 changeX3 bgX2" 
                        style={{
                            backgroundImage:"url(https://i.pinimg.com/736x/5f/13/f5/5f13f5d06e85de22eb763646280b6e1a.jpg)"
                    }}>
                    <Link to="/texts-yevrosiyo">
                            <p className='spnX1'>
                                Yevrosiyo Materigi
                            </p>
                        </Link>
                    </div>   

                </div>
            </div>
            </React.Fragment>
        )
    }

    export default Second_category;