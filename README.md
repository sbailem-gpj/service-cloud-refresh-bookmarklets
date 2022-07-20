# Bookmarklets To Auto-Refresh Service Cloud Queues

You can add these bookmarks by dragging the following links to your bookmarks bar:

[Turn On Auto Refresh](javascript:try{clearInterval(document.gpj_IntervalID),clearInterval(document.gpj_ColorCycleID)}catch{}function gpj_ForceRefresh(){document.getElementsByClassName("slds-grid")[12].getElementsByClassName("slds-m-left_xx-small")[3].getElementsByClassName("slds-button-group")[0].firstChild.click(),document.gpj_HueIndex=0}function gpj_ColorCycle(){document.gpj_HueIndex+=6,document.gpj_HueIndex>359&&(document.gpj_HueIndex=0),document.getElementsByClassName("slds-global-header__logo")[0].style.filter=`hue-rotate(${document.gpj_HueIndex}deg)`}"refreshButton"==document.getElementsByClassName("slds-grid")[12].getElementsByClassName("slds-m-left_xx-small")[3].getElementsByClassName("slds-button-group")[0].firstChild.name?(document.gpj_IntervalID=setInterval(gpj_ForceRefresh,6e4),document.gpj_HueIndex=0,document.getElementsByClassName("slds-global-header__logo")[0].style.filter=`hue-rotate(${document.gpj_HueIndex}deg)`,document.gpj_ColorCycleID=setInterval(gpj_ColorCycle,1e3),alert("Auto-Refresh Has Been Enabled")):alert("Could not enable Auto-Refresh. Page contents do not match code.");)

[Turn Off Auto Refresh](javascript:document.gpj_IntervalID&&document.gpj_IntervalID>=0?(clearInterval(document.gpj_IntervalID),clearInterval(document.gpj_ColorCycleID),document.getElementsByClassName("slds-global-header__logo")[0].style.filter="hue-rotate(0deg)",alert("Auto-Refresh has been disabled"),document.gpj_IntervalID=-1):alert("Auto-Refresh was already not enabled on the page.");)

**Note:** The above links have their javascript minified so will functionally match the scripts but will not have identifical text
