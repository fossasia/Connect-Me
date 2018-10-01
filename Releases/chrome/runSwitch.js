function runSwitchjs() {
  alertify
  .okBtn("Accept")
  .cancelBtn("Deny")
  .confirm("After clicking on 'Accept', Starring will start, leave the tab open, we'll let you know after the starring process. Feel free to jump on another tabs :)", function (ev) {
      ev.preventDefault();
      chrome.tabs.executeScript({
        file: 'star.user.js'
      });
  }, function(ev) {
      ev.preventDefault();
      // Do something here, when user denies the prompt
  });
}

document.getElementById('clickme').addEventListener('click', runSwitchjs);
