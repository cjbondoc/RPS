# RPS
simple rock-paper-scissors project

Things to address/work on in the future:

- **Design**
    - Add colors and custom images for buttons.
    - Ensure buttons are adaptive for mobile using flex.
    - Maintain large text size for readability.
    - Add a favicon using tools like [fav.farm](http://fav.farm/) or [Real Favicon Generator](https://realfavicongenerator.net/).
    - Improve button resizing for mobile to enhance usability.
    - Adjust font size hierarchy:
        - Ensure `h1` is the largest font size.
        - Consider using `div` with a class for score headers instead of `h2`.
    - Maintain good white space between elements.
    - Reorganize information for better readability (e.g., group scores together).
    - Improve color scheme:
        - Avoid pure black (#000000) and white (#FFFFFF).
            - Use softer colors like #040404 for text and #fafafa for background.
        - Explore color schemes from [Open Props](https://open-props.style/), [Color Hunt](https://colorhunt.co/), or [Lospec](https://lospec.com/palette-list).
        - Check contrast using tools like [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/).
    - Override default `body` margin (8px).
    - Adjust info text to be lighter in weight, size, or contrast.

- **HTML**
    - Use semantic HTML5 elements (e.g., `section` for sections).
    - Place `<script>` tag below the `<main>` element for better script execution.
    - Replace `p` elements in the score UI with `div` to avoid unwanted vertical margins.
    - Remove unnecessary `div` around button elements; use buttons as direct children of the flex parent.
    - Use `document.getElementById()` instead of inline `onclick` attributes for better separation of concerns.

- **CSS**
    - Use `em` or `rem` units for font sizes instead of `px`.
    - Install a CSS formatter like Prettier to maintain consistent formatting.
    - Avoid setting `cursor: pointer` on image elements; use dedicated classes for styling.
    - Consider using `display: grid` with `grid-template-columns: repeat(3, 1fr)` for button layout instead of flex.
    - Use `--border-radius-max: 99999px` for consistent border radius styling.
    - Avoid default CSS colors like `slategray` and `burlywood`; use cohesive color palettes.

- **JavaScript**
    - Avoid using constructors without parameters; move initialization to the body.
    - Separate DOM manipulation from class logic for better modularity.
    - Use template strings for text manipulation (e.g., `` `Round: ${this.round}` ``).
    - Refactor `playRound` logic for better readability:
        - Use a variable like `const playerWon = [...]` for clarity.
        - Create a separate function to determine the round result.
    - Replace inline `onclick` attributes with `addEventListener` in a `DOMContentLoaded` event handler.
    - Add visual feedback for computer's choice (e.g., animations using CSS `@keyframes`).

- **General Improvements**
    - Enhance gameplay visuals by showing the computer's choice with animations.
    - Ensure all elements are responsive and accessible.