// This part just stops the timer if it's already running so you can't click it 5 times and have it refresh 5 times a minute.
try {
    clearInterval(document.gpj_IntervalID);
    clearInterval(document.gpj_ColorCycleID);
} catch {}

// This is a function that finds the button and fires off the "click" event
// This does not run on it's own, it gets run by a later bit of code
function gpj_ForceRefresh() {
    document.getElementsByClassName("slds-grid")[12].getElementsByClassName("slds-m-left_xx-small")[3].getElementsByClassName("slds-button-group")[0].firstChild.click();
    // Reset the ServiceCloud color to ensure it's always in sync
    document.gpj_HueIndex = 0;
}

// This is a function that's called every second to slowly change the color of the ServiceCloud logo
// It does so by cycling through hue shifts, completing one cycle every minute (coinciding with the above refresh)
function gpj_ColorCycle() {
    document.gpj_HueIndex += 360/60;
    if (document.gpj_HueIndex > 359) {
        document.gpj_HueIndex = 0;
    }
    document.getElementsByClassName("slds-global-header__logo")[0].style.filter = `hue-rotate(${document.gpj_HueIndex}deg)`;
}

// This bit here checks that the item it finds is the correct button.
// If successful, it sets up the timer. Otherwise it tells you it didn't work.
if (document.getElementsByClassName("slds-grid")[12].getElementsByClassName("slds-m-left_xx-small")[3].getElementsByClassName("slds-button-group")[0].firstChild.name == "refreshButton") {
    // This tells the page to run the "click" code above once every 60,000 milliseconds (1 minute)
    document.gpj_IntervalID = setInterval(gpj_ForceRefresh, 60000);
    
    // Reset the ServiceCloud logo color so we can start cycling those colors as an indicator.
    document.gpj_HueIndex = 0;
    document.getElementsByClassName("slds-global-header__logo")[0].style.filter = `hue-rotate(${document.gpj_HueIndex}deg)`;
    document.gpj_ColorCycleID = setInterval(gpj_ColorCycle, 1000);
    
    // Shows an alert telling the user that it's been turned on
    alert("Auto-Refresh Has Been Enabled");
} else {
    alert("Could not enable Auto-Refresh. Page contents do not match code.")
}
