gdjs.StarterCode = {};
gdjs.StarterCode.GDParallaxBackgroundSkyObjects1= [];
gdjs.StarterCode.GDParallaxBackgroundSkyObjects2= [];
gdjs.StarterCode.GDNewBitmapTextObjects1= [];
gdjs.StarterCode.GDNewBitmapTextObjects2= [];
gdjs.StarterCode.GDNewBBTextObjects1= [];
gdjs.StarterCode.GDNewBBTextObjects2= [];
gdjs.StarterCode.GDKnightMaleObjects1= [];
gdjs.StarterCode.GDKnightMaleObjects2= [];
gdjs.StarterCode.GDWallLeftObjects1= [];
gdjs.StarterCode.GDWallLeftObjects2= [];
gdjs.StarterCode.GDOgreObjects1= [];
gdjs.StarterCode.GDOgreObjects2= [];
gdjs.StarterCode.GDBigDemonObjects1= [];
gdjs.StarterCode.GDBigDemonObjects2= [];
gdjs.StarterCode.GDNewBBText2Objects1= [];
gdjs.StarterCode.GDNewBBText2Objects2= [];


gdjs.StarterCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("KnightMale"), gdjs.StarterCode.GDKnightMaleObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.StarterCode.GDKnightMaleObjects1.length;i<l;++i) {
    if ( gdjs.StarterCode.GDKnightMaleObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        isConditionTrue_0 = true;
        gdjs.StarterCode.GDKnightMaleObjects1[k] = gdjs.StarterCode.GDKnightMaleObjects1[i];
        ++k;
    }
}
gdjs.StarterCode.GDKnightMaleObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14375196);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.StarterCode.GDKnightMaleObjects1 */
{for(var i = 0, len = gdjs.StarterCode.GDKnightMaleObjects1.length ;i < len;++i) {
    gdjs.StarterCode.GDKnightMaleObjects1[i].setAnimationName("Run");
}
}{gdjs.evtTools.sound.playMusic(runtimeScene, "d0abfe40daf33e6c8600e9816ee8aaec809764f183902d123ff15c169222ea52_Theme 1.aac", true, 100, 1);
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
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Intro ", false);
}}

}


};

gdjs.StarterCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.StarterCode.GDParallaxBackgroundSkyObjects1.length = 0;
gdjs.StarterCode.GDParallaxBackgroundSkyObjects2.length = 0;
gdjs.StarterCode.GDNewBitmapTextObjects1.length = 0;
gdjs.StarterCode.GDNewBitmapTextObjects2.length = 0;
gdjs.StarterCode.GDNewBBTextObjects1.length = 0;
gdjs.StarterCode.GDNewBBTextObjects2.length = 0;
gdjs.StarterCode.GDKnightMaleObjects1.length = 0;
gdjs.StarterCode.GDKnightMaleObjects2.length = 0;
gdjs.StarterCode.GDWallLeftObjects1.length = 0;
gdjs.StarterCode.GDWallLeftObjects2.length = 0;
gdjs.StarterCode.GDOgreObjects1.length = 0;
gdjs.StarterCode.GDOgreObjects2.length = 0;
gdjs.StarterCode.GDBigDemonObjects1.length = 0;
gdjs.StarterCode.GDBigDemonObjects2.length = 0;
gdjs.StarterCode.GDNewBBText2Objects1.length = 0;
gdjs.StarterCode.GDNewBBText2Objects2.length = 0;

gdjs.StarterCode.eventsList0(runtimeScene);

return;

}

gdjs['StarterCode'] = gdjs.StarterCode;
