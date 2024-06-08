!(function () {
  var n =
    "\n#cssscan-license-modal-content .button {\n  border-radius: 50px;\n  padding: 4px 20px;\n  border: 0;\n  outline: 0;\n  font-size: 14px;\n  width: initial;\n  height: initial;\n  line-height: 24px;\n  box-shadow: rgba(0,0,0,.15) .15em .15em .2em !important;\n  margin: 0;\n  transition: 0.1s ease-in all;\n  display: inline-block;\n  vertical-align: middle;\n  text-transform: initial;\n  user-select: none;\n  opacity: 1;\n  position: initial;\n  cursor: pointer;\n  pointer-events: auto;\n}\n\n#cssscan-license-modal {\n  text-align: left;\n  position: fixed;\n  z-index: 2147483647;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-color: rgba(0,0,0,0.4);\n}\n\n#cssscan-license-modal-content {\n  box-sizing: border-box;\n  background-color: rgba(30, 32, 44, .99);\n  margin: 7% auto;\n  padding: 4%;\n  width: 60%;\n  font-size: 20px;\n  color: #fff;\n  border-radius: 20px;\n  box-shadow: 0 7px 29px 0 rgba(100,100,111,.2);\n}\n\n#cssscan-license-modal-content,\n#cssscan-license-modal-content p,\n#cssscan-license-modal-content h1 {\n  font-family: -apple-system, BlinkMacSystemFont, 'Roboto', sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  color: #fff;\n}\n\n#cssscan-license-modal-content p {\n  margin-top: 10px;\n  margin-bottom: 16px;\n}\n\n#cssscan-license-modal-content input {\n  background-color: #fff;\n  border: 1px solid #ced4da;\n  border-radius: 4px;\n  box-sizing: border-box;\n  color: #000;\n  letter-spacing: 2px;\n  display: block;\n  font-size: 15px;\n  line-height: 1.5;\n  padding: 12px;\n  width: 100%;\n  max-width: 415px;\n}\n\n#cssscan-license-modal-content .button {\n  padding: 0 25px;\n  line-height: 50px;\n  height: 50px;\n  border-radius: 4px;\n  border: 0;\n  background: #fff;\n  color: #555;\n  text-decoration: none;\n  transition: 250ms ease-in-out;\n  will-change: transform;\n  box-shadow: 0 7px 29px 0 rgba(100,100,111,.2);\n  display: inline-block;\n  font-size: 16px;\n  cursor: pointer;\n  opacity: 1;\n  position: initial;\n}\n\n#cssscan-license-modal-content .button-principal {\n  border: none;\n  background: #2cbc63;\n  color: #fff;\n  box-shadow: 0 7px 29px 0 rgba(0,0,0,.4);\n  margin-left: 0;\n  margin-top: 25px;\n  font-weight: bold;\n}\n\n#cssscan-license-modal a {\n  color: #4adc71;\n  text-decoration: none;\n}\n\na#cssscan-license-modal-contact {\n  color: #ccc;\n  font-size: 15px;\n  margin-left: 30px;\n  text-decoration: underline;\n  vertical-align: bottom;\n}\n\n#cssscan-license-modal-content .button:hover {\n  transform: translateY(-2px);\n}\n\n#cssscan-license-modal-content .button-principal:hover {\n  box-shadow: 0 7px 34px 0 rgba(0,0,0,.7);\n}\n\n#cssscan-license-modal-content h1,\n#cssscan-license-modal-h1 {\n  font-size: 1.7em;\n  margin-top: 7px !important;\n  padding-bottom: 0 !important;\n  margin-bottom: 0 !important;\n  font-weight: 500;\n  color: #fff;\n  border: 0;\n}\n\n#cssscan-license-modal-close {\n  color: #fff;\n  float: right;\n  font-size: 28px;\n  font-weight: bold;\n}\n\n#cssscan-license-modal-close:hover,\n#cssscan-license-modal-close:focus {\n  text-decoration: none;\n  cursor: pointer;\n}\n\n.cssscan-margin-right {\n  margin-right: 8px;\n}\n\n#cssscan-license-modal-img {\n  width: 96px;\n  height: auto;\n}\n";
  const e = navigator.userAgent.toLowerCase().indexOf("firefox") > -1;
  var s = document,
    t = document;
  try {
    t = window.top.document;
  } catch (y) {}
  var o = window;
  try {
    window.top.getSelection() && (o = window.top);
  } catch (y) {}
  const c = e ? o.wrappedJSObject : o;
  var i = window.self !== window.top,
    a = !!i;
  if (i)
    try {
      window.top.document && (a = !0);
    } catch (y) {
      a = !1;
    }
  if (window.cssScanUIShadowRoot || c.cssScanUIShadowRoot) {
    if (((s = window.cssScanUIShadowRoot || c.cssScanUIShadowRoot), e))
      try {
        s = t.documentElement.querySelector("#cssscan-ui").shadowRoot;
      } catch (y) {}
    s.getElementById("cssscan-license-modal-styles") ||
      (s.innerHTML += `\n      <style id="cssscan-license-modal-styles">\n        ${n}\n      </style>\n    `);
  } else if (!a) {
    const e = document.createElement("div");
    (e.id = "cssscan-ui"),
      (e.style = "width: 0; height: 0; margin: 0; padding: 0; transform: none; border: 0; box-shadow: none;"),
      document.querySelector("html").appendChild(e),
      ((s = e.attachShadow({
        mode: "open",
      })).innerHTML = `\n    <style id="cssscan-license-modal-styles">\n      ${n}\n    </style>\n  `),
      (window.cssScanUIShadowRoot = s),
      (c.cssScanUIShadowRoot = s);
  }
  const l = e ? chrome.extension : chrome.runtime;
  if (!s.getElementById("cssscan-license-modal")) {
    (d = s),
      (r = "div"),
      (m = "cssscan-license-modal"),
      (p = `\n      <div id="cssscan-license-modal-content">\n        <span id="cssscan-license-modal-close">&times;</span>\n        <img src="${l.getURL(
        "icon.png"
      )}" id="cssscan-license-modal-img">\n        <h1 id="cssscan-license-modal-h1">CSS Scan - License check</h1>\n        <div id="cssscan-license-modal-step-1">\n          <p class="cssscan-element">Please check <a href="https://mycssscan.com" target="_blank" class="cssscan-element">MyCssScan.com</a> or your receipt and enter your license key to continue:</p>\n          <input type="text" value="KISHORE DEV" id="cssscan-license-input">\n          <button class="button button-principal" id="cssscan-check-license-btn">Check license key</button>\n          <a id="cssscan-license-modal-contact" href="https://airtable.com/shrsDQGBd3xRdCV2k" target="_blank">Contact Us</a>\n        </div>\n      </div>\n    `),
      (h = document.createElement(r)).setAttribute("id", m),
      g && h.setAttribute("class", g),
      (h.innerHTML = p),
      d.appendChild(h);
    const n = s.getElementById("cssscan-license-input");
    window.onclick = function (e) {
      const t = e.composedPath()[0];
      t === s.getElementById("cssscan-check-license-btn") &&
        n.value.length >= 0 &&
        ((t.innerHTML = `<div class="cssscan-vertical-align"><img src="${l.getURL(
          "spinner.svg"
        )}" width="15" class="cssscan-margin-right cssscan-spinner">Checking ...</div>`),
        chrome.runtime.sendMessage({ action: "validate_license", key: n.value.trim() }, function (n) {}));
      const o = s.getElementById("cssscan-license-modal-close"),
        c = s.getElementById("cssscan-license-modal");
      (t != c && t != o) || (c.style.display = "none");
    };
  }
  var d, r, m, p, g, h;
  chrome.runtime.onMessage.addListener(function (n, e, t) {
    const o = s.getElementById("cssscan-license-modal");
    return (
      "are_you_there_content_script_modal?" === n.text
        ? ("block" === o.style.display || "" === o.style.display
            ? (o.style.display = "none")
            : (o.style.display = "block"),
          t({ status: "yes" }))
        : "close_modal" === n.text
        ? (o.style.display = "none")
        : "validate_result" === n.text &&
          (n.valid
            ? ((s.getElementById("cssscan-license-modal-h1").innerText = "\u2705 Success!"),
              (s.getElementById("cssscan-license-modal-step-1").style.display = "none"),
              (s.getElementById("cssscan-license-modal-close").style.display = "none"),
              setTimeout(() => {
                s.getElementById("cssscan-license-modal").style.display = "none";
              }, 1e3))
            : ((s.getElementById("cssscan-check-license-btn").disabled = !1),
              (s.getElementById("cssscan-check-license-btn").innerHTML = "Check again"),
              alert(n.alert),
              n.alert.includes("activation limits") &&
                chrome.runtime.sendMessage({ action: "openTab", url: `https://mycssscan.com/?key=${n.key}` }))),
      !0
    );
  }),
    (s.onkeydown = function (n) {
      const e = s.getElementById("cssscan-license-modal");
      var t;
      (t = "key" in (n = n || window.event) ? "Escape" == n.key || "Esc" == n.key : 27 == n.keyCode),
        "none" !== e.style.display && t && (e.style.display = "none");
    });
})();
