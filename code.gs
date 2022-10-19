
var token = "{Bot API Token}";
var SheetID = "{Google Sheet Identifier ID}";

function doPost(e) {
  var stringJson = e.postData.getDataAsString();
  var updates = JSON.parse(stringJson);
 
    if(updates.message.text){
      sendText(updates.message.chat.id,CariBarangDariIDSheet(updates.message.text)); 
    }
}

function AmbilSheet1(){
  var rangeName = 'Sheet1!A2:R';
  var rows = Sheets.Spreadsheets.Values.get(SheetID, rangeName).values;
  return rows;
}

function AmbilSheet2(){
  var rangeName = 'Sheet2!A2:R';
  var rows = Sheets.Spreadsheets.Values.get(SheetID, rangeName).values;
  return rows;
}

function CariBarangDariIDSheet(IDbarang){
  var dataBarang = AmbilSheet1(); 
  for (var row = 0; row < dataBarang.length; row++) {
    if(dataBarang[row][0]==IDbarang){ 
      return "Hi " + dataBarang[row][2] + "\n" +
             "Weight: " + dataBarang[row][4] + "\n" +
             "Fat %: " + dataBarang[row][5] + "\n" + 
             "Resting Metabolism: " + dataBarang[row][7] + "\n" +
             "BMI" + dataBarang[row][8] + "\n" +
             "Subcutaneous (%) Whole body "+ dataBarang[row][10] + "\n" + 
             "Subcutaneous (%) Trunk "+ dataBarang[row][11] + "\n" + 
             "Subcutaneous (%) Arms "+ dataBarang[row][12] + "\n" + 
             "Subcutaneous (%) Whole body "+ dataBarang[row][13] + "\n" + 
             "Skeletal Muscle Ratio (%) Whole body "+ dataBarang[row][14] + "\n" + 
             "Skeletal Muscle Ratio (%) Trunk "+ dataBarang[row][15] + "\n" + 
             "Skeletal Muscle Ratio (%) Arm "+ dataBarang[row][16] + "\n" + 
             "Skeletal Muscle Ratio (%) Arm "+ dataBarang[row][17] + "\n" +
             "All the best with school and ODAC :D";
    }
  }

  var dataBarang = AmbilSheet2(); 
  for (var row = 0; row < dataBarang.length; row++) {
    if(dataBarang[row][0]==IDbarang){ 
      return "Hi " + dataBarang[row][2] + "\n" +
             "Weight: " + dataBarang[row][4] + "\n" +
             "Fat %: " + dataBarang[row][5] + "\n" + 
             "Resting Metabolism: " + dataBarang[row][7] +
             "BMI" + dataBarang[row][8] + "\n" +
             "Subcutaneous (%) Whole body "+ dataBarang[row][10] + "\n" + 
             "Subcutaneous (%) Trunk "+ dataBarang[row][11] + "\n" + 
             "Subcutaneous (%) Arms "+ dataBarang[row][12] + "\n" + 
             "Subcutaneous (%) Whole body "+ dataBarang[row][13] + "\n" + 
             "Skeletal Muscle Ratio (%) Whole body "+ dataBarang[row][14] + "\n" + 
             "Skeletal Muscle Ratio (%) Trunk "+ dataBarang[row][15] + "\n" + 
             "Skeletal Muscle Ratio (%) Arm "+ dataBarang[row][16] + "\n" + 
             "Skeletal Muscle Ratio (%) Arm "+ dataBarang[row][17] + "\n" +
             "Health is wealth!";
      }
  }
  return "Sorry that is an invalid input." +"\n"+ "Please try again with {column ref}";
}

function sendText(chatid,text,replymarkup){
var data = {
    method: "post",
    payload: {
      method: "sendMessage",
      chat_id: String(chatid),
      text: text,
      parse_mode: "HTML",
      reply_markup: JSON.stringify(replymarkup)
    }
  };
  UrlFetchApp.fetch('https://api.telegram.org/bot' + token + '/', data);
}
