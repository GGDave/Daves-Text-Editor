const butInstall = document.getElementById("buttonInstall");

  // TODO: Add an event handler to the `beforeinstallprompt` event.
  //In the function below we configure how the prompt to install the software will be 
  //triggered and displayed.
window.addEventListener("beforeinstallprompt", (event) => {//in this line of code we set up an 
  //event listener called "beforeinstallprompt", this function will then trigger when the browser
  // thinks the application can be installed. App requirements before intall are "Web App Manifest"
  //"Registered Service Workers"  
  window.deferredPrompt = event; 
  //after the function has been triggered, this line will assign the event property to 
  //deferredPrompt. this will make the property a "window" property and make it globaly 
  //accessible, and allow the install to happen at a later time. 
  butInstall.classList.toggle("hidden", false);
  //this line of code will make the button visable to be able to click the button and start 
  // the instalation.
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener("click", async () => {// this function will trigger when the button
  // is clicked.
  const promptEvent = window.deferredPrompt;//in this line we assign defferredPrompt to a constant.
  //to be passed to an if statement.
  if (!promptEvent) {//this if statement will verify if the event has been executed. 
    return;
  }
  promptEvent.prompt();//this line of code will trigger the built in instalation prompt,
  //that will ask the user if they want to install the app.

  window.deferredPrompt = null;//after the install the prompt will be set to "null"
  //to prevent the prompt from being displayed again.
  butInstall.classList.toggle("hidden", true);//after the install button has been clicke this 
  //line will add the class of "hidden" to it, removing the prompt from the screen.
});

// TODO: Add an handler for the `appinstalled` event
//this function will prevent the promp from being displayed after the app had been installed.
window.addEventListener("appinstalled", (event) => {//in this line we add an event listener to 
    //the window object and will trigger when the app is installed.
  window.deferredPrompt = null;//when the "appinstalled" event fires this line will set 
  //window.deferredPrompt to null. preventing the event to be triggered again.
});

