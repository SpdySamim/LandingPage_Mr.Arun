export default function Contact(){
    return(
        <div className="contact" id="contact">
            <h1>Contact Us</h1>
                <form className="contactForm" action="#contact">
                    <div className="inp">
                        <label htmlFor="name">Enter your name:</label><br />
                        <input type="text" placeholder="John Doe" id="name" />
                    </div>
                    <div className="inp">
                        <label htmlFor="email">Email</label><br />
                        <input type="email" name="email" id="email" placeholder="Email" />

                    </div>
                    <div className="inp">
                        <label htmlFor="phn">Phone No</label><br />
                        <input type="number" name="phn" id="phn" placeholder="Phone no" />
                    </div>
                    <div className="inp">
                        <label htmlFor="msg">Drop your massage here</label>
                    <textarea name="message" cols="30" rows="10"   id="msg">Message</textarea>
                    </div>
                    <button type="submit">Submit</button>

                </form>

        </div>
    )
}