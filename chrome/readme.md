# Getting Started

DirectCheck is a Google Chrome extension to making searching the Carnegie Mellon directory easier. Right-click text in the browser and select the DirectCheck option. The Carnegie Mellon directory results for the selected text will appear in a new tab in the user's Chrome window.

### Chrome Web Store URL

	https://chrome.google.com/webstore/detail/directcheck/kngenmcnehojienhfnggmpbfdfciocdn

## Basic Information

Google Chrome extensions are based written in Javascript (including JSON), HTML, and CSS.

# Packaging and Uploading

Instructions for packaging and uploading Chrome extensions can be found at:

	http://developer.chrome.com/extensions/packaging.html

## Packaging the extension

If the Chrome Web Store version is unavailable, the extension must be packaged with the .crx file extension before being used in the Chrome browser. In order to package the extension:

1. Bring up the Extensions management page by going to this URL:

	chrome://extensions

2. Ensure that the "Developer mode" checkbox in the top right-hand corner is checked.
3. Click the Pack extension button. A dialog appears.
4. In the Extension root directory field, specify the path to the extension's folder—for example, C:\myext. (Ignore the other field; you don't specify a private key file the first time you package a particular extension.)
5. Click Package. The packager creates two files: a .crx file, which is the actual extension that can be installed, and a .pem file, which contains the private key.

## Uploading a previously packaged extension to the Chrome Web Store

You can use the Chrome Developer Dashboard to upload an extension that you've previously packaged yourself. However, unless you take special steps, the extension's ID in the Chrome Web Store will be different from its ID in the package you created. This different ID might be a problem if you've distributed your extension package, because it allows users to install multiple versions of your extension, each with its own local data.

If you want to keep the extension ID the same, follow these steps:

1. Rename the private key that was generated when you created the .crx file to key.pem.
2. Put key.pem in the top directory of your extension.
3. Compress that directory into a ZIP file.
4. Upload the ZIP file using the Chrome Developer Dashboard (https://chrome.google.com/webstore/developer/dashboard).