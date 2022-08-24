var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

$.get('http://www.pushplus.plus/send?token=0449628860114ffb8ca3f14c704437cd&content='+url );
