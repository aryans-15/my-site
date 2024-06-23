function isMobile() {
    return /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(navigator.userAgent);
}

function lightFog() {
    VANTA.FOG({
        el: 'body',
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        highlightColor: 0xccecff,
        midtoneColor: 0xdde9e9,
        lowlightColor: 0xcdd6e8,
        speed: 5.00
    });
}

function darkFog() {
    VANTA.FOG({
        el: 'body',
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        highlightColor: 0x050502,
        midtoneColor: 0x01016e,
        lowlightColor: 0x000000,
        baseColor: 0x13172d
    });
}

const setTheme = (theme) => {
    const footer = document.getElementById("footer");
    if (theme === "dark-mode") {
        footer.innerHTML = '<i>last updated 06/22/2024</i> &nbsp; &nbsp; <a href="#" id="dark-mode-toggle" class="dark-mode"><i class="fa-solid fa-sun"></i> light mode</a>';
        darkFog();
    } else {
        footer.innerHTML = '<i>last updated 06/22/2024</i> &nbsp; &nbsp; <a href="#" id="dark-mode-toggle" class="light-mode"><i class="fa-solid fa-moon"></i> dark mode</a>';
        lightFog();
    }
    
    const toggleLink = document.getElementById('dark-mode-toggle');
    toggleLink.removeEventListener('click', toggleTheme);
    toggleLink.addEventListener('click', toggleTheme);

    const elementsToUpdate = [
        document.body,
        document.querySelector('.intro-text'),
        document.querySelector('.navbar'),
        document.querySelector('footer'),
        ...document.querySelectorAll('a'),
        ...document.querySelectorAll('.highlight')
    ];    

    elementsToUpdate.forEach(element => {
        try {
            element.classList.remove('light-mode', 'dark-mode');
            if (theme === "dark-mode") element.classList.add(theme);
        } catch {
            // console.log("Skipping " + element);
        }
    });
    localStorage.setItem('theme', theme);
};

const toggleTheme = (event) => {
    event.preventDefault();
    let currentTheme = localStorage.getItem('theme'); 
    const newTheme = currentTheme === "light-mode" ? "dark-mode" : "light-mode";
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
};

window.onload = function() {
    if (isMobile()) {
        alert('This website was not designed for phone. Please use a laptop for the best experience.');
    }

    let currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        setTheme(currentTheme);
    } else {
        setTheme('light-mode'); 
    }
    
    const toggleLink = document.getElementById('dark-mode-toggle');
    toggleLink.addEventListener('click', toggleTheme);
}

