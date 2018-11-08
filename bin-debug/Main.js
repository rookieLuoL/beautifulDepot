//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        var _this = _super.call(this) || this;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        return _this;
    }
    Main.prototype.onAddToStage = function (event) {
        egret.lifecycle.addLifecycleListener(function (context) {
            // custom lifecycle plugin
            context.onUpdate = function () {
            };
        });
        egret.lifecycle.onPause = function () {
            egret.ticker.pause();
        };
        egret.lifecycle.onResume = function () {
            egret.ticker.resume();
        };
        this.runGame().catch(function (e) {
            console.log(e);
        });
    };
    Main.prototype.runGame = function () {
        return __awaiter(this, void 0, void 0, function () {
            var userInfo;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadResource()];
                    case 1:
                        _a.sent();
                        this.createGameScene();
                        return [4 /*yield*/, platform.login()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, platform.getUserInfo()];
                    case 3:
                        userInfo = _a.sent();
                        console.log(userInfo);
                        return [2 /*return*/];
                }
            });
        });
    };
    Main.prototype.loadResource = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loadingView, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        loadingView = new LoadingUI();
                        this.stage.addChild(loadingView);
                        return [4 /*yield*/, RES.loadConfig("resource/default.res.json", "resource/")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, RES.loadGroup("preload", 0, loadingView)];
                    case 2:
                        _a.sent();
                        this.stage.removeChild(loadingView);
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _a.sent();
                        console.error(e_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * 创建游戏场景
     * Create a game scene
     */
    Main.prototype.createGameScene = function () {
        this._posList =
            // [[0,0,0,0,0,0,0],
            // [0,0,0,1,0,0,0],
            // [0,0,0,1,0,0,0],
            // [0,0,0,1,0,0,0],
            // [0,0,0,0,0,0,0]];
            [[0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
                [0, 1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1],
                [0, 1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 0, 0, 1, 0, 1, 1, 1, 1, 1],
                [0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0],
                [0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 0],
                [0, 1, 1, 0, 1, 0, 0, 0, 1, 1, 1, 1, 0, 1, 0, 0, 0, 1, 1, 0],
                [0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 1, 0],
                [0, 1, 0, 1, 1, 0, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 0],
                [0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 0],
                [0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1],
                [0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 1],
                [0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 1],
                [0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 1],
                [0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1],
                [0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1],
                [0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 0, 1],
                [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0],
                [0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
                [0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
                [0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1],
                [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0],
                [0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0],
                [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0],
                [0, 0, 1, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 1, 0],
                [0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0],
                [0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0]];
        var posList = this._posList;
        var spr = new egret.Sprite();
        this.addChild(spr);
        spr.x = 0;
        spr.y = 0;
        var width = test.Player.WIDTH;
        var hight = test.Player.HIGHT;
        //终点信息
        var endIndex = posList.length * posList[0].length - 1;
        var targetX = (endIndex % posList[0].length) * width;
        var targetY = Math.floor(endIndex / posList[0].length) * hight;
        var len = posList.length;
        for (var i = 0; i < len; i++) {
            var subPosList = posList[i];
            var subLen = subPosList.length;
            for (var k = 0; k < subLen; k++) {
                var type = subPosList[k];
                var playerBox = new test.PlayerBox();
                playerBox.setType(type);
                spr.addChild(playerBox);
                playerBox.setPosistion({ x: k * width, y: i * hight, index: (i * subLen + k) });
                playerBox.setfindWayH({ x: targetX, y: targetY });
                if (this._playerBoxList == null) {
                    this._playerBoxList = new Array();
                }
                this._playerBoxList.push(playerBox);
            }
        }
        //终点
        this._playerend = test.PlayerEnd.instance;
        this._playerend.drawPlayer();
        this._playerend.setPosistion({ x: targetX, y: targetY, index: endIndex });
        spr.addChild(this._playerend);
        //起点
        this._player = test.Player.instance;
        this._player.drawPlayer();
        this._player.setfindWayH({ x: targetX, y: targetY });
        var playerIndex = 0;
        var playerX = (playerIndex % posList[0].length) * width;
        var playerY = Math.floor(playerIndex / posList[0].length) * hight;
        this._player.setPosistion({ x: playerX, y: playerY, index: playerIndex });
        spr.addChild(this._player);
        this.startFindWay();
    };
    Main.prototype.startFindWay = function () {
        if (this._playerBoxList == null || this._playerBoxList.length == 0) {
            return;
        }
        var openIndexDic = {};
        var closeIndexDic = {};
        var currNode = this._player;
        openIndexDic[currNode.index] = this._player;
        closeIndexDic[currNode.index] = this._player;
        var len = this._posList.length;
        var subLen = this._posList[0].length;
        var distance0 = test.Player.WIDTH;
        var distance1 = test.Player.WIDTH * 1.4;
        var minF = -1;
        var minFIndex = -1;
        var isInit = false;
        //开始查找
        var check = true;
        while (check) {
            var parentIndex = 0;
            var parentNode = null;
            if (isInit == false) {
                parentIndex = currNode.index;
                parentNode = currNode;
                isInit = true;
            }
            else {
                var node = this._playerBoxList[minFIndex];
                closeIndexDic[node.index] = node;
                parentNode = node;
                parentIndex = parentNode.index;
            }
            var nodeIndexs = [];
            var nodeGList = [];
            //左上
            nodeIndexs.push(parentIndex - subLen - 1);
            nodeGList.push(distance1);
            //上
            nodeIndexs.push(parentIndex - subLen);
            nodeGList.push(distance0);
            //右上
            nodeIndexs.push(parentIndex - subLen + 1);
            nodeGList.push(distance1);
            //左
            nodeIndexs.push(parentIndex - 1);
            nodeGList.push(distance0);
            //右
            nodeIndexs.push(parentIndex + 1);
            nodeGList.push(distance0);
            //左下
            nodeIndexs.push(parentIndex + subLen - 1);
            nodeGList.push(distance1);
            //下
            nodeIndexs.push(parentIndex + subLen);
            nodeGList.push(distance0);
            //右下
            nodeIndexs.push(parentIndex + subLen + 1);
            nodeGList.push(distance1);
            minF = -1;
            minFIndex = -1;
            var len_1 = nodeIndexs.length;
            for (var i = 0; i < len_1; i++) {
                var index = nodeIndexs[i];
                if (index >= 0 && index < this._playerBoxList.length) {
                    var node = this._playerBoxList[index];
                    //不是障碍物
                    if (node.findWayType == 0 && closeIndexDic[index] == null) {
                        if (openIndexDic[index] == null) {
                            node.setfindWayG(nodeGList[i]);
                            node.setParentIndex(parentIndex);
                            openIndexDic[index] = node;
                            if (node.index == this._playerend.index) {
                                check = false;
                            }
                        }
                        else {
                            if (node.findWayG < (parentNode.findWayG + nodeGList[i])) {
                            }
                            else {
                                node.setfindWayG(nodeGList[i]);
                                node.setParentIndex(parentIndex);
                            }
                        }
                        if (minF <= 0 || node.findWayF < minF) {
                            minF = node.findWayF;
                            minFIndex = index;
                        }
                    }
                }
            }
            if (minFIndex == -1 || minF == -1) {
                check = false;
            }
        }
        //查找完整路径
        var checkFindWay = true;
        var endIndex = this._playerend.index;
        var pathList = [];
        pathList.push(endIndex);
        while (checkFindWay) {
            var checkIndex = this._playerBoxList[endIndex].parentIndex;
            pathList.push(checkIndex);
            endIndex = checkIndex;
            if (checkIndex == this._player.index) {
                checkFindWay = false;
            }
        }
        this.movePos(pathList);
    };
    Main.prototype.movePos = function (list) {
        var len = list.length - 1;
        var tw = egret.Tween.get(this._player);
        for (var i = len; i >= 0; i--) {
            var targetX = this._playerBoxList[list[i]].x;
            var targetY = this._playerBoxList[list[i]].y;
            tw.to({ x: targetX, y: targetY }, 500);
        }
    };
    return Main;
}(egret.DisplayObjectContainer));
__reflect(Main.prototype, "Main");
//# sourceMappingURL=Main.js.map