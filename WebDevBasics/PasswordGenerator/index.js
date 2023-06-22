function newPassword(n) {
  const characters = [
    "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
    "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-",
    "+","=","{","[","}","]",",","|",":",";","<",">",".","?", "/"]
    
  let password = ""

  for (let i = 0; i < n; i++) {
    let nextCharIndex = Math.floor(Math.random() * characters.length)
    let nextChar = characters[nextCharIndex];

    password += nextChar
  }

  return password
}

function generatePasswords() {
  let passwordEls = document.getElementsByClassName('password')

  for (let i = 0, n = passwordEls.length; i < n; i++) {
    passwordEls[i].textContent = newPassword(15);
  }
}

function copyPassWord(element) {
  navigator.clipboard.writeText(element.textContent);
}

let darkMode = false;

function toggleColors() {
  darkMode = !darkMode;

  let r = document.querySelector(":root");
  if (darkMode) {
    r.style.setProperty('--bg-color', '#1F2937');
    r.style.setProperty('--title-color', '#FFFFFF');
    r.style.setProperty('--title-green', '#4ADF86');
    r.style.setProperty('--subtitle-grey', '#D5D4D8');
    r.style.setProperty('--btn-green', '#10B981');
    r.style.setProperty('--hr-color', '#2F3E53');
    r.style.setProperty('--password-green', '#55F991');
  } else {
    r.style.setProperty('--bg-color', '#ECFDF5');
    r.style.setProperty('--title-color', '#2B283A');
    r.style.setProperty('--title-green', '#10B981');
    r.style.setProperty('--subtitle-grey', '#6B7280');
    r.style.setProperty('--btn-green', '#10B981');
    r.style.setProperty('--hr-color', '#D5D4D8');
    r.style.setProperty('--password-green', '#5DEF92');
  }
}