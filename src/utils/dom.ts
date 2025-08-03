function getCssCustomProperty(name: string) {
  const element = document?.documentElement;

  if (!element) {
    return '';
  }

  const styles = getComputedStyle(element);

  if (!styles) {
    return '';
  }

  return styles.getPropertyValue(`--${name}`);
}

function setCssCustomProperty(name: string, value: string | null): void {
  const element = document?.documentElement;

  if (!element) {
    return;
  }

  element.style.setProperty(`--${name}`, value);
}

export { getCssCustomProperty, setCssCustomProperty };
