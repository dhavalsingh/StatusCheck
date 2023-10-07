# Service Status Checker 🌐

Service Status Checker is a simple yet efficient tool developed by **Your Organization Name** to provide an at-a-glance view of the operational status of various APIs or services. Through this platform, users can instantly verify if a particular service is up, down, or experiencing issues.

## Features 🚀

- **Instant Status Checks**: Quickly view the operational status of your APIs.
- **Customizable**: Easily add or remove services as needed.
- **Lightweight & Responsive**: Adapts to any device, ensuring a smooth experience on both desktop and mobile.
- **Theme Toggle**: Switch between light and dark themes for a better user experience.

## How to Add New Services 🔧

1. Navigate to the `servicesConfig.js` file.
2. In the `services` array, add a new object for your service:

```javascript
{
   id: 'status_yourservice', // Unique identifier for your service
   url: 'https://yourservice.com/health-check' // Health-check endpoint
}
```
## Add org name
Change the value of the orgName
```const orgName = "Anarock";```

Save and reload. Your new service will now be tracked by the Service Status Checker.

## Start the server
To start the server: `node server.js 0.0.0.0`


## Contribute 🤝
We welcome contributions! If you have any suggestions, feature requests, or bug reports, please open a new issue on our GitHub repository.

## License 📄
This project is licensed under the MIT License.

Made with ❤️ by Dhaval.

