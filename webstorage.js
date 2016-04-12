// Function for saving the settings to the SQLite database, just in case we need to
function send_to_database(form)
{
    var db = openDatabase('Settings.db', '1.0', 'Player settings database', '1024 * 1024');
    var name = document.getElementByID('name_input').value;
    var ms = document.getElementByID('mouse_sensitivity_input').value;
    
    db.transaction(function(tx)
    {
        tx.executeSQL("INSERT INTO SETTINGS(name, mouse_sensitivity) VALUES(?, ?)", (name, ms));
    });
}

// Function to save the submitted data to the browsers local storage
function save_to_local_storage(form)
{
    var name = document.getElementByID('name_input').value;
    var ms = document.getElementByID('mouse_sensitivity_input').value;
    
    localStorage.setItem("name", name);
    localStorage.setItem("mouse_sensitivity", ms);
}

// If no name already in local storage, create input forms for the 
// user to enter their name and preferred mouse sensitivity
if(localStorage.getItem("name") === null)
{
    var form = document.createElement("form");
    form.setAttribute("method", "post");
    form.setAttribute("action", "javascript:");
    form.setAttribute("onsubmit", "save_to_local_storage(this)");
    
    var name_input = document.createElement("input");
    name_input.setAttribute("type", "text");
    name_input.setAttribute("name", "Username:");
    
    var mouse_sensitivity_input = document.createElement("input");
    mouse_sensitivity_input.setAttribute("type", "number");
    mouse_sensitivity_input.setAttribute("name", "Mouse Sensitivity:");
    
    var submit = document.createElement("input");
    submit.setAttribute("type", "submit");
    submit.setAttribute("name", "Submit");
    
    form.appendChild(name_input);
    form.appendChild(mouse_sensitivity_input);
    form.appendChild(submit);
    
    document.getElementsByTagName('body')[0].appendChild(form);
}
// Otherwise, load and display the players settings
else
{
    var name = localStorage.getItem("name");
    var ms = localStorage.getItem("mouse_sensitivity");
    
    document.write(name);
    document.write(ms);
}

