// This part just stops the timer if it's already running so you can't click it 5 times and have it refresh 5 times a minute.
try {
    clearInterval(document.gpj_IntervalID);
} catch {}

// This is a function that finds the button and fires off the "click" event
// This does not run on it's own, it gets run by a later bit of code
function gpj_ForceRefresh() {
    document.getElementsByClassName("slds-grid")[12].getElementsByClassName("slds-m-left_xx-small")[3].getElementsByClassName("slds-button-group")[0].firstChild.click();
}

// This bit here checks that the item it finds is the correct button.
// If successful, it sets up the timer. Otherwise it tells you it didn't work.
if (document.getElementsByClassName("slds-grid")[12].getElementsByClassName("slds-m-left_xx-small")[3].getElementsByClassName("slds-button-group")[0].firstChild.name == "refreshButton") {
    // This tells the page to run the "click" code above once every 60,000 milliseconds (1 minute)
    document.gpj_IntervalID = setInterval(gpj_ForceRefresh, 60000);
    // This changes the ServiceCloud logo green to indicate that it's active
    document.getElementsByClassName("slds-global-header__logo")[0].style.filter = "hue-rotate(290deg)";
    // Shows an alert telling the user that it's been turned on
    alert("Auto-Refresh Has Been Enabled");
} else {
    alert("Could not enable Auto-Refresh. Page contents do not match code.")
}
