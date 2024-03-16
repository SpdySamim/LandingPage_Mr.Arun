import { useTypewriter,Cursor } from 'react-simple-typewriter';

export default function Intro(){
    const [text]=useTypewriter({
        words: ["Journalist","Social Activist","MIT Topper"],
        loop:{},
        typeSpeed:90,
      });
    return(
                <div className="intro">
                    <h3>Hii,Welcome.</h3>
                    <h1 style={{marginBottom:0}}>This is Arun</h1>
                    <p style={{margin:"-1rem 0 0.4rem 0",fontSize:"18px",color:"yellow"}}>
                        <span className="green-text-gradient">
                                {text}
                        </span>
                        <span>
                            <Cursor/>
                        </span>
                    </p>
                    <p>Unmasking the truth. Exposing injustice. Mr. Arun, a relentless investigative journalist, brings to light what powerful figures try to conceal. Read his groundbreaking work and see how he champions positive change.</p>

                    <button><a href="#contact">Get In Touch</a> </button>
                    <div className="social-icons">
                        <a href="https://twitter.com/?lang=en"><i class="fa-brands fa-twitter"></i></a>
                        <a href="https://www.facebook.com/"><i class="fa-brands fa-facebook"></i></a>
                        <a href="https://www.instagram.com/"><i class="fa-brands fa-instagram"></i></a>
                        <a href="https://linkedin.com/in/"><i class="fa-brands fa-linkedin-in"></i></a>
                    </div>
                </div>
    )
}