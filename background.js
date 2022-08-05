function injectedFunction() {
  [...document.querySelectorAll('div[class^="arrow right disabled"]')].forEach((button) => {
    button.setAttribute("class", "arrow right");
    button.click();
    console.log("clicked");
  }); // works as of 8/2
  /*
  const sleepUntil = (f, timeoutMs) => {
    return new Promise((resolve, reject) => {
      const timeWas = new Date();
      console.log("time created");
      (function wait() {
        console.log("loaded in here?", f());
        let i;
        if (f()) {
          console.log("resolved after", Math.abs(new Date() - timeWas), "ms");
          resolve();
          console.log("resolved!");
        } else if (i = Math.abs(new Date() - timeWas) > timeoutMs) { // Timeout
          console.log("rejected after", i, "ms");
          reject();
        }
        setTimeout(wait, 20);
      })();
    });
  }
  
  // home screen
  if (document.body.className === "enLang") {
    document.querySelector('div[class~="active"]').click();
  } else {
    // inside a section
    for (let index = 0; index < 12 && document.body.className === "enLang inSection";) {
      console.log("new, index: ", index);
      console.log("loaded? ", document.documentElement.style.overflowY === "scroll");
      async function clicky() {
        await sleepUntil(() => document.documentElement.style.overflowY === "scroll", 2000);
        [...document.querySelectorAll('div[class~="arrow right disabled"]')].forEach((button) => {
          button.setAttribute("class", "arrow right");
          button.click();
          console.log("clicked");
          index++;
        }); // works as of 8/2
      }
      clicky();
      console.log("end of iteration");
    }
  }
  */   
}

chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: injectedFunction
  });
});