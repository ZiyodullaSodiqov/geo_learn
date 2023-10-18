import React from 'react'
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";
import { MDBBtn } from 'mdb-react-ui-kit';
import { Link } from "react-router-dom";

const url = "https://6526fd566c39070efbd45046--jolly-crostata-d94159.netlify.app/";

export default  function TopFaktlar() {
    const style = {
        link: {
            color: "#fff"
        }
    }
        const docs = [
            { 
                uri: `${url}Dunyoajoyibotlari/Topfaktlar.docx`, 
                fileType:"docx" 
            },
        ];
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
                <div className="container">
                    <DocViewer
                        documents={docs}
                        pluginRenderers={DocViewerRenderers}
                        style={{
                            height:1000
                        }}/>;
                </div>
            </React.Fragment>
        )
    }