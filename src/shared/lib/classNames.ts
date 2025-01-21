type Mods = Record<string, string | boolean>;

export const classNames = (
  className: string,
  Mods: Mods = {},
  additional: string[]
): string => {
  return [
    className,
    ...additional.filter(Boolean),
    ...Object.entries(Mods)
      .filter(([_, value]) => Boolean(value))
      .map(([className]) => className),
  ]
    .join(" ")
    .trim();
};
