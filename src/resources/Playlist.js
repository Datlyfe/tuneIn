export default {
  playlist: id => {
    return {
      path: `chart/${id}/tracks?output=jsonp`,
      resolve: (data, mappers) => mappers.pipe(data)
    };
  }
};
