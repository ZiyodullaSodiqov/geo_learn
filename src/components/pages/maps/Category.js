import React from 'react'
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
                                backgroundImage:"url(https://i.pinimg.com/736x/e6/cd/c0/e6cdc0c4f6e202cbd2a82769641b3b6f.jpg)"
                            }}>
                            <Link to="/atlas-6">
                                <p className='spnX1'> 
                                    6-Sinf atlasi (2022)
                                </p>
                            </Link>
                        </div>  
                        <div 
                            className="col-3 changeX3 bgX2" 
                            style={{
                                backgroundImage:"url(https://i.pinimg.com/736x/0b/7b/60/0b7b60f74b6620563812d0c44aff8ac1.jpg)"
                        }}>
                        <Link to="/atlas-7">
                                <p className='spnX1'>
                                    7-Sinf atlasi (2022)
                                </p>
                            </Link>
                        </div>   
                        <div 
                            className="col-3 changeX3 bgX2" 
                            style={{
                                backgroundImage:"url(https://i.pinimg.com/736x/c2/60/3e/c2603e3083ccfdad37b935c2266d735d.jpg)"
                        }}>
                        <Link to="/atlas-8">
                                <p className='spnX1'>
                                    8-Sinf atlasi (2022)
                                </p>
                            </Link>
                        </div>   
                        <div 
                            className="col-3 changeX3 bgX2" 
                            style={{
                                backgroundImage:"url(https://i.pinimg.com/564x/28/f7/1b/28f71b55d6892bfc4eae50b8b235714c.jpg)"
                        }}>
                        <Link to="/atlas-9">
                                <p className='spnX1'>
                                    9-Sinf atlasi (2022)
                                </p>
                            </Link>
                        </div>   
                    </div>
                </div>
            </React.Fragment>
        )
    }

    export default Category;