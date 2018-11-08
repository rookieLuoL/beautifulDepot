
module test{
    export class Player extends egret.Sprite{
        
        private static _player:Player = null;

        public static WIDTH:number = 10;
        public static HIGHT:number = 10;

        protected color:number = 0x0000ff;
        protected _index:number = 0;
        protected _findWayH:number = 0;
        protected _findWayF:number = 0;
        protected _findWayG:number = 0;
        protected _parentIndex:number = -1;

        private _map:Array<any> = null;
        private _targetX:number = 0;
        private _targetY:number = 0;
        private _targetIndex:number = 0;

        public constructor(){
            super();

        }

        public static get instance():Player{
            if(this._player == null){
               this._player = new Player();
            }
            return this._player;
        }

        public drawPlayer(color?:number):void{
             color = color == undefined ? this.color : color;
             this.graphics.beginFill(color);
             this.graphics.drawRect(0,0,Player.WIDTH,Player.HIGHT);
             this.graphics.endFill();
        }

        public setPosistion(obj:{x:number;y:number;index?:number}):void{
            this.x = obj.x;
            this.y = obj.y;
            if(obj.index != undefined){
                this._index = obj.index;
            }
        }

        public get index():number{
            return this._index;
        }

        //获得寻路H值
        public get findWayH():number{
            return this._findWayH;
        }

        //设置寻路H值
        public setfindWayH(targetPos:{x:number;y:number}):void{
            this._findWayH = Math.abs(targetPos.x - this.x)*Player.WIDTH + Math.abs(targetPos.y - this.y)*Player.HIGHT;
        }

        //设置寻路G值
        public setfindWayG(G:number):void{
            this._findWayG += G;
        }

       //获得寻路G值
        public get findWayG():number{
           return this._findWayG;
        }

        //获得寻路F值
        public get findWayF():number{
            return this._findWayH+this._findWayG;
        }


		//设置父节点索引
		public setParentIndex(index:number):void{
            this._parentIndex = index;
		}

        public get parentIndex():number{
            return this._parentIndex;
        }

    }
}

