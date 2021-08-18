export type Query = string | string[] | number[] | number | undefined;

export default function fillParams(params: { [key: string]: Query }) {
  const parsedParams = {} as { [key: string]: string };
  for (const [key, value] of Object.entries(params)) {
    if (!value) continue;
    else if (typeof value === "string") parsedParams[key] = value;
    else if (typeof value === "number") parsedParams[key] = value.toString();
    else parsedParams[key] = value.join("%2C");
  }
  return new URLSearchParams(parsedParams);
}
