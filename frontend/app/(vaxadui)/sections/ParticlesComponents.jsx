"use client"
import { useState } from 'react'
import { CopyBlock, dracula } from "react-code-blocks";

export default function ParticlesComponents() {
    const [showCode, setshowCode] = useState(false)
    const copyBlockProps = {
        text: `
"use client"
import React from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from "tsparticles";

// npm i react-tsparticles@2.12.2 tsparticles@2.12.0 tsparticles-slim@2.12.0

function ParticlesBg() {
    const particlesInit = async (main) => {
        // console.log(main); 
        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets 
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready 
        // starting from v2 you can add only the features you need reducing the bundle size 
        await loadFull(main);
    };
    const particlesLoaded = (container) => {
        // console.log(container); 
    };
    return (
        <div className=" relative top-0 right-0 h-[50px] overflow-hidden">
            <Particles
                id="tsparticles"
                className=' absolute top-0 right-0 '
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                    fps_limit: 60,
                    background: {
                        color: "000000"
                    },
                    interactivity: {
                        detect_on: "canvas",
                        events: {
                            onclick: { enable: true, mode: "push" },
                            onhover: {
                                enable: true,
                                mode: "attract",
                                parallax: { enable: false, force: 60, smooth: 10 }
                            },
                            resize: true
                        },
                        modes: {
                            push: { quantity: 4 },
                            attract: { distance: 200, duration: 0.4, factor: 5 }
                        }
                    },
                    particles: {
                        color: { value: "#ffffff" },
                        line_linked: {
                            color: "#ffffff",
                            distance: 150,
                            enable: true,
                            opacity: 0.4,
                            width: 1
                        },
                        move: {
                            attract: { enable: false, rotateX: 600, rotateY: 1200 },
                            bounce: false,
                            direction: "none",
                            enable: true,
                            out_mode: "out",
                            random: false,
                            speed: 2,
                            straight: false
                        },
                        number: { density: { enable: true, value_area: 800 }, value: 80 },
                        opacity: {
                            anim: { enable: false, opacity_min: 0.1, speed: 1, sync: false },
                            random: false,
                            value: 0.5
                        },
                        shape: {
                            character: {
                                fill: false,
                                font: "Verdana",
                                style: "",
                                value: "*",
                                weight: "400"
                            },
                            image: {
                                height: 100,
                                replace_color: true,
                                src: "images/github.svg",
                                width: 100
                            },
                            polygon: { nb_sides: 5 },
                            stroke: { color: "#000000", width: 0 },
                            type: "circle"
                        },
                        size: {
                            anim: { enable: false, size_min: 0.1, speed: 40, sync: false },
                            random: true,
                            value: 5
                        }
                    },
                    polygon: {
                        draw: { enable: false, lineColor: "#ffffff", lineWidth: 0.5 },
                        move: { radius: 10 },
                        scale: 1,
                        type: "none",
                        url: ""
                    },
                    retina_detect: true
                }}
            />

        </div>
    );
}

export default ParticlesBg;`,
        theme:dracula,
        language: "jsx",
        showLineNumbers: true,
        startingLineNumber: 1,
        wrapLines: false,
        wrapLongLines: false,
    };
    return (
        <div className='pt-[10vh]  flex flex-col gap-4 justify-center items-center min-h-screen bg-violet-500 w-full px-6 md:px-24 py-8'>
            <div className=' flex flex-col bg-slate-300 rounded-md w-full '>
                <div className=' bg-slate-400 flex w-full justify-between items-center rounded-t-md border-b border-slate-100 px-5 py-2'>
                    <h1 className=' text-2xl font-bold text-slate-900'>Particles</h1>
                    <button onClick={() => setshowCode(!showCode)}>
                    {showCode?
                    <img width="25" height="25" src="https://img.icons8.com/ios/50/000000/visible--v1.png" alt="visible--v1"/>
                    :<img width="25" height="25" src="https://img.icons8.com/ios/50/000000/code--v1.png" alt="code--v1"/>}
                    </button>
                </div>
                {showCode ?
                    <div className=' w-full h-full flex justify-start items-center flex-row overflow-x-scroll'>
                        <CopyBlock {...copyBlockProps}customStyle={{minWidth:"100%"}}  />
                    </div> :
                    <div className=' px-5 w-full py-6 gap-5 flex flex-col  justify-center items-center'>
                        <iframe src='/particles' className=' h-[70vh] w-full rounded-md'/>
                    </div>}
            </div>
        </div>
    )
}
