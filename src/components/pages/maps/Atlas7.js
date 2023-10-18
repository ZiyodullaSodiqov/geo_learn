import React from 'react'
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";
import Maps from '../../../geo_app/materials/Sinflarboyichaatlaslar/7-sinfatlasi2022.pdf'

    export default function Atlas6() {
        
        const docs = [
            { 
                uri: Maps, 
                fileType:"pdf",
                fileName:"7-Sinf Atlas Xarita"
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