export const profile = {
  username: 'Jacob',
  playTime: 300,

  changeUsername(newName) {
    this.username(newName);
  },
  // changeUsername(oldName, newName) {
  //   for (let user of this.username)
  //     if (user === oldName) {
  //       user.name = newName;
  //     }
  // },
  // changeUsername(oldName, newName) {
  //   for (let user of this.username)
  //     if (user === oldName) {
  //       user.name = newName;
  //     }
  // },
  getInfo() {
    return `${this.changeUsername} has ${this.playTime} active hours!`;
  },
};
