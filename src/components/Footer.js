import React from "react"
import Fade from "react-reveal/Fade"
import data from "../mydata"

const Footer = () => {
  return (
    <section id="social-media">
    <div class="container">
          <div className="row justify-content-center">             
                <div className="col-auto">
                  <h1 class="title text-center">FIND ME ON SOCIAL MEDIAS</h1>
                  <hr class="ribbon"/>
                  <hr class="ribbon-little"/>
                </div>
            </div>
        
        <div className="text-center col-auto">
                        <a className="btn btn-social-icon btn-google" href="http://google.com/+"><i className="fa fa-google-plus"></i></a>
                        <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/profile.php?id="><i className="fa fa-facebook"></i></a>
                        <a className="btn btn-social-icon btn-linkedin" href="http://www.linkedin.com/in/"><i className="fa fa-linkedin"></i></a>
                        <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter"></i></a>
                        <a className="btn btn-social-icon btn-google" href="http://youtube.com/"><i className="fa fa-youtube"></i></a>
                        <a className="btn btn-social-icon" href="mailto:"><i className="fa fa-envelope-o"></i></a>
        </div>
    </div>
  </section>
  )
}

export default Footer
