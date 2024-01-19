import Marquee from "react-fast-marquee";

export default function MarqueeCards({ gradientColor, direction, speed }) {

    const icons = ["git", "bootstrap", "c", "cpp", "css", "androidstudio", "vite", "vercel", "netlify", "prisma", "supabase", "express", "figma", "firebase", "github", "html", "java", "js", "md", "mongodb", "mysql", "postgresql", "nextjs", "nodejs", "arduino", "postman", "py", "react", "redux", "tailwind", "ts", "vscode"]
    return (
        <div className="flex w-full justify-center items-center h-full ">
            <Marquee gradientWidth={100} gradient={gradientColor ? true : false} pauseOnHover={false} gradientColor={gradientColor ? gradientColor : ""} style={{ width: "100%" }} direction={direction ? direction : "left"} speed={speed ? speed : 200}>
                {icons.map((icon, index) => (
                    <img key={index} className=" px-2 " src={`https://skillicons.dev/icons?i=${icon}&perline=1`} />
                ))}
            </Marquee>
        </div>
    )
}
