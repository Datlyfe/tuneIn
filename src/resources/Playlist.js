export default {
  playlist: (id) => {
    return {
      path: `playlist/${id}/tracks?output=jsonp`,
      resolve: (data, mappers) => mappers.pipe(data)
    }
  }
}