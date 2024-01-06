document.addEventListener("DOMContentLoaded", function () {
  var btn = document.getElementById("submit");
  var outputBtn = document.getElementById("output");
  var inputUrlEle = document.getElementById("original_url");
  var copyBtn = document.getElementById("copy-btn");

  btn.addEventListener("mouseover", function () {
    if (!inputUrlEle.value || !isValidURL(inputUrlEle.value)) {
      inputUrlEle.style.border = '1px solid red';
      btn.style.boxShadow = 'none';
      btn.style.cursor = 'not-allowed';
      btn.setAttribute('disabled', true);
    } else {
      btn.style.boxShadow = 'rgba(0, 0, 0, 0.35) 0px 5px 15px';
      btn.style.cursor = 'pointer';
      btn.removeAttribute('disabled');
    }
  });

  btn.addEventListener("mouseout", function () {
    inputUrlEle.style.border = '1px solid #ebe7e7';
    btn.style.boxShadow = 'none';
  });

  outputBtn.addEventListener("click", function() {
    var tiny_url = outputBtn.innerText;
    var textarea = document.createElement("textarea");

    textarea.value = tiny_url;
    document.body.appendChild(textarea);
    textarea.select();
    textarea.setSelectionRange(0, 99999);

    document.execCommand("copy");

    document.body.removeChild(textarea);

    outputBtn.style.border = '1px solid green';
    outputBtn.style.borderStyle = 'dashed';
    copyBtn.innerText = "Copied.";
    copyBtn.style.color = 'green';
  });
});

function isValidURL(url) {
  // Regular expression for a valid URL
  var urlPattern = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;

  // Test the URL against the pattern
  return urlPattern.test(url);
}
