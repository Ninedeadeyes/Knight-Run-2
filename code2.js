gdjs.Intro_32Code = {};
gdjs.Intro_32Code.GDParallaxBackgroundSkyObjects1= [];
gdjs.Intro_32Code.GDParallaxBackgroundSkyObjects2= [];
gdjs.Intro_32Code.GDNewBitmapTextObjects1= [];
gdjs.Intro_32Code.GDNewBitmapTextObjects2= [];
gdjs.Intro_32Code.GDNewBBTextObjects1= [];
gdjs.Intro_32Code.GDNewBBTextObjects2= [];
gdjs.Intro_32Code.GDKnightMaleObjects1= [];
gdjs.Intro_32Code.GDKnightMaleObjects2= [];
gdjs.Intro_32Code.GDWallLeftObjects1= [];
gdjs.Intro_32Code.GDWallLeftObjects2= [];
gdjs.Intro_32Code.GDOgreObjects1= [];
gdjs.Intro_32Code.GDOgreObjects2= [];
gdjs.Intro_32Code.GDBigDemonObjects1= [];
gdjs.Intro_32Code.GDBigDemonObjects2= [];
gdjs.Intro_32Code.GDNewBBText2Objects1= [];
gdjs.Intro_32Code.GDNewBBText2Objects2= [];
gdjs.Intro_32Code.GDNewTiledSpriteObjects1= [];
gdjs.Intro_32Code.GDNewTiledSpriteObjects2= [];
gdjs.Intro_32Code.GDFallTreesBackgroundObjects1= [];
gdjs.Intro_32Code.GDFallTreesBackgroundObjects2= [];


gdjs.Intro_32Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("KnightMale"), gdjs.Intro_32Code.GDKnightMaleObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Intro_32Code.GDKnightMaleObjects1.length;i<l;++i) {
    if ( gdjs.Intro_32Code.GDKnightMaleObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        isConditionTrue_0 = true;
        gdjs.Intro_32Code.GDKnightMaleObjects1[k] = gdjs.Intro_32Code.GDKnightMaleObjects1[i];
        ++k;
    }
}
gdjs.Intro_32Code.GDKnightMaleObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(18115020);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Intro_32Code.GDKnightMaleObjects1 */
{for(var i = 0, len = gdjs.Intro_32Code.GDKnightMaleObjects1.length ;i < len;++i) {
    gdjs.Intro_32Code.GDKnightMaleObjects1[i].setAnimationName("Run");
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
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Scene1 ", false);
}}

}


};

gdjs.Intro_32Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Intro_32Code.GDParallaxBackgroundSkyObjects1.length = 0;
gdjs.Intro_32Code.GDParallaxBackgroundSkyObjects2.length = 0;
gdjs.Intro_32Code.GDNewBitmapTextObjects1.length = 0;
gdjs.Intro_32Code.GDNewBitmapTextObjects2.length = 0;
gdjs.Intro_32Code.GDNewBBTextObjects1.length = 0;
gdjs.Intro_32Code.GDNewBBTextObjects2.length = 0;
gdjs.Intro_32Code.GDKnightMaleObjects1.length = 0;
gdjs.Intro_32Code.GDKnightMaleObjects2.length = 0;
gdjs.Intro_32Code.GDWallLeftObjects1.length = 0;
gdjs.Intro_32Code.GDWallLeftObjects2.length = 0;
gdjs.Intro_32Code.GDOgreObjects1.length = 0;
gdjs.Intro_32Code.GDOgreObjects2.length = 0;
gdjs.Intro_32Code.GDBigDemonObjects1.length = 0;
gdjs.Intro_32Code.GDBigDemonObjects2.length = 0;
gdjs.Intro_32Code.GDNewBBText2Objects1.length = 0;
gdjs.Intro_32Code.GDNewBBText2Objects2.length = 0;
gdjs.Intro_32Code.GDNewTiledSpriteObjects1.length = 0;
gdjs.Intro_32Code.GDNewTiledSpriteObjects2.length = 0;
gdjs.Intro_32Code.GDFallTreesBackgroundObjects1.length = 0;
gdjs.Intro_32Code.GDFallTreesBackgroundObjects2.length = 0;

gdjs.Intro_32Code.eventsList0(runtimeScene);

return;

}

gdjs['Intro_32Code'] = gdjs.Intro_32Code;
