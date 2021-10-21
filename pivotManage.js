window.onload = function() {
    document.getElementById("add").onclick = function(){ //add a pivot to the chrome storage
        var name = document.getElementById("pname").value;
        name = name.replace(/\s/g, "");
        var urlB = document.getElementById("urlB").value;
        var urlE = document.getElementById("urlE").value;
        var value = {
            pivotName: document.getElementById("pname").value,
            beginning: urlB,
            ending: urlE
            };

        chrome.storage.local.set({[name]: value}, function() {
            console.log('Pivot ' + value.pivotName + ' has been added');
        });
    }

    document.getElementById("remove").onclick = function(){ //remove a single pivot
        var name = document.getElementById("pname").value;
        name = name.replace(/\s/g, "");
        chrome.storage.local.remove([name]);
    }

    document.getElementById("removeAll").onclick = function(){ //remove all pivots
        chrome.storage.local.clear();
    }
}
