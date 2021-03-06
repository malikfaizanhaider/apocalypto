import { SpectrumElement } from '../';
import { fixture, html, expect, elementUpdated } from '@open-wc/testing';
class DirElement extends SpectrumElement {
}
customElements.define('dir-element', DirElement);
describe('Base', () => {
    after(() => {
        document.dir = '';
    });
    it('sets `dir` from `document`', async () => {
        document.dir = 'rtl';
        const el = await fixture(html `
                <dir-element></dir-element>
            `);
        await elementUpdated(el);
        expect(el.dir).to.equal('rtl');
        expect(el.isLTR).to.be.false;
    });
});
//# sourceMappingURL=base.test.js.map