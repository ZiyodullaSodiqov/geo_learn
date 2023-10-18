import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MDBBtn } from 'mdb-react-ui-kit';

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

export default function Ex2() {

    const style = {
        link: {
            color: "#fff"
        }
    }

    const [buttonActive, setButtonActive] = useState(false);
    const [divVisible, setDivVisible] = useState(false);

    const [countdown, setCountdown] = useState(60); // 300 seconds = 5 minutes

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

        if (timeout === 0) {
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
            <div className="container">
                <div className="row changeX1_v15">
                    <div className="col-12">
                    <h1 style={styles.h1}>2-Amaliy Topshiriq</h1>
                    <p style={styles.p}>
                        Qrim yarim orolidan Turkiya qirg’oqlarini ko’rish uchun necha metr balandlik ko’tarilish kerak?
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
                                Qrim yarim orolidan Turkiya qirg’oqlarigacha 1:5000000 
                                masshtabli kartadan o’lchaganimizda 19 sm ni tashkil etdi.
                                19 x 50km= 950 km masofani tashkil etdi. Bu masofani amalda
                                ko’rish mumkin emas.
                            </p>
                        </div>
                        )}
                        {/* {showSecondComponent && <Project2 />} */}
                    </div>
                    </div>
                </div>
                </div>
    </React.Fragment>
);}