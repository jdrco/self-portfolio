import { useRef } from 'react';
import Spline from '@splinetool/react-spline';

const Intro = () => {
    const model = useRef();

    async function onLoad(spline) {
        spline.setZoom(0.6)
        const obj = spline.findObjectById('e649e85c-7909-48ef-a1f7-cc03aaf78139');
        model.current = obj;
        console.log(model.current)
    }
    
    return (
        <div className="w-full h-full flex flex-col md:flex-row gap-x-6 border-b-[1px] pb-12">
            <div className="flex md:w-1/3 justify-center">
                <div className="w-48 h-72">
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