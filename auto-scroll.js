// Get a handle on the scrolling list view
window.gpj_ListHandle = window.listHandle = document.getElementsByClassName("uiScroller")[0];
// Get a handle on the list info bar (item count, etc)
window.gpj_ListStatus = document.getElementsByTagName("force-list-view-manager-status-info")[0].getElementsByClassName("countSortedByFilteredBy")[0];

// Function that performs the work
function gpj_autoscroll() {
  // This grabs just the number at the beginning of the status text
  let status = window.gpj_ListStatus.innerHTML.split("item")[0].split("+");
  
  // Check how many items are in status as it's split chunks of text.
  // Since we split on "+", if the character exists there will be two items (the number and a blank space)
  // Otherwise there will be only one item, the number
  if (status.length > 1) {
    // Convert the number from text to an actual number
    let count = Number(status[0]);
    // This gets where we're scrolled to on the page
    let position = window.gpj_ListHandle.scrollTop + window.gpj_ListHandle.clientHeight;
    // If there are less than 2000 items loaded, keep going.
    if (count < 2000) {
      // Only run the code to scroll to the bottom of the page if we're not already there
      if (position < window.gpj_ListHandle.scrollHeight) {
        // Scroll to the bottom of the page
        window.listHandle.scrollTo(0, window.listHandle.scrollHeight);
      }
      // Sets this function to run again 1 second later
      setTimeout(gpj_autoscroll, 1000);
    } else {
      // If the check above find there are 2000 or more emails, it stops and alerts that it's loaded all it could
      alert("More than 2000 emails")
    };
  } else {
    // If the function above checking for "+" finds there was no "+", then everything is loaded. Alert that it's loaded everything.
    alert("End of List Reached")
  }
}

// Kick off the scripot
gpj_autoscroll();
