import React from "react"
import './device.scss'
const Mobileview=(props)=>{
    return (<>
      <div class="parent">
                      <figure
                        class="iphone child"
                        style={{
                          backgroundImage: `linear-gradient(rgba(0,0,0,0), #111),url(${props.bgurl})`,
                        }}
                      >
                        Phone
                      </figure>

                      <figure class="ipad child "  style={{
                          backgroundImage: `linear-gradient(rgba(0,0,0,0), #111),url(${props.bgurl2})`,
                        }}>Tablet</figure>
                    </div>

 </>)
}
export default Mobileview