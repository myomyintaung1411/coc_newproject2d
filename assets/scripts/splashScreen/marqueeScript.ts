import { _decorator, Component, Label, Mask, tween,view, v3, UITransform, Vec3, SpriteFrame, Sprite, director, sys, js } from 'cc';
import { JSB } from 'cc/env';
const { ccclass, property } = _decorator;

enum Direction {
    LEFT_TO_RIGHT = 1,
    RIGHT_TO_LEFT,
}

@ccclass('marqueeScript')
export class MarqueeScript extends Component {
    @property(Label) marquee: Label = null!;
    @property(Mask) maskNode: Mask = null!;

    @property({
        tooltip:"每秒移动多少像素",
    })
    m_speed: number = 100;

    
    text: string = '文字滚动的方向，1是从左到右，2是从右到左文字滚动的方向，1是从左到右，2是从右到左';

    m_xLeftEnd: number = 0;
    m_xRightEnd: number = 0;

    m_yPos: number = 0;

    @property({
        tooltip:"文字滚动的方向，1是从左到右，2是从右到左",
    })
    m_direction: number = Direction.LEFT_TO_RIGHT;
    
    start() {
        this.marquee.string = this.text;
       
        const url = director.getScene().name
        console.log(url,"ddddddddddd")

        console.log(url)

          // Get the hash portion of the URL
          const hashIndex = url.indexOf('#');
          const hash = hashIndex !== -1 ? url.slice(hashIndex + 1) : '';
  
          // Check if the 'token' parameter is present
          if (hash.includes('token=')) {
              const tokenIndex = hash.indexOf('token=');
              const tokenValue = hash.slice(tokenIndex + 'token='.length);
              this.marquee.string = tokenValue
              console.log('Token:', tokenValue);
              // You can use tokenValue as needed in your game logic
          } else {
              console.error('Token parameter not found in the URL.');
          }

    }



    update(dt: number) {

    }
}