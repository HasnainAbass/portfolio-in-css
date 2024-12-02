import "../style/contact.css";

function Contactcomponent(){
    return(
        <main className="contact-main">
            <h1 className="contact-h1">Contact</h1>
            <p className="contact-pera">Feel free to reach out to me at anytime.</p>
            <form>
                <div className="contact-input">
                    <input type="text" placeholder="Your Name" />
                    <input  type="text"  placeholder="Your E-mail"/>
                </div>
                <div className=" contact-text">
                   <input className="third-input" type="text" placeholder="Subject"/>
                    <textarea name="text" id="#" placeholder="Message"></textarea>
                    <button className="contact-button" >Send Message</button>
                </div>
            </form>
        </main>
    )
}

export default Contactcomponent;