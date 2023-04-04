# Accessible and Responsive Portfolio Page

This project showcases the inputs necessary to achieve an accessible and responsive personal portfolio web page, created using HTML, CSS and JS.
<br><br>

> Live demo [_here_](link)

<br>

## Contents

- [Description](#description)
- [Core Features](#core-features)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Credits](#credits)
  <br><br>

## Description

The goal of this project is to create a responsive and accessible personal portfolio website that showcases the developer's skills and projects. The website consists of several sections, including a home page, an about section, a skills section, a projects section, and a contact form.

### Accessibility

Web accessibility means that websites, tools, and technologies are designed and developed so that people with disabilities and other circumstantial limitations can use them with as few barriers as possible.

Guidelines for accessibility include the Web Content Accessibility Guidelines ([WCAG](https://www.w3.org/WAI/standards-guidelines/wcag/)), laying out four core principles when creating an accessility feature;

1. **Perceivable**: Users must be able to perceive the information or user interfaces being presented. For example, light text on a light background could be difficult for some users with a visual impairment to perceive.

2. **Operable**: Users must be able to operate any user interfaces or navigation, and interfaces cannot require an interaction which the user cannot perform. A navigation bar with drop-down menus that only expand when a mouse cursor hovers over them, for example, would not be operable by keyboard users giving those menu items focus.

3. **Understandable**: Users must be able to understand any information or user interface that is presented to them. For example, if a user tried submitting a form and received an error such as “Error 113: Bad data”, they wouldn’t be able to understand what the error actually means or how to fix whatever caused the error.

4. **Robust**: Content must be accessible by current assistive technologies and other user agents, and must remain accessible as those technologies advance.

### Responsive Design

Responsive design ensures that sites can provide an effective User Experience across different browsers and screens to support different technologies.

## Core Features

### Semantic HTML

Semantic HTML tags describe their purpose and type of content. This is used to:

- Make the code easier to read;
- Make the site more accessible and easy to navigate for those using adaptive technologies like screen readers;
- Make the site easier to crawl for search engines; important for SEO (search engine optimisation).

### Accessible Colours

A **contrast ratio** is the difference in brightness between two colors expressed as a ratio. This site used Chrome Dev Tools to monitor conformance levels for contrast ratios:

1. **Level AA** (minimum) requires a contrast ratio of at least 4.5:1 for normal text and 3:1 for large text.
2. **Level AAA** (enhanced) requires a contrast ratio of at least 7:1 for normal text and 4.5:1 for large text.

Where **normal text** has font size < 18pts/ 24px (or < 14pts/ 18.66px if bold), and **large text** is any text larger than this.

Colour should not be relied upon to convey information, and is supplemented with clear instructions where used here.

### Keyboard Navigation

Some users may choose or require reliance on only using a keyboard to navigate and operate their device, without a mouse.

Interactive elements, therefore, must be **focusable** by using appropriate semantic HTML (or descriptors) to demonstrate context with appropriate event handling for keyboard usage and **clear focus styles** that show when the element is in use.

**Tab Order**, the order in which elements receive focus when pressing the tab key, defaults to their order in the HTML. This should be designed or adjusted (using `tabindex`) to match the visual layout on the screen, ensuring that any **hidden content** is placed in a container that uses the `display: none` CSS property when hidden, adjusted when it's required.

### Meaningful Text

When a user reads text or has it announced to them, they should be able to immediately understand what it means even without any surrounding context. A lack of meaningful text can affect all users, but especially those who rely on assistive technologies. This includes:

- Ensuring `links` contain appropriate context, not just "click here"
- Ensuring `forms` provide meaningful errors with helpful advice
- Ensuring all `images` contain at least `alt=''` (to avoid screen readers announcing a confusing image name), but preferably appropriate alt text to describe the image to the user

### WAI-ARIA

WAI-ARIA (a.k.a ARIA or the Web Accessibility Initiative’s Accessible Rich Internet Applications specification) - defines how to make content more accessible when native HTML is unable to do so, using aria labels and hiding content from the accessibility tree to improve navigation and comprehension.

WCAG's five rules of ARIA:

1. Always use native HTML elements and attributes over ARIA when possible.
2. Never change native semantics, unless you have no other choice.
3. All interactive ARIA controls must be usable with a keyboard.
4. Never use role='presentation' or aria-hidden='true' on focusable elements.
5. All interactive elements must have an accessible name.

### Responsive Images

Ensure images can be scaled, transformed or replaced to display images accross different screen sizes whilst ensuring the site performs efficiently by serving different images depending on the device and browser they use by; (1) serving multiple sizes of your image using `srcset`, or (2) using an image CDN service to manipulate images as required.

In CSS we can use `object-fit` and `object-position` to

To ensure optimal site performance, the following should also be considered when designing and adding imagery to a site;

- ensuring images serve a valuable purpose - or are removed
- using SVGs where possible
- compressing images
- using JS techniques such as lazy-loading to prevent images using resources until required

### Media queries

Media queries are used to support restyle of content and structure of an entire site or page depending on screen size, rather than customising individual elements.

This site supports 3 screen sizes:

- **Desktop**: wider than 1200px
- **Tablet**: 600-1200px
- **Mobile**: 320-600px

This is achieved by using a media query that offers a mobile version of the site layout when width < 600px.

Further responsive design elements includes; using the Viewport Meta Tag to establish resolution, avoiding fixed width and height (where possible) and using Flex and Grid to structure content.

<!-- The website is built using HTML, CSS, and JavaScript. The HTML and CSS files are organised using the BEM methodology and are structured in a way that is easy to read and maintain. The website is also responsive and adapts to different screen sizes using CSS media queries.

The website uses several CSS techniques to create a visually appealing design, including custom fonts, colours, and animations. The website also uses JavaScript to add interactivity to the contact form and to create a smooth scrolling effect. -->

<br><br>

## Installation

To run the website locally, follow these steps:
<br>

1. Clone the repository:

```bash
git clone https://github.com/{YOUR_GITHUB_USERNAME}/personal-portfolio.git
```

2. Navigate to the project directory:

```bash
cd personal-portfolio
```

3. Open the index.html file in your web browser.
   <br>

## Usage

The website can be used to showcase your skills and projects to potential employers or clients. You can customize the website by editing the HTML, CSS, and JavaScript files to reflect your own personal style and content.
<br>

## Contributing

Contributions to this project are welcome. If you find a bug or have a suggestion for improvement, please create an issue or submit a pull request.
<br><br>

## Credits

<hr>

Author: Lucy Chaplin, for [Peculiar Dynamics Ltd](https://peculiardynamics.co.uk/).

The project is part of the [Advanced HTML and CSS](https://www.theodinproject.com/lessons/advanced-html-and-css-personal-portfolio) curriculum of [The Odin Project](https://www.theodinproject.com), an online learning platform that provides free web development courses.
