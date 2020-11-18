const superchat = {
  class Chat {
    constructor() {
      this.chat = this.chat || {}
      this.msgcnt = 0;
     }
     
     send(msg, channel) {
      this.msgcnt+=1;
      this.chat.push({
        key: [this.msgcnt, msg],
        value: channel
       })
      }
   }
}

module.exports = superchat;
