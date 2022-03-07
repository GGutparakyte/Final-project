const { dateStr2DateTime } = require('../helpers/date-helpers');
class CategoryViewModel {
  constructor({ _id, title, createdAt, updatedAt }) {
    this.id = _id;
    this.title = title;
    this.createdAt = dateStr2DateTime(createdAt);
    this.updatedAt = dateStr2DateTime(updatedAt);

  }
}

module.exports = CategoryViewModel;