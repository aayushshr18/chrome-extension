document.addEventListener("DOMContentLoaded", function () {
    var button = document.getElementById("getTabTitleButton");
    var tabTitleElement = document.getElementById("tabTitle");
  
    button.addEventListener("click", function () {
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        var tab = tabs[0];
        var tabTitle = tab.title;
        tabTitleElement.textContent = "Tab Title: " + tabTitle;
      });
    });
  });
  