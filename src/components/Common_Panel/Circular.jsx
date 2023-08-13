import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import Footer from '../Footer/Footer';

function Circular() {
    const [activeTab, setActiveTab] = useState(1);

    const handleTabClick = (tabNumber) => {
        setActiveTab(tabNumber);
    };
    return (
        <>
            <div className="flex justify-center items-center my-10">
                <Link to="/home"
                    style={{ position: "relative", right: "550px", cursor: "pointer" }}
                >
                    <ArrowBackOutlinedIcon style={{ scale: "1.8" }} />
                </Link>
                <div className="font-extrabold text-2xl">Circular</div>
                <div>
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
            <div className="p-4 container mx-auto">
                <div style={{
                    borderRadius: '9px',
                    background: '#FFF',
                    boxShadow: '4px 4px 30px 0px rgba(0, 0, 0, 0.10)',
                    fontWeight: 'bold',
                }} className="flex p-3 shadow-md gap-5 " >
                    <button style={{ letterSpacing: '2px' }}
                        className={`py-4 scale-95 text-lg w-full  transform transition-transform active:scale-90 rounded-lg bg-[#C467FF] text-white ${activeTab === 1
                            ? "scale-100"
                            : ""
                            }`}
                        onClick={() => handleTabClick(1)}>
                        Latest
                    </button>
                    <button style={{ letterSpacing: '2px' }}
                        className={`py-4 scale-95 text-lg w-full  transform transition-transform active:scale-90 rounded-lg bg-[#EBF8FF] text-sky-600 ${activeTab === 2
                            ? "scale-100"
                            : ""
                            }`}
                        onClick={() => handleTabClick(2)}>
                        Latest
                    </button>
                    <button style={{ letterSpacing: '2px' }}
                        className={`py-4 scale-95 text-lg w-full  transform transition-transform active:scale-90 rounded-lg bg-[#FFE4E9] text-red-600 ${activeTab === 3
                            ? "scale-100"
                            : ""
                            }`}
                        onClick={() => handleTabClick(3)}>
                        Latest
                    </button>
                </div>
                <div className='p-4 '>
                    {activeTab === 1 && (
                        <div className="" >
                            <div className="mt-5" >
                                <div className='text-stone-500 text-lg' style={{
                                    fontWeight: 'bold',
                                }}>June 2023</div>
                                <div className='mt-4 flex flex-col gap-4'>
                                    <div className='border py-3 px-8 rounded-lg'>
                                        <div className='flex justify-between items-center'>
                                            <div>
                                                <div style={{
                                                    fontWeight: 'bold',
                                                }}>
                                                    24 June, 2023
                                                </div>
                                                <div className='text-stone-500' style={{
                                                    fontWeight: 'bold',
                                                }}>Assigned class 8th (B) maths ...</div>
                                            </div>
                                            <button className='px-10 rounded-full py-2 bg-[#F3E8FF] border border-[#C467FF] text-fuchsia-600'>Latest</button>
                                        </div>
                                    </div>
                                    <div className='border py-3 px-8 rounded-lg'>
                                        <div className='flex justify-between items-center'>
                                            <div>
                                                <div style={{
                                                    fontWeight: 'bold',
                                                }}>
                                                    24 June, 2023
                                                </div>
                                                <div className='text-stone-500' style={{
                                                    fontWeight: 'bold',
                                                }}>Assigned class 8th (B) maths ...</div>
                                            </div>
                                            <button className='px-10 rounded-full py-2 bg-[#F3E8FF] border border-[#C467FF] text-fuchsia-600'>Latest</button>
                                        </div>
                                    </div>
                                    <div className='border py-3 px-8 rounded-lg'>
                                        <div className='flex justify-between items-center'>
                                            <div>
                                                <div style={{
                                                    fontWeight: 'bold',
                                                }}>
                                                    24 June, 2023
                                                </div>
                                                <div className='text-stone-500' style={{
                                                    fontWeight: 'bold',
                                                }}>Assigned class 8th (B) maths ...</div>
                                            </div>
                                            <button className='px-10 rounded-full py-2 bg-[#F3E8FF] border border-[#C467FF] text-fuchsia-600'>Latest</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-5" >
                                <div className='text-stone-500 text-lg' style={{
                                    fontWeight: 'bold',
                                }}>June 2023</div>
                                <div className='mt-4 flex flex-col gap-4'>
                                    <div className='border py-3 px-8 rounded-lg'>
                                        <div className='flex justify-between items-center'>
                                            <div>
                                                <div style={{
                                                    fontWeight: 'bold',
                                                }}>
                                                    24 June, 2023
                                                </div>
                                                <div className='text-stone-500' style={{
                                                    fontWeight: 'bold',
                                                }}>Assigned class 8th (B) maths ...</div>
                                            </div>
                                            <button className='px-10 rounded-full py-2 bg-[#F3E8FF] border border-[#C467FF] text-fuchsia-600'>Latest</button>
                                        </div>
                                    </div>
                                    <div className='border py-3 px-8 rounded-lg'>
                                        <div className='flex justify-between items-center'>
                                            <div>
                                                <div style={{
                                                    fontWeight: 'bold',
                                                }}>
                                                    24 June, 2023
                                                </div>
                                                <div className='text-stone-500' style={{
                                                    fontWeight: 'bold',
                                                }}>Assigned class 8th (B) maths ...</div>
                                            </div>
                                            <button className='px-10 rounded-full py-2 bg-[#F3E8FF] border border-[#C467FF] text-fuchsia-600'>Latest</button>
                                        </div>
                                    </div>
                                    <div className='border py-3 px-8 rounded-lg'>
                                        <div className='flex justify-between items-center'>
                                            <div>
                                                <div style={{
                                                    fontWeight: 'bold',
                                                }}>
                                                    24 June, 2023
                                                </div>
                                                <div className='text-stone-500' style={{
                                                    fontWeight: 'bold',
                                                }}>Assigned class 8th (B) maths ...</div>
                                            </div>
                                            <button className='px-10 rounded-full py-2 bg-[#F3E8FF] border border-[#C467FF] text-fuchsia-600'>Latest</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    )}
                    {activeTab === 2 && (
                        <div className="" >
                            <div className="mt-5" >
                                <div className='text-stone-500 text-lg' style={{
                                    fontWeight: 'bold',
                                }}>June 2023</div>
                                <div className='mt-4 flex flex-col gap-4'>
                                    <div className='border py-3 px-8 rounded-lg'>
                                        <div className='flex justify-between items-center'>
                                            <div>
                                                <div style={{
                                                    fontWeight: 'bold',
                                                }}>
                                                    24 June, 2023
                                                </div>
                                                <div className='text-stone-500' style={{
                                                    fontWeight: 'bold',
                                                }}>Assigned class 8th (B) maths ...</div>
                                            </div>
                                            <button className='px-10 rounded-full py-2 bg-[#F3E8FF] border border-[#C467FF] text-fuchsia-600'>Latest</button>
                                        </div>
                                    </div>
                                    <div className='border py-3 px-8 rounded-lg'>
                                        <div className='flex justify-between items-center'>
                                            <div>
                                                <div style={{
                                                    fontWeight: 'bold',
                                                }}>
                                                    24 June, 2023
                                                </div>
                                                <div className='text-stone-500' style={{
                                                    fontWeight: 'bold',
                                                }}>Assigned class 8th (B) maths ...</div>
                                            </div>
                                            <button className='px-10 rounded-full py-2 bg-[#F3E8FF] border border-[#C467FF] text-fuchsia-600'>Latest</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    )}
                    {activeTab === 3 && (
                        <div className="" >
                            <div className="mt-5" >
                                <div className='text-stone-500 text-lg' style={{
                                    fontWeight: 'bold',
                                }}>June 2023</div>
                                <div className='mt-4 flex flex-col gap-4'>
                                    <div className='border py-3 px-8 rounded-lg'>
                                        <div className='flex justify-between items-center'>
                                            <div>
                                                <div style={{
                                                    fontWeight: 'bold',
                                                }}>
                                                    24 June, 2023
                                                </div>
                                                <div className='text-stone-500' style={{
                                                    fontWeight: 'bold',
                                                }}>Assigned class 8th (B) maths ...</div>
                                            </div>
                                            <button className='px-10 rounded-full py-2 bg-[#F3E8FF] border border-[#C467FF] text-fuchsia-600'>Latest</button>
                                        </div>
                                    </div>
                                    <div className='border py-3 px-8 rounded-lg'>
                                        <div className='flex justify-between items-center'>
                                            <div>
                                                <div style={{
                                                    fontWeight: 'bold',
                                                }}>
                                                    24 June, 2023
                                                </div>
                                                <div className='text-stone-500' style={{
                                                    fontWeight: 'bold',
                                                }}>Assigned class 8th (B) maths ...</div>
                                            </div>
                                            <button className='px-10 rounded-full py-2 bg-[#F3E8FF] border border-[#C467FF] text-fuchsia-600'>Latest</button>
                                        </div>
                                    </div>
                                    <div className='border py-3 px-8 rounded-lg'>
                                        <div className='flex justify-between items-center'>
                                            <div>
                                                <div style={{
                                                    fontWeight: 'bold',
                                                }}>
                                                    24 June, 2023
                                                </div>
                                                <div className='text-stone-500' style={{
                                                    fontWeight: 'bold',
                                                }}>Assigned class 8th (B) maths ...</div>
                                            </div>
                                            <button className='px-10 rounded-full py-2 bg-[#F3E8FF] border border-[#C467FF] text-fuchsia-600'>Latest</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    )}
                </div>
            </div>
            <Footer />

        </>
    )
}
export default Circular