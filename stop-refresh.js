// This checks for a value set to track the timer
if (document.gpj_IntervalID && document.gpj_IntervalID >= 0) {
    // If value exists and is set, stop the timer
    clearInterval(document.gpj_IntervalID);
    clearInterval(document.gpj_ColorCycleID);
    // Clear the hue change on ServiceCloud logo
    document.getElementsByClassName("slds-global-header__logo")[0].style.filter = "hue-rotate(0deg)";
    // Notify user that the timer was stopped
    alert("Auto-Refresh has been disabled");
    // Unset the value
    document.gpj_IntervalID = -1;
} else {
    // If not set, notify the user that it wasn't enabled
    // Might remove this line later as it is only really necessary for debug
    alert("Auto-Refresh was already not enabled on the page.");
}
