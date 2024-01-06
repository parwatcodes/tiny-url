# TinyURL Shortener

## Overview

TinyURL Shortener is a simple web application that allows you to shorten long URLs with ease. It comes with a beautiful user interface, URL validation checks, and a convenient "Copy to Clipboard" button for quick sharing.

<img width="1028" alt="image" src="https://github.com/parwatcodes/tiny-url/assets/19905275/114825a3-696a-4fd6-a653-7daeb2bdc5d1">

## Features

- **User-Friendly Interface**: The application provides an intuitive and aesthetically pleasing interface for an effortless user experience.

- **URL Validation Check**: Ensure that only valid URLs are shortened, preventing potential issues with broken links.

- **Copy to Clipboard Button**: Quickly copy the shortened URL to your clipboard with the click of a button, saving you time and effort.

## How to Use

1. Visit the TinyURL Shortener website.
2. Enter the long URL you want to shorten in the designated input field.
3. Click the "Shorten it" button.
4. Copy the shortened URL to your clipboard using the "Copy" button.
5. Share the shortened URL as needed.

## License

TinyURL Shortener is open-source software licensed under the [MIT License](LICENSE). Feel free to use, modify, and distribute it according to the terms of the license.

## Installation

If you want to host your own instance of TinyURL Shortener, follow these steps:

1. Clone the repository:

    ```bash
    git clone https://github.com/parwatcodes/tiny-url.git
    ```

2. Navigate to the project directory:

    ```bash
    cd tiny-url
    ```

3. Active the virtual environment to run the django python server.
   
   ```bash
   source venv/bin/activate
   ```
   
4. Navigate to the app

   ```bash
   cd url_shortener
   python manage.py server
   ```
   
5. Run the ui inside `ui` folder using npm package called `http-server`

  ```bash
  cd ui
  http-server
```

## Contributing

We welcome contributions! If you'd like to enhance TinyURL Shortener or report issues, please submit a pull request or open an issue on the [GitHub repository](https://github.com/your-username/tinyurl-shortener).


Happy Shortening!
