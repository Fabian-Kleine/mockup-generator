import DomToImage from 'dom-to-image';

export default async function delay(ms) {
    await new Promise(resolve => setTimeout(resolve, ms));
}

export default async function downloadCapture(filename) {
    const dataUrl = await DomToImage.toPng(document.querySelector('#capture'));

    const link = document.createElement("a");
    link.download = filename;
    link.href = dataUrl;
    link.click();
}