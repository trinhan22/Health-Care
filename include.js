// FILE: include.js
function loadIncludes() {
    const includes = document.querySelectorAll('[data-include-html]');

    includes.forEach(element => {
        const url = element.getAttribute('data-include-html');

        if (!url) return;

        fetch(url)
            .then(response => response.text())
            .then(html => {
                element.innerHTML = html;
                element.removeAttribute('data-include-html');
            })
            .catch(error => {
                console.error("Lỗi Include JS:", error);
                element.innerHTML = `<p style="color: red; padding: 10px;">Không thể tải: ${url}</p>`;
            });
    });
}

document.addEventListener('DOMContentLoaded', loadIncludes);