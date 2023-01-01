## Dialog

### Modal

```js
import { html } from 'lit';
import { Dialog } from '@thepassle/app-tools/dialog.js';
import { modal } from '@thepassle/ui/dialog/modal/index.js';

const dialog = new Dialog({
  foo: modal({
    title: 'dialog title',
    import: () => import('./my-dialog-component.js'),
    render: ({id, dialog, parameters}) => html`<my-dialog-component .foo=${parameters.foo}></my-dialog-component>`
  })
});

dialog.open({id: 'foo', parameters: {foo: 'foo'}});
```

### ContextMenu

```js
import { html } from 'lit';
import { Dialog } from '@thepassle/app-tools/dialog.js';
import { contextMenu } from '@thepassle/ui/dialog/context/contextMenu.js';

const dialog = new Dialog({
  contextMenu: contextMenu({
    /** Direction for the keyboard nav, defaults to `'vertical'` */
    orientation: 'horizontal'
  })
});

html`
  <button @click=${(e) => {
    dialog.open({id: 'contextMenu', parameters: {
      /** Required so `floating-ui/dom` can compute the position */
      target: e.target,
      /** The `value` will be in the `returnValue` of the dialog, on `closing` and `closed` hooks/events */
      template: () => html`
        <button value="1">1<button>
        <button value="2">2<button>
        <button value="3">3<button>
      `
    }});
  }}>
    click
  </button>
`
```

### Context

```js
import { html } from 'lit';
import { Dialog } from '@thepassle/app-tools/dialog.js';
import { context } from '@thepassle/ui/dialog/context/index.js';

const dialog = new Dialog({
  contextMenu: contextMenu({
    /** Direction for the keyboard nav, defaults to `'vertical'` */
    orientation: 'horizontal'
  })
});

html`
  <button 
    ${context(dialog, () => html`
      <button value="1">1<button>
      <button value="2">2<button>
      <button value="3">3<button>`
    )}
  >click</button>
`
```