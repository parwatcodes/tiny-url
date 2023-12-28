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
    document.getElementById("tiny-url").innerHTML = data.tiny_url;
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
