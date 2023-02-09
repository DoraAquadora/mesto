
export class UserInfo{
  constructor(nameSelector, infoSelector){
    this._nameElement = document.querySelector(nameSelector);
    this._infoElement = document.querySelector(infoSelector);
  }

  getUserInfo(){
    const userInfo = {};
    userInfo.name = this._nameElement.textContent;
    userInfo.info = this._infoElement.textContent;
    return userInfo;
  }

  setUserInfo(name,info){
    this._nameElement.textContent = name;
    this._infoElement.textContent = info;
  };
}
