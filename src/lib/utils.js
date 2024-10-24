import DomToImage from 'dom-to-image';
export default async function downloadCapture(filename) {
    const capture = document.querySelector('#capture');

    if (!capture) {
        return;
    }

    if (capture.classList.contains('capture-container')) {
        capture.style.width = '1436px';
        capture.style.height = '945px';
        capture.style.maxHeight = '945px';
    }

    if (capture.classList.contains('capture-container-desktop')) {
        capture.style.width = '1436px';
        capture.style.height = '800px';
        capture.style.maxHeight = '800px';
    }

    if (capture.classList.contains('capture-container-video')) {
        capture.style.width = '1920px';
        capture.children[1].style.display = 'grid';
    }

    const dataUrl = await DomToImage.toPng(capture);

    const link = document.createElement("a");
    link.download = filename;
    link.href = dataUrl;
    link.click();

    capture.style.width = 'auto';
    capture.style.height = 'auto';
    capture.style.maxHeight = 'none';
    if (!capture.children[1]) return;
    capture.children[1].style.display = 'inherit';
}