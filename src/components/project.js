import "../App.css";
import "../card.scss";
import "../terminal.css";
function Project() {
  return (
    <>
      {/* {" "}
      <section class="section d" id="portfolio">
        <div class="container text-center">
          <p class="section-subtitle">What I Did ?</p>
          <h6 class="section-title mb-6">Projects</h6>

          <div class="row ">
            <div class="col-md-4">
              <div class="card">
                <div class="face face1">
                  <div class="content">
                    <span class="stars"></span>
                    <h2 class="java">e</h2>
                    <p class="java">
                      Java is a class-based, object-oriented programming
                      language that is designed to have as few implementation
                      dependencies as possible.
                    </p>
                  </div>
                </div>
                <div class="face face2">
                  <h1>Modern Comment Section Library</h1>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card">
                <div class="face face1">
                  <div class="content">
                    <span class="stars"></span>
                    <h2 class="python">Python</h2>
                    <p class="python">
                      Python is an interpreted, high-level and general-purpose
                      programming language.
                    </p>
                  </div>
                </div>
                <div class="face face2">
                  <h2>02</h2>
                </div>
              </div>{" "}
            </div>
            <div class="col-md-4">
              <div class="card">
                <div class="face face1">
                  <div class="content">
                    <span class="stars"></span>
                    <h2 class="cSharp">C#</h2>
                    <p class="cSharp">
                      C# is a general-purpose, multi-paradigm programming
                      language encompassing static typing, strong typing,
                      lexically scoped and component-oriented programming
                      disciplines.
                    </p>
                  </div>
                </div>
                <div class="face face2">
                  <h2>03</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <section class="section d" id="portfolio">
        <div class="container text-center">
          <p class="section-subtitle">What I Did ?</p>
          <h6 class="section-title mb-6">Projects</h6>

          <div class="row ">
            <div class="col-md-6">
              <div class="fakeMenu">
                <div class="fakeButtons fakeClose"></div>
                <div class="fakeButtons fakeMinimize"></div>
                <div class="fakeButtons fakeZoom"></div>
              </div>
              <div class="fakeScreen">
                <p class="line1 k">
                  $ yo gulp-webapp<span class="cursor1">_</span>
                </p>
                <p class="line2 k">
                  Out of the box I include HTML5 Boilerplate, jQuery, and a
                  gulpfile.js to build your app.<span class="cursor2">_</span>
                </p>
              </div>
            </div>
            <div class="col-md-6">
              <div class="card">
                <div class="face face1">
                  <div class="content">
                    <span class="stars"></span>
                    <h2 class="python">Python</h2>
                    <p class="python">
                      Python is an interpreted, high-level and general-purpose
                      programming language.
                    </p>
                  </div>
                </div>
                <div class="face face2">
                  <h2>02</h2>
                </div>
              </div>{" "}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Project;
