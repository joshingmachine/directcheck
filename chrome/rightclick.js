var selection_callbacks = []; 

chrome.extension.onMessage.addListener(function (request) { 
	var callback = selection_callbacks.shift(); 
	callback(request); 
});


function getSelection(callback) { 
	selection_callbacks.push(callback); 
	chrome.tabs.executeScript(null, { file:"selection.js" }); 
};

function createDirectoryRequest(selectText) {
	var form = document.createElement("form");
	form.setAttribute("method", "post");
	form.setAttribute("action", "http://directory.andrew.cmu.edu/search/basic/results");
	form.setAttribute("target", "_blank");

	var hiddenField = document.createElement("input");
	hiddenField.setAttribute("id", "search_generic_search_terms);");		
	hiddenField.setAttribute("name", "search[generic_search_terms]");
	hiddenField.setAttribute("value", selectText);
	form.appendChild(hiddenField);
	document.body.appendChild(form);		
	form.submit();

}

chrome.contextMenus.create({title: 'DirectCheck "%s"', 
                    contexts:["selection"], 
                    onclick: function(info, tab){ createDirectoryRequest(info.selectionText); }})