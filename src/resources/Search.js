export default {
  search: term => {
    return {
      path: `search?q=${term}&output=jsonp&limit=24`,
      resolve: (data, mappers) => mappers.pipe(data)
    };
  }
};
