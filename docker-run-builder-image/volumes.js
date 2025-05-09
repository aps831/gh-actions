let workspaceDirectory = process.argv[2];
let workingDirectory = process.argv[3];
let volumesString = process.argv[4].split("\n");

function volumes(workspaceDirectory, workingDirectory, volumesString) {
  const nonEmptyVolumes = volumesString.filter((s) => s.length > 0);
  if (nonEmptyVolumes.length == 0) {
    return "";
  }
  vol = "";
  for (let i = 0; i < nonEmptyVolumes.length; i++) {
    vol = vol + "-v ";
    if (nonEmptyVolumes[i].startsWith("/")) {
      vol = vol + nonEmptyVolumes[i] + ":rw";
    } else {
      vol = vol + workspaceDirectory + "/" + workingDirectory + "/" + nonEmptyVolumes[i] + ":rw";
    }
    vol = vol + " ";
  }
  return vol.trim();
}

console.log(volumes(workspaceDirectory, workingDirectory, volumesString));
