browser.runtime.sendMessage({ greeting: "hello" }).then((response) => {
    console.log("Received response: ", response);
});

browser.runtime.onMessage.addListener((request, sender, sendResponse) => {
    console.log("Received request: ", request);
});

function afterNavigate() {
    var locationArr = window.location.pathname.split("/")
    if (locationArr.includes("enmity")) { // fix for enmity vanity url not working
        window.location.href = `com.hammerandchisel.discord://discord.com/invite/rMdzhWUaGT`
    } else if (locationArr.includes("invite") || locationArr.includes("channels")) {
        window.location.href = `com.hammerandchisel.discord://discord.com${window.location.pathname}`
    } 
}

(document.body || document.documentElement).addEventListener('transitionend',
  function(/*TransitionEvent*/ event) {
    if (event.propertyName === 'width' && event.target.id === 'progress') {
        afterNavigate();
    }
}, true);
// After page load
afterNavigate();
