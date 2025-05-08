# Harpaviljongen Website

This is the website for **Harpaviljongen**, a cozy restaurant that offers weekly lunch menus. The website is built with **React** and **Vite** and is designed with a focus on simplicity and elegance. The project will later include a backend with **Node.js** and **Express** to dynamically load menus and other content.

## Project Setup

### 1. Clone the repository

To get started, clone the repository:

```bash
git clone <repository-url>
cd harpaviljongen
```

### 2. Install dependencies

Install all the necessary dependencies:

```bash
npm install
```

### 3. Start the development server

Run the following command to start the development server:

```bash
npm run dev
```

The app will be live at `http://localhost:3000`.

## Project Structure

```
harpaviljongen/
├── public/
│   └── logo.png            // your logo file
├── src/
│   ├── assets/
│   │   └── logo.png        // logo and other media
│   ├── components/
│   │   ├── Header.jsx      // header component
│   │   ├── Menu.jsx        // menu component
│   │   └── Event.jsx       // event or special offers component
│   ├── pages/
│   │   └── Home.jsx        // homepage
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css           // global CSS
├── package.json
└── vite.config.js
```

### Key Components:

-   **Header.jsx**: Contains the logo and main header.
-   **Menu.jsx**: Displays the weekly lunch menu.
-   **Home.jsx**: The homepage that ties together the `Header` and `Menu`.

## Fonts

This project uses the **Lora** font from Google Fonts for a clean and modern serif typography.

```html
<link
	href="https://fonts.googleapis.com/css2?family=Lora:wght@400;700&display=swap"
	rel="stylesheet" />
```

In the global CSS file (`index.css`), the following styles are applied:

```css
body {
	margin: 0;
	font-family: 'Lora', serif;
	background-color: #f1f0ee;
	color: #333;
}
```

## Colors

The website follows the color scheme to match the branding of **Harpaviljongen**:

-   **Background Color**: `#f1f0ee` (Light beige/cream)
-   **Primary Accent Color**: `#a3cbe5` (Light blue)
-   **Text Color**: `#333` (Dark grey)
-   **Button/Action Color**: `#1a4f6b` (Dark blue)

---

## Styling Guidelines

### Layout

-   The header has a centered logo and the title "Veckans Lunch på Harpaviljongen."
-   The menu is displayed as a list, with each item having a light background and separated by margins.
-   The typography focuses on legibility and simplicity with a primary focus on the Lora font.

### Components

-   **Header**: Displays the restaurant logo and main heading. The logo has a circular design with a light blue background.
-   **Menu**: Displays the weekly menu with names, descriptions, and prices. Each menu item has a consistent styling with a soft background color and bold headings.

### Example Menu Item Structure

-   **Dish Name**: Bold and in dark blue color.
-   **Description**: Regular text, providing details of the dish.
-   **Price**: Highlighted in light blue color.

### Responsive Design

-   The layout adjusts for mobile devices, ensuring the text is legible and the structure is organized properly.

## Future Improvements

-   Add dynamic backend functionality with **Node.js** and **Express**.
-   Integrate a database for storing weekly menu data.
-   Implement a booking system for reservations.
-   Improve UI with animation libraries or transitions for interactivity.

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
