let strings = process.argv[2].split("\n");

function downloadPattern(strings) {
  const nonEmptyStrings = strings.filter((s) => s.length > 0);
  if (nonEmptyStrings.length == 0) {
    return "";
  }
  let prefix = nonEmptyStrings[0];
  for (let i = 1; i < nonEmptyStrings.length; i++) {
    while (nonEmptyStrings[i].indexOf(prefix) !== 0) {
      prefix = prefix.substring(0, prefix.length - 1);
      if (!prefix) {
        return "";
      }
    }
  }
  return nonEmptyStrings.length < 2 ? prefix : prefix + "*";
}

console.log(downloadPattern(strings));
