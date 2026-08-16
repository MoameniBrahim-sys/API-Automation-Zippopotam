Zippopotam API Automation FrameworkThis project is an API test automation framework for Zippopotam.us built using Playwright and JavaScript. 
🛠 Tech StackTesting Framework: Playwright Test.  Language: JavaScript.Architecture: Class-based approach (API Object Model) for clean and maintainable code.  📋 Project StructurePlaintext├── APIs/
│   └── ZipCode.js       # Contains the ZipCode API handler class[cite: 3]
├── tests/
│   └── Task01.spec.js   # Contains the test cases
├── playwright.config.js # Playwright test configuration file
└── package.json         # Project dependencies and configurations


🚀 Getting StartedFollow these instructions to set up and run the project on your local machine.
1. PrerequisitesEnsure you have Node.js installed on your system
2.  Install DependenciesOpen your terminal in the project directory and run the following command:Bashnpm install
3. Run the TestsTo run all API test cases in headless mode, execute:Bashnpx playwright test


To run the tests using Playwright's interactive UI mode:Bashnpx playwright test --ui

🧪 Test Scenarios Covered
TC01: Verify that entering a valid country code and postal code returns a 200 status code and the correct response body.  
TC02: Verify that entering an invalid postal code returns a 404 status code.  
TC03: Verify that entering an invalid country code returns a 404 status code[cite: 2].
