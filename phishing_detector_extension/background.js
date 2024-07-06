chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  const currtab = tab.url;
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  
  var raw = JSON.stringify({
    "text": currtab
  });
  
  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };
  
  fetch("https://sih-api.onrender.com/predict", requestOptions)
    .then(response => response.json())
    .then(responseData => {
      if (responseData.prediction === "bad" && !currtab.includes("https://sih-phishguardian.vercel.app") && !currtab.includes("https://www.google.com/")) {
        chrome.tabs.sendMessage(tabId, { message: "true" });
      }
    })
    .catch(error => {
      console.error(error);
    });
});
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message.closeTab) {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      const currentTab = tabs[0];
      const currentTabUrl = currentTab.url;
      chrome.tabs.remove(currentTab.id, function () {
        const newUrl = `https://sih-phishguardian.vercel.app/home/?name=${currentTabUrl}`;
        chrome.tabs.create({ url: newUrl });
      });
    });
  }
});
