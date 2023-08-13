import React, { useState } from "react";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import Footer from "../../Footer/Footer";
import { Link } from "react-router-dom";
import feed1img from './feed1.jpg';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import TextsmsIcon from '@mui/icons-material/Textsms';
import ShareIcon from '@mui/icons-material/Share';
import AddIcon from '@mui/icons-material/Add';

function Feed() {
    const [activeTab, setActiveTab] = useState(1);

    const handleTabClick = (tabNumber) => {
        setActiveTab(tabNumber);
    };
    return (
        <>
            <div>
                <div className="flex justify-center items-center mt-10">
                    <Link to="/home/subjects_info"
                        style={{ position: "relative", right: "550px", cursor: "pointer" }}
                    >
                        <ArrowBackOutlinedIcon style={{ scale: "1.8" }} />
                    </Link>
                    <div className="font-extrabold text-2xl">Attendance</div>
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

                <div className=" px-20 container mx-auto  pt-16 flex justify-between">
                    <div className="flex items-center">
                        <div className="rounded">
                            <img src="/profile.png" alt="" srcset="" />
                        </div>
                        <div className="flex flex-col px-4">
                            <div className="text-xl font-extrabold">Mahesh Pawar</div>
                            <div className="flex">
                                <div
                                    className="text-sm"
                                    style={{ color: "rgba(156, 156, 156, 1)" }}
                                >
                                    Teacher
                                </div>
                                <div
                                    className="ml-2"
                                    style={{
                                        height: "20px",
                                        border: "1px solid rgba(156, 156, 156, 1)",
                                    }}
                                ></div>
                                <div
                                    className="text-sm ml-2"
                                    style={{ color: "rgba(156, 156, 156, 1)" }}
                                >
                                    Class 5th A
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="items-start">
                        <button className='px-8 rounded-lg py-2 bg-[#F3E8FF] border border-[#C467FF] text-fuchsia-600'>New Post</button>
                    </div>
                </div>
            </div>

            <div className="flex px-20 gap-5 container mx-auto pb-20">
                <div className="lg:basis-3/5 mt-10">
                    <div className="text-xl mb-3" style={{ fontWeight: 'bold', }}>Select Category</div>
                    <div style={{
                        fontWeight: 'bold',
                    }} className="flex gap-3 " >
                        <button style={{ letterSpacing: '2px' }}
                            className={`py-3 scale-95 text-lg w-full  transform transition-transform active:scale-90 rounded-lg text-stone-500 ${activeTab === 1
                                ? "scale-100  bg-[#C467FF] text-white"
                                : "bg-slate-200"
                                }`}
                            onClick={() => handleTabClick(1)}>
                            Latest
                        </button>
                        <button style={{ letterSpacing: '2px' }}
                            className={`py-3 scale-95 text-lg w-full  transform transition-transform active:scale-90 rounded-lg text-stone-500 ${activeTab === 2
                                ? "scale-100  bg-[#C467FF] text-white"
                                : "bg-slate-200"
                                }`}
                            onClick={() => handleTabClick(2)}>
                            Latest
                        </button>
                        <button style={{ letterSpacing: '2px' }}
                            className={`py-3 scale-95 text-lg w-full  transform transition-transform active:scale-90 rounded-lg text-stone-500 ${activeTab === 3
                                ? "scale-100  bg-[#C467FF] text-white"
                                : "bg-slate-200"
                                }`}
                            onClick={() => handleTabClick(3)}>
                            Latest
                        </button>
                        <button style={{ letterSpacing: '2px' }}
                            className={`py-3 scale-95 text-lg w-full  transform transition-transform active:scale-90 rounded-lg text-stone-500 ${activeTab === 4
                                ? "scale-100  bg-[#C467FF] text-white"
                                : "bg-slate-200"
                                }`}
                            onClick={() => handleTabClick(4)}>
                            Latest
                        </button>
                    </div>
                    <div className='p-4 '>
                        {activeTab === 1 && (
                            <>
                                <div className=" border rounded-lg p-3 mt-3">
                                    <div className="flex gap-8" style={{ height: '15rem' }}>
                                        <div className="basis-1/2">
                                            <img src={feed1img} className="rounded-3xl" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', }} />
                                        </div>
                                        <div className="basis-1/2">
                                            <div className="flex items-center gap-4">
                                                <div>
                                                    <img src="https://tse3.mm.bing.net/th?id=OIP.PztowP3ljup0SM75tkDimQAAAA&pid=ImgDet&rs=1" style={{ width: '60px', borderRadius: '50%' }} />
                                                </div>
                                                <div className="">
                                                    <div >Samiksha Pande</div>
                                                    <div className="text-stone-500 text-sm">52 minute ago</div>
                                                </div>
                                            </div>
                                            <div className="mt-3 text-stone-500 text-sm">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.
                                            </div>
                                            <div className="flex gap-4">
                                                <div>
                                                    <Checkbox icon={<FavoriteBorder />} color="secondary" checkedIcon={<Favorite />} />
                                                    <span className="text-sm text-slate-500">
                                                        85
                                                    </span>
                                                </div>
                                                <div className="mt-2">
                                                    <TextsmsIcon className="text-stone-400 cursor-pointer" style={{
                                                        transform: 'rotateY(180deg)'
                                                    }} />
                                                    <span className="text-sm ms-2 text-slate-500">
                                                        12
                                                    </span>
                                                </div>
                                                <div className="mt-2 ms-auto">
                                                    <ShareIcon className="text-stone-400 cursor-pointer" />
                                                    <span className="text-sm ms-2 text-slate-500">
                                                        36
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className=" border rounded-lg p-3 mt-3">
                                    <div className="flex gap-8" style={{ height: '15rem' }}>
                                        <div className="basis-1/2">
                                            <img src={feed1img} className="rounded-3xl" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', }} />
                                        </div>
                                        <div className="basis-1/2">
                                            <div className="flex items-center gap-4">
                                                <div>
                                                    <img src="https://tse3.mm.bing.net/th?id=OIP.PztowP3ljup0SM75tkDimQAAAA&pid=ImgDet&rs=1" style={{ width: '60px', borderRadius: '50%' }} />
                                                </div>
                                                <div className="">
                                                    <div >Samiksha Pande</div>
                                                    <div className="text-stone-500 text-sm">52 minute ago</div>
                                                </div>
                                            </div>
                                            <div className="mt-3 text-stone-500 text-sm">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.
                                            </div>
                                            <div className="flex gap-4">
                                                <div>
                                                    <Checkbox icon={<FavoriteBorder />} color="secondary" checkedIcon={<Favorite />} />
                                                    <span className="text-sm text-slate-500">
                                                        85
                                                    </span>
                                                </div>
                                                <div className="mt-2">
                                                    <TextsmsIcon className="text-stone-400 cursor-pointer" style={{
                                                        transform: 'rotateY(180deg)'
                                                    }} />
                                                    <span className="text-sm ms-2 text-slate-500">
                                                        12
                                                    </span>
                                                </div>
                                                <div className="mt-2 ms-auto">
                                                    <ShareIcon className="text-stone-400 cursor-pointer" />
                                                    <span className="text-sm ms-2 text-slate-500">
                                                        36
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>

                        )}
                        {activeTab === 2 && (
                            <>
                                <div className=" border rounded-lg p-3 mt-3">
                                    <div className="flex gap-8" style={{ height: '15rem' }}>
                                        <div className="basis-1/2">
                                            <img src={feed1img} className="rounded-3xl" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', }} />
                                        </div>
                                        <div className="basis-1/2">
                                            <div className="flex items-center gap-4">
                                                <div>
                                                    <img src="https://tse3.mm.bing.net/th?id=OIP.PztowP3ljup0SM75tkDimQAAAA&pid=ImgDet&rs=1" style={{ width: '60px', borderRadius: '50%' }} />
                                                </div>
                                                <div className="">
                                                    <div >Alex Dsouza</div>
                                                    <div className="text-stone-500 text-sm">52 minute ago</div>
                                                </div>
                                            </div>
                                            <div className="mt-3 text-stone-500 text-sm">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.
                                            </div>
                                            <div className="flex gap-4">
                                                <div>
                                                    <Checkbox icon={<FavoriteBorder />} color="secondary" checkedIcon={<Favorite />} />
                                                    <span className="text-sm text-slate-500">
                                                        85
                                                    </span>
                                                </div>
                                                <div className="mt-2">
                                                    <TextsmsIcon className="text-stone-400 cursor-pointer" style={{
                                                        transform: 'rotateY(180deg)'
                                                    }} />
                                                    <span className="text-sm ms-2 text-slate-500">
                                                        12
                                                    </span>
                                                </div>
                                                <div className="mt-2 ms-auto">
                                                    <ShareIcon className="text-stone-400 cursor-pointer" />
                                                    <span className="text-sm ms-2 text-slate-500">
                                                        36
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )}
                        {activeTab === 3 && (
                            <>
                                <div className=" border rounded-lg p-3 mt-3">
                                    <div className="flex gap-8" style={{ height: '15rem' }}>
                                        <div className="basis-1/2">
                                            <img src={feed1img} className="rounded-3xl" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', }} />
                                        </div>
                                        <div className="basis-1/2">
                                            <div className="flex items-center gap-4">
                                                <div>
                                                    <img src="https://tse3.mm.bing.net/th?id=OIP.PztowP3ljup0SM75tkDimQAAAA&pid=ImgDet&rs=1" style={{ width: '60px', borderRadius: '50%' }} />
                                                </div>
                                                <div className="">
                                                    <div >John Doe</div>
                                                    <div className="text-stone-500 text-sm">52 minute ago</div>
                                                </div>
                                            </div>
                                            <div className="mt-3 text-stone-500 text-sm">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.
                                            </div>
                                            <div className="flex gap-4">
                                                <div>
                                                    <Checkbox icon={<FavoriteBorder />} color="secondary" checkedIcon={<Favorite />} />
                                                    <span className="text-sm text-slate-500">
                                                        85
                                                    </span>
                                                </div>
                                                <div className="mt-2">
                                                    <TextsmsIcon className="text-stone-400 cursor-pointer" style={{
                                                        transform: 'rotateY(180deg)'
                                                    }} />
                                                    <span className="text-sm ms-2 text-slate-500">
                                                        12
                                                    </span>
                                                </div>
                                                <div className="mt-2 ms-auto">
                                                    <ShareIcon className="text-stone-400 cursor-pointer" />
                                                    <span className="text-sm ms-2 text-slate-500">
                                                        36
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className=" border rounded-lg p-3 mt-3">
                                    <div className="flex gap-8" style={{ height: '15rem' }}>
                                        <div className="basis-1/2">
                                            <img src={feed1img} className="rounded-3xl" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', }} />
                                        </div>
                                        <div className="basis-1/2">
                                            <div className="flex items-center gap-4">
                                                <div>
                                                    <img src="https://tse3.mm.bing.net/th?id=OIP.PztowP3ljup0SM75tkDimQAAAA&pid=ImgDet&rs=1" style={{ width: '60px', borderRadius: '50%' }} />
                                                </div>
                                                <div className="">
                                                    <div >Samiksha Pande</div>
                                                    <div className="text-stone-500 text-sm">52 minute ago</div>
                                                </div>
                                            </div>
                                            <div className="mt-3 text-stone-500 text-sm">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.
                                            </div>
                                            <div className="flex gap-4">
                                                <div>
                                                    <Checkbox icon={<FavoriteBorder />} color="secondary" checkedIcon={<Favorite />} />
                                                    <span className="text-sm text-slate-500">
                                                        85
                                                    </span>
                                                </div>
                                                <div className="mt-2">
                                                    <TextsmsIcon className="text-stone-400 cursor-pointer" style={{
                                                        transform: 'rotateY(180deg)'
                                                    }} />
                                                    <span className="text-sm ms-2 text-slate-500">
                                                        12
                                                    </span>
                                                </div>
                                                <div className="mt-2 ms-auto">
                                                    <ShareIcon className="text-stone-400 cursor-pointer" />
                                                    <span className="text-sm ms-2 text-slate-500">
                                                        36
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </>
                        )}
                        {activeTab === 4 && (
                            <>
                                <div className=" border rounded-lg p-3 mt-3">
                                    <div className="flex gap-8" style={{ height: '15rem' }}>
                                        <div className="basis-1/2">
                                            <img src={feed1img} className="rounded-3xl" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', }} />
                                        </div>
                                        <div className="basis-1/2">
                                            <div className="flex items-center gap-4">
                                                <div>
                                                    <img src="https://tse3.mm.bing.net/th?id=OIP.PztowP3ljup0SM75tkDimQAAAA&pid=ImgDet&rs=1" style={{ width: '60px', borderRadius: '50%' }} />
                                                </div>
                                                <div className="">
                                                    <div >Samiksha Pande</div>
                                                    <div className="text-stone-500 text-sm">52 minute ago</div>
                                                </div>
                                            </div>
                                            <div className="mt-3 text-stone-500 text-sm">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.
                                            </div>
                                            <div className="flex gap-4">
                                                <div>
                                                    <Checkbox icon={<FavoriteBorder />} color="secondary" checkedIcon={<Favorite />} />
                                                    <span className="text-sm text-slate-500">
                                                        85
                                                    </span>
                                                </div>
                                                <div className="mt-2">
                                                    <TextsmsIcon className="text-stone-400 cursor-pointer" style={{
                                                        transform: 'rotateY(180deg)'
                                                    }} />
                                                    <span className="text-sm ms-2 text-slate-500">
                                                        12
                                                    </span>
                                                </div>
                                                <div className="mt-2 ms-auto">
                                                    <ShareIcon className="text-stone-400 cursor-pointer" />
                                                    <span className="text-sm ms-2 text-slate-500">
                                                        36
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                </div>
                <div className="lg:basis-1/3 ms-auto">
                    <div className="py-6 px-4 bg-[#F7FAFC]">
                        <div className="flex justify-between">
                            <div className="text-lg font-bold">My Profile</div>
                            <div>
                                <AddIcon className="text-sky-600 border-sky-600 border-[3px] rounded" />
                            </div>
                        </div>
                        <div className="mt-3">
                            <div className="flex items-center">
                                <div className="rounded">
                                    <img src="/profile.png" width={50} alt="" srcset="" />
                                </div>
                                <div className="flex flex-col px-4">
                                    <div className=" font-extrabold">Mahesh Pawar</div>
                                    <div className="flex">
                                        <div
                                            className="text-sm"
                                            style={{ color: "rgba(156, 156, 156, 1)" }}
                                        >
                                            Teacher
                                        </div>
                                        <div
                                            className="ml-2"
                                            style={{
                                                height: "20px",
                                                border: "1px solid rgba(156, 156, 156, 1)",
                                            }}
                                        ></div>
                                        <div
                                            className="text-sm ml-2"
                                            style={{ color: "rgba(156, 156, 156, 1)" }}
                                        >
                                            Class 5th A
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="py-6 px-4 mt-4 bg-[#F7FAFC]">
                        <div className="flex justify-between">
                            <div className="text-lg font-bold">My Feed</div>
                        </div>
                        <div className="mt-4">
                            <div className="font-bold mb-5">Daily activity</div>
                            <div className="flex justify-between items-center">
                                <div className="flex items-center ">
                                    <div className="rounded">
                                        <img src="/profile.png" width={50} alt="" srcset="" />
                                    </div>
                                    <div className="flex flex-col px-4">
                                        <div className="text-sm font-extrabold">Mahesh Pawar</div>
                                        <div className="flex">
                                            <div
                                                className="text-sm"
                                                style={{ color: "rgba(156, 156, 156, 1)" }}
                                            >
                                                Just now
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <button className='px-2 rounded py-1 bg-[#F3E8FF] border border-[#C467FF] text-fuchsia-600 text-sm'>Edit Post</button>
                                </div>
                            </div>
                        </div>
                        <div className="mt-3">
                            <img src={feed1img} className="rounded-3xl" style={{ width: '100%', height: '250px', objectFit: 'cover', objectPosition: 'center', }} />
                            <div className="mt-2 text-sm text-stone-500">
                                Lorem ipsum dolor sit amet, consectetur adip elit, sed do eiusmod tempor incididunt ut labore et.
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>)
}
export default Feed;