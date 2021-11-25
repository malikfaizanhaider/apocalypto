/* Copyright 2021 i2c Inc. All rights reserved. */
import { supportsAdoptingStyleSheets } from 'lit-element';
import coreStyles from './theme.css.js';
const ScaleValues = ['medium', 'large'];
const ColorValues = ['light', 'lightest', 'dark', 'darkest'];
export class Theme extends HTMLElement {
    constructor() {
        super();
        this.hasAdoptedStyles = false;
        this._color = '';
        this._scale = '';
        this.trackedChildren = new Set();
        this.attachShadow({ mode: 'open' });
        const node = document.importNode(Theme.template.content, true);
        this.shadowRoot.appendChild(node);
        this.shouldAdoptStyles();
        this.addEventListener('cm-query-theme', this.onQueryTheme);
    }
    static get observedAttributes() {
        return ['color', 'scale'];
    }
    attributeChangedCallback(attrName, old, value) {
        if (old === value) {
            return;
        }
        if (attrName === 'color') {
            this.color = value;
        }
        else if (attrName === 'scale') {
            this.scale = value;
        }
    }
    requestUpdate() {
        this.hasAdoptedStyles = false;
        if (window.ShadyCSS !== undefined && !window.ShadyCSS.nativeShadow) {
            window.ShadyCSS.styleElement(this);
        }
        else {
            this.shouldAdoptStyles();
        }
    }
    get core() {
        return 'core';
    }
    get color() {
        const themeFragments = Theme.themeFragmentsByKind.get('color');
        const { name } = (themeFragments && themeFragments.get('default')) || {};
        return this._color || name || '';
    }
    set color(newValue) {
        if (newValue === this._color)
            return;
        const color = !!newValue && ColorValues.includes(newValue)
            ? newValue
            : this.color;
        if (color !== this._color) {
            this._color = color;
            this.requestUpdate();
        }
        if (color) {
            this.setAttribute('color', color);
        }
        else {
            this.removeAttribute('color');
        }
    }
    get scale() {
        const themeFragments = Theme.themeFragmentsByKind.get('scale');
        const { name } = (themeFragments && themeFragments.get('default')) || {};
        return this._scale || name || '';
    }
    set scale(newValue) {
        if (newValue === this._scale)
            return;
        const scale = !!newValue && ScaleValues.includes(newValue)
            ? newValue
            : this.scale;
        if (scale !== this._scale) {
            this._scale = scale;
            this.requestUpdate();
        }
        if (scale) {
            this.setAttribute('scale', scale);
        }
        else {
            this.removeAttribute('scale');
        }
    }
    get styles() {
        const themeKinds = [
            ...Theme.themeFragmentsByKind.keys(),
        ];
        const styles = themeKinds.reduce((acc, kind) => {
            const kindFragments = Theme.themeFragmentsByKind.get(kind);
            const { [kind]: name } = this;
            const currentStyles = kindFragments.get(name);
            if (currentStyles) {
                acc.push(currentStyles.styles);
            }
            return acc;
        }, []);
        return [...styles];
    }
    static get template() {
        if (!this.templateElement) {
            this.templateElement = document.createElement('template');
            this.templateElement.innerHTML = '<slot></slot>';
        }
        return this.templateElement;
    }
    onQueryTheme(event) {
        if (event.defaultPrevented) {
            return;
        }
        event.preventDefault();
        const { detail: theme } = event;
        theme.color = this.color || undefined;
        theme.scale = this.scale || undefined;
    }
    connectedCallback() {
        this.shouldAdoptStyles();
        // Note, first update/render handles styleElement so we only call this if
        // connected after first update.
        /* c8 ignore next 3 */
        if (window.ShadyCSS !== undefined) {
            window.ShadyCSS.styleElement(this);
        }
        // Add `this` to the instances array.
        Theme.instances.add(this);
        const manageDir = () => {
            const { dir } = this;
            this.trackedChildren.forEach(el => {
                el.setAttribute('dir', dir === 'rtl' ? dir : 'ltr');
            });
        };
        if (!this.observer) {
            this.observer = new MutationObserver(manageDir);
        }
        this.observer.observe(this, {
            attributes: true,
            attributeFilter: ['dir'],
        });
        if (!this.hasAttribute('dir')) {
            let dirParent = (this.assignedSlot ||
                this.parentNode);
            while (dirParent !== document.documentElement &&
                !(dirParent instanceof Theme)) {
                dirParent = (dirParent.assignedSlot || // step into the shadow DOM of the parent of a slotted node
                    dirParent.parentNode || // DOM Element detected
                    dirParent.host);
            }
            this.dir = dirParent.dir === 'rtl' ? dirParent.dir : 'ltr';
        }
        requestAnimationFrame(() => manageDir());
    }
    disconnectedCallback() {
        // Remove `this` to the instances array.
        Theme.instances.delete(this);
        this.observer.disconnect();
    }
    startManagingContentDirection(el) {
        this.trackedChildren.add(el);
    }
    stopManagingContentDirection(el) {
        this.trackedChildren.delete(el);
    }
    shouldAdoptStyles() {
        /* c8 ignore next 3 */
        if (!this.hasAdoptedStyles) {
            this.adoptStyles();
        }
    }
    get expectedFragments() {
        // color, scale and core
        return 3;
    }
    adoptStyles() {
        const styles = this.styles; // No test coverage on Edge
        if (styles.length < this.expectedFragments)
            return;
        // There are three separate cases here based on Shadow DOM support.
        // (1) shadowRoot polyfilled: use ShadyCSS
        // (2) shadowRoot.adoptedStyleSheets available: use it.
        // (3) shadowRoot.adoptedStyleSheets polyfilled: append styles after
        // rendering
        /* c8 ignore next */ if (window.ShadyCSS !== undefined &&
            !window.ShadyCSS.nativeShadow &&
            window.ShadyCSS.ScopingShim) {
            // For browsers using the shim, there seems to be one set of
            // processed styles per template, so it is hard to nest styles. So,
            // for those, we load in all style fragments and then switch using a
            // host selector (e.g. :host([color='dark']))
            const fragmentCSS = [];
            for (const [kind, fragments] of Theme.themeFragmentsByKind) {
                for (const [name, { styles }] of fragments) {
                    if (name === 'default')
                        continue;
                    let cssText = styles.cssText;
                    if (!Theme.defaultFragments.has(name)) {
                        cssText = cssText.replace(':host', `:host([${kind}='${name}'])`);
                    }
                    fragmentCSS.push(cssText);
                }
            }
            window.ShadyCSS.ScopingShim.prepareAdoptedCssText(fragmentCSS, this.localName);
            window.ShadyCSS.prepareTemplate(Theme.template, this.localName);
        }
        else if (supportsAdoptingStyleSheets) {
            const styleSheets = [];
            for (const style of styles) {
                styleSheets.push(style.styleSheet);
            }
            this.shadowRoot.adoptedStyleSheets = styleSheets;
        }
        else {
            const styleNodes = this.shadowRoot.querySelectorAll('style');
            styleNodes.forEach(element => element.remove());
            styles.forEach(s => {
                const style = document.createElement('style');
                style.textContent = s.cssText;
                this.shadowRoot.appendChild(style);
            });
        }
        this.hasAdoptedStyles = true;
    }
    static registerThemeFragment(name, kind, styles) {
        const fragmentMap = Theme.themeFragmentsByKind.get(kind) || new Map();
        if (fragmentMap.size === 0) {
            Theme.themeFragmentsByKind.set(kind, fragmentMap);
            // we're adding our first fragment for this kind, set as default
            fragmentMap.set('default', { name, styles });
            Theme.defaultFragments.add(name);
        }
        fragmentMap.set(name, { name, styles });
        Theme.instances.forEach(instance => instance.shouldAdoptStyles());
    }
}
Theme.themeFragmentsByKind = new Map();
Theme.defaultFragments = new Set(['core']);
Theme.instances = new Set();
Theme.registerThemeFragment('core', 'core', coreStyles);
//# sourceMappingURL=Theme.js.map