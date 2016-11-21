export const getRouteNode = (path, parentPath) => {
  let node = path.substr(parentPath.length)
  if (node.substr(node.length -1 ) === '/') node = node.substr(0, node.length - 1)
  return node
}
