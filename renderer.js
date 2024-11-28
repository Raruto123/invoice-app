const information = document.getElementById('info');
const information2 = document.getElementById('info2');


information.innerText = `This app is using Chrome (v${versions.chrome()}), Node.js (v${versions.node()}), and Electron (v${versions.electron()})`;

async function letsTest() {
    const yes = await versions.verification();
    information2.innerText = yes;
}

letsTest()