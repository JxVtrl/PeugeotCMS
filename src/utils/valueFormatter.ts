export const valueFormatter = (
  value: number,
  type: "simple" | "default" = "default"
) => {
  if (type === "simple") {
    const suffixes = ["", "k", "m", "b", "t"];
    const suffixNum = Math.floor(("" + value).length / 3);
    let shortValue = parseFloat(
      (suffixNum !== 0 ? value / Math.pow(1000, suffixNum) : value).toPrecision(
        2
      )
    );
    if (shortValue % 1 !== 0) {
      shortValue = Number(shortValue.toFixed(1));
    }
    return shortValue + suffixes[suffixNum];
  } else {
    return value.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
      notation: "compact",
    });
  }
};
