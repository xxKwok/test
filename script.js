function colorizeText() {
  let inputText = document.getElementById('inputText').value;
  let outputText = '';
  for (let i = 0; i < inputText.length; i++) {
    // 生成随机十六进制颜色代码
    let randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    outputText += `<span style="color:${randomColor}">${inputText[i]}</span>`;
  }
  document.getElementById('textOutput').innerHTML = outputText;
}
