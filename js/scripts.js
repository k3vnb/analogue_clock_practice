function my_Clock() {
  this.cur_date = new Date();
  this.hours = this.cur_date.getHours();
  this.minutes = this.cur_date.getMinutes();
  this.seconds = this.cur_date.getSeconds();
}

my_Clock.prototype.run = function(){
  {
    setInterval(this.update.bind(this), 1000)
  };
  my_Clock.prototype.update = function(){
    this.updateTime(1);
    console.log(this.hours + ":" + this.minutes + ":" + this.seconds);      
    }
  }
}
