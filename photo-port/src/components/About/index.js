import React from 'react';
import coverImage from "../../assets/cover/Mountains.jpeg"
function About(){
    return (
        <section className= "my-5">
          <h1 id="about">Who am I?</h1>
          <img src = {coverImage} className="my-2" style={{width: "100%"}} alt= "cover" />
          <div className="my-2">
              <p>
                  I am a Phtographer enthusiast, starting with Black and White Photography back in 2005. I have
                  I learned the art of Photography with the use with film and a SLR, and have matured using a DSLR. 
                  I continue to enjoy film Photography but now get into more of the digital work. I hope you enjoy my Art!
              </p>
          </div>
        </section>
      );
}

export default About;