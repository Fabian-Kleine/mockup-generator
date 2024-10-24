import DomToImage from 'dom-to-image';
export default async function downloadCapture(filename) {
    const capture = document.querySelector('#capture');

    if (!capture) {
        return;
    }

    if (capture.classList.contains('capture-container')) {
        capture.setAttribute('style', 'width: 1436px; height: 945px;');
    }

    if (capture.classList.contains('capture-container-video')) {
        capture.setAttribute('style', 'width: 1920px;');
        capture.children[1].setAttribute('style', 'display: grid;');
    }

    const dataUrl = await DomToImage.toPng(capture);

    const link = document.createElement("a");
    link.download = filename;
    link.href = dataUrl;
    link.click();

    capture.removeAttribute('style');
    capture.children[1].removeAttribute('style');
}