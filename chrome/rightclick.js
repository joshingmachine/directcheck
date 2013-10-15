var selection_callbacks = []; 

chrome.extension.onMessage.addListener(function (request) { 
	var callback = selection_callbacks.shift(); 
	callback(request); 
});


function getSelection(callback) { 
	selection_callbacks.push(callback); 
	chrome.tabs.executeScript(null, { file:"selection.js" }); 
};

var i = 0;

var form = document.createElement("form");
form.setAttribute("method", "post");
form.setAttribute("action", "http://directory.andrew.cmu.edu/search/basic/results");

var hiddenField = document.createElement("input");
hiddenField.setAttribute("id", "search_generic_search_terms);");        
hiddenField.setAttribute("name", "search[generic_search_terms]");
form.appendChild(hiddenField);
document.body.appendChild(form);   

function createDirectoryRequest(selectText) {
	window.open("", "_blank-" + i);
    form.setAttribute("target", "_blank-"+i);
    i++;

    hiddenField.setAttribute("value", selectText);    
    form.submit();
}

chrome.contextMenus.create({title: 'DirectCheck "%s"', 
                    contexts:["selection"], 
                    onclick: function(info, tab){ createDirectoryRequest(info.selectionText); }})