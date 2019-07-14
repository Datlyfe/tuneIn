export default {
  genres: () => {
    return {
      path: "editorial?output=jsonp",
      resolve: (data, mappers) => mappers.pipe(data)
    };
  }
};
