export type Difficulty = "junior" | "mid" | "senior"

export interface Question {
    id: number
    question: string
    options: string[]
    correct: number
    explanation: string
    difficulty: Difficulty
}

export const htmlQuestions: Question[] = [
    // JUNIOR DEVELOPER
    {
        id: 1,
        question: "What does HTML stand for?",
        options: [
            "Hyper Text Markup Language",
            "High Tech Modern Language",
            "Home Tool Markup Language",
            "Hyperlinks and Text Markup Language",
        ],
        correct: 0,
        difficulty: "junior",
        explanation:
            "HTML stands for HyperText Markup Language. It's the standard markup language for creating web pages and is the foundation of web development.",
    },
    {
        id: 2,
        question: "Which tag is used to define the main heading of a page?",
        options: ["<heading>", "<h1>", "<header>", "<head>"],
        correct: 1,
        difficulty: "junior",
        explanation:
            "The <h1> tag is used for the most important heading on a page. There are six heading levels (h1-h6), with h1 being the largest and most important.",
    },
    {
        id: 3,
        question: "What is the correct syntax for creating a hyperlink?",
        options: [
            "<link>Click here</link>",
            "<a href='url'>Click here</a>",
            "<url>Click here</url>",
            "<href>Click here</href>",
        ],
        correct: 1,
        difficulty: "junior",
        explanation:
            "The correct syntax for a hyperlink is <a href='url'>text</a>. The 'href' attribute specifies the URL the link points to.",
    },
    {
        id: 4,
        question: "Which tag is used to insert an image?",
        options: ["<img src='file'>", "<image src='file'>", "<img href='file'>", "<picture src='file'>"],
        correct: 0,
        difficulty: "junior",
        explanation:
            "The <img> tag is used to embed images in HTML. It requires a 'src' attribute for the image path and should have 'alt' text for accessibility.",
    },
    {
        id: 5,
        question: "What is the purpose of the <meta> tag?",
        options: [
            "Define page metadata like character set and viewport",
            "Create page sections",
            "Add styling to the page",
            "Define page navigation",
        ],
        correct: 0,
        difficulty: "junior",
        explanation:
            "The <meta> tag provides metadata about the HTML document, including character encoding, viewport settings for responsive design, and SEO information.",
    },
    {
        id: 6,
        question: "Which tag is used for creating an unordered list?",
        options: ["<ol>", "<ul>", "<list>", "<li>"],
        correct: 1,
        difficulty: "junior",
        explanation:
            "<ul> creates an unordered list (bulleted), while <ol> creates an ordered list (numbered). List items are wrapped in <li> tags.",
    },
    {
        id: 7,
        question: "What does the 'alt' attribute do in an image tag?",
        options: [
            "Changes the image size",
            "Provides alternative text if image fails to load",
            "Adds a border to the image",
            "Links to another page",
        ],
        correct: 1,
        difficulty: "junior",
        explanation:
            "The 'alt' attribute provides alternative text that displays if the image cannot be loaded. It's also important for accessibility and SEO.",
    },
    {
        id: 8,
        question: "Which tag is used to create a form?",
        options: ["<input>", "<form>", "<field>", "<data>"],
        correct: 1,
        difficulty: "junior",
        explanation:
            "The <form> tag is used to create an HTML form for user input. It contains form elements like input fields, buttons, and text areas.",
    },
    {
        id: 9,
        question: "What is the purpose of the 'type' attribute in an input tag?",
        options: [
            "Defines the type of data the input should accept",
            "Styles the input field",
            "Sets the input color",
            "Disables the input",
        ],
        correct: 0,
        difficulty: "junior",
        explanation:
            "The 'type' attribute specifies what kind of input is expected: text, email, password, checkbox, radio, date, number, etc. This enables browser validation.",
    },
    {
        id: 10,
        question: "Which tag is used to define a paragraph?",
        options: ["<p>", "<para>", "<paragraph>", "<text>"],
        correct: 0,
        difficulty: "junior",
        explanation:
            "The <p> tag defines a paragraph. Browsers automatically add margins before and after paragraph content for proper spacing.",
    },

    // MID-LEVEL DEVELOPER
    {
        id: 11,
        question: "What is semantic HTML?",
        options: [
            "HTML that looks good visually",
            "HTML that uses tags to describe the meaning of content, not just presentation",
            "HTML that only uses div tags",
            "HTML written in a specific order",
        ],
        correct: 1,
        difficulty: "mid",
        explanation:
            "Semantic HTML uses tags like <header>, <nav>, <article>, <section>, <footer> to give meaning to content. This improves accessibility, SEO, and code maintainability.",
    },
    {
        id: 12,
        question: "Which of these is a semantic HTML5 tag?",
        options: ["<container>", "<article>", "<block>", "<content>"],
        correct: 1,
        difficulty: "mid",
        explanation:
            "<article> is a semantic tag that defines independent, self-contained content. Other semantic tags include <section>, <nav>, <aside>, <header>, <footer>.",
    },
    {
        id: 13,
        question: "What is the difference between <section> and <div>?",
        options: [
            "They are identical",
            "<section> is semantic and represents a thematic grouping, <div> is non-semantic",
            "<section> is only for styling",
            "<div> is semantic and <section> is not",
        ],
        correct: 1,
        difficulty: "mid",
        explanation:
            "<section> is a semantic tag used for thematic grouping of content, while <div> is a non-semantic container. Use <section> to improve document structure and accessibility.",
    },
    {
        id: 14,
        question: "What is the 'data' attribute used for?",
        options: [
            "Store dates only",
            "Store custom data related to elements",
            "Create data input fields",
            "Connect to databases",
        ],
        correct: 1,
        difficulty: "mid",
        explanation:
            "data-* attributes allow you to store custom information on HTML elements. Example: <div data-user-id='123'>. Access via element.dataset.userId in JavaScript.",
    },
    {
        id: 15,
        question: "Which attribute makes a form input required?",
        options: ["mandatory", "required", "must-fill", "necessary"],
        correct: 1,
        difficulty: "mid",
        explanation:
            "The 'required' attribute prevents form submission until the field is filled. It's built-in form validation: <input type='text' required>.",
    },
    {
        id: 16,
        question: "What is the purpose of the <label> tag?",
        options: [
            "Add captions to images",
            "Associate text with form inputs for accessibility and usability",
            "Create page labels",
            "Style form inputs",
        ],
        correct: 1,
        difficulty: "mid",
        explanation:
            "<label> associates text with form inputs. Use the 'for' attribute to link it to an input's 'id': <label for='email'>Email</label><input id='email'>.",
    },
    {
        id: 17,
        question: "What does the <figure> tag represent?",
        options: [
            "Mathematical figures only",
            "Illustrations, diagrams, code snippets, or other standalone content",
            "Image containers only",
            "Table data",
        ],
        correct: 1,
        difficulty: "mid",
        explanation:
            "<figure> wraps standalone content (images, diagrams, code) with optional <figcaption>. Improves semantics and accessibility for visual content.",
    },
    {
        id: 18,
        question: "What is the correct way to add a favicon to a page?",
        options: [
            "<favicon src='icon.ico'>",
            "<link rel='icon' href='icon.ico'>",
            "<meta favicon='icon.ico'>",
            "<icon src='icon.ico'>",
        ],
        correct: 1,
        difficulty: "mid",
        explanation:
            "Add a favicon using <link rel='icon' href='path/to/icon.ico'> in the <head>. This displays a small icon in the browser tab.",
    },
    {
        id: 19,
        question: "Which form input type would you use for date selection?",
        options: ["<input type='calendar'>", "<input type='date'>", "<input type='datetime'>", "<input type='day'>"],
        correct: 1,
        difficulty: "mid",
        explanation:
            "<input type='date'> creates a date picker. Related types include 'datetime-local', 'month', 'week', and 'time' for different temporal inputs.",
    },
    {
        id: 20,
        question: "What does the 'async' attribute do in a script tag?",
        options: [
            "Makes JavaScript run slower",
            "Downloads script in parallel and executes when ready, doesn't block HTML parsing",
            "Runs the script before CSS loads",
            "Makes the script optional",
        ],
        correct: 1,
        difficulty: "mid",
        explanation:
            "The 'async' attribute downloads the script in parallel with HTML parsing and executes immediately when ready. Use for independent scripts. 'defer' executes after parsing.",
    },

    // SENIOR DEVELOPER
    {
        id: 21,
        question: "What is ARIA and why is it important in HTML?",
        options: [
            "A styling framework",
            "Accessible Rich Internet Applications attributes that improve accessibility for assistive technologies",
            "An HTML template language",
            "A CSS preprocessor",
        ],
        correct: 1,
        difficulty: "senior",
        explanation:
            "ARIA (Accessible Rich Internet Applications) provides attributes to enhance accessibility. Examples: aria-label, aria-describedby, role, aria-expanded. Critical for screen readers.",
    },
    {
        id: 22,
        question: "What is the difference between WCAG 2.0 and WCAG 2.1?",
        options: [
            "They are the same",
            "WCAG 2.1 builds on 2.0 with additional criteria for mobile accessibility and accessibility for users with cognitive disabilities",
            "WCAG 2.1 is deprecated",
            "WCAG 2.0 covers more topics",
        ],
        correct: 1,
        difficulty: "senior",
        explanation:
            "WCAG 2.1 extends WCAG 2.0 with additional success criteria, including mobile accessibility (touch targets, orientation) and cognitive accessibility requirements.",
    },
    {
        id: 23,
        question: "Which of these is NOT a correct use of the role attribute?",
        options: [
            "<div role='button'>Click me</div>",
            "<section role='main'>Content</section>",
            "<span role='heading' aria-level='1'>Title</span>",
            "<div role='table'>Data</div> for visual tables only",
        ],
        correct: 3,
        difficulty: "senior",
        explanation:
            "The 'role' attribute should be used to clarify purpose, not replace semantic HTML. Use semantic tags when available; role should supplement, not substitute. Use actual <table> for data tables.",
    },
    {
        id: 24,
        question: "What is the purpose of skip links in accessible design?",
        options: [
            "Link styling",
            "Allow keyboard users to skip repetitive navigation and jump to main content",
            "Improve page load speed",
            "Required for responsive design",
        ],
        correct: 1,
        difficulty: "senior",
        explanation:
            "Skip links are hidden links that allow keyboard users to jump to main content, bypassing repetitive navigation. Essential for keyboard accessibility.",
    },
    {
        id: 25,
        question: "How should you structure heading hierarchy for accessibility?",
        options: [
            "Start with h2, then h1",
            "Use multiple h1 tags",
            "Start with h1 and progress in order (h1, h2, h3) without skipping levels",
            "Use only h3 tags throughout",
        ],
        correct: 2,
        difficulty: "senior",
        explanation:
            "Maintain proper heading hierarchy: start with h1, progress sequentially (h1→h2→h3), and don't skip levels. Screen readers rely on this structure for navigation.",
    },
    {
        id: 26,
        question: "What is the purpose of the preload and prefetch resource hints?",
        options: [
            "They are the same thing",
            "preload loads resources needed soon, prefetch loads resources needed later",
            "Only prefetch is used in modern development",
            "They only work for images",
        ],
        correct: 1,
        difficulty: "senior",
        explanation:
            "<link rel='preload'> loads critical resources for current page. <link rel='prefetch'> loads resources for future pages. Both improve performance when used correctly.",
    },
    {
        id: 27,
        question: "What is the Web Components standard?",
        options: [
            "A CSS framework",
            "A set of APIs for creating reusable custom HTML elements with encapsulation",
            "A JavaScript library",
            "An HTML template engine",
        ],
        correct: 1,
        difficulty: "senior",
        explanation:
            "Web Components include Custom Elements, Shadow DOM, and HTML Templates. They enable creating encapsulated, reusable components without frameworks.",
    },
    {
        id: 28,
        question: "What does the Shadow DOM provide?",
        options: [
            "Additional styling options",
            "Style and DOM encapsulation for components, preventing external styles from affecting component internals",
            "Faster page loading",
            "Better SEO",
        ],
        correct: 1,
        difficulty: "senior",
        explanation:
            "Shadow DOM encapsulates styles and DOM structure within a component, preventing style leakage. This enables true component isolation and prevents conflicts.",
    },
    {
        id: 29,
        question: "What is the purpose of the Content Security Policy (CSP) meta tag?",
        options: [
            "Improve page layout",
            "Restrict resource loading to prevent XSS attacks and enforce security policies",
            "Style the page",
            "Load external scripts faster",
        ],
        correct: 1,
        difficulty: "senior",
        explanation:
            "CSP (Content Security Policy) restricts which resources can be loaded and executed. Prevents XSS attacks by defining trusted sources for scripts, styles, images, etc.",
    },
    {
        id: 30,
        question: "How should you optimize HTML for Core Web Vitals?",
        options: [
            "Use as many images as possible",
            "Use semantic HTML, optimize resource loading (preload, defer scripts), minimize render-blocking resources",
            "Avoid CSS and JavaScript",
            "Load all resources immediately",
        ],
        correct: 1,
        difficulty: "senior",
        explanation:
            "Optimize for Core Web Vitals: use semantic HTML, defer non-critical scripts, preload critical resources, optimize images, minimize render-blocking CSS. Focus on LCP, FID, and CLS.",
    },
]
