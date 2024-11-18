import jsonp from "fetch-jsonp";
import store from "./cache";

const API_BASE_URL = "https://deezer-proxy-d6blegb47.now.sh/";

export class ApiService {
	call(url: string) {
		if (store.has(url)) return store.get(url);
		return jsonp(url, {
			timeout: 10000,
		})
			.then((res) => res.json())
			.then((response) => store.set(response.data, url));
	}
	playlist(id: string) {
		const url = `${API_BASE_URL}chart/${id}/tracks?output=jsonp`;
		return this.call(url);
	}
	search(term: string) {
		const url = `${API_BASE_URL}search?q=${term}&output=jsonp&limit=24`;
		return this.call(url);
	}
}

export default new ApiService();
