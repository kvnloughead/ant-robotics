# Configuration Readme

This project is configurable via a collection of JavaScript files found in the [src/config/](./src/config/) directory. 

All images for the site are stored in [public/images/](./public/images). To change images or add additional images you simply store the new image in that directory and write its filepath in the appropriate config location. Make sure that this filepath __is written relative to the public directory.__ So, it should be of the form `./images/rest-of-path-to-image`.

Here is a detailed list of all configurable features, with links to the relevant config files. 

- All section titles are configurable from within the corresponding config files.
- All text labels for buttons, (keyed to the `id` prop of the `Button` as key: [button.js](src/config/button.js)
- The names of the nav links: [nav-bar.js](src/config/nav-bar.js) 
- The text elements in the header: [header.js](src/config/header.js)
- The image, title/subtitle and text fields for the [benefits](src/config/benefits.js), [cards-with-images](src/config/cards-with-images.js) and [team](src/config/team.js) sections are configurable.
  - The text fields in each of these three sections can be formatted using html tags, including `<b>` for bold and `<i>` for italics.
- The products carousel is fully configurable, including both keys and values for the product attributes: [products.js](src/config/products.js)
- The images and titles from the gallery: [gallery.js](src/config/gallery.js)
- The keys and values of items in the contacts section: [contacts.js](src/config/contacts.js)
- All text parts of the form component: [form.js](src/config/form.js)
  - Form title
  - Input labels
  - Whether or not an input is `required`. If the input is required, the corresponding label is marked with an `*`.
  - Validation error messages.

