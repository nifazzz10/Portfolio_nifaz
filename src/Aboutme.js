import logo from "./img/nifaz.png"
function Aboutme() {

  return (
    <div >

    <section class="section pt-0" id="about">
        
        <div class="container text-center">
         
            <div class="about">
                <div class="about-img-holder">
                    <img src={logo} class="about-img" />
               
                </div>
                <div class="about-caption">
                   
                    <h2 class="section-title mb-3">About Me</h2>
                    <p>
                    An enthusiastic engineering fresher who
is a self-starter and capable to use
technical skills for the betterment of the
organization. And enhanced my
proficiency in developing web
applications, and looking forward to work
in a competitive environment that
enhances overall learning.I started my coding journey almost exactly a year ago and now I'm working full time and doing freelance projects on the side for my friends. You may have noticed from my portfolio, but I'm obsessed with unique, interesting design and user-friendly functionality so hit me up with your weird artistic project ideas or app proposals
           
                    </p>
                    <a href="https://referral-resumes.s3.ap-south-1.amazonaws.com/nifaz.pdf"><button class="btn-rounded btn btn-outline-primary mt-4">Download CV</button></a>
                </div>              
            </div>
        </div>
    </section>
    </div>
  );
}

export default Aboutme;
