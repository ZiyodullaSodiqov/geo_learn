import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MDBBtn } from 'mdb-react-ui-kit';
import SecondShow from './Ex2';

const styles = {

    h1: {
    textAlign: "center",
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: "normal",
    textAlign: "center",
    },

    p: {
    fontSize: "18px",
    lineHeight: "30px",
    fontWeight: "500",
    fontFamily: "'Roboto Slab', serif"
    },

};

export default function Ex1() {

    const style = {
        link: {
            color: "#fff"
        }
    }

    const [buttonActive, setButtonActive] = useState(false);
    const [divVisible, setDivVisible] = useState(false);

    const [countdown, setCountdown] = useState(60);

    useEffect(() => {
        const interval = setInterval(() => {
            setCountdown((prevCountdown) => prevCountdown - 1);
        }, 1000);

    return () => clearInterval(interval);
    }, []);

    if(countdown == 0) {
        document.getElementById('btn_res').innerText = "Javobni ko'rishingiz mumkun"
        document.getElementById('btn_res').className = 'btn btn-success'
}

    useEffect(() => {

        const timeout = setTimeout(() => {
            setButtonActive(true);
        }, 1 * 60 * 1000); 

        if (timeout === 0 || -0) {
            setButtonActive(false);
        }

        return () => clearTimeout(timeout);

    }, []);


    const handleButtonClick = () => {
        setDivVisible(true);
    };

    const [showSecondComponent, setShowSecondComponent] = useState(false);

    const handleButtonClickOne = () => {
        setShowSecondComponent(true);
    };

    const handleClick = () => {
        handleButtonClick();
        handleButtonClickOne();
    };

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
            <div className="container">
                <div className="row changeX1_v15">
                    <div className="col-12">
                    <h1 style={styles.h1}>1-Amaliy Topshiriq</h1>
                    <p style={styles.p}>
                        Yevropa kartasidan foydalanib Ladoga ko’lini g’arbdan sharqqa
                        tomon qanchaga cho’zilganligini aniqlangn. Ko’lning arigi
                        qirg’og’ini ko’rish uchun necha metrlik balandlikka ko’tarilish
                        kerak?
                    </p>
                    <div>
                        <button
                        id="btn_res"
                        disabled={!buttonActive}
                        className="btn btn-danger"
                        onClick={handleClick}
                        >
                        Javobni ko'rish ({countdown})
                        </button>
                        <br />
                        <br />
                        {divVisible && (
                        <div style={{ display: "block" }}>
                            <p className="p_one">

                            <b>Yechish: </b> 
                            Ladoga ko’lini g’arbdan sharqqa tomon
                            1:5000000 masshtabli kartada 2,6sm masofaga cho’zilganligini
                            aniqladik. 1smda 50 km bo’lsa unda masofa 2,6 x 50 =30 km ni
                            tashkil etdi. G’arbdan sharqqa Ladoga ko’lining qirg’og’ini
                            ko’rish uchun 1100 m balandlikka chiqish talab etiladi.

                            <br />

                            <b>Javob</b>: masofa 130 km, balandlik 1100 m.
                            </p>
                        </div>
                        )}
                        {showSecondComponent && <SecondShow />}
                    </div>
                    </div>
                </div>
                </div>
    </React.Fragment>
);}