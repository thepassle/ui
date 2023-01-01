import { render, html } from 'lit';
import './modal-container.js';

export function modal(config) {
  return {
    opening: ({dialog, parameters, id}) => {
      dialog.id = 'modal';
      const template = config.render({id, parameters, title: config.title});
      const importPromise = config.import();

      render(html`
        <modal-container 
          .dialog=${dialog} 
          .template=${template}
          .importPromise=${importPromise}
          .header=${config.title} 
        >
        </modal-container>
      `, dialog.form);
    },
  }
}
