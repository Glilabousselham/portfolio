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












export default function SkillsSection({ active = false }) {

    const skillsContainer = useRef(null)




    const animateEl = async (el) => {
        let directions = ["left", "top"];
        while (true) {
            const dir = directions[Math.floor(Math.random() * directions.length)];
            let i;
            if (dir == "top")
                i = Math.random() * window.innerHeight
            else if (dir == "left")
                i = Math.random() * window.innerWidth
            console.log(i);
            el.style[dir] = `${i}px`
            await sleep(3000);
        }

    }




    useEffect(() => {
        const skills = [...skillsContainer.current.children];
        skills.forEach((el => animateEl(el)))
    }, []);










    return (
        <div ref={skillsContainer} className="grid grid-cols-2 sm:flex gap-2 sm:flex-wrap justify-center ">
            
            {
                skills.map((img, i) => (
                    <img key={i} role="button" className="fixed top-0 left-0 transition-all duration-[5s] h-full col-span-1  bg-[#51505f69] sm:bg-transparent p-3 sm:h-fit sm:w-40 object-contain hover:scale-[1.3]" src={img} alt="" />
                ))
            }
        </div>
    )
}