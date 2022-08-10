// snippet to include on 3rd-party websites that targets an id and opens the dwellito modal on Click

let add_dwellito = () => {
  const template = document.createElement("div");
  template.innerHTML = `
  <div id="dwellito-page">
    <div id="dwellito-popup"> 
    <iframe id="dwellito-iframe" frameborder=0> </iframe>
      <a href="#" id="dwellito-close" class="close"/>
    </div>
  </div>`;

  document.body.appendChild(template);
};

const add_dwellito_style = () => {
  var style = document.createElement("style");
  style.innerHTML = `#dwellito-popup { 
    display: none; 
    min-height: 500px;
    max-width: 500px;
    width: 100%;
    background-color: transparent;
    z-index: 10;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  
  .darken { 
    background: rgba(0, 0, 0, 0.5); 
    z-index: 2147483647;
    position: absolute;
    top: 0;
    left: 0;
    min-height: 100%;
    min-width: 100%;
  }
  
  .close {
    display: none; 
    position: absolute;
    right: 24px;
    top: 25px;
    width: 20px;
    height: 20px;
    opacity: 0.3;
  }
  
  .close:hover {
    opacity: 1;
  }
  
  .close:before, .close:after {
    position: absolute;
    left: 15px;
    content: ' ';
    height: 20px;
    width: 2px;
    background-color: #333;
  }
  .close:before {
    transform: rotate(45deg);
  }
  .close:after {
    transform: rotate(-45deg);
  }
  
  #dwellito-iframe { 
    border: 0; 
    height: calc(100vh - 50px);
    width: 100%;
    max-width: 500px;
  }
  
  #dwelitto-page {
    position: absolute;
    top: 0;
    left: 0;
    min-height: 100%;
    min-width: 100%;
    height: 100vh;
    width: 100vw;
  }
  `;
  document.head.appendChild(style);
};

add_dwellito();
add_dwellito_style();

document.getElementById("dwellito").onclick = function (e) {
  e.preventDefault();
  var isInit = true; // indicates if the popup already been initialized.
  var isClosed = false; // indicates the state of the popup
  document.getElementById("dwellito-popup").style.display = "block";
  document.getElementById("dwellito-close").style.display = "block";
  document.getElementById("dwellito-iframe").src =
    "https://dwellito-widget.herokuapp.com/";
  document.getElementById("dwellito-page").className = "darken";
  document.getElementById("dwellito-page").onclick = function () {
    if (isClosed) {
      return;
    } //if the popup is closed, do nothing.
    document.getElementById("dwellito-popup").style.display = "none";
    document.getElementById("dwellito-close").style.display = "none";
    document.getElementById("dwellito-page").className = "";
    isClosed = true;
  };

  return false;
};
