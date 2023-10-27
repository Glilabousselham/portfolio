import { MdWhatsapp } from "react-icons/md"
import { BsInstagram } from "react-icons/bs"
import { FaFacebookF } from "react-icons/fa"
import { BsFillTelephoneFill } from "react-icons/bs"
import frontendimg from "./../assets/frontend.png"
import nodejs from "./../assets/nodejs.png"
import js from "./../assets/js.png"
import css from "./../assets/css.png"
import bootstrap from "./../assets/bootstrap.png"
import docker from "./../assets/docker.png"
import git from "./../assets/git.png"
import github from "./../assets/github.png"
import html from "./../assets/html.png"
import laravel from "./../assets/laravel.png"
import mongodb from "./../assets/mongodb.png"
import mysql from "./../assets/mysql.png"
import php from "./../assets/php.png"
import react from "./../assets/react.png"
import { useEffect, useRef } from "react"



const skills = [
    js,
    css,
    bootstrap,
    docker,
    git,
    github,
    html,
    laravel,
    mongodb,
    mysql,
    php,
    react,
]



async function sleep(time = 50) {
    return new Promise(function (resolve) {
        setTimeout(() => {
            resolve()
        }, time);
    })
}




const HeroSection = ({ active = false }) => {






    return (
        <div className={`section ${active && `active`}`}>

            <div className=" fixed w-screen h-screen top-0 left-0 px-5 py-10 pt-[100px] overflow-hidden">

                <div className="md:pt-[100px] relative text-gray-100 w-full h-full  justify-start">
                    <h1 className=" text-5xl xl:text-8xl border-b-4 w-fit">BOUSSELHAM GLILA.</h1>
                    <h6 className="text-gray-300 text-2xl xl:text-5xl mt-5">SOFTWARE ENGINER</h6>
                    {/* social media */}
                    <div className="flex flex-col md:absolute md:right-0 gap-2 my-5">
                        <span role="button" className="bg-orange-600 rounded p-2">
                            <MdWhatsapp />
                        </span>
                        <span role="button" className="bg-orange-600 rounded p-2">
                            <BsInstagram />
                        </span>
                        <span role="button" className="bg-orange-600 rounded p-2">
                            <FaFacebookF />
                        </span>
                        <span role="button" className="bg-orange-600 rounded p-2">
                            <BsFillTelephoneFill />
                        </span>
                    </div>
                    <div className="flex gap-2 absolute bottom-0">
                        <button className="mt-2 resume bg-orange-600 w-fit p-2 px-10 rounded-lg">download cv</button>
                        <button className="mt-2 resume bg-orange-600 w-fit p-2 px-10 rounded-lg">portfolio</button>
                    </div>
                    <div className="h-60"></div>
                </div>


            </div>


        </div>
    )
}

export default HeroSection;