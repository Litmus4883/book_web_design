const btn = document.getElementById("btn");
const txt = document.getElementById("txt");
btn.addEventListener ("click", function() {
    const choice = window.confirm ("click conplete");
    if(choice) {
        txt.textContent = "okが選択されました";
    } else {
        txt.textContent = "キャンセルが選択されました";
    }
})