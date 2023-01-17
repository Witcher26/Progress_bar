const progressNode = document.querySelector('.progress-done');

setTimeout(() => {
    progressNode.style.opacity = 1;
    progressNode.style.width = progressNode.getAttribute('data-done') +"%";
}, 1500); 