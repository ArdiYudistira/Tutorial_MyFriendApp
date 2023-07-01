const ColorCustom = color => {
  const changeColor = color => {
    const primary = '#2ae0ff';
    const secondary = '#1f9be7';
    const danger = '#da4566';
    const white = '#fff';

    switch (color) {
      case 'primary':
        return primary;
      case 'secondary':
        return secondary;
      case 'danger':
        return danger;
      case 'white':
        return white;

      default:
        return '#000000';
    }
  };

  return changeColor(color);
};

export default ColorCustom;
