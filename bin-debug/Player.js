var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var test;
(function (test) {
    var Player = (function (_super) {
        __extends(Player, _super);
        function Player() {
            var _this = _super.call(this) || this;
            _this.color = 0x0000ff;
            _this._index = 0;
            _this._findWayH = 0;
            _this._findWayF = 0;
            _this._findWayG = 0;
            _this._parentIndex = -1;
            _this._map = null;
            _this._targetX = 0;
            _this._targetY = 0;
            _this._targetIndex = 0;
            return _this;
        }
        Object.defineProperty(Player, "instance", {
            get: function () {
                if (this._player == null) {
                    this._player = new Player();
                }
                return this._player;
            },
            enumerable: true,
            configurable: true
        });
        Player.prototype.drawPlayer = function (color) {
            color = color == undefined ? this.color : color;
            this.graphics.beginFill(color);
            this.graphics.drawRect(0, 0, Player.WIDTH, Player.HIGHT);
            this.graphics.endFill();
        };
        Player.prototype.setPosistion = function (obj) {
            this.x = obj.x;
            this.y = obj.y;
            if (obj.index != undefined) {
                this._index = obj.index;
            }
        };
        Object.defineProperty(Player.prototype, "index", {
            get: function () {
                return this._index;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Player.prototype, "findWayH", {
            //获得寻路H值
            get: function () {
                return this._findWayH;
            },
            enumerable: true,
            configurable: true
        });
        //设置寻路H值
        Player.prototype.setfindWayH = function (targetPos) {
            this._findWayH = Math.abs(targetPos.x - this.x) * Player.WIDTH + Math.abs(targetPos.y - this.y) * Player.HIGHT;
        };
        //设置寻路G值
        Player.prototype.setfindWayG = function (G) {
            this._findWayG += G;
        };
        Object.defineProperty(Player.prototype, "findWayG", {
            //获得寻路G值
            get: function () {
                return this._findWayG;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Player.prototype, "findWayF", {
            //获得寻路F值
            get: function () {
                return this._findWayH + this._findWayG;
            },
            enumerable: true,
            configurable: true
        });
        //设置父节点索引
        Player.prototype.setParentIndex = function (index) {
            this._parentIndex = index;
        };
        Object.defineProperty(Player.prototype, "parentIndex", {
            get: function () {
                return this._parentIndex;
            },
            enumerable: true,
            configurable: true
        });
        Player._player = null;
        Player.WIDTH = 10;
        Player.HIGHT = 10;
        return Player;
    }(egret.Sprite));
    test.Player = Player;
    __reflect(Player.prototype, "test.Player");
})(test || (test = {}));
//# sourceMappingURL=Player.js.map