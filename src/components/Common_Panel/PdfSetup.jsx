import React from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

// Set the worker URL for the pdf.js library (required)
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const PdfViewer = (prop) => {
    
    // State to keep track of the number of pages in the PDF
    const [numPages, setNumPages] = React.useState(null);

    // Function to handle getting the number of pages in the PDF
    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
    };

    // Function to handle rendering PDF pages without the text layer and annotation layer
    const renderPdfPages = () => {
        const pages = [];

        for (let pageNumber = 1; pageNumber <= numPages; pageNumber++) {
            pages.push(
                <Page
                    key={`page_${pageNumber}`}
                    pageNumber={pageNumber}
                    renderTextLayer={false} // Disable the text layer
                    renderAnnotationLayer={false} // Disable the annotation layer
                    style={{
                        marginBottom: '10px',
                    }} // Add custom margin between pages
                />
            );
        }

        return pages;
    };

    return (
        <>
            <p className='ms-20'>Number of pages: {numPages}</p>
            <div className='flex justify-center'>
                {/* Render the PDF document */}
                <Document file={prop.img} onLoadSuccess={onDocumentLoadSuccess}>
                <embzed src="https://devunitbucket.s3.ap-south-1.amazonaws.com/1681740565465.97071681085807653.1694Handwritten%2BNotes-sample.pdf" type="" />
                    {/* Render individual pages without the text layer and annotation layer */}
                    {numPages && renderPdfPages()}
                </Document>
                {/* Show the number of pages */}
            </div>
        </>
    );
};

export default PdfViewer;
