let strings = process.argv[2].split("\n");

function environment(strings) {
  const nonEmptyEnv = strings.filter((s) => s.length > 0);
  if (nonEmptyEnv.length == 0) {
    return "";
  }
  env = "";
  for (let i = 0; i < nonEmptyEnv.length; i++) {
    env = env + "--env " + nonEmptyEnv[i] + " ";
  }
  return env.trim();
}

console.log(environment(strings));
