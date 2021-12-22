export default function (str: string): any[] {
  const regex = /([^?=&]+)(=([^&]*))?/g;
  return (str.match(regex) || []).reduce(function (a: string[], b: string) {
    const [key, value = null] = b.split("=");
    return value ? [...a, [key, JSON.parse(value)]] : a;
  }, []) as any[];
}
