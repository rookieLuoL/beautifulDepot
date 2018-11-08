module test {
	export class PlayerEnd extends Player {

  		private static _playerEnd:PlayerEnd = null;
		protected color:number = 0xffff00;

		public constructor() {
			super()
		}

        public static get instance():PlayerEnd{
            if(this._playerEnd == null){
               this._playerEnd = new PlayerEnd();
            }
            return this._playerEnd;
        }

	}
}