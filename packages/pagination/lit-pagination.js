import { LitElement, html, css } from 'lit-element';

import '@polymer/paper-button/paper-button';
import '@polymer/paper-icon-button/paper-icon-button';
import '@polymer/iron-iconset-svg';

class LitPagination extends LitElement {

    static get styles() {
        return css`
            :host {
                display: block;
                font-size: 14px;
            }

            div.paginator-page-container {
                display: flex;
                align-items: center;
                justify-content: space-between;
            @apply --layout-horizontal;
            @apply --layout-center;
            @apply --layout-center-justified;
            @apply --layout-center-center;
                background-color: #ffffff;
                border-radius: 4px;
            }

            .cm-button {
                vertical-align: middle;
            }

            :host span {
                margin: 0px 4px;
            }`;
    }


    static get properties() {
        return {
            /** Per-page limit of the elements. */
            limit: {
                type: Number,
                reflect: true,
                attribute: true
            },
            /** Total count of the elements. */
            total: {
                type: Number,
                reflect: true,
                attribute: true
            },
            /** Current page. */
            page: {
                type: Number,
                reflect: true,
                attribute: true
            },
            /** Count of the pages displayed before or after the current page. */
            size: {
                type: Number,
                reflect: true,
                attribute: true
            },
            /** Number of paginated pages. */
            pages: {
                type: Number
            },
            /** Has pages before the current page. */
            hasBefore: {
                type: Boolean
            },
            /** Has pages after the current page. */
            hasNext: {
                type: Boolean
            },
            /** Has pages. */
            hasPages: {
                type: Boolean
            },
            /** Displayed page elements */
            items: {
                type: Array
            }
        };
    }

    constructor() {
        super();
        this.limit = 2;
        this.page = 2;
        this.size = 2;
        this.items = {};
        this.total = 20;
        this.hasBefore = this.computeBefore(this.page, this.pages);
        this.hasNext = this.computeNext(this.page, this.pages);
        this.hasPages = this.computeHasPage(this.items.size, this.total);
    }

    set page(val) {
        const oldVal = this._page;
        this._page = val;
        this.requestUpdate('page', oldVal);
        this.onPageChange(this._page, oldVal);
        this.observePageCount(this._page, this.limit, this.total);
    }

    get page() {
        return this._page;
    }

    set limit(val) {
        const oldVal = this._limit;
        this._limit = val;
        this.requestUpdate('limit', oldVal);
        this.observePageCount(this.page, this._limit, this.total);
    }

    get limit() {
        return this._limit;
    }

    set total(val) {
        const oldVal = this._total;
        this._total = val;
        this.requestUpdate('total', oldVal);
        this.observePageCount(this.page, this.limit, this._total);
    }

    get total() {
        return this._total;
    }

    set size(val) {
        const oldVal = this._size;
        this._size = val;
        this.requestUpdate('size', oldVal);

    }

    get size() {
        return this._size;
    }

    render() {
        return html`
            <iron-iconset-svg name='pagination-icons'>
                <svg>
                    <defs>
                        <g id='fast-forward'>
                            <path d='M4 18l8.5-6L4 6v12zm9-12v12l8.5-6L13 6z'></path>
                        </g>
                        <g id='fast-rewind'>
                            <path d='M11 18V6l-8.5 6 8.5 6zm.5-6l8.5 6V6l-8.5 6z'></path>
                        </g>
                        <g id='navigate-before'>
                            <path d='M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z'></path>
                        </g>
                        <g id='navigate-next'>
                            <path d='M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z'></path>
                        </g>
                    </defs>
                </svg>
            </iron-iconset-svg>

            <div class='paginator-page-container' ?hidden='${!this.hasPage}'>
                <div>
                    <vaadin-select style='margin-bottom: 0'>
                        <template>
                            <vaadin-list-box>
                                <vaadin-item>+358</vaadin-item>
                                <vaadin-item>+46</vaadin-item>
                                <vaadin-item>+34</vaadin-item>
                            </vaadin-list-box>
                        </template>
                    </vaadin-select>
                </div>
                <div style='display: flex; align-items: center;'>
                    <div style='padding-right: var(--i2c-space-l);'>
                        <span>Page</span>
                        ${this.items.map(item => html`
                            <vaadin-button
                                class='cm-button'
                                theme='icon outline primary xs-small'
                                raised='${!this.isCurrent(item, this.page)}'
                                ?disabled='${this.isCurrent(item, this.page)}'
                                @click='${event => this.onChange(item)}'>
                                ${item}
                            </vaadin-button>
                        `)}

                        <span>of</span>
                        ${this.pages}
                    </div>
                    <div>
                        <vaadin-button class='cm-button' theme='icon primary outline' aria-label='Delete item'
                                       @click='${event => this.onBegin()}' ?hidden='${!this.hasBefore}'>
                            <iron-icon icon='vaadin:angle-double-left'></iron-icon>
                        </vaadin-button>
                        <vaadin-button class='cm-button' theme='icon primary outline' aria-label='Delete item'
                                       @click='${event => this.onBefore()}' ?hidden='${!this.hasBefore}'>
                            <iron-icon icon='vaadin:angle-left'></iron-icon>
                        </vaadin-button>
                        <vaadin-button class='cm-button' theme='icon primary outline' aria-label='Delete item'
                                       @click='${event => this.onNext()}' ?hidden='${!this.hasNext}'>
                            <iron-icon icon='vaadin:angle-right'></iron-icon>
                        </vaadin-button>
                        <vaadin-button class='cm-button' theme='icon primary outline' aria-label='Delete item'
                                       @click='${event => this.onEnd()}' ?hidden='${!this.hasNext}'>
                            <iron-icon icon='vaadin:angle-double-right'></iron-icon>
                        </vaadin-button>
                    </div>
                </div>
            </div>
        `;
    }


    computeBefore(page, pages) {
        return page > 1;
    }

    computeNext(page, pages) {
        return page < pages;
    }

    computeHasPage(itemsLength, total) {
        return itemsLength < total;
    }

    observePageCount(page, limit, total) {
        if (limit && total) {
            this.pages = parseInt(Math.ceil(parseFloat(total) / parseFloat(limit)));
        }

        if (page && limit && total) {
            const items = [];
            const firstIndex = this._firstIndex(page, this.size);
            const lastIndex = this._lastIndex(page, this.size);
            for (let num = firstIndex; num <= lastIndex; num++) {
                items.push(num);
            }
            this.items = items;
        }
    }

    onPageChange(newValue, oldValue) {
        this.dispatchEvent(new CustomEvent('page-change', { detail: { newPage: newValue, oldPage: oldValue } }));
    }

    _firstIndex(page, size) {
        const index = page - size;
        if (index < 1) {
            return 1;
        } else {
            return index;
        }
    }

    _lastIndex(page, size) {
        const index = parseInt(page) + parseInt(size);
        if (index > this.pages) {
            return this.pages;
        } else {
            return index;
        }
    }

    isCurrent(index, page) {
        return index == page;
    }

    onChange(item) {
        this.page = item;
        this.requestUpdate();
    }

    onBefore(event) {
        this.page = this.page > 0 ? this.page - 1 : 1;
    }

    onNext(event) {
        this.page = this.page < this.pages ? parseInt(this.page) + 1 : this.pages;
    }

    onBegin(event) {
        this.page = 1;
    }

    onEnd(event) {
        this.page = this.pages;
    }


}

customElements.define('lit-pagination', LitPagination);
