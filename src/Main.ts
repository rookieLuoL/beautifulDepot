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

class Main extends egret.DisplayObjectContainer {

    private _player:test.Player;
    private _playerend:test.PlayerEnd;
    private _playerBoxList:Array<test.PlayerBox>;

    private _posList:Array<any>;

    public constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }

    private onAddToStage(event: egret.Event) {

        egret.lifecycle.addLifecycleListener((context) => {
            // custom lifecycle plugin

            context.onUpdate = () => {

            }
        })

        egret.lifecycle.onPause = () => {
            egret.ticker.pause();
        }

        egret.lifecycle.onResume = () => {
            egret.ticker.resume();
        }

        this.runGame().catch(e => {
            console.log(e);
        })



    }

    private async runGame() {
        await this.loadResource()
        this.createGameScene();
        await platform.login();
        const userInfo = await platform.getUserInfo();
        console.log(userInfo);

    }

    private async loadResource() {
        try {
            const loadingView = new LoadingUI();
            this.stage.addChild(loadingView);
            await RES.loadConfig("resource/default.res.json", "resource/");
            await RES.loadGroup("preload", 0, loadingView);
            this.stage.removeChild(loadingView);
        }
        catch (e) {
            console.error(e);
        }
    }

    /**
     * 创建游戏场景
     * Create a game scene
     */
    private createGameScene() {
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
        
        let posList = this._posList;

        let spr:egret.Sprite = new egret.Sprite()
        this.addChild(spr)
        spr.x = 0;
        spr.y = 0;

        let width:number = test.Player.WIDTH;
        let hight:number = test.Player.HIGHT;

        //终点信息
        let endIndex:number = posList.length * posList[0].length-1;
        let targetX:number = (endIndex%posList[0].length) * width;
        let targetY:number = Math.floor(endIndex/posList[0].length) * hight;

        let len = posList.length;
        for(let i = 0;i<len;i++){
                let subPosList:Array<any> = posList[i];
                let subLen = subPosList.length;
                for(let k= 0;k<subLen;k++){
                    let type:number = subPosList[k]
                    let playerBox = new test.PlayerBox()
                    playerBox.setType(type)
                    spr.addChild(playerBox);
                    playerBox.setPosistion({x:k*width,y:i*hight,index:(i*subLen+k)})
                    playerBox.setfindWayH({x:targetX,y:targetY})
                    if(this._playerBoxList == null){
                            this._playerBoxList = new Array<test.PlayerBox>();
                    }
                    this._playerBoxList.push(playerBox);
                }
        }

        //终点
        this._playerend = test.PlayerEnd.instance;
        this._playerend.drawPlayer();
        this._playerend.setPosistion({x:targetX,y:targetY,index:endIndex})
        spr.addChild(this._playerend);

        //起点
        this._player = test.Player.instance;
        this._player.drawPlayer();
        this._player.setfindWayH({x:targetX,y:targetY});
        let playerIndex:number = 0;
        let playerX:number = (playerIndex%posList[0].length) * width;
        let playerY:number = Math.floor(playerIndex/posList[0].length) * hight;
        this._player.setPosistion({x:playerX,y:playerY,index:playerIndex})
        spr.addChild(this._player);

        this.startFindWay()
    }


    private startFindWay():void{
        if(this._playerBoxList == null || this._playerBoxList.length == 0) {
            return;
        }

        let openIndexDic:{[key:number]:test.Player;} = {};
        let closeIndexDic:{[key:number]:test.Player;} = {};

        let currNode:test.Player = this._player;
        openIndexDic[currNode.index] = this._player;
        closeIndexDic[currNode.index] = this._player;

        let len:number = this._posList.length;
        let subLen:number = this._posList[0].length;
        let distance0:number = test.Player.WIDTH;
        let distance1:number = test.Player.WIDTH*1.4;

        let minF:number = -1;
        let minFIndex:number = -1;
        
        let isInit :boolean = false;
        //开始查找
        let check:boolean = true;
        while(check){
           let parentIndex:number = 0;
           let parentNode:test.Player = null;
           if(isInit == false){
               parentIndex = currNode.index;
               parentNode = currNode;
               isInit = true;
           }
           else{
                let node:test.PlayerBox = this._playerBoxList[minFIndex];
                closeIndexDic[node.index] = node;
                parentNode = node;
                parentIndex = parentNode.index;
           }

           let nodeIndexs:Array<any> = [];
           let nodeGList:Array<any> = [];
           //左上
           nodeIndexs.push(parentIndex - subLen - 1);
           nodeGList.push(distance1);
           //上
           nodeIndexs.push(parentIndex - subLen);
           nodeGList.push(distance0);
           //右上
           nodeIndexs.push(parentIndex - subLen+1);
           nodeGList.push(distance1);
           //左
           nodeIndexs.push(parentIndex -1);
           nodeGList.push(distance0);
           //右
           nodeIndexs.push(parentIndex +1);
           nodeGList.push(distance0);
           //左下
           nodeIndexs.push(parentIndex + subLen - 1);
           nodeGList.push(distance1);
           //下
           nodeIndexs.push(parentIndex + subLen);
           nodeGList.push(distance0);
           //右下
           nodeIndexs.push(parentIndex + subLen+1);
           nodeGList.push(distance1);

           minF = -1;
           minFIndex = -1;
           let len = nodeIndexs.length;
           for(let i = 0;i<len;i++){
               let index = nodeIndexs[i];
               if(index >= 0 && index < this._playerBoxList.length){
                   let node:test.PlayerBox = this._playerBoxList[index];
                   //不是障碍物
                   if(node.findWayType == 0 && closeIndexDic[index] == null){
                       if(openIndexDic[index] == null){
                            node.setfindWayG(nodeGList[i]);
                            node.setParentIndex(parentIndex);
                            openIndexDic[index] = node;

                            if(node.index == this._playerend.index){
                                check = false;
                            }

                       }
                       //检查是否更近
                       else{
                           if(node.findWayG < (parentNode.findWayG + nodeGList[i])){

                           }
                           //重新计算G 值 F 值
                           else{
                                node.setfindWayG(nodeGList[i]);
                                node.setParentIndex(parentIndex);
                           }
                       }

                        if(minF <= 0 || node.findWayF < minF){
                            minF = node.findWayF;
                            minFIndex = index;
                        }
                   }
               }
            }

            if(minFIndex == -1 || minF == -1){
                check = false;
            }

        }

         //查找完整路径
        let checkFindWay:boolean = true;
        let endIndex :number = this._playerend.index;
        let pathList:Array<any> = [];
        pathList.push(endIndex);
        while(checkFindWay){
            let checkIndex:number = this._playerBoxList[endIndex].parentIndex;
            pathList.push(checkIndex);
            endIndex = checkIndex;
            if(checkIndex == this._player.index){
                checkFindWay = false;
            }
        }

        this.movePos(pathList);
    }

    private movePos(list:Array<any>) {
        let len:number = list.length-1;
        let tw = egret.Tween.get( this._player);
        for(let i = len;i>=0;i--){
            let targetX:number=this._playerBoxList[list[i]].x;
            let targetY:number=this._playerBoxList[list[i]].y;
            tw.to( {x:targetX,y:targetY}, 500 );
        }

    }

}