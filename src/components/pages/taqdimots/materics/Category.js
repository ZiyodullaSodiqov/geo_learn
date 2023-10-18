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
                            backgroundImage:"url(https://i.pinimg.com/564x/a9/cb/9f/a9cb9f69b4636d0e9b47c2f64114c85f.jpg)"
                        }}>
                        <Link to="/taqdimot-afrika">
                            <p className='spnX1'>
                                Afrika materigi tabiiy 
                                geografik o`rni
                            </p>
                        </Link>
                    </div>  
                    <div 
                        className="col-3 changeX3 bgX2" 
                        style={{
                            backgroundImage:"url(https://i.pinimg.com/564x/17/99/2e/17992e0d321b5117f28e13ad4b0a4265.jpg)"
                    }}>
                    <Link to="/taqdimot-antarktida">
                            <p className='spnX1'>
                                Antarktida materigi 
                                tabiiy geografik o`rni
                            </p>
                        </Link>
                    </div>
                    <div 
                        className="col-3 changeX3 bgX2" 
                        style={{
                            backgroundImage:"url(https://i.pinimg.com/564x/69/a0/7a/69a07ae7194ed6b964d144fc24043fc5.jpg)"
                    }}>
                    <Link to="/taqdimot-avstraliya">
                            <p className='spnX1'>
                                Avstraliya materigi 
                                tabiiy geografik o`rni
                            </p>
                        </Link>
                    </div>
                    <div 
                        className="col-3 changeX3 bgX2" 
                        style={{
                            backgroundImage:"url(https://i.pinimg.com/564x/57/82/9f/57829f2245d42bb341c3284cc96466f2.jpg)"
                    }}>
                    <Link to="/taqdimot-janubiy-amerika">
                            <p className='spnX1'>
                                Amerika materigi
                                tabiiy geografik o`rni
                            </p>
                        </Link>
                    </div>
                    <div 
                        className="col-3 changeX3 bgX2" 
                        style={{
                            backgroundImage:"url(https://i.pinimg.com/564x/de/b0/5f/deb05f9e99b48542bdde46a8f2762051.jpg)"
                    }}>
                    <Link to="/taqdimot-shimoliy-amerika">
                            <p className='spnX1'>
                                Shimoliy Amerika materigi
                                tabiiy geografik o`rni
                            </p>
                        </Link>
                    </div>
                    <div 
                        className="col-3 changeX3 bgX2" 
                        style={{
                            backgroundImage:"url(https://i.pinimg.com/564x/cf/48/c9/cf48c9e736bedcc8284114f1f33501a2.jpg)"
                    }}>
                    <Link to="/taqdimot-yevrosiyo">
                            <p className='spnX1'>
                                Yevrosiyo materigi 
                                tabiiy geografik o`rni
                            </p>
                        </Link>
                    </div>
                </div>
            </div>
            </React.Fragment>
        )
    }

    export default Category;