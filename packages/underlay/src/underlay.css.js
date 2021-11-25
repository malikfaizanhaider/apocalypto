/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
import { css } from '@spectrum-web-components/base';
const styles = css `
:host{visibility:hidden;opacity:0;transition:transform var(--spectrum-global-animation-duration-100,.13s) ease-in-out,opacity var(--spectrum-global-animation-duration-100,.13s) ease-in-out,visibility 0ms linear var(--spectrum-global-animation-duration-100,.13s);pointer-events:none}:host([open]){visibility:visible;opacity:1;transition-delay:0ms;pointer-events:auto}:host{--spectrum-dialog-confirm-background-entry-animation-delay:0ms;--spectrum-dialog-confirm-background-exit-animation-ease:cubic-bezier(0.5,0,1,1);--spectrum-dialog-confirm-background-entry-animation-ease:cubic-bezier(0,0,0.4,1);position:fixed;top:0;right:0;bottom:0;left:0;z-index:1;overflow:hidden;transition:opacity var(--spectrum-dialog-confirm-background-exit-animation-duration,var(--spectrum-global-animation-duration-300)) var(--spectrum-dialog-confirm-background-exit-animation-ease,var(--spectrum-global-animation-linear)) var(--spectrum-dialog-confirm-background-exit-animation-delay,var(--spectrum-global-animation-duration-200)),visibility 0ms linear calc(var(--spectrum-dialog-confirm-background-exit-animation-delay,
var(--spectrum-global-animation-duration-200)) + var(--spectrum-dialog-confirm-background-exit-animation-duration,
var(--spectrum-global-animation-duration-300)))}:host([open]){transition:opacity var(--spectrum-dialog-confirm-background-entry-animation-duration,var(--spectrum-global-animation-duration-600)) var(--spectrum-dialog-confirm-background-entry-animation-ease,var(--spectrum-global-animation-linear)) var(--spectrum-dialog-confirm-background-entry-animation-delay,0ms)}:host{background:var(--spectrum-dialog-confirm-overlay-background-color,var(--spectrum-alias-background-color-modal-overlay))}
`;
export default styles;
//# sourceMappingURL=underlay.css.js.map