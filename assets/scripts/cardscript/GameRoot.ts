import { _decorator, Component, EventTouch, Node, Sprite, tween, UITransform, v3 } from 'cc';
import { ImgManager, TCardId } from './ImgManager';
const { ccclass, property } = _decorator;

@ccclass('GameRoot')
export class GameRoot extends Component {
    @property(ImgManager) imgManager : ImgManager;
    @property(Node) pointRoot : Node;
    
    cards:TCardId[] = [1,1,2,2,3,3,4,4,5,5,6,6];

     //keep track to which card is already open
    currentOpenCard = {
        node:null,
        data: -1,
    }

   async start() {
        this.orderAllCards();
        this.createAllCards();
        await  this.moveAllCards();
        await  this.setCardBeiAnim();
        this.addCardsEvent();
    }

    makeCardTurn(node, isBack,id?) {
       return new Promise<void>((resolve, reject) => {
            tween(node)
            .to(0.5,{ scale:v3(0,1,1) })
            .call(()=>{
                const sprite = node.getComponent(Sprite);
                sprite.spriteFrame =  isBack ? this.imgManager.getCardBeiSF() : this.imgManager.getCardSFById(id);
            })
            .to(0.5,{ scale : v3(1,1,1)})
            .call(()=> resolve()) //call another function with resolve
            .start()
        })
    }

    addCardsEvent() {
        this.node.children.forEach((node,index) => {
            node.on(Node.EventType.TOUCH_END, async (event:EventTouch) => {
                if(node === this.currentOpenCard.node) return; // this code mean if node is already open by user
                //if current open card node is empty 
                if(!this.currentOpenCard.node) {
                    const id = this.cards[index]
                    this.makeCardTurn(node,false,id)
                    this.currentOpenCard.node = node ; //
                    this.currentOpenCard.data = id ; //
                    console.log('currentOpenCard',this.currentOpenCard);
                } else {
                    const id = this.cards[index]
                    if(this.currentOpenCard.data === id) {
                        console.log("equal currentOpenCard.data")
                       await this.makeCardTurn(node,false,id)
                        this.currentOpenCard.node.active = false;
                        this.currentOpenCard.node = null;
                        node.active = false

                    } else {
                        console.log("not equal currentOpenCard")
                       await this.makeCardTurn(node,false,id)
                       this.makeCardTurn(node,true)
                       await this.makeCardTurn(this.currentOpenCard.node,true)
                       this.currentOpenCard.node = null;
                    }
                }
                
            }, this);
        })
    }

    setCardBeiAnim() {
       return new Promise<void>((resolve, reject) => {
            this.node.children.forEach((node,index) => {
                tween(node)
                .to(0.5,{ scale : v3(0,1,1) })
                .call(()=>{
                    const sprite = node.getComponent(Sprite);
                    sprite.spriteFrame = this.imgManager.getCardBeiSF();
                })
                .to(0.5,{ scale : v3(1,1,1) })
                .start()
            }); 
             //click event 
             this.scheduleOnce(() => {
             // this.addCardsEvent()
             resolve();
            }, 1.2);  
        })

    }

    moveAllCards() {
       return new Promise<void>((resolve, reject) => {
        this.node.children.forEach((node,index) => {
            let posX = this.pointRoot.children[index].position.x;
            let posY = this.pointRoot.children[index].position.y;
            //node.setPosition(posX,posY)
            tween(node).delay(index * 0.1).to(0.5,{position:v3(posX,posY,0)}).start()
        });
        this.scheduleOnce(()=> {
            resolve();
        },2);
        })
    }
    //randomanly order cards
    orderAllCards() {
        this.cards.sort(()=> 0.5 - Math.random())
        this.cards.sort(()=> 0.5 - Math.random())
        this.cards.sort(()=> 0.5 - Math.random())
    }

    createAllCards() {
        console.log('createAllCards',this.cards);
        this.cards.forEach(cardId => {
            this.createOneCard(cardId);
        })
    }

    createOneCard(id) {
        //here creating node name a  size of 140 x 200 inside of that have property sprite size mode custom
        const node = new Node ('a');
        this.node.addChild(node);
        const tran = node.addComponent(UITransform)
        const sprite = node.addComponent(Sprite);
        sprite.sizeMode = Sprite.SizeMode.CUSTOM;
        tran.setContentSize(140,200);

        const sf = this.imgManager.getCardSFById(id);
        sprite.spriteFrame = sf
    }

    update(deltaTime: number) {
        
    }
}


