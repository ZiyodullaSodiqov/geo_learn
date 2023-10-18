import React from 'react'
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";

const url = "https://sage-monstera-5d0be7.netlify.app/"

    export default function GeografikMalumot(){

        const docs = [
            { 
                uri: `${url}7Qiziqarligeografikmalumotlar/Geografikmalumotlar.docx`, 
                fileType:"ppt" 
            },
        ];
        
        return(
            <React.Fragment>
                <DocViewer 
                    documents={docs} 
                    pluginRenderers={DocViewerRenderers}
                    style={{
                        height:1000
                    }}/>;
            </React.Fragment>
        )
    }