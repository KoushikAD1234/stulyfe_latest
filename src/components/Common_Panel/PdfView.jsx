import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import Footer from '../Footer/Footer';
import { Button } from '@mui/material';
import { useLocation } from 'react-router-dom';
import PdfViewer from './PdfSetup';

function PdfView(prop) {
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const pdfLink = params.get('qfile');

    return (
        <>
            <div className="flex justify-center items-center my-10">
                <Link to="/home"
                    style={{ position: "relative", right: "550px", cursor: "pointer" }}
                >
                    <ArrowBackOutlinedIcon style={{ scale: "1.8" }} />
                </Link>
                <div className="font-extrabold text-2xl">Topic Name</div>
                <div >
                    {prop.prop == 'remark' ? (
                        <Button variant='contained' style={{
                            cursor: "pointer",
                            position: "relative",
                            left: "550px",
                        }} color='secondary' size='small'>Remark Submission</Button>
                    )
                        :
                        (
                            <SearchOutlinedIcon
                                style={{
                                    scale: "1.8",
                                    cursor: "pointer",
                                    position: "relative",
                                    left: "550px",
                                }}
                            />
                        )
                    }
                </div>
            </div>

            <div>
                {/* <PdfViewer img='https://mozilla.github.io/pdf.js/web/compressed.tracemonkey-pldi-09.pdf' /> */}
                <embed src={pdfLink} className='w-[90vw] mx-auto h-[90svh]' type="application/pdf"></embed>
            </div>

            <Footer />

        </>
    )
}
export default PdfView;