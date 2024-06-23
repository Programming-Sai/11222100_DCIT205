# Golden-Books

## Overview
Golden Books is an online platform designed to provide users with a comprehensive collection of books. The website allows users to view all available books, search for specific titles, and add new books to the collection. This README provides a guide on how to set up and navigate the website.

## Table of Contents
1. [Getting Started](#getting-started)
2. [File Structure](#file-structure)
3. [Dependencies](#dependencies)
4. [Usage](#usage)

## Getting Started
To get started with the Golden Books website, follow these steps:

### Prerequisites
Make sure you have the following installed:
- A modern web browser (e.g., Chrome, Firefox, Edge, Safari)
- A text editor (e.g., VSCode, Sublime Text) for editing the code

### Installation
1. Clone the repository or download the ZIP file and extract it to your desired location.
    ```sh
    git clone https://github.com/Programming-Sai/Golden-Books.git
    ```
2. Open the project folder in your text editor.

## File Structure
The project consists of the following structure:

```graphql
golden-books/
│
├── Images/
|   ├── ...
│   └── icon.png
│
├── Scripts/
│   └── GoldenBooks.js
│
├── Styles/
│   ├── GoldenBooks.css
│   └── fontawesome-free-6.4.2-web/
│       ├── css/
│       │   └── all.css
│       └── ...
│
├── index.html
├── Search_Books_Page.html
├── Add_Books_Page.html
└── README.md
```

### Description of Files
- **index.html**: The main page of the website, displaying all books.
- **Search_Books_Page.html**: A page for searching specific books.
- **Add_Books_Page.html**: A page for adding new books to the collection.
- **Images/**: Contains the icon image used in the website.
- **Scripts/**: Contains the JavaScript file (`GoldenBooks.js`) that handles the website's functionality.
- **Styles/**: Contains the CSS file (`GoldenBooks.css`) that styles the website and FontAwesome library for icons.

## Dependencies
The website uses the following dependencies:
- FontAwesome: For icons used throughout the website.

## Usage
### Navigation
- **Header**: Contains the logo and navigation links to the main pages (`All Books`, `Search`, and `Add Books`).
- **Main Section**: Displays the content of the currently selected page.
- **Footer**: Provides additional information about the website, office details, useful links, a message form, and social media icons.

### Pages
1. **All Books (index.html)**:
   - Displays a list of all available books.
   - Accessible via the `All Books` link in the navigation bar.

2. **Search Books (Search_Books_Page.html)**:
   - Allows users to search for specific books.
   - Accessible via the `Search` link in the navigation bar.

3. **Add Books (Add_Books_Page.html)**:
   - Provides a form for adding new books to the collection.
   - Accessible via the `Add Books` link in the navigation bar.

### Footer
- **About Us**: Information about the website.
- **Office**: Contact details of the office.
- **Links**: Useful links to different sections of the website.
- **Message Us**: A form to send a message to the website's administrators.
- **Get In Touch**: Social media icons to connect with the website on various platforms.
