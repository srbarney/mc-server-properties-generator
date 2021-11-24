/**
 * Gets the Minecraft properties form element.
 *
 * @return {element} 
 */
function getFormElement()
{
	return document.querySelector("#form-mc-server-properties");
}

/**
 * Gets the element ID for a give Minecraft property name.
 *
 * @param {string} propertyName the Minecraft property name.
 * @return {string} 
 */
function getInputId(propertyName)
{
	return "input-" + propertyName;
}

/**
 * Creates a checkbox as a child of the provided parent element.
 *
 * @param {element} parentElement the parent element.
 * @param {string} propertyName the Minecraft property name.
 * @param {string} defaultValue the default value of the new element.
 * @param {string} description the description text for the Minecraft property.
 */
function createCheckbox(parentElement, propertyName, defaultValue, description)
{
	var checked = "";
	if (defaultValue === true)
	{
		checked = "checked";
	}

	var id = getInputId(propertyName);
	formElementHtml = '<div class="switch"><p><label>False<input type="checkbox" id="' + id + '" ' + checked + '/><span class="lever"></span>True</label></p></div>';
	parentElement.appendChild(createFormRow(propertyName, description, formElementHtml));
}

/**
 * Creates a divider element as a child of the provided parent element.
 *
 * @param {element} parentElement the parent element.
 */
function createDivider(parentElement)
{
	var div = document.createElement('div');
	div.className = "divider";
	parentElement.appendChild(div);
}

/**
 * Creates a range (slider) element as a child of the provided parent element.
 *
 * @param {element} parentElement the parent element.
 * @param {string} propertyName the Minecraft property name.
 * @param {string} minValue the minimum value for the range.
 * @param {string} maxValue the maximum value for the range.
 * @param {string} defaultValue the default value of the new element.
 * @param {string} step the step interval for the range.
 * @param {string} description the description text for the Minecraft property.
 */
function createRange(parentElement, propertyName, minValue, maxValue, defaultValue, step, description)
{
	var id = getInputId(propertyName);
	formElementHtml = '<p class="range-field"><input type="range" id="' + id + '" min="' + minValue + '" max="' + maxValue + '" value="' + defaultValue + '" step="' + step + '" /></p>';
	parentElement.appendChild(createFormRow(propertyName, description, formElementHtml));
}

/**
 * Creates a select (combobox) element as a child of the provided parent element.
 *
 * @param {element} parentElement the parent element.
 * @param {string} propertyName the Minecraft property name.
 * @param {Array} options the array of options for the select.
 * @param {string} defaultValue the default value of the new element.
 * @param {string} description the description text for the Minecraft property.
 */
function createSelect(parentElement, propertyName, options, defaultValue, description)
{
	var optionsHtml = "";
	options.forEach(element =>
	{
		var selected = "";
		if (element == defaultValue)
		{
			selected = "selected"
		}
		optionsHtml += '<option value="' + element + '" ' + selected + '>' + element + '</option>';
	});

	var id = getInputId(propertyName);
	formElementHtml = '<div class="input-field"><p><select id="' + id + '">' + optionsHtml + '</select></p></div>';
	parentElement.appendChild(createFormRow(propertyName, description, formElementHtml));
}

/**
 * Creates a text input element as a child of the provided parent element.
 *
 * @param {element} parentElement the parent element.
 * @param {string} propertyName the Minecraft property name.
 * @param {string} defaultValue the default value of the new element.
 * @param {string} description the description text for the Minecraft property.
 */
function createTextInput(parentElement, propertyName, defaultValue, description)
{
	var id = getInputId(propertyName);
	formElementHtml = '<div class="input-field"><input placeholder="' + defaultValue + '" id="' + id + '" type="text" value="' + defaultValue + '"/></div>';
	parentElement.appendChild(createFormRow(propertyName, description, formElementHtml));
}

/**
 * Creates a form row element with the Minecraft property name, description, and specified HTML content.
 *
 * @param {string} propertyName the Minecraft property name.
 * @param {string} description the description text for the Minecraft property.
 * @param {string} formElementHtml the HTML content that will be placed in the row.
 * @return {element} 
 */
function createFormRow(propertyName, description, formElementHtml, createDividerAfter)
{
	var div = document.createElement('div');
	div.className = "row";
	div.innerHTML = '<div class="col s4"><h5>' + propertyName + '</h5>' + formElementHtml + '</div><div class="col s8"><p>' + description + '</p></div>';
	return div;
}

/**
 * Creates the generate button and inserts it into the properties form element.
 */
function createGenerateButton()
{
	var div = document.createElement('div');
	var buttonText = "Generate";
	div.className = "row";
	div.innerHTML = '<div class="col s12"><div class="section"><a class="waves-effect waves-light btn" onclick="saveProperties()">' + buttonText + '</a></div></div>';

	var form = getFormElement();
	form.appendChild(div);
}

/**
 * Creates the load properties button and inserts it into the properties form element.
 */
