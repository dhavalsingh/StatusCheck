// servicesConfig.js

// Define your service URLs and IDs here
const services = [
  {
    id: "status_google",
    url: "https://google.com",
  },
  {
    id: "status_bing",
    url: "https://bing.com",
  },
  {
    id: "status_github",
    url: "https:/github.com",
  },
];
// Add this line at the beginning of your servicesConfig.js
const orgName = "Sample Org Name";

// Add a function to expose the serviceName to other scripts
function getOrgName() {
  return orgName;
}
// Function to generate service rows

const generateServiceRows = () => {
  let rowsLeft = "";
  let rowsRight = "";
  const midpoint = Math.ceil(services.length / 2);

  services.forEach((service, index) => {
    const row = `
          <tr class="border-t border-l border-r border-gray-300">
              <td class="px-4 py-3 border-b">${
                service.id.replace("status_", "").charAt(0).toUpperCase() +
                service.id.replace("status_", "").slice(1)
              } Service</td>
              <td class="px-4 py-3 border-b border-l">
                  <span id="${service.id}" status="Checking...">
                      <span class="status-indicator pulse mr-2 inline-block"></span>Checking...
                  </span>
              </td>
          </tr>
      `;
    if (index < midpoint) {
      rowsLeft += row;
    } else {
      rowsRight += row;
    }
  });

  document.getElementById("serviceStatusTableBodyLeft").innerHTML = rowsLeft;
  document.getElementById("serviceStatusTableBodyRight").innerHTML = rowsRight;
};

// Call the row generation function
generateServiceRows();

// Define a function to get the services configuration
function getServicesConfig() {
  return services;
}

// Append generated rows to the table body
document.getElementById("serviceStatusTableBody").innerHTML =
  generateServiceRows();
