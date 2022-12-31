import { render } from 'lit';

export function modal(config) {
  return {
    opening: ({dialog, parameters, id}) => {
      config.import();
      dialog.id = 'foo';
      render(config.render({id, parameters, title: config.title}), dialog.form);
    },
  }
}
