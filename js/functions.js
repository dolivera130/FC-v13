function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

function ValidateSession() {
  if( document.cookie.indexOf('wasession') != -1 ) {
    if( document.cookie.indexOf('wasession') == 0 ) {
  		sessionToken = document.cookie.substr(document.cookie.indexOf('wasession')+10,document.cookie.indexOf('userid=')-12);
  		userId = document.cookie.substr(document.cookie.indexOf('userid=')+7,document.cookie.length);
  	}
  	else {
  		userId = document.cookie.substr(document.cookie.indexOf('userid=')+7,document.cookie.indexOf('wasession')-9);
  		sessionToken = document.cookie.substr(document.cookie.indexOf('wasession=')+10,document.cookie.length);
  	}
  	console.log("Token: " + sessionToken);
  	console.log("User Id: " + userId);
  }
  else {
    document.location.href = "login.html";
  }
}

function getBinary(encodedFile) {
  var base64Image = encodedFile.split("data:image/jpeg;base64,")[1];
  var binaryImg = atob(base64Image);
  var length = binaryImg.length;
  var ab = new ArrayBuffer(length);
  var ua = new Uint8Array(ab);
  for (var i = 0; i < length; i++) {
    ua[i] = binaryImg.charCodeAt(i);
  }
  var blob = new Blob([ab], {
    type: "image/jpeg"
  });
  return ab;
}
