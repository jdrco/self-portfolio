const Projects = () => {
    return (
        <div className="w-full h-full flex flex-col justify-between">
            <p className="text-right font-semibold">PROJECTS</p>

            <div className="flex items-end gap-3">
                <div className="flex w-full gap-10">
                    <div>
                        <p>Hackathons
                            <br/>
                            <br/>OutageML
                            <br/>Safe Contact
                            <br/>JournAI
                        </p>
                    </div>
                    <div>
                        <p>Personal
                            <br/>
                            <br/>HouseHomey
                            <br/>What a Day
                        </p>
                    </div>
                    <p>View all</p>
                </div>
            </div>
        </div>
    )
}

export default Projects;