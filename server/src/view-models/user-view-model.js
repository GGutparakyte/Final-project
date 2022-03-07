const ImageViewModel = require('./image-view-model');

class UserViewModel {
  constructor({ _id, email, role, name, mainImg, createdAt, updatedAt }) {
    this.id = _id;
    this.email = email;
    this.role = role;
    this.name = name;
    if (mainImg) {
      this.mainImg = new ImageViewModel(mainImg);
    }
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}

module.exports = UserViewModel;
