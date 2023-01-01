import { computePosition } from "@floating-ui/dom";

const topLayer = () => ({
  name: 'topLayer',
  async fn(middlewareArguments) {
    const { elements: { reference, floating } } = middlewareArguments;

    const dialog = floating.getBoundingClientRect();
    const button = reference.getBoundingClientRect();

    return {
      x: button.x - dialog.width,
      y: button.y + button.height
    };
  },
});

export async function compute(target, dialog) {
  const { x, y } = await computePosition(target, dialog, { 
    middleware:[
      topLayer()
    ],
  });

  Object.assign(dialog.style, {
    marginLeft: `${x}px`,
    marginTop: `${y}px`,
  });
}