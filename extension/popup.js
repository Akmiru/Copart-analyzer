//const btnAnalyze = document.querySelector("#btn-analyze")




(async () => {
  const [tab] = await chrome.tabs.query({active: true, currentWindow: true})
  const response = await chrome.tabs.sendMessage(tab.id, {action: "get-car-data"})

  
  document.querySelector("#Car_name").innerHTML = response.carName;

})();



/*
btnAnalyze.addEventListener("click", async() => e =>
{
    const currentTab = chrome.tabs.query({active: true, currentWindow: true})
    

}
)*/