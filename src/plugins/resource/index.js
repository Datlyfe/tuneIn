import jsonp from 'fetch-jsonp';
import cache from "../cache/cache";
export default {
  install:(Vue,{endpoint='',resources={}})=>{
    Vue.prototype.$getResource=function(method,options) {
      let name = this.$options.resource;
      if(!name||!resources[name]||!resources[name][method]) return;
      const {path,resolve}=resources[name][method](options);
      const url = endpoint+path;
      const mappers={
        pipe:(dataSet)=>Promise.resolve(dataSet)
      }
      if(cache.has(url)) return resolve(cache.get(url),mappers);


      return jsonp(url)
      .then(res=>res.json())
      .then(response => cache.set(response.data, url))
      .then(data => resolve(data, mappers));

    }
  }
}