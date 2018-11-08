module test {
	export class PlayerBox extends Player{

		private static _playerBox:PlayerBox = null;
		//0 可以通过 ，1不能通过
		private _type:number = 0;

		public constructor() {
			super()
		}

        public static get instance():PlayerBox{
            if(this._playerBox == null){
               this._playerBox = new PlayerBox();
            }
            return this._playerBox;
        }

		public setType(type:number):void{
			this._type = type;
			let color:number = type == 0 ? 0x00ff00 : 0xff0000;
			super.drawPlayer(color);
		}

		public get findWayType():number{
			return this._type;
		}



	}
}