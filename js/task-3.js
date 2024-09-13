const profile = {
  username: 'Jacob',
  playTime: 300,
  changeUsername(newName) {
    this.username = newName;
    return;
  },
  updatePlayTime(hours) {
    this.playTime = this.playTime + hours;
  },
  getInfo() {
    return `${profile.username} has ${profile.playTime} active hours!`;
  },
};

console.log(profile.getInfo()); // "Jacob has 300 active hours!"
