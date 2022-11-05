import React from "react";
import "./404style.css";

export default function Page404() {
  return (
    <>
      <div id="clouds">
        <div className="cloud x1"></div>
        <div className="cloud x1_5"></div>
        <div className="cloud x2"></div>
        <div className="cloud x3"></div>
        <div className="cloud x4"></div>
        <div className="cloud x5"></div>
      </div>
      <div className="c">
        <div className="_404">404</div>

        <div className="_1">THE PAGE</div>
        <div className="_2 mt-3">WAS NOT FOUND</div>
        <Link className="small text-muted" to="/">
        BACK TO HOME
        </Link>        
      </div>
    </>
  );
}
