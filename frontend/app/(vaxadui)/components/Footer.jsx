
export default function Footer() {
    return (
        <div
            className=" flex flex-col w-full py-4 md:py-12 px-2 sm:px-5 rounded-t-3xl gap-8"
            style={{ backgroundColor: "#22242A" }}
        >
            <div className=" w-full items-center lg:grid grid-cols-5 md:px-12 md:gap-12 lg:gap-24 lg:px-24 overflow-x-hidden">
                <div
                    id="feedback"
                    className=" bg-indigo-950 rounded-2xl col-span-2 px-4 py-6 sm:p-8 flex flex-col gap-4 overflow-x-hidden"
                    style={{
                        background: "linear-gradient(45deg, #17181C 50%, #53BCF1 200%)",
                    }}
                >
                    <div className=" flex flex-row justify-between w-full">
                        <h1 className="text-xl sm:text-3xl font-bold text-purple-800">
                            FEEDBACK
                        </h1>
                        <img className=' w-6 h-6 rounded-full' src='https://img.icons8.com/ios/128/ffffff/logo.png'></img>
                    </div>
                    <p className=" sm:text-xl font-thin">
                        Seeking personalized support?{" "}
                        <span className=" font-normal">Request a call from our team</span>
                    </p>
                    <input
                        className=" bg-transparent border-purple-800 border rounded-lg py-1 px-3 placeholder:text-purple-800"
                        placeholder="YOUR NAME"
                    ></input>
                    <input
                        className=" bg-transparent border-purple-800 border rounded-lg py-1 px-3 placeholder:text-purple-800"
                        placeholder="PHONE NUMBER"
                    ></input>
                    <button
                        href="/"
                        className="py-2 px-4 text-md font-bold rounded-full"
                        style={{
                            background:
                                "linear-gradient(90deg, #4CC0F1 0%, #9B86FF 48.96%, #DF57D5 100%)",
                        }}
                    >
                        <a
                            href="mailto:info.djss4ds@gmail.com"
                            target="_blank"
                            className="text-black"
                            rel="noreferrer"
                        >
                            Send a request
                        </a>
                    </button>
                </div>
                <div className=" grid md:grid-cols-2 grid-cols-1 w-full justify-between items-start gap-2 sm:gap-8 col-span-3 pt-2 sm:py-6 px-2 ">
                    <div className=" flex w-full flex-col sm:gap-3">
                        <h1 className=" text-2xl font-semibold text-purple-600">INFO</h1>
                        <div className="text-md sm:text-lg">
                            <p>
                                <a
                                    href="/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Events
                                </a>
                            </p>
                            <p>
                                <a
                                    href="/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Team
                                </a>
                            </p>
                            <p>
                                <a
                                    href="/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Newsletter
                                </a>
                            </p>
                            <p>
                                <a
                                    href="/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Other website
                                </a>
                            </p>
                        </div>
                    </div>
                    <div className=" flex w-full flex-col sm:gap-3">
                        <h1 className=" text-2xl font-semibold text-purple-600">
                            CONTACT US
                        </h1>
                        <div className="text-md sm:text-lg">
                            <p>{"+91 22344 35276"}</p>
                            <p>
                                Varad Prabhu
                            </p>
                            <p>
                                Web Developer, Mumbai
                            </p>
                        </div>
                    </div>
                    <div className=" w-full col-span-1 md:col-span-2  flex justify-center items-center py-2 gap-4 sm:gap-8 ">
                        <a
                            href="/"
                            target="_blank"
                            className=" rounded-full p-4 border"
                            style={{ borderColor: "#5BB5F0" }}
                            rel="noreferrer"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                x="0px"
                                y="0px"
                                width="20 "
                                height="20"
                                fill="#5BB5F0"
                                viewBox="0 0 50 50"
                            >
                                <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
                            </svg>
                        </a>
                        <a
                            href="mailto:varadprabhu111@gmail.com"
                            target="_blank"
                            className=" rounded-full p-4 border"
                            style={{ borderColor: "#5BB5F0" }}
                            rel="noreferrer"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                x="0px"
                                y="0px"
                                width="20"
                                fill="#5BB5F0"
                                height="20"
                                viewBox="0 0 48 48"
                            >
                                <path
                                    fill="#5BB5F0"
                                    d="M45,16.2l-5,2.75l-5,4.75L35,40h7c1.657,0,3-1.343,3-3V16.2z"
                                ></path>
                                <path
                                    fill="#5BB5F0"
                                    d="M3,16.2l3.614,1.71L13,23.7V40H6c-1.657,0-3-1.343-3-3V16.2z"
                                ></path>
                                <polygon
                                    fill="#5BB5F0"
                                    points="35,11.2 24,19.45 13,11.2 12,17 13,23.7 24,31.95 35,23.7 36,17"
                                ></polygon>
                                <path
                                    fill="#5BB5F0"
                                    d="M3,12.298V16.2l10,7.5V11.2L9.876,8.859C9.132,8.301,8.228,8,7.298,8h0C4.924,8,3,9.924,3,12.298z"
                                ></path>
                                <path
                                    fill="#5BB5F0"
                                    d="M45,12.298V16.2l-10,7.5V11.2l3.124-2.341C38.868,8.301,39.772,8,40.702,8h0 C43.076,8,45,9.924,45,12.298z"
                                ></path>
                            </svg>
                        </a>
                        <a
                            href="/"
                            target="_blank"
                            className=" rounded-full p-4 border"
                            style={{ borderColor: "#5BB5F0" }}
                            rel="noreferrer"
                        >
                            <svg
                                width="20"
                                height="20"
                                className="h-5"
                                viewBox="0 0 16 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M8 1.44578C10.1205 1.44578 10.4096 1.44578 11.2771 1.44578C12.0482 1.44578 12.4337 1.63855 12.7229 1.73494C13.1084 1.92771 13.3976 2.0241 13.6867 2.31325C13.9759 2.60241 14.1687 2.89157 14.2651 3.27711C14.3614 3.56627 14.4578 3.95181 14.5542 4.72289C14.5542 5.59036 14.5542 5.78313 14.5542 8C14.5542 10.2169 14.5542 10.4096 14.5542 11.2771C14.5542 12.0482 14.3614 12.4337 14.2651 12.7229C14.0723 13.1084 13.9759 13.3976 13.6867 13.6867C13.3976 13.9759 13.1084 14.1687 12.7229 14.2651C12.4337 14.3614 12.0482 14.4578 11.2771 14.5542C10.4096 14.5542 10.2169 14.5542 8 14.5542C5.78313 14.5542 5.59036 14.5542 4.72289 14.5542C3.95181 14.5542 3.56627 14.3614 3.27711 14.2651C2.89157 14.0723 2.60241 13.9759 2.31325 13.6867C2.0241 13.3976 1.83133 13.1084 1.73494 12.7229C1.63855 12.4337 1.54217 12.0482 1.44578 11.2771C1.44578 10.4096 1.44578 10.2169 1.44578 8C1.44578 5.78313 1.44578 5.59036 1.44578 4.72289C1.44578 3.95181 1.63855 3.56627 1.73494 3.27711C1.92771 2.89157 2.0241 2.60241 2.31325 2.31325C2.60241 2.0241 2.89157 1.83133 3.27711 1.73494C3.56627 1.63855 3.95181 1.54217 4.72289 1.44578C5.59036 1.44578 5.87952 1.44578 8 1.44578ZM8 0C5.78313 0 5.59036 0 4.72289 0C3.85542 0 3.27711 0.192772 2.79518 0.385543C2.31325 0.578314 1.83133 0.867471 1.3494 1.3494C0.867471 1.83133 0.674699 2.21687 0.385543 2.79518C0.192772 3.27711 0.0963856 3.85542 0 4.72289C0 5.59036 0 5.87952 0 8C0 10.2169 0 10.4096 0 11.2771C0 12.1446 0.192772 12.7229 0.385543 13.2048C0.578314 13.6867 0.867471 14.1687 1.3494 14.6506C1.83133 15.1325 2.21687 15.3253 2.79518 15.6145C3.27711 15.8072 3.85542 15.9036 4.72289 16C5.59036 16 5.87952 16 8 16C10.1205 16 10.4096 16 11.2771 16C12.1446 16 12.7229 15.8072 13.2048 15.6145C13.6867 15.4217 14.1687 15.1325 14.6506 14.6506C15.1325 14.1687 15.3253 13.7831 15.6145 13.2048C15.8072 12.7229 15.9036 12.1446 16 11.2771C16 10.4096 16 10.1205 16 8C16 5.87952 16 5.59036 16 4.72289C16 3.85542 15.8072 3.27711 15.6145 2.79518C15.4217 2.31325 15.1325 1.83133 14.6506 1.3494C14.1687 0.867471 13.7831 0.674699 13.2048 0.385543C12.7229 0.192772 12.1446 0.0963856 11.2771 0C10.4096 0 10.2169 0 8 0Z"
                                    fill="#57B9F1"
                                />
                                <path
                                    d="M8 3.85542C5.68675 3.85542 3.85542 5.68675 3.85542 8C3.85542 10.3133 5.68675 12.1446 8 12.1446C10.3133 12.1446 12.1446 10.3133 12.1446 8C12.1446 5.68675 10.3133 3.85542 8 3.85542ZM8 10.6988C6.55422 10.6988 5.30121 9.54217 5.30121 8C5.30121 6.55422 6.45783 5.30121 8 5.30121C9.44578 5.30121 10.6988 6.45783 10.6988 8C10.6988 9.44578 9.44578 10.6988 8 10.6988Z"
                                    fill="#57B9F1"
                                />
                                <path
                                    d="M12.241 4.72289C12.7733 4.72289 13.2048 4.29136 13.2048 3.75904C13.2048 3.22671 12.7733 2.79518 12.241 2.79518C11.7086 2.79518 11.2771 3.22671 11.2771 3.75904C11.2771 4.29136 11.7086 4.72289 12.241 4.72289Z"
                                    fill="#57B9F1"
                                />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}