function addPrefix(prefix, ...words) {
  const prefixWords = [];
  for (let i = 0; i < words.length; i++) {
    prefixWords[i] = prefix + words[i];
  }
  return prefixWords;
}
console.log(addPrefix("con", "verse", "vex"));
