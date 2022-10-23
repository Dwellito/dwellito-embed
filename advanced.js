function setup_dwellito() {
  let dwellitoSrc = "https://dwellito-info.herokuapp.com/";
  let dwellitoQS = "";
  let dwellitoTgt = ["dwellito"];

  if (typeof dwellitoEmbed === "object") {
    if (typeof dwellitoEmbed.clickElementIds !== "undefined") {
      dwellitoTgt = dwellitoEmbed.clickElementIds;
    }
    dwellitoQS =
      "?" +
      Object.keys(dwellitoEmbed)
        .map((key) => {
          return (
            encodeURIComponent(key) +
            "=" +
            encodeURIComponent(dwellitoEmbed[key])
          );
        })
        .join("&");
  }

  dwellitoSrc += dwellitoQS;

  const add_dwellito = () => {
    const template = document.createElement("div");
    template.innerHTML = `
  <div id="dwellito-holder">
  <style scoped>
  #dwellito-popup { 
    display: none; 
    max-width: 550px;
    width: 100%;
    background-color: transparent;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  
  .darken { 
    background: rgba(0, 0, 0, 0.5); 
    z-index: 2147483647;
    position: fixed;
    top: 0;
    left: 0;
    min-height: 100%;
    min-width: 100%;
  }
  
  #dwellito-iframe { 
    border: 0; 
    width: 100%;
    max-width: 550px;
    border-radius: 4px;
  }
  
  #dwellito-page {
    position: fixed;
    top: 0,
    left: 0,
    min-height: 100%;
    min-width: 100%;
    height: 100vh;
    width: 100vw;
  };
  </style>
  <div id="dwellito-page">
    <div id="dwellito-popup"> 
    <iframe id="dwellito-iframe" frameborder=0> </iframe>
      <a href="#" id="dwellito-close" class="close"/>
    </div>
  </div>
  </div>`;

    document.body.appendChild(template);
  };

  add_dwellito();

  const handle_dwellito_click = (e) => {
    console.log(window.innerWidth);
    e.preventDefault();
    var isClosed = false; // indicates the state of the popup
    const iframe = document.getElementById("dwellito-iframe");
    const page = document.getElementById("dwellito-page");
    const popup = document.getElementById("dwellito-popup");
    popup.style.display = "block";
    iframe.src = dwellitoSrc;
    var eventMethod = window.addEventListener
      ? "addEventListener"
      : "attachEvent";
    var eventer = window[eventMethod];
    var messageEvent = eventMethod == "attachEvent" ? "onmessage" : "message";
    eventer(
      messageEvent,
      function (e) {
        var key = e.message ? "message" : "data";
        var data = e[key];
        if (data === "closeWindow") {
          popup.style.display = "none";
          page.className = "";
          iframe.src = "";
          isClosed = true;
        } else {
          const maxHeight = Math.min(window.innerHeight, data);
          if (maxHeight < data || window.innerWidth < 600) {
            popup.style.top = "0px !important";
            popup.style.transform = "translate(0%, 0%) !important";
            iframe.style.height = `${window.innerHeight}px`;
          } else {
            iframe.style.height = `${maxHeight}px`;
          }
        }
      },
      false
    );

    page.className = "darken";
    page.onclick = function () {
      if (isClosed) {
        return;
      } //if the popup is closed, do nothing.
      popup.style.display = "none";
      page.className = "";
      iframe.src = "";
      isClosed = true;
    };
    page.ontouchstart = function () {
      if (isClosed) {
        return;
      } //if the popup is closed, do nothing.
      popup.style.display = "none";
      page.className = "";
      isClosed = true;
    };

    return false;
  };

  const handle_dwellito_open = () => {
    dwellitoTgt.forEach((el) => {
      let dwellitoClickElement = document.getElementById(el);
      if (dwellitoClickElement === null) {
        return;
      }
      document.getElementById(el).onclick = function (e) {
        handle_dwellito_click(e);
      };
    });
  };

  if (document.readyState !== "loading") {
    handle_dwellito_open();
  } else {
    document.addEventListener("DOMContentLoaded", function () {
      handle_dwellito_open();
    });
  }
}

setup_dwellito();
