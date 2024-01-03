import { Link } from 'lucide-react';

const Projects = () => {
    return (
        <div className="w-full flex flex-col md:flex-row gap-6 pt-6 pb-12 border-b-[1px]">
            <div className="flex md:w-1/3">Projects</div>
            <div className="max-w-md flex flex-col md:w-2/3 gap-1">
                <p>Some of my notable projects from school, hackathons, and personal initiatives.</p>
                <br />
                <div className="flex items-center">
                    ▪&nbsp;<a href="https://github.com/CMPUT301F23T08/HouseHomey/wiki" className="underline underline-offset-4">HouseHomey</a><Link size={12} className="ml-1"/>
                </div>
                <div className="flex items-center">
                    ▪&nbsp;<a href="https://github.com/owencooke/OutageML" className="underline underline-offset-4">OutageML</a><Link size={12} className="ml-1"/>
                </div>
                <div className="flex items-center">
                    ▪&nbsp;<a href="https://devpost.com/software/safe-contact" className="underline underline-offset-4">Safe Contact</a><Link size={12} className="ml-1"/>
                </div>
                <div className="flex items-center">
                    ▪&nbsp;<a href="https://github.com/jdrco/JournAI" className="underline underline-offset-4">JournAI</a><Link size={12} className="ml-1"/>
                </div>
            </div>
        </div>
    )
}

export default Projects;