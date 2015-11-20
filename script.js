(function(){
  animate = {
    _el: null,
    _timer: null,
    _timeCount: 0,
    _pause: null,
    _curP: 0,
    _isScrolling: false,
    init: function(elId){
      var self = this;
      this._el = document.getElementById(elId);
      this._el.style.position = 'relative';
      this._el.addEventListener('mouseenter', function(){
        if(!self._isScrolling){
          self.stop();
          clearTimeout(self._pause);
        }
      });
      this._el.addEventListener('mouseleave', function(){
        if(!self._isScrolling){
          self.start();
          clearTimeout(self._pause);
        }
      })
    },
    _move: function(speed,position){
       console.log(0);
       this._curP -= speed;
       this._el.style.left = this._curP+'px';
       this._timeCount += 1;
    },
    _duration:0,
    setDuration: function(d){
      this._duration = d;
    },
    start: function(){
      var self = this;
      //this.timer = setInterval(me.move(8,-700),1)
      !this._isScrolling ? this._isScrolling = true:null;
      this._timer = setInterval(function(){
        self._move(5,700);
        self._timeCount++;
        console.log(Math.abs(self._curP));
        if(Math.abs(self._curP)%700 === 0){
          self.stop();
          if(Math.abs(self._curP) >= 3*700){
            this._timeCount = 0;
            self._curP = 0;
          }
          self._pause = setTimeout(function(){
            animate.start.call(self);
          },2000);
        }
      },1)
    },
    stop: function(){
     clearInterval(this._timer);
     this._isScrolling = false;
    }
  }

  animate.init('slide');
  animate.setDuration(1000);
  animate.start();

})();
