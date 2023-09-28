function copyCode(button) {
    const codeBlock = button.nextElementSibling;
    const codeText = codeBlock.textContent;
    const textArea = document.createElement("textarea");
    textArea.value = codeText;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);


    const popup = document.createElement("div");
    popup.className = "popup";
    popup.textContent = "Copied";
    document.body.appendChild(popup);


    button.textContent = "Copied";
    button.classList.add("copied");


    const popupRect = popup.getBoundingClientRect();
    popup.style.left = "50%";
    popup.style.transform = "translateX(-50%)";


    setTimeout(function () {
        popup.style.opacity = "0";
        button.textContent = "Copy";
        button.classList.remove("copied");
        setTimeout(function () {
            document.body.removeChild(popup);
        }, 300);
    }, 2000);
}