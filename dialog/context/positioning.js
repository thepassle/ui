import { computePosition, flip, detectOverflow } from "@floating-ui/dom";

export async function compute(target, dialog) {
  let { x, y } = await computePosition(target, dialog, { 
    middleware:[
      {
        name: 'pos',
        async fn(middlewareArguments) {
          const { placement } = middlewareArguments;
          let newPlacement;

          const overflow = await detectOverflow(middlewareArguments);
          const left = Math.abs(overflow.left);
          const right = Math.abs(overflow.right);

          let horizontal;

          if(left > right) {
            horizontal = 'right';
            newPlacement = 'bottom-end';
          } else {
            horizontal = 'left';
            newPlacement = 'bottom-start';
          }

          dialog.classList.add(`top-${horizontal}`);
          if(placement !== 'bottom-end' && placement !== 'bottom-start') {
            return {
              reset: {
                placement: newPlacement
              }
            }
          } 
          return {}
        }
      },
      flip()
    ],
  });

  Object.assign(dialog.style, {
    left: `${x}px`,
    top: `${y}px`,
  });
}