chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if(message.action !== "get-car-data") return;
    // tu dane z copart wyciagam
    const car_name = document.querySelector(".ldp-header-title").textContent
    console.log("===========")
    console.log(car_name)
    console.log("===========")
    if(car_name == null){
        console.log("JAPIERDOLE")
    }
    


    sendResponse(car_name)
})