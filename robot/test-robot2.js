// Generated by LiveScript 1.2.0
(function(){
  var TestRobot2, tr;
  importScripts('../base-robot.js');
  TestRobot2 = (function(superclass){
    var prototype = extend$((import$(TestRobot2, superclass).displayName = 'TestRobot2', TestRobot2), superclass).prototype, constructor = TestRobot2;
    prototype.onIdle = function(){
      this.turn_left(5);
      /*
      if @me.x < 200
        @move_forwards 200
      else
        @move_backwards 200
      */
      this.move_forwards(30);
      if (Math.random() > 0.5) {
        return this.turn_right(30);
      } else {
        return this.turn_left(30);
      }
    };
    prototype.onWallCollide = function(){
      this.move_opposide(10);
      return this.turn_left(90);
    };
    prototype.onHit = function(){
      this.turn_right(30);
      return this.move_forwards(50);
    };
    prototype.onEnemySpot = function(){
      return this.shoot();
    };
    function TestRobot2(){
      TestRobot2.superclass.apply(this, arguments);
    }
    return TestRobot2;
  }(BaseRobot));
  tr = new TestRobot2("My first test robot");
  function extend$(sub, sup){
    function fun(){} fun.prototype = (sub.superclass = sup).prototype;
    (sub.prototype = new fun).constructor = sub;
    if (typeof sup.extended == 'function') sup.extended(sub);
    return sub;
  }
  function import$(obj, src){
    var own = {}.hasOwnProperty;
    for (var key in src) if (own.call(src, key)) obj[key] = src[key];
    return obj;
  }
}).call(this);
