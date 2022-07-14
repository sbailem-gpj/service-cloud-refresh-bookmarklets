if (document.gpj_IntervalID && document.gpj_IntervalID >= 0) {
    clearInterval(document.gpj_IntervalID);
    alert("Auto-Refresh has been disabled");
    document.gpj_IntervalID = -1;
} else {
    alert("Auto-Refresh was already not enabled on the page.");
}
