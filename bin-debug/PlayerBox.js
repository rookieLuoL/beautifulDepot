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
    var PlayerBox = (function (_super) {
        __extends(PlayerBox, _super);
        function PlayerBox() {
            var _this = _super.call(this) || this;
            //0 可以通过 ，1不能通过
            _this._type = 0;
            return _this;
        }
        Object.defineProperty(PlayerBox, "instance", {
            get: function () {
                if (this._playerBox == null) {
                    this._playerBox = new PlayerBox();
                }
                return this._playerBox;
            },
            enumerable: true,
            configurable: true
        });
        PlayerBox.prototype.setType = function (type) {
            this._type = type;
            var color = type == 0 ? 0x00ff00 : 0xff0000;
            _super.prototype.drawPlayer.call(this, color);
        };
        Object.defineProperty(PlayerBox.prototype, "findWayType", {
            get: function () {
                return this._type;
            },
            enumerable: true,
            configurable: true
        });
        PlayerBox._playerBox = null;
        return PlayerBox;
    }(test.Player));
    test.PlayerBox = PlayerBox;
    __reflect(PlayerBox.prototype, "test.PlayerBox");
})(test || (test = {}));
//# sourceMappingURL=PlayerBox.js.map