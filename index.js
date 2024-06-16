function isMobile() {
    return /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(navigator.userAgent);
}

window.onload = function() {
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
    })

    if (isMobile()) {
        alert('This website was not designed for phone. Please use a laptop for the best experience.');
    }
}