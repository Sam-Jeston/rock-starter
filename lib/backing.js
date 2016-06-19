module.exports = { createSoxString }

function createSoxString (guitarTrack, drumTrack, guitarPath, drumPath, destinationPath) {
  let guitar = `${guitarPath}${guitarTrack}`
  let drum = `${drumPath}${drumTrack}`
  return `sox -m ${drum} ${guitar} ${destinationPath}`
}
