// Global variables to track service checks
let serviceCount = 0;
let allServicesUp = true;
const totalServices = 9; // Adjust if the number of services changes

function checkServiceStatus(serviceUrl, elementId) {
  const requestOptions = {
    method: "GET",
  };

  fetch(serviceUrl, requestOptions)
    .then((response) => {
      console.log(`Service ${elementId} response:`, response.status);
      let statusElement = document.getElementById(elementId);
      let textNode;
      if (response.ok) {
        textNode = document.createTextNode("Up");
        statusElement.setAttribute("status", "Up");
      } else {
        textNode = document.createTextNode("Down");
        statusElement.setAttribute("status", "Down");
        allServicesUp = false; // Update the global status
      }
      statusElement.lastChild.remove();
      statusElement.appendChild(textNode);

      serviceCount++;
      if (serviceCount === totalServices) {
        updateOverallStatus();
      }
    })
    .catch((error) => {
      console.log(`Service ${elementId} error:`, error);
      let statusElement = document.getElementById(elementId);
      let textNode = document.createTextNode("Down");
      statusElement.setAttribute("status", "Down");
      statusElement.lastChild.remove();
      statusElement.appendChild(textNode);

      allServicesUp = false; // Update the global status

      serviceCount++;
      if (serviceCount === totalServices) {
        updateOverallStatus();
      }
    });
}

// Get the services configuration from servicesConfig.js
const serviceConfigs = getServicesConfig();

// Loop through the services and check their status
serviceConfigs.forEach((service) => {
  checkServiceStatus(service.url, service.id);
});

function updateOverallStatus() {
  console.log("Updating overall status...");
  const statusIcon = document.getElementById("statusIcon");
  const statusMessage = document.getElementById("statusMessage");
  const nameOfOrg = getOrgName(); // Fetch the service name

  if (allServicesUp) {
    statusIcon.textContent = "✅";
    statusMessage.textContent = `${nameOfOrg} is running`;
    document.getElementById("overallStatus").classList.add("text-green-500");
  } else {
    statusIcon.textContent = "❌";
    statusMessage.textContent = `${nameOfOrg} has issues`;
    document.getElementById("overallStatus").classList.add("text-red-500");
  }
}

document.getElementById("themeToggle").addEventListener("click", function () {
  const htmlElement = document.documentElement;
  const iconElement = document.getElementById("themeIcon");

  if (htmlElement.classList.contains("dark")) {
    htmlElement.classList.remove("dark");
    iconElement.textContent = "🌞";
  } else {
    htmlElement.classList.add("dark");
    iconElement.textContent = "🌙";
  }
});
