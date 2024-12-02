import Image from "next/image";

import "../style/about.css";

function Aboutcomponent() {
    return (
        <main>
            <div className="about-h1">
                <h1>About Me</h1>

            </div>
            <div className="about-main-inner">
                <div>
                    <Image className="about-img" src={"/hkhan.jpg"} height={700} width={500} alt="picture" />
                </div>
                <div className="about-content">
                    <h2 className="about-h2">UI/UX Designer & Web Developer</h2>
                    <p className="about-pera">Passionate about cutting-edge technologies, currently pursuing a Certified Cloud Applied Generative AI Engineering course to specialize in AI and cloud computing. Additionally, dedicated to mastering Typescript for enhanced programming capabilities. Eager to leverage these skills to drive innovation and make a meaningful impact in the tech industry.</p>
                    <div className="list-perant-div">
                        <div>
                            <ul className="about-ul">
                                <li><span>Name:</span> Hasnain Abass</li>
                                <li><span>Digree:</span> Bs-Computer</li>
                                <li><span>phone:</span> 0301-2511626</li>
                                <li><span>Adress:</span>University Road Karachi</li>
                            </ul>
                        </div>
                        <div>
                            <ul className="about-ul">
                                <li><span>Birthday:</span> 01 April 1999</li>
                                <li><span>Experience:</span>2 Year</li>
                                <li><span>Email:</span>hasnainabass243@gmail.com</li>
                                <li><span>freelance:</span>Available</li>
                            </ul>
                        </div>
                    </div>
                    <div className="about-button-div">
                        <button>Hire Me</button>
                        <button className="btn">Learn More</button>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Aboutcomponent;