// eslint-disable-next-line func-names
(function () {
  // check for <template> support
  if ("content" in document.createElement("template")) {
    const tmpl = document.createElement("template");
    // create template with <slot> for the light DOM content
    tmpl.innerHTML = `
        <header>
            <button aria-expanded="false">
                <svg aria-hidden="true" focusable="false" viewBox="0 0 10 10">
                    <rect class="vert" height="8" width="2" y="1" x="4"/>
                    <rect height="2" width="8" y="4" x="1"/>
                </svg>
            </button>
        </header>
        <div class="content" hidden>
            <slot></slot>
        </div>
        <style>
            header {
                margin: 0;
            }

            header button {
                all: inherit;
                box-sizing: border-box;
                display: flex;
                justify-content: space-between;
                width: 100%;
                padding: 0.5em 0;
            }

            header button:focus svg {
                outline: 2px solid;
            }

            button svg {
            height: 1em;
            margin-left: 0.5em;
            }

            [aria-expanded="true"] .vert {
            display: none;
            }

            [aria-expanded] rect {
            fill: currentColor;
            }
        </style>
        `;
    // check for latest shadow dom syntax support
    if (document.head.attachShadow) {
      class ToggleSection extends HTMLElement {
        constructor() {
          super();
          // make host element a region
          this.setAttribute("role", "region");
          // create 'shadowRoot' and populate from template
          this.attachShadow({ mode: "open" });
          this.shadowRoot.appendChild(tmpl.content.cloneNode(true));
          // assign toggle button
          this.btn = this.shadowRoot.querySelector("header button");
          // get first element in light dom
          const oldHeader = this.querySelector("header");
          //   get first heading
          const oldHeading = this.querySelector("header :first-child");
          // cast its heading level which should (but may not) exist
          const level = parseInt(oldHeading.tagName.substr(1), 10);
          // Then take its `id` (may be null)
          const { id } = oldHeading;
          // Get the Shadow DOM <h3>
          this.heading = this.shadowRoot.querySelector("h3");
          // If `id` exists, apply it
          if (id) {
            this.heading.id = id;
          }
          // If there  is no level, there is no heading.
          // Add a warning.
          if (!level) {
            console.warn(
              "The first element inside each <toggle-section> should be a heading of an appropriate level."
            );
          }
          // If the level is a real integer but not 3
          // set `aria-level` accordingly
          if (level && level !== 3) {
            this.heading.setAttribute("aria-level", level);
          }
          // Add the Light DOM heading label to the innerHTML of the toggle button
          // and remove the now unwanted Light DOM heading
          this.btn.innerHTML = oldHeading.textContent + this.btn.innerHTML;
          oldHeading.parentNode.removeChild(oldHeading);
          // The main state switching function
          this.switchState = () => {
            const expanded = this.getAttribute("open") === "true" || false;
            // Toggle `aria-expanded`
            this.btn.setAttribute("aria-expanded", expanded);
            // Toggle the `.content` element's visibility
            this.shadowRoot.querySelector(".content").hidden = !expanded;
          };
          this.btn.onclick = () => {
            // Change the component's `open` attribute value on click
            const open = this.getAttribute("open") === "true" || false;
            this.setAttribute("open", open ? "false" : "true");
            // Update the hash if the collapsible section's
            // heading has an `id` and we are opening, not closing
            if (this.heading.id && !open) {
              // eslint-disable-next-line no-restricted-globals
              history.pushState(null, null, `#${this.heading.id}`);
            }
          };
        }

        connectedCallback() {
          if (window.location.hash.substr(1) === this.heading.id) {
            this.setAttribute("open", "true");
            this.btn.focus();
          }
        }

        // Identify just the `open` attribute as an observed attribute
        static get observedAttributes() {
          return ["open"];
        }

        // When `open` changes value, execute switchState()
        attributeChangedCallback(name) {
          if (name === "open") {
            this.switchState();
          }
        }
      }

      // Add our new custom element to the window for use
      window.customElements.define("toggle-section", ToggleSection);
      // Define the expand/collapse all template
      const buttons = document.createElement("div");
      buttons.innerHTML = `
                <ul class="controls" aria-label="section controls">
                <li><button id="expand">expand all</button></li>
                <li><button id="collapse">collapse all</button></li>
                </ul>
                `;
      // Get the first `toggle-section` on the page
      // and all toggle sections as a node list
      const first = document.querySelector("toggle-section");
      const all = document.querySelectorAll("toggle-section");

      // Insert the button controls before the first <toggle-section>
      first.parentNode.insertBefore(buttons, first);
      // Place the click on the parent <ul>...
      buttons.addEventListener("click", (e) => {
        // ...then determine which button was the target
        const expand = e.target.id === "expand";

        // Iterate over the toggle sections to switch
        // each one's state uniformly
        Array.prototype.forEach.call(all, (t) => {
          t.setAttribute("open", expand);
        });
      });
    }
  }
})();
