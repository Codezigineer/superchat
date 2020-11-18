const superchat = {
  let Chat = function() {
      this.chat = this.chat || {};
      this.msgcnt = 0;
      this.send = function(msg, channel) {
        this.msgcnt+=1;
        this.chat.push({
          key: [this.msgcnt, msg],
          value: channel
        })
      }
   }
   
   function example() {
     var chat = new Chat;
     chat.send("msg", 0);
   }
}

module.exports = superchat;
