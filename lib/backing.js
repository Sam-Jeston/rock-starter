module.exports = { createSoxString }

function createSoxString (
  guitarTrack,
  bassTrack,
  drumTrack,
  guitarPath,
  bassPath,
  drumPath,
  destinationPath
) {
  let guitar = `${guitarPath}${guitarTrack}`
  let bass = `${bassPath}${bassTrack}`
  let drum = `${drumPath}${drumTrack}`
  return `sox -m -v 0.7 ${drum} -v 0.95 ${guitar} -v 0.9 ${bass} ${destinationPath} norm`
}
