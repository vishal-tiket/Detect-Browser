// Function to detect the browser using the user agent
function detectBrowser() {
  var userAgent = navigator.userAgent;

  /**
   * this commented code is the final logic which should be used
   */
  // const userAgentsArray = [
  //   "Firefox",
  //   "Chrome",
  //   "Safari",
  //   "Opera",
  //   "OPR",
  //   "Edge",
  //   "Trident",
  //   "Edg",
  // ];

  //exceptions
  // if(userAgent.indexOf('Slack') > -1){
  //    return false
  //}

  // const isBrowser = userAgentsArray.some((agent) => {
  //   return userAgent.indexOf(agent) > -1;
  // });

  // console.log(isBrowser)

  /**
   * showing browser name just for POC
   */
  if (userAgent.indexOf("Slack") > -1) {
    return "In-App Browser";
  }
  if (userAgent.indexOf("Firefox") > -1) {
    return "Mozilla Firefox";
  } else if (userAgent.indexOf("Chrome") > -1) {
    return "Google Chrome";
  } else if (userAgent.indexOf("Safari") > -1) {
    return "Apple Safari";
  } else if (userAgent.indexOf("Opera") > -1 || userAgent.indexOf("OPR") > -1) {
    return "Opera";
  } else if (userAgent.indexOf("Edge") > -1) {
    return "Microsoft Edge";
  } else if (userAgent.indexOf("Trident") > -1) {
    return "Internet Explorer";
  } else {
    return "In-App Browser";
  }
}

if (typeof window !== "undefined") {
  var browser = detectBrowser();

  document.querySelector("#text").innerHTML = `Web opened in ${
    browser === "In-App Browser" ? browser : "Normal Mobile/Desktop Browser"
  }`;
  document.querySelector("#user-agent").innerHTML = `${navigator.userAgent}`;
}
