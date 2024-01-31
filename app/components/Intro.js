"use client"

import { useRef, useEffect, useState } from 'react';
import gsap from "gsap";
import React from 'react';
import { Loader } from 'lucide-react';
import Spline from '@splinetool/react-spline';

const Intro = () => {
  const model = useRef();
  const [isModelLoaded, setIsModelLoaded] = useState(false);

  function onLoad(spline) {
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
      y: "+=19",
      ease: "power3.out",
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
      ease: "power3.out",
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
    if (isModelLoaded && model.current) {
      startSpinAnimation();
    }
  }, [isModelLoaded]);

  return (
    <div className="w-full h-full flex flex-col md:flex-row gap-x-6 border-b-[1px] pb-12">
      <div className="flex md:w-1/3 justify-center">
        <div className="w-56 h-72 relative sm:-ml-12">
          {!isModelLoaded && (
            <div className="absolute inset-0 flex items-center justify-center animate-spin text-[#805AD5] dark:text-[#F6D497]">
              <Loader size={48} />
            </div>
          )}
          <Spline
            onLoad={onLoad}
            scene="https://prod.spline.design/Wc4HHZ71mzsyFD49/scene.splinecode" />
        </div>
      </div>
      <div className="max-w-md md:w-2/3">
        <p>Hey, I&apos;m Jared 👋</p>
        <br />
        <p>I&apos;m a 4th year software engineering co-op student studying at the University of Alberta.</p>
        <br />
        <p>Passionate about building impactful software and have a knack for good design. I am a continuous learner and am excited to contribute my skills to innovative projects.</p>
        <br />
        Outside of engineering, I like playing basketball, chess, and hanging out with friends and family.
      </div>
    </div>
  )
}

export default Intro;
