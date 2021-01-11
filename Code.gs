//Author: @manualsFile
var data = {
    'siteUrl' : 'https://mysite.com',
    'urlList' : [
      'https://mysite.com/abc-xyz.html',
      'https://mysite.com/123-abc.html'
    ]
};

Bing_Submit_Url_API(data);

function Bing_Submit_Url_API(data) {
  /* data example.
  data = {
    'siteUrl' : 'https://mysite.com',
    'urlList' : [  //Array of urls you want submit.
      'https://mysite.com/abc-xyz.html',
      'https://mysite.com/123-abc.html'
    ]
  };
  */
  if (typeof data != 'object') {
    return false;
  }
  var apiKey = '{input your Bing webmaster API here}';
  var endpoint = 'https://ssl.bing.com/webmaster/api.svc/json/SubmitUrlbatch?apikey='+ apiKey;
  var option = {
    'method': "POST",
    'contentType' : 'application/json',
    'payload' : JSON.stringify(data),
    'muteHttpExceptions' : true
  };
  var response = UrlFetchApp.fetch(endpoint, option);
  var responseCode = response.getResponseCode();
  if (responseCode == 200) return true;
  return false;
}
