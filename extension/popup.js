document.addEventListener('DOMContentLoaded', () => {
    // Mock data for property information and habitability score
    const mockData = {
      propertyType: "Apartment",
      propertyArea: "1200 sq. ft.",
      trafficDensity: "Low",
      crimeRate: "Below Average",
      airQuality: "Good",
      habitabilityScore: 85
    };
  
    // Populate the popup with mock data
    document.getElementById('property-type').innerText = mockData.propertyType;
    document.getElementById('property-area').innerText = mockData.propertyArea;
    document.getElementById('traffic-density').innerText = mockData.trafficDensity;
    document.getElementById('crime-rate').innerText = mockData.crimeRate;
    document.getElementById('air-quality').innerText = mockData.airQuality;
    document.getElementById('score').innerText = `${mockData.habitabilityScore}/100`;
  });
document.addEventListener('DOMContentLoaded', () => {
  // Mock data for property information and habitability score
  const mockData = {
    propertyType: "Apartment",
    propertyArea: "1200 sq. ft.",
    trafficDensity: "Low",
    crimeRate: "Below Average",
    airQuality: "Good",
    habitabilityScore: 85
  };

  // Populate the popup with mock data
  document.getElementById('property-type').innerText = mockData.propertyType;
  document.getElementById('property-area').innerText = mockData.propertyArea;
  document.getElementById('traffic-density').innerText = mockData.trafficDensity;
  document.getElementById('crime-rate').innerText = mockData.crimeRate;
  document.getElementById('air-quality').innerText = mockData.airQuality;
  document.getElementById('score').innerText = `${mockData.habitabilityScore}/100`;
});
document.addEventListener('DOMContentLoaded', () => {
    // Request property data from the content script
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, "getPropertyData", (response) => {
        if (response) {
          // Populate the popup with received property data
          document.getElementById('property-type').innerText = response.propertyType;
          document.getElementById('property-area').innerText = response.area;
          document.getElementById('traffic-density').innerText = response.trafficDensity;
          document.getElementById('crime-rate').innerText = response.crimeRate;
          document.getElementById('air-quality').innerText = response.airQuality;
          document.getElementById('score').innerText = `${response.habitabilityScore}/100`;
        } else {
          document.getElementById('property-info').innerText = "No property data available";
        }
      });
    });
  });
  