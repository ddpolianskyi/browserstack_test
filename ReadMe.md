# Repo with test task for browserstack

## How to run
1. Clone repo and install all dependencies using ```npm install``` in cmd.
2. Enter ```npm run wdio_android_9``` or ```npm run wdio_android_13``` in cmd as you wish. Devicename you can read in config files.
<<<<<<< HEAD
=======

## Task
1.  Clone repo and install all dependencies.
2.  Upload app Android-NativeDemoApp to browserstack using API ([Link](https://www.browserstack.com/docs/app-automate/api-reference/appium/apps#upload-an-app)) and add unique ID to the ```wdio.conf.js```.
3.  Create test 5 test cases (locators can be found using [Appium Inspector](https://github.com/appium/appium-inspector/releases) that conected to the Browserstack account).
4.  Create workflow with using secrets (for user and key in capabilities)([description of secrets](https://docs.github.com/en/actions/security-guides/encrypted-secrets)).
5.  Create 2 config files (with different devices)
>>>>>>> cbae59d5c298ed3dc9a0fbeca677ac7a8f88e8ee

## Versions
* Node JS - 18.12.1
* NPM - 8.19.3
* webdriverio - 8.1.0