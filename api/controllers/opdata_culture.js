'use strict';
const util = require('util');
const http = require('http');
const bufferList = require('bl');

module.exports = {
  getLecture,
  getActivity,
  getConcert
};

function getConcert(req, res) {
  let data;
  console.log('hehe');
  http.request({
      hostname:'cloud.culture.tw',
      path:'/frontsite/trans/SearchShowAction.do?method=doFindTypeJ&category=17',
      method:'GET'
  }, (resGetData) => {
    console.log('no');
    let bl = bufferList();
    resGetData.setEncoding('utf8');
    console.log('hehe');
    resGetData.on('data', (chunk) => {
      bl.append(chunk);
      console.log(chunk);
    });
    resGetData.on('end', () => {
        data = bl.toString();
    });
  });

  //let data = [{"version":"1.4","UID":"593ecc921b480f8e5dd7b0e5","title":"ONION_PRODUCTION_PRESENTS_RICH-CHIGGA_live_in_TAIPEI","category":"17","showInfo":[{"time":"2017/06/24 19:00:00","location":"","locationName":"WAVEClubTaipei","onSales":"Y","price":"800,1000","latitude":"","longitude":"","endTime":""}],"showUnit":"","discountInfo":"","descriptionFilterHtml":"","imageUrl":"","masterUnit":["Onion Production"],"subUnit":[""],"supportUnit":[""],"otherUnit":[""],"webSales":"http://www.ticket.com.tw/dm.asp?P1\u003d0000018314","sourceWebPromote":"","comment":"","editModifyDate":"2017/06/15 14:54:16","sourceWebName":"年代","startDate":"2017/06/24","endDate":"2017/06/24","status":"success","total":"9","hitRate":0},{"version":"1.4","UID":"58c976decc46606a234945b5","title":"夏川里美2017戀夏台北演唱會","category":"17","showInfo":[{"time":"2017/07/01 19:30:00","location":"臺北市信義路五段1號","locationName":"台北國際會議中心大會堂","onSales":"Y","price":"1280,1880,2280,2480,3080,3680,4280","latitude":"25.0332480","longitude":"121.5604840","endTime":""},{"time":"2017/07/02 19:30:00","location":"臺北市信義路五段1號","locationName":"台北國際會議中心大會堂","onSales":"Y","price":"1280,1880,2280,2480,3080,3680,4280","latitude":"25.0332480","longitude":"121.5604840","endTime":""}],"showUnit":"","discountInfo":"","descriptionFilterHtml":"","imageUrl":"","masterUnit":["萬世國際股份有限公司"],"subUnit":[""],"supportUnit":[""],"otherUnit":[""],"webSales":"http://www.ticket.com.tw/dm.asp?P1\u003d0000018011","sourceWebPromote":"","comment":"","editModifyDate":"2017/03/29 15:45:59","sourceWebName":"年代","startDate":"2017/07/01","endDate":"2017/07/02","status":"success","total":"9","hitRate":0},{"version":"1.4","UID":"5925bff91b481a90695d1afc","title":"樂夜樂美麗-台灣科大EDBA/EMBA第11屆慈善音樂會","category":"17","showInfo":[{"time":"2017/07/08 19:30:00","location":"臺北市仁愛路四段505號","locationName":"台北國父紀念館","onSales":"Y","price":"600,1000,1500,2000,2500,3000,5000","latitude":"25.03958","longitude":"121.560265","endTime":""}],"showUnit":"","discountInfo":"","descriptionFilterHtml":"","imageUrl":"","masterUnit":["台灣科大EMBA校友會"],"subUnit":[""],"supportUnit":[""],"otherUnit":[""],"webSales":"http://www.ticket.com.tw/dm.asp?P1\u003d0000018271","sourceWebPromote":"","comment":"","editModifyDate":"2017/05/31 16:57:57","sourceWebName":"年代","startDate":"2017/07/08","endDate":"2017/07/08","status":"success","total":"9","hitRate":0},{"version":"1.4","UID":"58d160a9cc46cbd6e3016a5e","title":"2017蔡小虎\"福虎生風_幸福送乎你\"演唱會","category":"17","showInfo":[{"time":"2017/07/15 19:30:00","location":"臺北市信義路五段1號","locationName":"台北國際會議中心大會堂","onSales":"Y","price":"1200,1600,2000,2400,2800,3600,4500,5200","latitude":"25.0332480","longitude":"121.5604840","endTime":""}],"showUnit":"","discountInfo":"","descriptionFilterHtml":"","imageUrl":"","masterUnit":["宜辰整合行銷有限公司"],"subUnit":[""],"supportUnit":[""],"otherUnit":[""],"webSales":"http://www.ticket.com.tw/dm.asp?P1\u003d0000018022","sourceWebPromote":"","comment":"","editModifyDate":"2017/03/29 15:46:18","sourceWebName":"年代","startDate":"2017/07/15","endDate":"2017/07/15","status":"success","total":"9","hitRate":0},{"version":"1.4","UID":"590b6334cc46ece0c5d76be5","title":"2017蔡小虎\"福虎生風_幸福送乎你\"演唱會","category":"17","showInfo":[{"time":"2017/07/16 19:30:00","location":"臺北市信義路五段1號","locationName":"台北國際會議中心大會堂","onSales":"Y","price":"1200,1600,2000,2400,2800,3600,4500,5200","latitude":"25.0332480","longitude":"121.5604840","endTime":""},{"time":"2017/08/12 19:30:00","location":"臺中市南區國光路250號","locationName":"台中市中興大學惠蓀堂","onSales":"Y","price":"1200,1500,1800,2600,3200,3800,4200,4800","latitude":"0","longitude":"0","endTime":""}],"showUnit":"","discountInfo":"","descriptionFilterHtml":"","imageUrl":"","masterUnit":["翔彩儀有限公司"],"subUnit":[""],"supportUnit":[""],"otherUnit":[""],"webSales":"http://www.ticket.com.tw/dm.asp?P1\u003d0000018211","sourceWebPromote":"","comment":"","editModifyDate":"2017/05/11 15:06:13","sourceWebName":"年代","startDate":"2017/07/16","endDate":"2017/08/12","status":"success","total":"9","hitRate":0},{"version":"1.4","UID":"5942c10b1b48fedf3697496e","title":"[音樂人生-紀利男生命的交響樂章]音樂會","category":"17","showInfo":[{"time":"2017/07/24 19:30:00","location":"臺北市八德路三段25號","locationName":"城市舞台","onSales":"Y","price":"300,600,900","latitude":"25.0483360","longitude":"121.5519000","endTime":""}],"showUnit":"","discountInfo":"","descriptionFilterHtml":"","imageUrl":"","masterUnit":["(財)中華民俗藝術"],"subUnit":[""],"supportUnit":[""],"otherUnit":[""],"webSales":"http://www.ticket.com.tw/dm.asp?P1\u003d0000018293","sourceWebPromote":"","comment":"","editModifyDate":"2017/06/21 15:05:20","sourceWebName":"年代","startDate":"2017/07/24","endDate":"2017/07/24","status":"success","total":"9","hitRate":0},{"version":"1.4","UID":"5931248d6e5e9f545fa3a9bf","title":"2017洪榮宏の心曲演唱會","category":"17","showInfo":[{"time":"2017/08/12 19:30:00","location":"台南市東區中華東路三段332號","locationName":"台南文化中心演藝廳","onSales":"Y","price":"1200、1600、2400、2800、3200、3800","latitude":"22.974721","longitude":"120.221585","endTime":"2017/08/12 22:00:00"}],"showUnit":"","discountInfo":"","descriptionFilterHtml":"","imageUrl":"","masterUnit":["寬宏藝術"],"subUnit":[""],"supportUnit":[""],"otherUnit":[""],"webSales":"https://kham.com.tw/application/UTK02/UTK0201_.aspx?PRODUCT_ID\u003dM02RATOD","sourceWebPromote":"https://kham.com.tw/application/UTK02/UTK0201_.aspx?PRODUCT_ID\u003dM02RATOD","comment":"","editModifyDate":"2017/06/02 16:42:32","sourceWebName":"寬宏藝術","startDate":"2017/08/12","endDate":"2017/08/12","status":"success","total":"9","hitRate":0},{"version":"1.4","UID":"59134bb2cc465eaea9d4ecd1","title":"naomi_and_goro_2017台北演唱會","category":"17","showInfo":[{"time":"2017/08/13 18:00:00","location":"","locationName":"中油國光廳","onSales":"Y","price":"1200,1600","latitude":"","longitude":"","endTime":""}],"showUnit":"","discountInfo":"","descriptionFilterHtml":"","imageUrl":"","masterUnit":["WelcomeMusic.洧誠"],"subUnit":[""],"supportUnit":[""],"otherUnit":[""],"webSales":"http://www.ticket.com.tw/dm.asp?P1\u003d0000018248","sourceWebPromote":"","comment":"","editModifyDate":"2017/05/24 15:30:25","sourceWebName":"年代","startDate":"2017/08/13","endDate":"2017/08/13","status":"success","total":"9","hitRate":0},{"version":"1.4","UID":"5941f3566e5eb60f7dfd4665","title":"2017李榮浩 有理想 世界巡迴演唱會 台北場","category":"17","showInfo":[{"time":"2017/09/16 19:30:00","location":"台北市松山區南京東路四段2號","locationName":"臺北小巨蛋","onSales":"Y","price":"800、1800、2400、2800、3200、3500、3800","latitude":"25.050793","longitude":"121.549889","endTime":"2017/09/16 22:00:00"}],"showUnit":"","discountInfo":"","descriptionFilterHtml":"","imageUrl":"","masterUnit":["寬宏藝術"],"subUnit":[""],"supportUnit":[""],"otherUnit":[""],"webSales":"https://kham.com.tw/application/UTK02/UTK0201_.aspx?PRODUCT_ID\u003dM036CMI7","sourceWebPromote":"https://kham.com.tw/application/UTK02/UTK0201_.aspx?PRODUCT_ID\u003dM036CMI7","comment":"","editModifyDate":"2017/06/15 10:46:21","sourceWebName":"寬宏藝術","startDate":"2017/09/16","endDate":"2017/09/16","status":"success","total":"9","hitRate":0}];
  res.json(data); 
}

function getActivity(req, res) {
  let data = 'Activity'
  res.json(data);
}

function getLecture(req, res) {
  let data = 'Lecture';
  res.json(data);
}