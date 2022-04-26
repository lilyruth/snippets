const copyToClipboard = () => {

   let copyText = document.getElementById('text');
   let textArea = document.createElement("textarea");
   textArea.value = copyText.textContent;
   textArea.select();
   // for mobile
   textArea.setSelectionRange(0,99999);
   navigator.clipboard.writeText(textArea.value);
   alert("Copied the text: " + textArea.value);
}

