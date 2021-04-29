var token = "TOKEN"; 
var telegramUrl = "https://api.telegram.org/bot" + token; 
var webAppUrl = "Web App URL"; 

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
  return HtmlService.createHtmlOutput("go corona go");
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
var ssId = "Spreadsheet ID";
var sheet = SpreadsheetApp.openById(ssId).getSheetByName("Contacts");  
var contact = SpreadsheetApp.openById(ssId).getSheetByName("SOS Requests");  
var keyBoard = {
    "inline_keyboard": [
      [{
        "text": "Hospital Beds",
        "callback_data": "Option A"
      }],
      [{
        "text": "Ambulance",
        "callback_data": "Option D"
      }],
      [{
        "text": "Oxygen",
        "callback_data": "Option B"
      }],
      [{
        "text": "Request SOS Help",
        "callback_data": "Option J"
      }],
      [{
        "text": "Plasma Donors",
        "callback_data": "Option H"
      }],
      [{
        "text": "Pharmacies",
        "callback_data": "Option K"
      }],
      [{
        "text": "Medicines",
        "callback_data": "Option G"
      }],
      [{
        "text": "Lab Testing",
        "callback_data": "Option C"
      }], 
      [{
        "text": "Home Cooked Meals",
        "callback_data": "Option E"
      }],
      [{
        "text": "Crematorium",
        "callback_data": "Option F"
      }],   
      [{
        "text": "Covid Test Results",
        "callback_data": "Option I"
      }]
      ]
  };
  
  var keyBoard1 = {
    "inline_keyboard": [
      [{
        "text": "View Menu",
        "callback_data": "menu"
      }]
      ]
  };

  if(contents.callback_query){
    var chat_id = contents.callback_query.from.id;
    var data = contents.callback_query.data;
    
    if(data == "Option A"){
      var A = sheet.getRange("A2:A").getValues();
      var Ai = A.filter(String);
      var message = "<b>Hospitals</b>\n\n<b>Contacts verified by CMKR</b>\n\n";
      if(Ai.length <= 55){
        for(var i = 0; i<Ai.length; i++){
          message = message + (i+1)+". "+ String(Ai[i]) +"\n\n";
        }
        sendMessage(chat_id,message,keyBoard1);
      }     
      else{
        for(var i = 0; i<55; i++){
          message = message + (i+1)+". "+ String(Ai[i]) +"\n\n";
        }
        sendMessage(chat_id,message);
        var new_mess = "";
        for(var i = 55; i<Ai.length; i++){
          new_mess = new_mess + (i+1)+". "+String(Ai[i])+"\n\n";
        }
        sendMessage(chat_id,new_mess,keyBoard1);
      } 
    }
    
    else if(data == "Option B"){
      var B = sheet.getRange("B2:B").getValues();
      var Bi = B.filter(String);
      var message = "<b>Oxygen</b>\n\n<b>Contacts verified by CMKR</b>\n\n";
      for(var i = 0; i<Bi.length; i++){
        message = message + (i+1)+". " + String(Bi[i]) +"\n\n";
      }
      sendMessage(chat_id,message,keyBoard1);
    }
    
    else if(data == "Option C"){
      var C = sheet.getRange("C2:C").getValues();
      var Ci = C.filter(String);
      var message = "<b>Lab Testing</b>\n\n<b>Contacts verified by CMKR</b>\n\n";
      for(var i = 0; i<Ci.length; i++){
        message = message + (i+1)+". "+ String(Ci[i]) +"\n\n";
      }
      sendMessage(chat_id,message,keyBoard1);
    }
    
    else if(data == "Option D"){
      var D = sheet.getRange("D2:D").getValues();
      var Di = D.filter(String);
      var message = "<b>Ambulance</b>\n\n<b>Contacts verified by CMKR</b>\n\n";
      for(var i = 0; i<Di.length; i++){
        message = message + (i+1)+". "+ String(Di[i]) +"\n\n";
      }
      sendMessage(chat_id,message,keyBoard1);
    }
    
    else if(data == "Option E"){
      var E = sheet.getRange("E2:E").getValues();
      var Ei = E.filter(String);
      var message = "<b>Home Cooked Meals</b>\n\n<b>Contacts verified by CMKR</b>\n\n";
      for(var i = 0; i<Ei.length; i++){
        message = message + (i+1)+". "+ String(Ei[i]) +"\n\n";
      }
      sendMessage(chat_id,message,keyBoard1);
    }
    
    else if(data == "Option F"){
      var F = sheet.getRange("F2:F").getValues();
      var Fi = F.filter(String);
      var message = "<b>Crematorium</b>\n\n<b>Contacts verified by CMKR</b>\n\n";
      for(var i = 0; i<Fi.length; i++){
        message = message + (i+1)+". "+ String(Fi[i]) +"\n\n";
      }
      sendMessage(chat_id,message,keyBoard1);
    }
    
    else if(data == "Option G"){
      var G = sheet.getRange("G2:G").getValues();
      var Gi = G.filter(String);
      var message = "<b>Medicines</b>\n\n<b>Contacts verified by CMKR</b>\n\n";
      for(var i = 0; i<Gi.length; i++){
        message = message + (i+1)+". "+ String(Gi[i]) +"\n\n";
      }
      sendMessage(chat_id,message,keyBoard1);
    }
    
    else if(data == "Option H"){
      var H = sheet.getRange("H2:H").getValues();
      var Hi = H.filter(String);
      var message = "<b>Plasma Donors</b>\n\n<b>Contacts verified by CMKR</b>\n\n";
      for(var i = 0; i<Hi.length; i++){
        message = message + (i+1)+". "+ String(Hi[i]) +"\n\n";
      }
      sendMessage(chat_id,message,keyBoard1);
    }
    
    else if(data == "Option K"){
      var H = sheet.getRange("I2:I").getValues();
      var Hi = H.filter(String);
      var message = "<b>Pharmacies</b>\n\n<b>Contacts verified by CMKR</b>\n\n";
      for(var i = 0; i<Hi.length; i++){
        message = message + (i+1)+". "+ String(Hi[i]) +"\n\n";
      }
      sendMessage(chat_id,message,keyBoard1);
    }
    
    else if(data == "Option I"){
      var link = "https://www.covidwar.karnataka.gov.in/service1";
      sendMessage(chat_id,"Please click on this link to get redirected to the results page: https://www.covidwar.karnataka.gov.in/service1",keyBoard1);
    }
    
    else if(data == "Option J"){
      sendMessage(chat_id,"Please enter your phone number, comments/queries and address in the format \n# Ph.No. # Query # Address \nExample: \n#9912345678 # Require plasma donor # D999 Century Apts, Kanakapura Rd",keyBoard1);
    }
    else if(data == "menu"){
      sendMessage(chat_id,"Please select an option.",keyBoard); 
    }
  }
  else{
    var chat_id = contents.message.from.id;
    var message = contents.message.text;
    var name = contents.message.from.first_name;
    var t = contents.message.date;
    if(contents.message.from.last_name){
      name = name +" "+ contents.message.from.last_name;
    }
    if(message.indexOf("#") == 0){
      var row = contact.getLastRow();
      var cell1 = contact.getRange(row+1,1);
      var cell2 = contact.getRange(row+1,2);
      var cell3 = contact.getRange(row+1,3);
      var cell4 = contact.getRange(row+1,4);
      var cell5 = contact.getRange(row+1,5);
      cell1.setValue(name);
      cell5.setValue(t);
      message = message.slice(message.indexOf("#")+1,);
      cell2.setValue(message.slice(0,message.indexOf("#")));
      message = message.slice(message.indexOf("#")+1,);
      cell3.setValue(message.slice(0,message.indexOf("#")));
      message = message.slice(message.indexOf("#")+1,);
      cell4.setValue(message);
      sendMessage(chat_id,"Thank you for reaching out to us. Our team will get back to you soon!",keyBoard1);
    }
    else{
      sendMessage(chat_id,"Please select an option.",keyBoard); 
    }
  }

}


