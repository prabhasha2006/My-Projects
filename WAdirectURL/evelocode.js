let outputURL = ""
let outputNumber = ""
const numberTyping = (text) => {
    text.value = text.value.trim()
    if(text.value.trim().startsWith("07")){
        outputNumber = text.value.replace("07","94")
    }
}
const textTyping = (input) => {
    input.style.height = input.scrollHeight +"px"
    outputURL = input.value.replace(/ /g,"%20").replace(/\n/g,"%0A")
    outputURL = `https://wa.me/${outputNumber}?text=${outputURL}`
    output.value = outputURL
    copyLable.style.color = "rgb(168, 168, 168)"
    copyLable.innerHTML = "Copy this url <i class='fa fa-copy'></i>"
    //console.log(outputURL)
}
const copyUrl = () => {
    navigator.clipboard.writeText(outputURL)
    copyLable.style.color = "#0f0"
    copyLable.innerHTML = "Copied. <i class='fa fa-check'></i>"
}