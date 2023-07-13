// const butInstall = document.getElementById('buttonInstall');

// // Logic for installing the PWA
// // TODO: Add an event handler to the `beforeinstallprompt` event
// let deferredPrompt;
// window.addEventListener('beforeinstallprompt', (event) => {
//   // Prevent the default behavior of the browser
//   event.preventDefault();
//   // Store the event for later use
//   deferredPrompt = event;
//   // Show the install button or other UI elements
//   butInstall.style.display = 'block';
// });

// // TODO: Implement a click event handler on the `butInstall` element
// butInstall.addEventListener('click', async () => {
//     if (deferredPrompt) {
//         // Show the installation prompt to the user
//         deferredPrompt.prompt();
//         // Wait for the user to respond to the prompt
//         const { outcome } = await deferredPrompt.userChoice;
//         // Clear the deferred prompt variable
//         deferredPrompt = null;
//         // Hide the install button or other UI elements
//         butInstall.style.display = 'none';
//         // Perform actions based on the user's choice
//         if (outcome === 'accepted') {
//           console.log('The app was installed.');
//         } else {
//           console.log('The app installation was declined.');
//         }
//       }
// });

// // TODO: Add an handler for the `appinstalled` event
// window.addEventListener('appinstalled', (event) => {
//     console.log('The app was successfully installed.');
// });

const butInstall = document.getElementById('buttonInstall');

let deferredPrompt;

window.addEventListener('beforeinstallprompt', (event) => {
  event.preventDefault();
  deferredPrompt = event;
  butInstall.style.display = 'block';
});

butInstall.addEventListener('click', async () => {
  if (deferredPrompt) {
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    deferredPrompt = null;
    butInstall.style.display = 'none';
    if (outcome === 'accepted') {
      console.log('The app was installed.');
    } else {
      console.log('The app installation was declined.');
    }
  }
});

window.addEventListener('appinstalled', (event) => {
  console.log('The app was successfully installed.');
});
