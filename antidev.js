(function() {
    function detectDevTools() {
        const threshold = 160;
        if (window.outerWidth - window.innerWidth > threshold ||
            window.outerHeight - window.innerHeight > threshold) {
            // Redirect if devtools open
            window.location.href = "about:blank";
        }
    }

    // Detect F12 key
    document.addEventListener("keydown", function(e) {
        if (e.key === "F12" || (e.ctrlKey && e.shiftKey && (e.key === "I" || e.key === "J"))) {
            e.preventDefault();
            window.location.href = "about:blank";
        }
    });

    // Detect right click (context menu)
    document.addEventListener("contextmenu", function(e) {
        e.preventDefault();
        alert("Right-click is disabled on this site.");
    });

    // Run detection on interval
    setInterval(detectDevTools, 1000);
})();