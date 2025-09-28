const themeSelector = document.querySelector
const bodyElement = document.querySelector('body');

const blueLogoSrc = 'path/to/your/blue-logo.png';
const whiteLogoSrc = 'path/to/your/byui-logo_white.png';
function changeTheme() {
    const selectedTheme = themeSelector.value;

    

}

// add an event listener to the themeSelector element here.
// Use the changeTheme function as the event handler function.
themeSelector.addEventListener('change', changeTheme);
