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
    var PlayerEnd = (function (_super) {
        __extends(PlayerEnd, _super);
        function PlayerEnd() {
            var _this = _super.call(this) || this;
            _this.color = 0xffff00;
            return _this;
        }
        Object.defineProperty(PlayerEnd, "instance", {
            get: function () {
                if (this._playerEnd == null) {
                    this._playerEnd = new PlayerEnd();
                }
                return this._playerEnd;
            },
            enumerable: true,
            configurable: true
        });
        PlayerEnd._playerEnd = null;
        return PlayerEnd;
    }(test.Player));
    test.PlayerEnd = PlayerEnd;
    __reflect(PlayerEnd.prototype, "test.PlayerEnd");
})(test || (test = {}));
//# sourceMappingURL=PlayerEnd.js.map