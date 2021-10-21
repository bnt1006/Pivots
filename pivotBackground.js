//this takes the "pivots" out of local storage and makes them into contextMenu options
chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.local.get(null, function(pivots) {
        for (name in pivots){
            chrome.contextMenus.create({
                "id": pivots[name].pivotName, 
                "title": pivots[name].pivotName, 
                "contexts": ["selection"]});
        }
    });
});

//this handles navigating to the website after clicking the pivot
chrome.contextMenus.onClicked.addListener(function(clickedData){
    chrome.storage.local.get(null, function(pivots) {
        var clicked = clickedData.menuItemId;
        clicked = clicked.replace(/\s/g, "");
        var begin = pivots[clicked].beginning;
        var text = clickedData.selectionText.toString();
        text = encodeURI(text);
        var end = pivots[clicked].ending;
    
        var url = begin + text + end;
        window.open(url);
    });
})
