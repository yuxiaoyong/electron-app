
console.log('==================')

window.onload = function () {
    document.getElementById('readTextFromFile').onclick = async function () {
        let textFromFile = document.getElementById('textFromFile')
        let text = await API.readFile()
        console.log(text)
        textFromFile.value = text
    }

    document.getElementById('sendTextToFile').onclick = function () {
        let textToFile = document.getElementById('textToFile')
        API.writeFile(textToFile.value)
    }
}