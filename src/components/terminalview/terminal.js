import React from "react"
import './terminal.css'
const Terminalview=(props)=>{
    return (<>
            <div class="fakeMenu">
                <div class="fakeButtons fakeClose"></div>
                <div class="fakeButtons fakeMinimize"></div>
                <div class="fakeButtons fakeZoom"></div>
              </div>
              <div class="fakeScreen">
               
                  <>
                    <p class="line1 k">
                      $ {props.title}
                      <span class="cursor1">_</span>
                    </p>{" "}
                    <p class="line2 k">
                      {props.desc}
                      <span class="cursor2">_</span>
                    </p>{" "}
                  </>
            
              
          
                <p class="line4">
                  {" "}
                  &#60;<span class="cursor4">_</span>
                </p>
              </div>
 </>)
}
export default Terminalview