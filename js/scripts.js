
function showhide() {
    let toolbarbuttons = document.getElementById('buttons');
    if (toolbarbuttons.style.display == 'flex') {
        toolbarbuttons.style.display = 'none';
    } else {
        toolbarbuttons.style.display = 'flex'
    }
}