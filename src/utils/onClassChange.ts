export function onClassChange(element:HTMLElement, callback:CallableFunction) {
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (
        mutation.type === 'attributes' &&
          mutation.attributeName === 'class'
      ) {
        callback(mutation.target);
      }
    });
  });
  observer.observe(element, { attributes: true })
  return observer;
}