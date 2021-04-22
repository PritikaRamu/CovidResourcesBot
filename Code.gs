var token = "1770464291:AAGnbcqljIBCV063sGOfn6DxJjD6CmQGe5s"; 
var telegramUrl = "https://api.telegram.org/bot" + token; 
var webAppUrl = "https://script.google.com/macros/s/AKfycbzzJvGRk9XGYV2_sTGgXkQE7vKKrC8A-Hp1CEBdNeKB79rlcVU/exec"; 

function getMe(){
  var url =  telegramUrl+"/getMe";
  var response = UrlFetchApp.fetch(url);
  Logger.log(response.getContentText());
}

function setWebhook() {
var url = telegramUrl + "/setWebhook?url=" + webAppUrl;
var response = UrlFetchApp.fetch(url);
  Logger.log(response.getContentText());
} 

function doGet(e){
  return HtmlService.createHtmlOutput("Hi there");
}

function sendMessage(chat_id, text, keyBoard) {
  var data = {
    method: "post",
    payload: {
      method: "sendMessage",
      chat_id: String(chat_id),
      text: text,
      parse_mode: "HTML",
      reply_markup: JSON.stringify(keyBoard)
    }
  };
  UrlFetchApp.fetch(telegramUrl+'/',data);
 }

function doPost(e) {
var contents = JSON.parse(e.postData.contents);
//GmailApp.sendEmail(Session.getEffectiveUser().getEmail(),"Message",JSON.stringify(contents,null,4));
var ssId = "1pSwRJwKP_vc0wAFbCzNb2lQ2haybKbVnO7ohg2aRd0k";
var sheet = SpreadsheetApp.openById(ssId).getSheetByName("Sheet1");  
var keyBoard = {
    "inline_keyboard": [
      [{
        "text": "Hospital Beds",
        "callback_data": "Option A"
      }],
      [{
        "text": "Oxygen",
        "callback_data": "Option B"
      }],
      [{
        "text": "Testing",
        "callback_data": "Option C"
      }],
      [{
        "text": "Ambulance",
        "callback_data": "Option D"
      }],
      [{
        "text": "Home Cooked Meals",
        "callback_data": "Option E"
      }],
      [{
        "text": "Sanitization",
        "callback_data": "Option F"
      }],
      [{
        "text": "Medicines",
        "callback_data": "Option G"
      }],
      [{
        "text": "Request SOS Help",
        "callback_data": "Option H"
      }]
      ]
  };

  if(contents.callback_query){
    var chat_id = contents.callback_query.from.id;
    var data = contents.callback_query.data;
    
    if(data == "Option A"){
      var A = sheet.getRange("A2:A").getValues();
      var Ai = A.filter(String);
      var message = "";
      for(var i = 0; i<Ai.length; i++){
        message = message + String(Ai[i]) +"\n";
      }
      sendMessage(chat_id,message);
    }
    
    else if(data == "Option B"){
      var B = sheet.getRange("B2:B").getValues();
      var Bi = B.filter(String);
      var message = "";
      for(var i = 0; i<Bi.length; i++){
        message = message + String(Bi[i]) +"\n";
      }
      sendMessage(chat_id,message);
    }
    
    else if(data == "Option C"){
      var C = sheet.getRange("C2:C").getValues();
      var Ci = C.filter(String);
      var message = "";
      for(var i = 0; i<Ci.length; i++){
        message = message + String(Ci[i]) +"\n";
      }
      sendMessage(chat_id,message);
    }
    
    else if(data == "Option D"){
      var D = sheet.getRange("D2:D").getValues();
      var Di = D.filter(String);
      var message = "";
      for(var i = 0; i<Di.length; i++){
        message = message + String(Di[i]) +"\n";
      }
      sendMessage(chat_id,message);
    }
    
    else if(data == "Option E"){
      var E = sheet.getRange("E2:E").getValues();
      var Ei = E.filter(String);
      var message = "";
      for(var i = 0; i<Ei.length; i++){
        message = message + String(Ei[i]) +"\n";
      }
      sendMessage(chat_id,message);
    }
    
    else if(data == "Option F"){
      var F = sheet.getRange("F2:F").getValues();
      var Fi = F.filter(String);
      var message = "";
      for(var i = 0; i<Fi.length; i++){
        message = message + String(Fi[i]) +"\n";
      }
      sendMessage(chat_id,message);
    }
    
    else if(data == "Option G"){
      var G = sheet.getRange("G2:G").getValues();
      var Gi = G.filter(String);
      var message = "";
      for(var i = 0; i<Gi.length; i++){
        message = message + String(Gi[i]) +"\n";
      }
      sendMessage(chat_id,message);
    }
    
    else if(data == "Option F"){
      var F = sheet.getRange("F2:F").getValues();
      var Fi = F.filter(String);
      var message = "";
      for(var i = 0; i<Fi.length; i++){
        message = message + String(Fi[i]) +"\n";
      }
      sendMessage(chat_id,message);
    }
    
    else if(data == "Option G"){
      var G = sheet.getRange("G2:G").getValues();
      var Gi = G.filter(String);
      var message = "";
      for(var i = 0; i<Gi.length; i++){
        message = message + String(Gi[i]) +"\n";
      }
      sendMessage(chat_id,message);
    }
    
    else if(data == "Option H"){
      var H = sheet.getRange("H2:H").getValues();
      var Hi = H.filter(String);
      var message = "";
      for(var i = 0; i<Hi.length; i++){
        message = message + String(Hi[i]) +"\n";
      }
      sendMessage(chat_id,message);
    }
  }
  else{
    var chat_id = contents.message.from.id;
    var message = contents.message.text;
    sendMessage(chat_id,"/*In testing mode*/ Please select an option. Send any message to view the menu again.",keyBoard); 
  }

}


