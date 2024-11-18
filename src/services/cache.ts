export default (() => {
	const store: Record<string, string> = {};
	return {
		all: () => store,
		has: (url: string) => !!store[url],
		set: (data: unknown, url: string) => {
			store[url] = JSON.stringify(data);
			return Promise.resolve(data);
		},
		get: (url: string) => Promise.resolve(JSON.parse(store[url])),
	};
})();
