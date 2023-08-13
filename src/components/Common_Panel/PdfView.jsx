import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import Footer from '../Footer/Footer';
import { Button } from '@mui/material';
import PdfSetup from './PdfSetup';
import pdf from './Maths1.pdf';

function PdfView(prop) {

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
                <PdfSetup img={pdf} />
                {/* <embed src="https://devunitbucket.s3.ap-south-1.amazonaws.com/1681740565465.97071681085807653.1694Handwritten%2BNotes-sample.pdf" width="800" height="1000" type="application/pdf"></embed> */}
            </div>

            <Footer />

        </>
    )
}
export default PdfView;