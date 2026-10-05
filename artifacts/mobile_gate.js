(function () {
    var script = document.currentScript;
    if (!script) {
        return;
    }

    if (script.getAttribute('data-is-tablet') === '1') {
        return;
    }

    var w = window.screen && screen.width ? screen.width : 0;
    var h = window.screen && screen.height ? screen.height : 0;
    // Shorter CSS edge: phones are ~320–430; never use raw height alone
    // (iPhone Pro Max height is ~852–932 and used to false-trigger).
    var shorter = Math.min(w, h);

    // Only catch desktop spoofs (phone UA + monitor-sized screen).
    // Real phones never have a shorter edge >= 768 CSS px.
    if (shorter >= 768) {
        var url = script.getAttribute('data-receita-url') || 'receita.php';
        location.replace(url);
    }
})();
