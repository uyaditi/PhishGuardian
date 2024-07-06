document.getElementById('confirm').addEventListener('click', function() {
    chrome.runtime.sendMessage({ action: "leave" }, function(response) {
        window.close();
    });
});

document.getElementById('cancel').addEventListener('click', function() {
    chrome.runtime.sendMessage({ action: "stay" }, function(response) {
        window.close();
    });
});
