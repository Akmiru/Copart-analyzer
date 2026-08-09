chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if(message.action !== "get-car-data") return;
    // tu dane z copart wyciagam
    const car_data = {}

    const car_name = document.querySelector(".ldp-header-title").textContent

    
    const targetTextKey = "Has key:"; //TODO: Specify a text that you want to find.
    const targetTextOdometer = "Odometer:" // (miles)
    const targetTextPDamage = "Primary damage:" 
    const targetDriving = "Highlights:" // does it drive or the engine just starts
    const targetTextSDamage = "Secondary damage:"

    const tagName = "label"; //TODO: Specify a tag name that contains the text.

    const candidates = document.getElementsByTagName(tagName);


    // HAS KEY SECTION
    const filteredTextKey = Array.from(candidates).filter((el) => el.innerText === targetTextKey);
    const targetElementKey = filteredTextKey[0];
    const hasKey = targetElementKey.nextSibling.textContent;

    // ODOMETER SECTION
    const filteredOdometer = Array.from(candidates).filter((el) => el.innerText === targetTextOdometer);
    const targetElementOdometer = filteredOdometer[0];
    const Odometer = targetElementOdometer.nextSibling.textContent;
    //const myString = Odometer.children()


    // PRIMARY DAMAGE SECTION
    const filteredPDamage = Array.from(candidates).filter((el) => el.innerText === targetTextPDamage);
    const targetElementPDamage = filteredPDamage[0];
    const PDamage = targetElementPDamage.nextSibling.textContent;

    // SECONDARY DAMAGE SECTION
    const filteredSDamage = Array.from(candidates).filter((el) => el.innerText === targetTextSDamage);
    const targetElementSDamage = filteredSDamage[0];
    const SDamage = targetElementSDamage.nextSibling.textContent;



    // IS THIS CAR DRIVING SECTION
    const filteredDriving = Array.from(candidates).filter((el) => el.innerText === targetDriving);
    const targetElementDriving = filteredDriving[0];
    const Driving = targetElementDriving.nextSibling.textContent;

    car_data.carName = car_name
    car_data.HasKey = hasKey
    car_data.Odometer = Odometer
    car_data.PDamage = PDamage
    car_data.SDamage = SDamage
    car_data.Status = Driving
    
    console.log("===========")
    console.log(car_name)
    console.log("Has key:", car_data.HasKey)
    console.log("Odometer:", car_data.Odometer)
    console.log("Primary damage:", car_data.PDamage)
    console.log("Secondary damage:",car_data.SDamage)
    console.log("Status of driving:", car_data.Status)
    console.log("===========")
    if(car_name == null){
        console.log("JAPIERDOLE")
    }




    // FINDING CONTAINER WITH IMAGES
    let imagesList = []
    const imageContainer = document.querySelector(".p-galleria-thumbnail-items").querySelectorAll("img")
    for (let i = 0; i < 5; i++) {
        //console.log(imageContainer[i]);
        let imageSrcmini = imageContainer[i].src
        let imageSrc = imageSrcmini.replace("_thb", "_ful");
        imagesList.push(imageSrc)
        //console.log(imageSrc)
    }
    console.log(imagesList);
    car_data.images = imagesList
    



    


    sendResponse(car_data)
})