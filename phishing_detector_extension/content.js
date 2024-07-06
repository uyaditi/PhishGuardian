function loadFont(url) {
  const link = document.createElement('link');
  link.href = url;
  link.rel = 'stylesheet';
  document.head.appendChild(link);
}

function showConfirmationPopup() {
  chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    if (message.message === "true") {

      loadFont('https://fonts.googleapis.com/css2?family=Acme&display=swap');
      loadFont('https://fonts.googleapis.com/css2?family=Belanosima&display=swap');

      // Create the semi-transparent overlay background
      const overlayBackground = document.createElement('div');
      overlayBackground.setAttribute('style', `
        position: fixed; 
        top: 0; 
        left: 0; 
        width: 100%; 
        align-items: center; /* Add a semicolon here */
        height: 100%;
        background-color: rgba(255, 255, 255, 0.2);
        z-index: 9998;
      `);
      document.body.appendChild(overlayBackground);

      // Create the main overlay container
      const overlay = document.createElement('div');
      overlay.classList.add('overlay');
      overlay.setAttribute('style', `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 37%;
        height: 60%;
        display: flex;
        border-radius: 8px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: white;
        box-shadow: 0 0 10px rgba(255, 0, 0, 0.534);
        z-index: 9999;
        text-align: center;
        animation: pulse 2s infinite alternate;
      `);

      // Add image
      const warningImage = document.createElement('img');
      warningImage.setAttribute('src', 'https://drive.google.com/uc?export=download&id=1l_lP8-jTHN_8Do-mr6YjV8_RntjRGdGJ');
      warningImage.setAttribute('alt', 'Alert Image');
      warningImage.setAttribute('class', 'alert-image');
      warningImage.setAttribute('style',`
      margin-bottom: 25px;
      text-align: center;
      `
      )

      overlay.appendChild(warningImage);

      // Add title
      const title = document.createElement('p');
      title.id = 'title';
      title.innerText = '"Phishing Warning!"';
      title.style.fontWeight = "bold";
      title.style.fontFamily = 'Belanosima';
      title.style.fontSize = '30px';
      title.style.marginBottom = '10px';
      title.style.color = 'black';
      overlay.appendChild(title);

      // Add message
      const message = document.createElement('p');
      message.id = 'message';
      message.innerText = "This website is attempting to steal your personal information or conduct fraudulent activities. Do not proceed and close this tab immediately. If you believe this is a mistake, please contact support.";
      message.style.fontFamily = 'Acme';
      message.style.fontSize = '15px';
      message.style.color = 'gray';
      message.style.textAlign = 'center';
      message.style.marginLeft = '30px';
      message.style.marginRight = '30px';
      message.style.marginBottom = '25px';
      overlay.appendChild(message);

      // Add buttons
      const btnContainer = document.createElement('div');
      btnContainer.style.display = 'flex';
      btnContainer.style.justifyContent = 'space-between';
      btnContainer.style.width = '70%';

      const btnLeave = document.createElement('button');
      btnLeave.id = 'confirm';
      btnLeave.innerText = 'Leave';
      btnLeave.style.width = '48%'; 
      btnLeave.style.padding = '10px 20px';
      btnLeave.style.fontSize = '16px';
      btnLeave.style.cursor = 'pointer';
      btnLeave.style.borderRadius = '5px';
      btnLeave.style.background = '#ff3333';
      btnLeave.style.border = 'none';
      btnLeave.style.fontFamily = 'Belanosima';
      btnLeave.style.color = 'white';
      btnLeave.style.boxShadow = '0 0 10px #505050';
      btnContainer.appendChild(btnLeave);

      const btnStay = document.createElement('button');
      btnStay.id = 'cancel';
      btnStay.innerText = 'Stay';
      btnStay.style.width = '48%';
      btnStay.style.padding = '10px 20px';
      btnStay.style.fontSize = '16px';
      btnStay.style.cursor = 'pointer';
      btnStay.style.borderRadius = '5px';
      btnStay.style.background = '#999999';
      btnStay.style.border = 'none';
      btnStay.style.fontFamily = 'Belanosima';
      btnStay.style.color = 'white';
      btnContainer.appendChild(btnStay);

      overlay.appendChild(btnContainer);

      // Button click event listeners
      btnLeave.addEventListener('click', function() {
        chrome.runtime.sendMessage({ closeTab: true });
        overlay.remove();
        overlayBackground.remove();
      });

      btnStay.addEventListener('click', function() {
        overlay.remove();
        overlayBackground.remove();
      });

      // Append overlay to the body
      document.body.appendChild(overlay);
      const styleSheet = document.styleSheets[0];
      styleSheet.insertRule(`
      @keyframes pulse {
        0% {
            box-shadow: 0 0 0px rgba(255, 0, 0, 0);
        }
        100% {
            box-shadow: 0 0 30px rgba(255, 0, 0, 0.534); 
        }
    }
      `, styleSheet.cssRules.length);

    }
  });
}

showConfirmationPopup();
