import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import Footer from '../Footer/Footer';
import { Button } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';

function RemarkSubmission(prop) {

    return (
        <>
            <div className="flex justify-center items-center my-10">
                <Link to="/home"
                    style={{ position: "relative", right: "550px", cursor: "pointer" }}
                >
                    <ArrowBackOutlinedIcon style={{ scale: "1.8" }} />
                </Link>
                <div className="font-extrabold text-2xl">Remark</div>
                <div >
                    <SearchOutlinedIcon
                        style={{
                            scale: "1.8",
                            cursor: "pointer",
                            position: "relative",
                            left: "550px",
                        }}
                    />
                </div>
            </div>

            <div className='container mx-auto px-32'>
                <div className='bg-slate-100 text-xl p-4 flex' style={{ fontWeight: 'bold' }}>
                    <div className='basis-1/5 '>
                        Sr.no
                    </div>
                    <div className='basis-2/4'>
                        Student Name
                    </div>
                    <div className='basis-1/6'>
                        Status
                    </div>
                    <div className='basis-1/6 '>
                        Remark
                    </div>
                </div>
                <div className='mt-6 flex flex-col gap-4'>
                    <div className='border rounded-lg border-[#cdcccc] text-xl p-2 px-3 justify-center items-center flex' >
                        <div className='basis-1/5 text-sm'>
                            <div className=' px-3 py-1 rounded-full text-stone-500 w-fit bg-sky-100'>
                                1
                            </div>
                        </div>
                        <div className='basis-2/4'>
                            Student Name
                        </div>
                        <div className='basis-1/5'>
                            <div className='text-green-700 bg-green-100 py-2 px-8 rounded-full border border-green-500 w-fit text-sm' >Submit</div>
                        </div>
                        <div className='basis-1/6'>
                            <div className='w-fit bg-green-100 text-green-700 px-2 ms-3 rounded-full pb-2 pt-1'>
                                <CheckIcon />
                            </div>
                        </div>
                    </div>
                    <div className='border rounded-lg border-[#cdcccc] text-xl p-2 px-3 justify-center items-center flex' >
                        <div className='basis-1/5 text-sm'>
                            <div className=' px-3 py-1 rounded-full text-stone-500 w-fit bg-sky-100'>
                                1
                            </div>
                        </div>
                        <div className='basis-2/4'>
                            Student Name
                        </div>
                        <div className='basis-1/5'>
                            <div className='text-green-700 bg-green-100 py-2 px-8 rounded-full border border-green-500 w-fit text-sm' >Submit</div>
                        </div>
                        <div className='basis-1/6'>
                            <div className='w-fit bg-green-100 text-green-700 px-2 ms-3 rounded-full pb-2 pt-1'>
                                <CheckIcon />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />

        </>
    )
}
export default RemarkSubmission;