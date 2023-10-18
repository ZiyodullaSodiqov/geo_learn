import React from 'react'
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";

const url = "https://sage-monstera-5d0be7.netlify.app/";

    function JanubiyAmerika() {
        const docs = [
            { 
                uri: `${url}Taqdimotlar/Materiklar/4JanubiyAmerikamaterigitabiiygeografikorni.ppt`, 
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

    export default JanubiyAmerika;