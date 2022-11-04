import React from "react";
import "./404style.css";

export default function Page404() {
  return (
    <>
      <div id="clouds">
        <div class="cloud x1"></div>
        <div class="cloud x1_5"></div>
        <div class="cloud x2"></div>
        <div class="cloud x3"></div>
        <div class="cloud x4"></div>
        <div class="cloud x5"></div>
      </div>
      <div class="c">
        <div class="_404">404</div>

        <div class="_1">THE PAGE</div>
        <div class="_2 mt-3">WAS NOT FOUND</div>
        <a class="btn mt-4" href="#">
          BACK TO HOME
        </a>
      </div>
    </>
  );
}
