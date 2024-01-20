import { _decorator, Component, Node, SpriteFrame } from 'cc';
const { ccclass, property } = _decorator;

export type TCardId = 1 | 2 | 3 | 4 | 5 | 6 ;

@ccclass('ImgManager')
export class ImgManager extends Component {
    @property([SpriteFrame]) cardsSF : SpriteFrame[] = []

    getCardSFById(id:TCardId) { //getting card image by id
     return this.cardsSF[id];
    }

    getCardBeiSF() { //card background
        return this.cardsSF[0];
    }

    start() {

    }

    update(deltaTime: number) {
        
    }
}


