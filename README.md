# PhishGuardian

PhishGuardian is a comprehensive solution designed to help users detect phishing websites. The project consists of two main components: a website and a Chrome extension.

## Table of Contents

- [PhishGuardian Website](#phishguardian-website)
- [Phishing Detector Extension](#phishguardian-extension)

## PhishGuardian Website

This folder contains the code for the website built using React.js.

### Installation Instructions

Follow these steps to install and run the PhishGuardian website on your local machine:

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/uyaditi/PhishGuardian.git

2. **Change the working directory to PhishGuardian-website:**
   ```bash
   cd PhishGuardian-website

3. **Install Dependencies/Node Modules:**
   ```bash
   npm i

4. **Start the Development Server:**
   ```bash
   npm run start

### Features

- User-friendly interface for interacting with the PhishGuardian system.
- Integration of WHOIS data
- Detailed Report
- "Have I Been Pwned" Integration

![detection](https://github.com/uyaditi/PhishGuardian/assets/123807371/9e1bf46b-7c86-4009-9006-5ed563b7fc4c)
![guide](https://github.com/uyaditi/PhishGuardian/assets/123807371/3cf28ffe-d1a4-4579-8d92-e5e18b1101c4)
![review](https://github.com/uyaditi/PhishGuardian/assets/123807371/2f27b7fd-5e27-4033-b1a1-19e22c3c6708)
![havei](https://github.com/uyaditi/PhishGuardian/assets/123807371/03b0d3f7-5c90-4173-a1e3-577a96bb261c)

## PhishGuardian Extension

This folder contains the code for the Chrome extension and the NLP model `.pkl` file.

### Installation Instructions

Follow these steps to install and run the PhishGuardian browser extension:

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/uyaditi/PhishGuardian.git

2. **Navigate to Your Browser:**
   - Click on more options (three dots or lines in the top right corner).
   - Select Extensions.
   - Click on Manage Extensions.

3. **Enable Developer Mode:**
   On the top right corner, enable the Developer mode toggle.

4. **Load Unpacked Extension:**
   - On the top left corner, select the Load unpacked option.
   - Navigate to the cloned repository and select the phishing_detector_extension folder.

5. **Enable and Pin the Extension:**
   - Enable the extension.
   - Pin the extension for ease of use.

### Features

- Detects phishing websites in real-time while browsing.
- Utilizes an NLP model to analyze and identify potential phishing threats.
- Provides instant alerts and warnings to users.
- Easy to install and use within the Chrome browser.

![detect](https://github.com/uyaditi/PhishGuardian/assets/123807371/c6b3ea42-bfa4-428a-be2a-b60ce4fa04f9)
![popup](https://github.com/uyaditi/PhishGuardian/assets/123807371/d6b5d836-4cee-4076-99b3-5ac49f122594)

## Contributing

This project was created as part of the Smart India Hackathon (SIH) 2023 submission to leverage technology to tackle real-world problems.
We welcome any contributions to improve PhishGuardian.
