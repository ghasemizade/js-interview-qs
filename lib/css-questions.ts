export type Difficulty = "junior" | "mid" | "senior"

export interface Question {
  id: string
  difficulty: Difficulty
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
}

export const cssQuestions: Question[] = [
  // Junior Developer Questions
  {
    id: "css-junior-1",
    difficulty: "junior",
    question: "What does CSS stand for?",
    options: ["Computer Style Sheets", "Cascading Style Sheets", "Creative Sheet System", "Coded Style Syntax"],
    correctAnswer: 1,
    explanation:
      "CSS stands for Cascading Style Sheets. It is used to style and layout web pages and to apply different styles to different media types. The 'cascading' refers to how styles are applied in order of specificity and importance.",
  },
  {
    id: "css-junior-2",
    difficulty: "junior",
    question: "Which selector selects all elements with the class 'container'?",
    options: ["#container", ".container", "container", ":container"],
    correctAnswer: 1,
    explanation:
      "The dot (.) prefix is used to select elements by class name. So '.container' selects all elements with the class 'container'. The hash (#) is used for IDs, while plain element names select HTML tags.",
  },
  {
    id: "css-junior-3",
    difficulty: "junior",
    question: "What property is used to change the text color?",
    options: ["font-color", "text-color", "color", "text-style"],
    correctAnswer: 2,
    explanation:
      "The 'color' property changes the text color in CSS. For example, 'color: red;' will make text red. Other properties like 'background-color' are used for background colors, not text.",
  },
  {
    id: "css-junior-4",
    difficulty: "junior",
    question: "How do you add a background color to an element?",
    options: ["background-color", "bg-color", "color-background", "back-color"],
    correctAnswer: 0,
    explanation:
      "The 'background-color' property is used to set the background color of an element. For example, 'background-color: blue;' will set a blue background. You can use color names, hex codes, RGB, or HSL values.",
  },
  {
    id: "css-junior-5",
    difficulty: "junior",
    question: "What is the default value of the 'position' property?",
    options: ["absolute", "relative", "static", "fixed"],
    correctAnswer: 2,
    explanation:
      "The default value of the 'position' property is 'static'. This means the element is positioned according to the normal document flow. Elements with 'static' positioning ignore the top, bottom, left, and right properties.",
  },
  {
    id: "css-junior-6",
    difficulty: "junior",
    question: "Which property is used to control the space inside an element?",
    options: ["margin", "padding", "border", "spacing"],
    correctAnswer: 1,
    explanation:
      "The 'padding' property controls the space inside an element (between content and border). The 'margin' property controls the space outside an element. Both are essential for layout control.",
  },
  {
    id: "css-junior-7",
    difficulty: "junior",
    question: "How do you make text bold in CSS?",
    options: ["text-weight: bold", "font-weight: bold", "bold: true", "text-style: bold"],
    correctAnswer: 1,
    explanation:
      "The 'font-weight' property is used to make text bold. Common values are 'normal' (400), 'bold' (700), or numeric values from 100 to 900. This controls the thickness of the text.",
  },
  {
    id: "css-junior-8",
    difficulty: "junior",
    question: "What does the 'display: flex' property do?",
    options: ["Makes text flexible", "Creates a flexbox container", "Hides the element", "Makes the element inline"],
    correctAnswer: 1,
    explanation:
      "The 'display: flex' property creates a flexbox container, enabling flexible layout for its children. It allows you to align and distribute items along a main axis and cross axis with properties like 'justify-content' and 'align-items'.",
  },
  {
    id: "css-junior-9",
    difficulty: "junior",
    question: "Which property is used to change the font size?",
    options: ["text-size", "font-size", "size", "text-height"],
    correctAnswer: 1,
    explanation:
      "The 'font-size' property is used to set the size of text. You can use various units like 'px' (pixels), 'em', 'rem', '%', or 'pt'. For example, 'font-size: 16px;' sets the text to 16 pixels.",
  },
  {
    id: "css-junior-10",
    difficulty: "junior",
    question: "How do you select an element with the ID 'header'?",
    options: [".header", "#header", "header", ":header"],
    correctAnswer: 1,
    explanation:
      "The hash (#) prefix is used to select elements by ID. So '#header' selects the element with id='header'. IDs must be unique within a page. The dot (.) is used for classes, while plain names select HTML tags.",
  },

  // Mid-Level Developer Questions
  {
    id: "css-mid-1",
    difficulty: "mid",
    question: "What is the CSS Box Model composed of?",
    options: [
      "Border and padding",
      "Margin, border, padding, and content",
      "Only content and border",
      "Width and height only",
    ],
    correctAnswer: 1,
    explanation:
      "The CSS Box Model consists of four layers from outside to inside: margin (space outside the border), border, padding (space inside the border), and content. Understanding this model is crucial for controlling spacing and layout in CSS.",
  },
  {
    id: "css-mid-2",
    difficulty: "mid",
    question: "What does 'box-sizing: border-box' do?",
    options: [
      "Includes padding and border in the total width and height",
      "Only counts the border in calculations",
      "Excludes padding from width calculations",
      "Makes the box responsive",
    ],
    correctAnswer: 0,
    explanation:
      "With 'box-sizing: border-box', the width and height properties include the padding and border. This makes it much easier to calculate and control element sizes. Without it (default 'content-box'), the width only includes the content, and padding/border are added on top.",
  },
  {
    id: "css-mid-3",
    difficulty: "mid",
    question: "What is CSS specificity used for?",
    options: [
      "To optimize CSS file size",
      "To determine which CSS rule applies when multiple rules target the same element",
      "To make CSS code more readable",
      "To increase website performance",
    ],
    correctAnswer: 1,
    explanation:
      "Specificity determines which CSS rule takes precedence when multiple rules apply to the same element. It's calculated based on selectors: ID selectors (100), class selectors (10), and element selectors (1). Higher specificity wins unless '!important' is used.",
  },
  {
    id: "css-mid-4",
    difficulty: "mid",
    question: "What is the purpose of CSS Grid?",
    options: [
      "To create responsive tables",
      "To create a two-dimensional layout system for aligning items in rows and columns",
      "To replace flexbox entirely",
      "To improve loading speeds",
    ],
    correctAnswer: 1,
    explanation:
      "CSS Grid is a powerful layout system that allows you to create two-dimensional layouts with rows and columns. Unlike Flexbox (which is one-dimensional), Grid can position items both horizontally and vertically with properties like 'grid-template-columns' and 'grid-template-rows'.",
  },
  {
    id: "css-mid-5",
    difficulty: "mid",
    question: "What does 'z-index' control?",
    options: [
      "Text zoom level",
      "The stacking order of positioned elements (which appears on top)",
      "The zoom level of images",
      "The size of elements",
    ],
    correctAnswer: 1,
    explanation:
      "The 'z-index' property controls the stacking order of positioned elements (elements with position other than 'static'). Higher z-index values appear on top of lower values. It only works on positioned elements and doesn't affect normal document flow.",
  },
  {
    id: "css-mid-6",
    difficulty: "mid",
    question: "What is the difference between 'em' and 'rem' units?",
    options: [
      "They are the same",
      "'em' is relative to parent element font-size, 'rem' is relative to root font-size",
      "'rem' is relative to parent, 'em' is relative to root",
      "Neither is used in modern CSS",
    ],
    correctAnswer: 1,
    explanation:
      "'em' is a relative unit based on the font-size of the parent element, while 'rem' is based on the root element's font-size (usually the html element). This makes 'rem' more predictable for consistent scaling across components.",
  },
  {
    id: "css-mid-7",
    difficulty: "mid",
    question: "What does 'transform: translate()' do?",
    options: [
      "Changes the element's color",
      "Moves an element from its original position without affecting document flow",
      "Rotates the element",
      "Scales the element size",
    ],
    correctAnswer: 1,
    explanation:
      "'transform: translate()' moves an element from its original position without affecting the document flow or triggering reflows. It's performance-efficient because it uses GPU acceleration. Other transform functions include 'rotate()', 'scale()', and 'skew()'.",
  },
  {
    id: "css-mid-8",
    difficulty: "mid",
    question: "What is the purpose of CSS Media Queries?",
    options: [
      "To fetch media files",
      "To apply different styles based on device characteristics like screen width",
      "To add sound to websites",
      "To improve image quality",
    ],
    correctAnswer: 1,
    explanation:
      "Media Queries allow you to apply different CSS styles based on device characteristics like viewport width, height, orientation, and color scheme. They're essential for responsive design: '@media (max-width: 768px) { ... }' applies styles only on smaller screens.",
  },
  {
    id: "css-mid-9",
    difficulty: "mid",
    question: "What does 'flex-grow' property do?",
    options: [
      "Makes text larger",
      "Defines how much a flex item will grow relative to other items",
      "Increases the flex container size",
      "Makes items shrink",
    ],
    correctAnswer: 1,
    explanation:
      "'flex-grow' defines how much a flex item will grow relative to other flex items when there is extra space. A value of 1 means it will grow equally with other items set to 1. A value of 2 means it grows twice as much as items with value 1.",
  },
  {
    id: "css-mid-10",
    difficulty: "mid",
    question: "What is CSS Cascading?",
    options: [
      "A way to organize CSS files",
      "The process of determining which styles apply based on specificity, inheritance, and order",
      "A type of animation",
      "A method to compress CSS",
    ],
    correctAnswer: 1,
    explanation:
      "Cascading refers to how CSS rules are applied in order. When multiple rules target the same element, the one with the highest specificity wins. If specificity is equal, the rule that appears later in the code takes precedence. This is why CSS is called 'Cascading' Style Sheets.",
  },

  // Senior Developer Questions
  {
    id: "css-senior-1",
    difficulty: "senior",
    question: "What is BEM (Block Element Modifier) methodology?",
    options: [
      "A CSS preprocessor",
      "A naming convention for CSS classes to improve maintainability and reduce specificity issues",
      "A JavaScript library",
      "A type of CSS animation",
    ],
    correctAnswer: 1,
    explanation:
      "BEM is a naming methodology that uses blocks (reusable components), elements (parts of blocks), and modifiers (variations). Example: 'button', 'button__text', 'button--primary'. This approach improves code organization, reusability, and makes specificity issues easier to manage.",
  },
  {
    id: "css-senior-2",
    difficulty: "senior",
    question: "What is CSS-in-JS?",
    options: [
      "JavaScript code inside CSS files",
      "Writing CSS styles using JavaScript, often as component-scoped styles",
      "A deprecated method of styling",
      "A JavaScript framework",
    ],
    correctAnswer: 1,
    explanation:
      "CSS-in-JS is an approach where CSS is written as JavaScript objects or template literals within JavaScript files. Libraries like styled-components and Emotion implement this. Benefits include component-scoped styles, dynamic styling, and better integration with component logic.",
  },
  {
    id: "css-senior-3",
    difficulty: "senior",
    question: "What does 'will-change' property optimize?",
    options: [
      "Element visibility",
      "Browser rendering by hinting which properties will animate, allowing optimization",
      "Element size",
      "Text color transitions",
    ],
    correctAnswer: 1,
    explanation:
      "'will-change' is a performance hint to the browser that an element's property will change, allowing it to optimize rendering. However, overusing it can harm performance. Use it sparingly for properties that will actually animate: 'will-change: transform, opacity;'.",
  },
  {
    id: "css-senior-4",
    difficulty: "senior",
    question: "What is the difference between 'outline' and 'border'?",
    options: [
      "They are the same thing",
      "'border' is inside the box model, 'outline' is outside and doesn't affect layout",
      "'outline' is inside, 'border' is outside",
      "Only one can be used per element",
    ],
    correctAnswer: 1,
    explanation:
      "The 'border' is part of the box model and affects element layout, while 'outline' is drawn outside the border without affecting layout. Outlines are commonly used for focus states. Both can be applied to the same element simultaneously.",
  },
  {
    id: "css-senior-5",
    difficulty: "senior",
    question: "What are CSS Custom Properties (CSS Variables)?",
    options: [
      "Properties that only work in CSS files",
      "Reusable values defined with '--' prefix that can be accessed via var() function",
      "A type of CSS selector",
      "Properties that require vendor prefixes",
    ],
    correctAnswer: 1,
    explanation:
      "CSS Custom Properties (variables) are declared with a '--' prefix like '--primary-color: blue;' and accessed with 'var(--primary-color)'. They're scoped to the element where declared and cascade to children. This enables dynamic theming and reduces code duplication.",
  },
  {
    id: "css-senior-6",
    difficulty: "senior",
    question: "What is CSS Containment used for?",
    options: [
      "Containing elements inside containers",
      "Improving performance by limiting scope of style and layout calculations",
      "A method to organize stylesheets",
      "Preventing element overflow",
    ],
    correctAnswer: 1,
    explanation:
      "'contain' property improves rendering performance by limiting the scope of style, layout, paint, and size calculations. For example, 'contain: layout paint;' tells the browser that the element's children won't affect the outside layout, allowing optimizations.",
  },
  {
    id: "css-senior-7",
    difficulty: "senior",
    question: "What is the difference between 'position: absolute' and 'position: fixed'?",
    options: [
      "They are identical",
      "'absolute' is relative to nearest positioned ancestor, 'fixed' is relative to viewport",
      "'fixed' is relative to parent, 'absolute' is relative to viewport",
      "'absolute' is the old version of 'fixed'",
    ],
    correctAnswer: 1,
    explanation:
      "'position: absolute' positions an element relative to its nearest positioned (non-static) ancestor or the document body. 'position: fixed' positions an element relative to the viewport and stays in place even when scrolling. Both remove elements from the normal document flow.",
  },
  {
    id: "css-senior-8",
    difficulty: "senior",
    question: "What is critical CSS?",
    options: [
      "CSS that breaks the website",
      "CSS required to render the above-the-fold content, should be inlined for performance",
      "CSS for mobile devices",
      "A CSS validation tool",
    ],
    correctAnswer: 1,
    explanation:
      "Critical CSS is the minimal CSS needed to render above-the-fold content. Inlining critical CSS in the HTML head reduces render-blocking time and improves First Contentful Paint (FCP). Non-critical CSS is deferred with techniques like 'media' attribute or async loading.",
  },
  {
    id: "css-senior-9",
    difficulty: "senior",
    question: "What does 'aspect-ratio' property do?",
    options: [
      "Adjusts text ratio",
      "Maintains a defined aspect ratio, automatically adjusting dimensions when one changes",
      "Zooms the element",
      "Changes element rotation",
    ],
    correctAnswer: 1,
    explanation:
      "'aspect-ratio' property maintains a specific ratio between width and height. For example, 'aspect-ratio: 16 / 9;' maintains a 16:9 ratio. It's particularly useful for responsive images and videos without needing padding-bottom hacks.",
  },
  {
    id: "css-senior-10",
    difficulty: "senior",
    question: "What is the purpose of CSS Subgrid?",
    options: [
      "Creating smaller grids",
      "Allowing grid items to participate in the parent grid's column/row structure",
      "A technique to hide content",
      "A preprocessor feature",
    ],
    correctAnswer: 1,
    explanation:
      "'display: grid; grid-template-columns: subgrid;' allows a grid item to use its parent grid's column and row lines. This enables better alignment of nested components with the parent grid without redefining the grid structure.",
  },
]
