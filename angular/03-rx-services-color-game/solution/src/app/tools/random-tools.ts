export function randomNumber(min: number, max: number): number {
  const range = max - min;
  return Math.floor(Math.random() * range);
}

export function randomColor(): string {
  const rgb = [
    randomNumber(0, 256),
    randomNumber(0, 256),
    randomNumber(0, 256),
  ] as const;

  return rgbString(...rgb);
}

export function rgbString(r: number, g: number, b: number): string {
  return `rgb(${r}, ${g}, ${b})`;
}

export function stringToRgb(rgb: string): [number, number, number] {
    // remove 'rgb(' and ')'
    const vals = rgb.slice(4, -1);
    const parts = vals.split(',');
    const numbers = parts
        .map(v => Number.parseInt(v))
        .slice(0, 3) as [number, number, number];
    return numbers;
}

export function isSameColor(clr1: string, clr2: string): boolean {
    const rgb1 = stringToRgb(clr1);
    const rgb2 = stringToRgb(clr2);    
    const dist = distance(rgb1, rgb2);

    return dist < 10;

}

export function distance(clr1: [number, number, number], clr2: [number, number, number]): number {
  const diffs = clr1.map((_, index) => clr1[index] - clr2[index]);
  const squares = diffs.map(x => x * x);
  const sum = squares.reduce((acc, i) => acc + i, 0);
  const distance = Math.sqrt(sum);
  return distance;
}
