import React from 'react';
import Feature from '../../components/feature/Feature';
import './Details.css';
import sitepic from '../../assets/similar_site.jpg';
import Check from '../../assets/check.png';
import Cross from '../../assets/cross.png';

const Details = () => {
  // const [data, setData] = useState([]);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const apiUrl = 'https://whois-srape-api.onrender.com/scrape/google.com';

  //   fetch(apiUrl)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setData(data);
  //       setLoading(false); 
  //     })
  //     .catch((error) => {
  //       console.error('There was a problem fetching the data:', error);
  //       setLoading(false);
  //     });
  // }, []);
  const data = {
      "scraped_data": [
          {
              "Domain Information": {
                  "Domain:": "paypal.com",
                  "Registrar:": "MarkMonitor Inc.",
                  "Registered On:": "1999-07-15",
                  "Expires On:": "2024-07-15",
                  "Updated On:": "2023-06-13",
                  "Status:": "clientDeleteProhibitedclientTransferProhibitedclientUpdateProhibitedserverDeleteProhibitedserverTransferProhibitedserverUpdateProhibited",
                  "Name Servers:": "ns1.p57.dynect.netns2.p57.dynect.netpdns100.ultradns.compdns100.ultradns.net"
              }
          },
          {
              "Registrant Contact": {
                  "Organization:": "PayPal Inc.",
                  "State:": "CA",
                  "Country:": "US",
                  "Email:": "Select Request Email Form at https://domains.markmonitor.com/whois/paypal.com"
              }
          },
          {
              "Administrative Contact": {
                  "Organization:": "PayPal Inc.",
                  "State:": "CA",
                  "Country:": "US",
                  "Email:": "Select Request Email Form at https://domains.markmonitor.com/whois/paypal.com"
              }
          },
          {
              "Technical Contact": {
                  "Organization:": "PayPal Inc.",
                  "State:": "CA",
                  "Country:": "US",
                  "Email:": "Select Request Email Form at https://domains.markmonitor.com/whois/paypal.com"
              }
          }
      ]
  }; 
  return(
  <div className="gpt3__whatgpt3 section__margin" id="details">
    <div className="gpt3__whatgpt3-feature">
    <div style={{ paddingRight: '30px' }}>
      <div style={{display: 'flex'}}>
    <img src={Cross} alt="phishing" width="130" height="130" style={{paddingRight: "20px", paddingBottom: "20px"}}></img>
    <div className="gpt3__features-heading">
      <h1 className="gradient__text" style={{marginTop: "10px"}}>This site is Phishing</h1>
      <p style={{marginTop: "10px"}}>Similar site found in the database.</p><br/><br/>
      
    </div>
    </div>
    <img src={sitepic} alt="similar site"></img>
    </div>
    <div>
            <Feature title='Probability Scores'></Feature><br/>
            <div className='gpt3__possibility-content'>
            <h4>
              Frontend : 89.9 % <br></br>
             Backend : 90 %
            </h4>
            <br/>
            <br/>
            </div>
            <Feature title='WHOIS Lookup'></Feature><br/>
            <div class='gpt3__possibility-content' style={{ height: '600px', overflowY: 'scroll', paddingRight: '20px'  }}>
             {/* {loading ? (
                <p>Loading...</p>
              ) : (   */}

                {data.scraped_data.map((item, index) => (
                        <p key={index}>
                          {Object.entries(item).map(([category, data]) => (
                            <div key={category} class='pb-2'>
                              <h4>{category}</h4>
                              {Object.entries(data).map(([key, value]) => (
                                <div key={key} style={{wordBreak: 'break-all'}}>
                                  <strong>{key}</strong> <span>{value}</span>
                                </div>
                              ))}
                            </div>
                          ))}
                        </p>
                      ))}
                    {/* )}  */}
            </div>

          </div>
          </div>
  </div>
);
};

export default Details;
