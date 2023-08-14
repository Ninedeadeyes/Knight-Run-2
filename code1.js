gdjs.IntroEasyCode = {};
gdjs.IntroEasyCode.GDParallaxBackgroundSkyObjects1= [];
gdjs.IntroEasyCode.GDParallaxBackgroundSkyObjects2= [];
gdjs.IntroEasyCode.GDNewBitmapTextObjects1= [];
gdjs.IntroEasyCode.GDNewBitmapTextObjects2= [];
gdjs.IntroEasyCode.GDNewBBTextObjects1= [];
gdjs.IntroEasyCode.GDNewBBTextObjects2= [];
gdjs.IntroEasyCode.GDKnightMaleObjects1= [];
gdjs.IntroEasyCode.GDKnightMaleObjects2= [];
gdjs.IntroEasyCode.GDWallLeftObjects1= [];
gdjs.IntroEasyCode.GDWallLeftObjects2= [];
gdjs.IntroEasyCode.GDOgreObjects1= [];
gdjs.IntroEasyCode.GDOgreObjects2= [];
gdjs.IntroEasyCode.GDBigDemonObjects1= [];
gdjs.IntroEasyCode.GDBigDemonObjects2= [];
gdjs.IntroEasyCode.GDNewBBText2Objects1= [];
gdjs.IntroEasyCode.GDNewBBText2Objects2= [];
gdjs.IntroEasyCode.GDNewTiledSpriteObjects1= [];
gdjs.IntroEasyCode.GDNewTiledSpriteObjects2= [];
gdjs.IntroEasyCode.GDFallTreesBackgroundObjects1= [];
gdjs.IntroEasyCode.GDFallTreesBackgroundObjects2= [];


gdjs.IntroEasyCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("KnightMale"), gdjs.IntroEasyCode.GDKnightMaleObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.IntroEasyCode.GDKnightMaleObjects1.length;i<l;++i) {
    if ( gdjs.IntroEasyCode.GDKnightMaleObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        isConditionTrue_0 = true;
        gdjs.IntroEasyCode.GDKnightMaleObjects1[k] = gdjs.IntroEasyCode.GDKnightMaleObjects1[i];
        ++k;
    }
}
gdjs.IntroEasyCode.GDKnightMaleObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(18063332);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.IntroEasyCode.GDKnightMaleObjects1 */
{for(var i = 0, len = gdjs.IntroEasyCode.GDKnightMaleObjects1.length ;i < len;++i) {
    gdjs.IntroEasyCode.GDKnightMaleObjects1[i].setAnimationName("Run");
}
}{gdjs.evtTools.sound.playMusic(runtimeScene, "d0abfe40daf33e6c8600e9816ee8aaec809764f183902d123ff15c169222ea52_Theme 1.aac", true, 30, 1);
}}

}


{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "SceneEasy", false);
}}

}


};

gdjs.IntroEasyCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.IntroEasyCode.GDParallaxBackgroundSkyObjects1.length = 0;
gdjs.IntroEasyCode.GDParallaxBackgroundSkyObjects2.length = 0;
gdjs.IntroEasyCode.GDNewBitmapTextObjects1.length = 0;
gdjs.IntroEasyCode.GDNewBitmapTextObjects2.length = 0;
gdjs.IntroEasyCode.GDNewBBTextObjects1.length = 0;
gdjs.IntroEasyCode.GDNewBBTextObjects2.length = 0;
gdjs.IntroEasyCode.GDKnightMaleObjects1.length = 0;
gdjs.IntroEasyCode.GDKnightMaleObjects2.length = 0;
gdjs.IntroEasyCode.GDWallLeftObjects1.length = 0;
gdjs.IntroEasyCode.GDWallLeftObjects2.length = 0;
gdjs.IntroEasyCode.GDOgreObjects1.length = 0;
gdjs.IntroEasyCode.GDOgreObjects2.length = 0;
gdjs.IntroEasyCode.GDBigDemonObjects1.length = 0;
gdjs.IntroEasyCode.GDBigDemonObjects2.length = 0;
gdjs.IntroEasyCode.GDNewBBText2Objects1.length = 0;
gdjs.IntroEasyCode.GDNewBBText2Objects2.length = 0;
gdjs.IntroEasyCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.IntroEasyCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.IntroEasyCode.GDFallTreesBackgroundObjects1.length = 0;
gdjs.IntroEasyCode.GDFallTreesBackgroundObjects2.length = 0;

gdjs.IntroEasyCode.eventsList0(runtimeScene);

return;

}

gdjs['IntroEasyCode'] = gdjs.IntroEasyCode;
