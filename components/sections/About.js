const About = () => {
    return (
        <div className="w-full h-full flex flex-col justify-between">
            <p className="text-right font-semibold">ABOUT</p>
            <div className="ml-3 flex items-end gap-3">
                <div className="bg-gray-300 w-16 h-24 rounded-lg"></div>
                <p>My background,
                <br/>work experience,
                <br/>and involvements</p>
            </div>
        </div>
    )
}

export default About;