import React, { useState } from 'react'
import "./watchList.css";
const Watchlist= (props) => {
      props.set(true);
    const [toggle, setToggle] = useState("watchlist");
  return (
    <div className="container">
        <h1>Collection Stats</h1>
        <div className="d-flex my-5 align-item-center justify-content-start border-bottom-subheader">
            {toggle === 'top'? (<>
                  <h4 className="me-5 border-dark-color" style={{cursor:"pointer"}} >Top</h4>
            </>) : (<>
                      <h4 className="me-5" style={{cursor:"pointer"}} onClick={() => setToggle("top")}>Top</h4>
            </>)}
            {toggle === 'trending'? (<>
                  <h4 className="mx-5 border-dark-color" style={{cursor:"pointer"}}>Trending</h4>
            </>) : (<>
                      <h4 className="mx-5 " style={{cursor:"pointer"}} onClick={() => setToggle("trending")} >Trending</h4>
            </>)}
            {toggle === 'watchlist'? (<>
                  <h4 className="mx-5 border-dark-color" style={{cursor:"pointer"}}>Watchlist</h4>
            </>) : (<>
                      <h4 className="mx-5" style={{ cursor: "pointer" }} onClick={()=>setToggle("watchlist")}>Watchlist</h4>
            </>)}</div>
            {toggle=== "top"? (<>Top</>):null}
            {toggle=== "trending"? (<>Trending </>):null}
              {toggle === "watchlist"? (<>WatchList</>):null}
    </div>
  )
}

export default Watchlist