let divForInput = document.getElementById('pastInput');

document.getElementById('f/male').addEventListener('change', function() {
    let style = this.value == "other" ? 'block' : 'none';
    divForInput.style.display = style;
})