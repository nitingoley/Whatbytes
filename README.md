# Whatbytes - Your Tech Store

Whatbytes is a modern e-commerce web application for discovering and purchasing the best tech products. Built with [Next.js](https://nextjs.org/), it features a clean UI, product filtering, and a shopping cart.

## Features

- Product catalog with categories and filtering
- Product detail pages
- Shopping cart functionality
- Responsive layout
- Custom header and footer components

## Project Structure

```
.
├── app/                # Next.js app directory (routing, pages, layout)
│   ├── layout.js       # Root layout with header/footer
│   ├── page.js         # Home page
│   ├── cart/           # Cart page
│   └── product/        # Product detail pages
├── components/         # Reusable React components
│   ├── Footer.jsx
│   ├── Header.jsx
│   ├── ProductCard.jsx
│   └── Sidebar.jsx
├── data/               # Static data (e.g., product list)
│   └── product.js
├── public/             # Static assets (images, icons)
├── store/              # (Reserved for state management, e.g., Redux or Zustand)
├── styles/             # Global and component styles
├── package.json        # Project metadata and scripts
└── README.md           # Project documentation
```

## Getting Started

### Prerequisites

- Node.js (v16 or newer recommended)
- npm or yarn

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/whatbytes.git
    cd whatbytes
    ```

2. Install dependencies:
    ```sh
    npm install
    # or
    yarn install
    ```

### Running the Development Server

```sh
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

### Building for Production

```sh
npm run build
npm start
```

## Customization

- **Add/Edit Products:** Modify [`data/product.js`](data/product.js).
- **Update Styles:** Edit [`app/globals.css`](app/globals.css) or component-specific styles.
- **Change Layout:** Update [`app/layout.js`](app/layout.js) for global layout changes.

## Contributing

Contributions are welcome! Please open issues or submit pull requests.

## License

This project is licensed under the MIT License.