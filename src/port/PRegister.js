export default {
  //获取城市列表
  /*type	Y	string	
  guess：定位城市，
   hot：热门城市， 
   group：所有城市*/

  cities: params => {
    return window.api.get('v1/cities', { body: params });
  },

  // 获取所选城市信息
  /*id	Y	int	城市id*/
  citiesInfo: params => {
    return window.api.get('v1/cities', { body: params });
  },

  /*
    搜索地址
    city_id	Y	int	城市id
    keyword	Y	string	搜索关键词
    type	N	string	搜索类型，默认为search
  */
  searchAddress: params => {
    return window.api.get('v1/pois', { body: params });
  },

  /*
  根据经纬度详细定位
  参数	是否必选	类型	说明
  geohash	 Y     string	经纬度

  */

  geohash: params => {
    return window.api.get('v2/pois', { body: params });
  },
};
