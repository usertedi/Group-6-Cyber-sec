chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    // Basic blocking from rules.json will be added later by Person 1
    console.log("Request blocked check:", details.url);
    return { cancel: false }; // Change to true when blocking
  },
  { urls: ["<all_urls>"] },
  ["blocking"]
);