import { useRef, useEffect, useState } from 'react';
import Spline from '@splinetool/react-spline';
import gsap from "gsap";

const Intro = () => {
    const model = useRef();
    const [isModelLoaded, setIsModelLoaded] = useState(false);

    async function onLoad(spline) {
        spline.setZoom(0.7)
        const obj = spline.findObjectById('e649e85c-7909-48ef-a1f7-cc03aaf78139');
        model.current = obj;
        if (model.current) {
            setIsModelLoaded(true);
        }
    }

    function startSpinAnimation() {
        gsap.set(model.current.rotation, { x: 0, y: 0, z: 0 });
        gsap.to(model.current.rotation, {
            duration: 3,
            y: "+=7",
            ease: "power1.out",
            repeat: 0,
        });
        gsap.to(model.current.rotation, {
            duration: 3,
            x: "-=0.5",
            ease: "power1.out",
            repeat: 0,
        });
        gsap.to(model.current.rotation, {
            duration: 3,
            z: "+=0.25",
            ease: "power1.inOut",
            onComplete: () => {
                gsap.to(model.current.rotation, {
                    duration: 0.5,
                    z: 0,
                    x: 0,
                    y: 0,
                    ease: "power1.inOut"
                });
            },
        });
    }

    useEffect(() => {
        if(isModelLoaded && model.current) {
            startSpinAnimation();
        }
    }, [isModelLoaded]);
    
    return (
        <div className="w-full h-full flex flex-col md:flex-row gap-x-6 border-b-[1px] pb-12">
            <div className="flex md:w-1/3 justify-center">
                <div className="w-56 h-72">
                    <Spline
                        onLoad={onLoad}
                        scene="https://prod.spline.design/Wc4HHZ71mzsyFD49/scene.splinecode" />
                </div>
            </div>
            <div className="max-w-md md:pt-6 md:w-2/3">
                <p>Hey, I&apos;m Jared 👋</p>
                <br/>
                <p>I&apos;m a 4th year software engineering co-op student studying at the University of Alberta.</p>
                <br/>
                <p>Passionate about building scalable solutions and crafting intuitive UI/UX. I am a continuous learner and am excited to contribute my skills to innovative projects.</p>
                <br/>
                Outside of engineering, I like playing basketball, chess, and hanging out with friends and family.
            </div>
        </div>
    )
}

export default Intro;