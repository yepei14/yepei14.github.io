require=function t(e,i,n){function o(d,c){if(!i[d]){if(!e[d]){var h="function"==typeof require&&require;if(!c&&h)return h(d,!0);if(s)return s(d,!0);var r=new Error("Cannot find module '"+d+"'");throw r.code="MODULE_NOT_FOUND",r}var u=i[d]={exports:{}};e[d][0].call(u.exports,function(t){var i=e[d][1][t];return o(i?i:t)},u,u.exports,t,e,i,n)}return i[d].exports}for(var s="function"==typeof require&&require,d=0;d<n.length;d++)o(n[d]);return o}({backgroundBox_im:[function(t,e,i){"use strict";cc._RFpush(e,"fffccN/pwpNQJsDwpOZA6Mj","backgroundBox_im"),cc.Class({"extends":cc.Component,properties:{first:0,last:0,num:0,children:null},move:function(){for(var t=0;t<this.num;t++)this.children[t].getComponent("background_im").speed=-10},stop:function(){for(var t=0;t<this.num;t++)this.children[t].getComponent("background_im").speed=0},updateSequence:function(){this.children[this.first].x=this.children[this.last].x+this.children[this.last].width,this.last=this.first,this.first=++this.first%this.num},onLoad:function(){this.children=this.node.getChildren()}}),cc._RFpop()},{}],backgroundBox:[function(t,e,i){"use strict";cc._RFpush(e,"166aa6kAcpMKrgjTsVqh9Bl","backgroundBox"),cc.Class({"extends":cc.Component,properties:{first:0,last:0,num:0,children:null,deviation:0},move:function(){for(var t=0;t<this.num;t++)this.children[t].getComponent("background").speed=-10},stop:function(){for(var t=0;t<this.num;t++)this.children[t].getComponent("background").speed=0},updateSequence:function(){this.children[this.first].x=this.children[this.last].x+this.children[this.last].width-this.deviation,this.last=this.first,this.first=++this.first%this.num},onLoad:function(){this.children=this.node.getChildren()}}),cc._RFpop()},{}],background_im:[function(t,e,i){"use strict";cc._RFpush(e,"45a6b5dHNtKBorLFBiyS+qh","background_im"),cc.Class({"extends":cc.Component,properties:{speed:0},onLoad:function(){},update:function(t){this.node.x+this.node.width<0&&this.node.parent.getComponent("backgroundBox_im").updateSequence(),this.node.x+=this.speed}}),cc._RFpop()},{}],background:[function(t,e,i){"use strict";cc._RFpush(e,"3a874YEjcVI07bjmvyWDRuz","background"),cc.Class({"extends":cc.Component,properties:{speed:0},onLoad:function(){},update:function(t){this.node.x+this.node.width<0&&this.node.parent.getComponent("backgroundBox").updateSequence(),this.node.x+=this.speed}}),cc._RFpop()},{}],cloud:[function(t,e,i){"use strict";cc._RFpush(e,"f4e37iCcE9Gu4GKdCCGKFMX","cloud"),cc.Class({"extends":cc.Component,properties:{speed:0,windowWidth:0},onLoad:function(){this.windowWidth=this.node.parent.parent.width},update:function(t){this.node.x+=this.speed,this.node.x<0?this.speed=-this.speed:this.node.x>this.windowWidth&&(this.speed=-this.speed)}}),cc._RFpop()},{}],container:[function(t,e,i){"use strict";cc._RFpush(e,"18266Z90G9D84IehZKzDocM","container"),cc.Class({"extends":cc.Component,properties:{bgAudioID:0,bgAudio:{"default":null,url:cc.AudioClip}},impossibleClicked:function(){cc.audioEngine.stopEffect(this.bgAudioID),cc.director.loadScene("Impossible")},easyClicked:function(){cc.audioEngine.stopEffect(this.bgAudioID),cc.director.loadScene("Easy")},onLoad:function(){this.bgAudioID=cc.audioEngine.playEffect(this.bgAudio,!0)},update:function(t){}}),cc._RFpop()},{}],dead:[function(t,e,i){"use strict";cc._RFpush(e,"26fdbHKgbdGE6nFRfQJSKz1","dead"),cc.Class({"extends":cc.Component,properties:{speed:-5,show:0,floorLimit:480,audioID:0,deadAudio:{"default":null,url:cc.AudioClip}},setInputControl:function(){var t=this;cc.eventManager.addListener({event:cc.EventListener.MOUSE,onMouseUp:function(e){cc.audioEngine.stopEffect(t.audioID),cc.director.loadScene("Start")}},t.node)},onLoad:function(){},deadMusic:function(){this.audioID=cc.audioEngine.playEffect(this.deadAudio,!1)},update:function(t){this.show&&(this.node.y+=this.speed,this.node.y<this.floorLimit&&(this.show=0,this.setInputControl()))}}),cc._RFpop()},{}],dot:[function(t,e,i){"use strict";cc._RFpush(e,"2a01bWj6q9IYZNwfYHWCv9T","dot"),cc.Class({"extends":cc.Component,properties:{speed:0},onLoad:function(){},update:function(t){this.node.x+=this.speed}}),cc._RFpop()},{}],groundBox_im:[function(t,e,i){"use strict";cc._RFpush(e,"a2bfdAjlbBKG4yF/oUpSRJl","groundBox_im"),cc.Class({"extends":cc.Component,properties:{first:null,last:null,maxWidth:0,minWidth:0,maxSpeed:0,minSpeed:0},levelUp:function(){this.maxWidth>30&&this.maxWidth--,this.maxSpeed<30&&this.maxSpeed++},move:function(){this.first.speed=-10,this.last.speed=-10},stop:function(){this.first.speed=0,this.last.speed=0},updateSequence:function(){this.last.ifFirst=1,this.first.ifFirst=0;var t=this.last;this.last=this.first,this.first=t},nextGroundPos:function(){return this.last.node.x},nextGroundWidth:function(){return this.last.node.width},hit:function(t){return this.last.child[1].x+this.last.node.x<t&&this.last.child[1].x+this.last.child[1].width+this.last.node.x>t},nextGroundMoveIn:function(){this.last.moveIn(this.first.node.x+this.first.node.width)},onLoad:function(){this.first=this.node.getChildren()[0].getComponent("ground_im"),this.last=this.node.getChildren()[1].getComponent("ground_im")}}),cc._RFpop()},{}],groundBox:[function(t,e,i){"use strict";cc._RFpush(e,"ebbee4xqolLXb49pt+n7mMe","groundBox"),cc.Class({"extends":cc.Component,properties:{first:null,last:null,maxWidth:0,minWidth:0},levelUp:function(){this.maxWidth>30&&this.maxWidth--},move:function(){this.first.speed=-10,this.last.speed=-10},stop:function(){this.first.speed=0,this.last.speed=0},updateSequence:function(){this.last.ifFirst=1,this.first.ifFirst=0;var t=this.last;this.last=this.first,this.first=t},nextGroundPos:function(){return this.last.node.x},nextGroundWidth:function(){return this.last.node.width},hit:function(t){return this.last.child[1].x+this.last.node.x<t&&this.last.child[1].x+this.last.child[1].width+this.last.node.x>t},nextGroundMoveIn:function(){this.last.moveIn(this.first.node.x+this.first.node.width)},onLoad:function(){this.first=this.node.getChildren()[0].getComponent("ground"),this.last=this.node.getChildren()[1].getComponent("ground")}}),cc._RFpop()},{}],ground_im:[function(t,e,i){"use strict";cc._RFpush(e,"7646e0BV5pITqvvg2YePqJK","ground_im"),cc.Class({"extends":cc.Component,properties:{speed:0,ifFirst:0,windowWidth:0,ifEntering:0,posX:0,child:null,Player:{"default":null,type:cc.Node}},onLoad:function(){this.windowWidth=this.node.parent.parent.parent.width,this.child=this.node.getChildren()},moveIn:function(t){this.ifEntering=1,this.initStick(),this.speed=-10,this.node.x=this.windowWidth,this.node.width=this.node.parent.getComponent("groundBox_im").minWidth+cc.random0To1()*this.node.parent.getComponent("groundBox_im").maxWidth,this.child[1].x=cc.random0To1()*(this.node.width-this.child[1].width),this.posX=t+cc.random0To1()*(this.windowWidth-t-this.node.width)},initStick:function(){this.child[0].rotation=0,this.child[0].height=0},update:function(t){this.node.x+=this.speed,this.ifEntering&&this.node.x<this.posX&&(this.speed=0,this.ifEntering=0,this.Player.getComponent("player_im").nextStopPos=this.node.x+this.node.width,this.child[0].x=this.node.width)}}),cc._RFpop()},{}],ground:[function(t,e,i){"use strict";cc._RFpush(e,"af90c8L2ANEeJ0+WjRMv0R0","ground"),cc.Class({"extends":cc.Component,properties:{speed:0,ifFirst:0,windowWidth:0,ifEntering:0,posX:0,child:null,Player:{"default":null,type:cc.Node}},onLoad:function(){this.windowWidth=this.node.parent.parent.parent.width,this.child=this.node.getChildren(),this.maxWdith=this.node.parent.getComponent("groundBox").maxWidth,this.minWdith=this.node.parent.getComponent("groundBox").minWidth},moveIn:function(t){this.ifEntering=1,this.initStick(),this.speed=-10,this.node.x=this.windowWidth,this.node.width=this.node.parent.getComponent("groundBox").minWidth+cc.random0To1()*this.node.parent.getComponent("groundBox").maxWidth,this.child[1].x=cc.random0To1()*(this.node.width-this.child[1].width),this.posX=t+cc.random0To1()*(this.windowWidth-t-this.node.width)},initStick:function(){this.child[0].rotation=0,this.child[0].height=0},update:function(t){this.node.x+=this.speed,this.ifEntering&&this.node.x<this.posX&&(this.speed=0,this.ifEntering=0,this.Player.getComponent("player").nextStopPos=this.node.x+this.node.width,this.child[0].x=this.node.width)}}),cc._RFpop()},{}],player_im:[function(t,e,i){"use strict";cc._RFpush(e,"13070pUFyFLGLrojSN4tIuY","player_im"),cc.Class({"extends":cc.Component,properties:{speed:-10,speedY:0,state:0,fall:0,nextStopPos:0,groundBox:null,backgroundBox:null,audioID:0,score:0,bgAudio:{"default":null,url:cc.AudioClip},hitAudio:{"default":null,url:cc.AudioClip},dropAudio:{"default":null,url:cc.AudioClip},stick1:{"default":null,type:cc.Node},stick2:{"default":null,type:cc.Node},dead:{"default":null,type:cc.Node},scoreDisplay:{"default":null,type:cc.Label}},forward:function(t){this.state=1,this.speed=10,t<this.groundBox.nextGroundPos()||t>this.nextStopPos?(this.nextStopPos=t+this.node.width/2,this.fall=1):this.groundBox.hit(t)&&(this.score++,cc.audioEngine.playEffect(this.hitAudio,!1))},onLoad:function(){this.backgroundBox=this.node.parent.getChildren()[0].getComponent("backgroundBox_im"),this.groundBox=this.node.parent.getChildren()[1].getComponent("groundBox_im"),this.nextStopPos=this.groundBox.nextGroundPos()+this.groundBox.nextGroundWidth(),this.audioID=cc.audioEngine.playEffect(this.bgAudio,!0)},update:function(t){1==this.state?(this.node.x+=this.speed,this.node.x>this.nextStopPos?this.fall?(this.speed=0,this.speedY=-50,this.state=-1):(this.backgroundBox.move(),this.groundBox.move(),this.speed=-10,this.score++,this.scoreDisplay.string=this.score.toString(),this.groundBox.levelUp()):this.node.x<100&&(this.backgroundBox.stop(),this.groundBox.stop(),this.groundBox.updateSequence(),this.groundBox.nextGroundMoveIn(),this.state=0)):-1==this.state&&(this.node.y+=this.speedY,this.node.y<0&&(cc.audioEngine.playEffect(this.dropAudio,!1),cc.audioEngine.stopEffect(this.audioID),cc.eventManager.removeListener(this.stick1.getComponent("stick_im").mouselistenerID),cc.eventManager.removeListener(this.stick2.getComponent("stick_im").mouselistenerID),this.dead.getComponent("dead").deadMusic(),this.state=0,this.dead.getComponent("dead").show=1))}}),cc._RFpop()},{}],player:[function(t,e,i){"use strict";cc._RFpush(e,"109a2eiEfFKcKrRLcsbbrfz","player"),cc.Class({"extends":cc.Component,properties:{speed:-10,speedY:0,state:0,fall:0,nextStopPos:0,groundBox:null,backgroundBox:null,audioID:0,score:0,bgAudio:{"default":null,url:cc.AudioClip},hitAudio:{"default":null,url:cc.AudioClip},dropAudio:{"default":null,url:cc.AudioClip},stick1:{"default":null,type:cc.Node},stick2:{"default":null,type:cc.Node},dead:{"default":null,type:cc.Node},scoreDisplay:{"default":null,type:cc.Label}},forward:function(t){this.state=1,this.speed=10,t<this.groundBox.nextGroundPos()||t>this.nextStopPos?(this.nextStopPos=t+this.node.width/2,this.fall=1):this.groundBox.hit(t)&&(this.score++,cc.audioEngine.playEffect(this.hitAudio,!1))},onLoad:function(){this.backgroundBox=this.node.parent.getChildren()[0].getComponent("backgroundBox"),this.groundBox=this.node.parent.getChildren()[1].getComponent("groundBox"),this.nextStopPos=this.groundBox.nextGroundPos()+this.groundBox.nextGroundWidth(),this.audioID=cc.audioEngine.playEffect(this.bgAudio,!0)},update:function(t){1==this.state?(this.node.x+=this.speed,this.node.x>this.nextStopPos?this.fall?(this.speed=0,this.speedY=-50,this.state=-1):(this.backgroundBox.move(),this.groundBox.move(),this.speed=-10,this.score++,this.scoreDisplay.string=this.score.toString()):this.node.x<100&&(this.backgroundBox.stop(),this.groundBox.stop(),this.groundBox.updateSequence(),this.groundBox.nextGroundMoveIn(),this.state=0)):-1==this.state&&(this.node.y+=this.speedY,this.node.y<0&&(cc.audioEngine.playEffect(this.dropAudio,!1),cc.audioEngine.stopEffect(this.audioID),cc.eventManager.removeListener(this.stick1.getComponent("stick").mouselistenerID),cc.eventManager.removeListener(this.stick2.getComponent("stick").mouselistenerID),this.dead.getComponent("dead").deadMusic(),this.state=0,this.dead.getComponent("dead").show=1))}}),cc._RFpop()},{}],stick_im:[function(t,e,i){"use strict";cc._RFpush(e,"369771gkDlKtbidyo539cId","stick_im"),cc.Class({"extends":cc.Component,properties:{speed:0,ifRotating:0,rotationSpeed:2,Player:{"default":null,type:cc.Node},groundBox:{"default":null,type:cc.Node},nextGround:{"default":null,type:cc.Node},endGrowAudio:{"default":null,url:cc.AudioClip},landAudio:{"default":null,url:cc.AudioClip},mouselistenerID:0},setInputControl:function(){var t=this;this.mouselistenerID=cc.eventManager.addListener({event:cc.EventListener.MOUSE,onMouseDown:function(e){!t.node.parent.getComponent("ground_im").ifFirst||t.ifRotating||t.Player.getComponent("player_im").state||t.nextGround.getComponent("ground_im").ifEntering||(t.speed=t.groundBox.getComponent("groundBox_im").minSpeed+t.groundBox.getComponent("groundBox_im").maxSpeed*cc.random0To1())},onMouseUp:function(e){!t.node.parent.getComponent("ground_im").ifFirst||t.ifRotating||t.Player.getComponent("player_im").state||t.nextGround.getComponent("ground_im").ifEntering||(t.speed=0,t.ifRotating=1,cc.audioEngine.playEffect(t.endGrowAudio,!1))}},t.node)},onLoad:function(){this.node.height=0,this.node.x=this.node.parent.width,this.node.y=this.node.parent.height,this.setInputControl()},update:function(t){this.node.height+=this.speed,this.ifRotating&&(this.node.rotation+=this.rotationSpeed,this.node.rotation>=90&&(cc.audioEngine.playEffect(this.landAudio,!1),this.ifRotating=0,this.Player.getComponent("player_im").forward(this.node.parent.x+this.node.parent.width+this.node.height)))}}),cc._RFpop()},{}],stick:[function(t,e,i){"use strict";cc._RFpush(e,"f2c7bdZeWlG8riBkBsLnKwl","stick"),cc.Class({"extends":cc.Component,properties:{speed:0,ifRotating:0,rotationSpeed:2,Player:{"default":null,type:cc.Node},nextGround:{"default":null,type:cc.Node},endGrowAudio:{"default":null,url:cc.AudioClip},landAudio:{"default":null,url:cc.AudioClip},mouselistenerID:0},setInputControl:function(){var t=this;this.mouselistenerID=cc.eventManager.addListener({event:cc.EventListener.MOUSE,onMouseDown:function(e){!t.node.parent.getComponent("ground").ifFirst||t.ifRotating||t.Player.getComponent("player").state||t.nextGround.getComponent("ground").ifEntering||(t.speed=10)},onMouseUp:function(e){!t.node.parent.getComponent("ground").ifFirst||t.ifRotating||t.Player.getComponent("player").state||t.nextGround.getComponent("ground").ifEntering||(t.speed=0,t.ifRotating=1,cc.audioEngine.playEffect(t.endGrowAudio,!1))}},t.node)},onLoad:function(){this.node.height=0,this.node.x=this.node.parent.width,this.node.y=this.node.parent.height,this.setInputControl()},update:function(t){this.node.height+=this.speed,this.ifRotating&&(this.node.rotation+=this.rotationSpeed,this.node.rotation>=90&&(cc.audioEngine.playEffect(this.landAudio,!1),this.ifRotating=0,this.Player.getComponent("player").forward(this.node.parent.x+this.node.parent.width+this.node.height)))}}),cc._RFpop()},{}]},{},["player","player_im","container","backgroundBox","dead","dot","background","stick_im","background_im","groundBox_im","ground","groundBox","stick","cloud","backgroundBox_im","ground_im"]);