import xform_point from "../__lib__/xform_point"

// we replace every point in the path by its tranformed value
// TODO make Bezier Curves (C command) work
export default (geometry, matrix) => {
  var xform = xform_point(matrix)
  return geometry.replace(/(\d+)\s*,\s*(\d+)/g, (_, x, y) => {
    var point = xform({x, y})
    return `${point.x},${point.y}`
  })
}