function createLoadButton()
{
	var div = document.createElement('div');
	var buttonText = "Load Properties";
	div.className = "row";
	div.innerHTML = '<div class="col s12"><div class="section"><a class="waves-effect waves-light btn" id="main-modal-open">' + buttonText + '</a></div></div>';

	var form = getFormElement();
	form.appendChild(div);
}

/**
 * Initializes the properties form with the properties with their defaults.
 */
function initializeForm()
{
	var form = getFormElement();

	createLoadButton();
	createDivider(form);

	globalMcProperties.forEach(p => {

		switch(p["propertyType"])
		{
			case "checkbox":
				createCheckbox(form, p["propertyName"], p["defaultValue"], p["description"]);
				break;

			case "select":
				createSelect(form, p["propertyName"], p["options"], p["defaultValue"], p["description"]);
				break;

			case "range":
				createRange(form, p["propertyName"], p["minValue"], p["maxValue"], p["defaultValue"], p["step"], p["description"]);
				break;

			case "text":
				createTextInput(form, p["propertyName"], p["defaultValue"], p["description"]);
				break;
		}

		createDivider(form);
	});

	createGenerateButton();
}

/**
 * Loads the server.properties text content from the text area.
 */
function loadProperties()
{
	var textInput = document.getElementById("textarea-load");
	var lines = textInput.value.split('\n');
	const propertyRegex = /([^=]+)=(.*)/gm;
	for (var i = 0; i < lines.length; i++)
	{
		var match = Array.from(lines[i].matchAll(propertyRegex))[0];
		if (match && match.length == 3)
		{
			setPropertyValue(match[1], match[2]);
		}
	}
}

/**
 * Generates the server.properties text and outputs it to the text area.
 */
function saveProperties()
{
	var elems = document.querySelectorAll("[id^='input-']");
	var outputText = "";
	elems.forEach(element =>
	{
		var propertyName = element.id.replace("input-", "");
		var propertyValue = element.value;
		if (element.type === "checkbox")
		{
			propertyValue = false;
			if (element.checked)
			{
				propertyValue = true;
			}
		}

		var textLine = propertyName + '=' + propertyValue;
		outputText += textLine + "\n";
	});

	var textOutput = document.getElementById("textarea-generated");
	textOutput.value = outputText;
	selectTab("tab-generated");
}

/**
 * Sets the value of the specifice Minecraft server property.
 *
 * @param {string} propertyName the Minecraft property name.
 * @param {string} value the new value for the property.
 */
function setPropertyValue(propertyName, value)
{
	console.log("Set property [" + propertyName + "=" + value  +"]");
	var propertyNameLower = String.prototype.toLowerCase.apply(propertyName);
	var valueLower = String.prototype.toLowerCase.apply(value);
	var element = document.getElementById(getInputId(propertyNameLower));
	if (element)
	{
		var elementTagLower = String.prototype.toLowerCase.apply(element.tagName);
		if (element.type == "checkbox")
		{
			var checked = false;
			if (valueLower === "true")
			{
				checked = true;
			}
			element.checked = checked;
		}
		else if (elementTagLower == "select")
		{
			element.value = value;
			var instance = M.FormSelect.getInstance(element);
			if (instance)
			{
				instance.input.value = value;
			}
		}
		else
		{
			element.value = value;
		}
	}
}

/**
 * Selects the main tab by element identifier.
 *
 * @param {string} tabId the identifier of the tab element to select.
 */
function selectTab(tabId)
{
	var tabs = document.getElementById("main-tab");
	var instance = M.Tabs.getInstance(tabs);
	instance.select(tabId);
}

/**
 * Initializes the modal with the specified identifier.
 *
 * @param {string} modalId the identifier of the modal to initialize.
 */
function initializeModal(modalId)
{
	var modalCloseId = modalId + "-close";
	var modalOpenId = modalId + "-open";

	// Get the modal
	var modal = document.getElementById(modalId);

	// Get the button that opens the modal
	var button = document.getElementById(modalOpenId);

	// Get the <span> element that closes the modal
	var span = document.getElementById(modalCloseId);

	// When the user clicks the button, open the modal 
	button.onclick = function()
	{
		modal.style.display = "block";
	}

	// When the user clicks on <span> (x), close the modal
	span.onclick = function()
	{
		modal.style.display = "none";
	}

	// When the user clicks anywhere outside of the modal, close it
	window.onclick = function(event)
	{
		if (event.target == modal)
		{
			modal.style.display = "none";
		}
	}
}

document.addEventListener("DOMContentLoaded", function ()
{
	// Create all the HTML
	initializeForm();

	// Initialize the modal dialog
	initializeModal("main-modal");

	// Initialize all range inputs
	var elems = document.querySelectorAll("input[type=range]");
	M.Range.init(elems);

	// Initialize all selects
	elems = document.querySelectorAll("select");
	M.FormSelect.init(elems);

	// Initialize main tabs
    var elems = document.querySelector("#main-tab");
    var instance = M.Tabs.init(elems);
	instance.select("tab-java-properties");
});