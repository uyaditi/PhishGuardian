function fetchDataAndDisplay(currentWebsite) {
    var fetchHeaders = new Headers();
    fetchHeaders.append("Content-Type", "application/json");

    var fetchRaw = JSON.stringify({
        "text": currentWebsite
    });

    var fetchOptions = {
        method: 'POST',
        headers: fetchHeaders,
        body: fetchRaw,
        redirect: 'follow'
    };

    return fetch("https://sih-api.onrender.com/scrape", fetchOptions)
        .then(fetchResponse => fetchResponse.json())
        .then(data => {
            var pElement = document.getElementById('fetched-data');
            var pElement2 = document.getElementById('fetched-data2');

            pElement.textContent = "";
            pElement2.textContent = "";

            for (var key in data.scraped_data) {
                if (key !== "Name Servers:" && key !== "Status:") {
                    var spanElement = document.createElement("span");
                    spanElement.textContent = `${key} ${data.scraped_data[key]}`;
                    spanElement.style.display = "block"; 
                    pElement.appendChild(spanElement);
                }
                if (key !== "Name Servers:" && key !== "Status:") {
                    var spanElement = document.createElement("span");
                    spanElement.textContent = `${key} ${data.scraped_data[key]}`;
                    spanElement.style.display = "block"; 
                    pElement2.appendChild(spanElement);
                }
            }
        })
        .catch(error => {
            console.error(error);
        });
}

let currentWebsite;

chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    const currentTab = tabs[0];
    currentWebsite = currentTab.url;

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        "text": currentWebsite
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
            if (responseData.prediction === "bad" && !currentWebsite.includes("https://sih-phishguardian.vercel.app") && !currentWebsite.includes("https://www.google.com/")) {

                document.querySelector('.container').style.display = "block";
                document.querySelector('.container2').style.display = "none";
                const newUrl = chrome.runtime.getURL('custom.html');
                chrome.windows.create({
                    url: newUrl,
                    type: 'popup',
                    width: 600,
                    height: 500,
                    left: (screen.width - 600) / 2,
                    top: (screen.height - 500) / 2
                });
            }
            else {
                document.body.style.display = 'block';
                document.querySelector('.container').style.display = "none";
                document.querySelector('.container2').style.display = "block";
                fetchDataAndDisplay(currentWebsite);
                document.getElementById("website-list").textContent = currentWebsite;
                document.getElementById("website-list2").textContent = currentWebsite;
            }
        })
        .catch(error => {
            console.error(error);
        });
});

chrome.runtime.onMessage.addListener(function(message) {
    if (message.action === "leave") {
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            const currentTab = tabs[0];
            const newUrl = `https://sih-phishguardian.vercel.app/home/?name=${currentWebsite}`;
            chrome.tabs.create({ url: newUrl }, function() {
                chrome.tabs.remove(currentTab.id);
            }); 
        });
    } else if (message.action === "stay") {
        document.body.style.display = 'block';
        fetchDataAndDisplay(currentWebsite);
        document.getElementById("website-list").textContent = currentWebsite;
        document.getElementById("website-list2").textContent = currentWebsite;
    }
});
