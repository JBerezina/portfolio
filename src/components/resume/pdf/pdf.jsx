import React, { useState } from 'react'
import './pdf.css'
import { Viewer } from '@react-pdf-viewer/core'
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout'
import '@react-pdf-viewer/core/lib/styles/index.css'
import '@react-pdf-viewer/default-layout/lib/styles/index.css'
import { Worker } from '@react-pdf-viewer/core'
// import PDF from './Julia_Berezina_resume.pdf'


export const pdf = () => {

    const defaultLayoutPluginInstance = defaultLayoutPlugin();

    return (
        <div className="pdf-container">
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js">
                 <Viewer fileUrl={process.env.PUBLIC_URL + '/assets/Julia_Berezina_Resume.pdf'}
                 plugins={[
                    defaultLayoutPluginInstance
                ]} />
            </Worker>;
        </div>
        );    
}

export default pdf
