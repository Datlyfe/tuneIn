export default (() => {
  let store = {}
  return {
    all: () => store,
    has: url => !!store[url],
    set: (data, url) => {
      store[url] = JSON.stringify(data)
      return Promise.resolve(data)
    },
    get: url => Promise.resolve(JSON.parse(store[url]))
  }
})()
