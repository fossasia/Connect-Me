function runSwitchjs() {
  alert("After clicking on 'Ok', Starring will start, leave the tab open, we'll let you know after the starring process. Feel free to jump on another tabs :)");
  chrome.tabs.executeScript({
    file: '../star.user.js'
  });
}

document.getElementById('clickme').addEventListener('click', runSwitchjs);
