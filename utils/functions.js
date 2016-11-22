export const getRouteNode = (path, parentPath) => {
  let node = path.substr(parentPath.length)
  if (node.substr(node.length -1 ) === '/') node = node.substr(0, node.length - 1)
  return node
}

export const getMatchedPage = (path, indexPath, indexRoute, childRoutes) => {
  if (path === indexPath) {
    if (indexRoute) return indexRoute.page
    else return null
  }
  const route = childRoutes.find(it => path.startsWith(it.path))
  if (route.childRoutes) return getMatchedPage(path, route.path, route.indexRoute, route.childRoutes)
  else return route.page
}
