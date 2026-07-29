chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if(message.action !== "get-car-data") return;
    // tu dane z copart wyciagam
    const car_name = document.querySelector(".ldp-header-title").textContent


    const targetTextKey = "Has key:"; //TODO: Specify a text that you want to find.
    const targetTextOdometer = "Odometer:" // (miles)
    const targetTextPDamage = "Primary damage:" 
    const targetDriving = "Highlights" // does it drive or the engine just starts

    const tagName = "label"; //TODO: Specify a tag name that contains the text.

    const candidates = document.getElementsByTagName(tagName);


    // HAS KEY SECTION
    const filteredTextKey = Array.from(candidates).filter((el) => el.innerText === targetTextKey);
    const targetElementKey = filteredTextKey[0];
    const hasKey = targetElementKey.nextSibling.innerHTML;

    // ODOMETER SECTION
    const filteredOdometer = Array.from(candidates).filter((el) => el.innerText === targetTextOdometer);
    const targetElementOdometer = filteredOdometer[0];

    const Odometer = targetElementOdometer.nextSibling.textContent;
    //const myString = Odometer.children()


    // PRIMARY DAMAGE SECTION
    const filteredPDamage = Array.from(candidates).filter((el) => el.innerText === targetTextPDamage);
    const targetElementPDamage = filteredPDamage[0];

    const PDamage = targetElementPDamage.nextSibling.textContent;


    // IS THIS CAR DRIVING SECTION
    const filteredDriving = Array.from(candidates).filter((el) => el.innerText === targetDriving);
    const targetElementDriving = filteredDriving[0];

    const Driving = targetElementDriving.nextSibling.textContent;

    
    console.log("===========")
    console.log(car_name)
    console.log("Has key:", hasKey)
    console.log("Odometer:", Odometer)
    console.log("Primary damage:", PDamage)
    console.log("Status of driving:", Driving)
    console.log("===========")
    if(car_name == null){
        console.log("JAPIERDOLE")
    }
    


    sendResponse(car_name)
})