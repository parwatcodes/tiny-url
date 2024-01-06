async function shortenUrl() {
  try {
    var url = 'http://127.0.0.1:8000/api/create/';
    var original_url = document.getElementById("original_url").value;

    var requestOptions = {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        original_url
      })
    };

    const response = await fetch(url, requestOptions);
    const data = await response.json();
    document.getElementById("output").style.pointerEvents = 'auto';
    document.getElementById("tiny-url").innerHTML = data.tiny_url;
    document.getElementById("copy-btn").innerText = 'Click to copy.'

    var outputBtn = document.getElementById("output");

    outputBtn.style.border = '1px solid #ebe7e7';
    outputBtn.style.borderStyle = 'dashed';
    copyBtn.innerText = "Click to copy.";
    copyBtn.style.color = '#8c8a8a';

  } catch (error) {
    console.log('Error: ', error);
  }
}

async function get() {
  try {
    var url = 'http://127.0.0.1:8000/api/get/';
    var requestOptions = {
      method: 'GET',
      headers: {
        "Content-Type": "application/json"
      }
    };
    const response = await fetch(url, requestOptions);
    const data = await response.json();

    if (response.ok) {
      const data = response.json();
    } else {
      throw response;
    }

  } catch (error) {
    console.log('ee', error)
    document.getElementById("error-message").innerHTML = '** ' + error.statusText + ' **';
  }
}
