import { Search } from './src/Search.js';

customElements.define('cm-search', Search);

declare global {
    interface HTMLElementTagNameMap {
        'cm-search': Search;
    }
}
