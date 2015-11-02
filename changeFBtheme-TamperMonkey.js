// ==UserScript==
// @name         Pink Facebook Theme
// @namespace    http://www.facebook.com
// @version      0.1
// @description  Change your Facebook to PINNNNKKK!
// @author       David Tsui
// @match        https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo/related?hl=zh-TW
// @grant        none
// ==/UserScript==

firstSheet = document.styleSheets[0];
changeNavbar = function() {
	firstSheet.insertRule("._4f7n, ._42ft._4jy0.layerCancel.uiOverlayButton._4jy3._4jy1._51sy, ._42ft._4jy0.layerConfirm.uiOverlayButton._4jy3._4jy1.selected._51sy, ._42ft.mvs.mrs._4jy0._5282._4jy3._4jy1.selected._51sy, ._1mf7._4jy0._4jy3._4jy1._51sy.selected._42ft, ._42ft._4jy0.layerButton._5wvw._5ipw.uiOverlayButton._4jy3._4jy1.selected._51sy, .layerConfirm ._4jy0 ._4jy3 ._4jy1 ._51sy .selected ._42ft { background: rgb(255, 185, 205) !important;border-bottom: none !important;box-shadow: none !important;}", 0);
	firstSheet.insertRule("._3zm- a { text-shadow: none !important;}", 0);
	/* */
	firstSheet.insertRule("._4f7n:after { content: none !important;}", 0);
	/* 首頁新增通知 */
	firstSheet.insertRule("._5ahz { background: #FF90AE !important;  border-radius: 50% !important; box-shadow: none !important;}", 0);
	/* 功能按鈕(好友、訊息、通知、隱私設定) */
	firstSheet.insertRule("._24xk a.jewelButton, ._3nzl a.jewelButton { 	background-image: url(https://goo.gl/k9paAu) !important;background-size: 27px !important;	background-position: top left !important;}", 0);
	firstSheet.insertRule("._1z4y a.jewelButton { background-image: url(https://goo.gl/bpWWhe) !important;background-size: 27px !important;	background-position: top left !important;}", 0);
	firstSheet.insertRule("._4xi2.east a.jewelButton { 	background-image: url(https://goo.gl/gNey7Q) !important;background-size: 27px !important;	background-position: top left !important;}", 0);
	firstSheet.insertRule("._59fb { width: 20px !important;	height: 18px !important;	margin: 5px !important;}", 0);
	firstSheet.insertRule("._5cop ._59fb { background-image: url(https://goo.gl/f78Vin) !important;background-size: 20px 18px !important;background-position: top left !important;}", 0);
	firstSheet.insertRule("._59fc ._1ayn {margin-left: -9px !important;}", 0);
};

var changeRightChat = function() {
	/* Loading 失敗 */
	firstSheet.insertRule("._1ht9 {background: url(https://goo.gl/RkTRIn) !important; background-position: -17px 0px !important;border-left: none !important;box-shadow: none !important;}", 0);
	/* 本體背景 */
	firstSheet.insertRule("._51x_ {	background: url(https://goo.gl/RkTRIn) !important;background-position: -17px 0px !important;}", 0);
	firstSheet.insertRule(".fbChatSidebarBody {background: rgba(255, 255, 255, 0.65) !important;}", 0);
	firstSheet.insertRule("._5pr2 .fbChatOrderedList ._42fz a:hover {box-shadow: 0px 0px 29px 8px rgb(255, 185, 211) !important;background: rgba(255, 192, 203, 0.8) !important;}", 0);
	firstSheet.insertRule("._5pr2 ._42fz a:hover {border-color: rgb(255, 255, 255) !important;}", 0);
	firstSheet.insertRule("._5pr2 ._55ln {border-bottom: 2px solid transparent !important;border-top: 2px solid transparent !important;		border-radius: 40px !important;	}", 0);
	firstSheet.insertRule(".fbChatSidebarBody [data-reactid] > * > * {border-radius: 1000px !important;	}", 0);
	firstSheet.insertRule("._5pr2 ._56p9 { overflow: hidden; }", 0);
	/* 動態牆的頭像 */
	firstSheet.insertRule("*[data-hovercard] img {border-color: transparent !important;	border-radius: 1000px !important;}", 0);
	/* 動態牆頭像的after惱人邊框 */
	firstSheet.insertRule("._38vo:after { content: none !important; }", 0);
	firstSheet.insertRule("._5pr2 ._56p9:after { border: none !important }", 0);
	firstSheet.insertRule("._5vb_ ._5pr2 ._4oes {	background: #FFE2E8 !important;}", 0);
};

var changeBase = function() {
	firstSheet.insertRule("._li {	background: url(https://goo.gl/92mQPc) !important;}", 0);
	firstSheet.insertRule("#leftCol {	background: rgba(255, 255, 255, 0.0) !important;}", 0);
	firstSheet.insertRule("#contentCol {background: rgba(255, 255, 255, 0.0) !important;}", 0);
	firstSheet.insertRule("._5bsm ._mp3 img {	border-radius: 50% !important;}", 0);
	firstSheet.insertRule("._5vb_ ._55y4 ._bui ._5afe:hover {	box-shadow: 0px 0px 29px 8px rgb(255, 185, 211) !important;	background: rgba(255, 192, 203, 0.8) !important;border-bottom: 2px solid transparent !important;	border-top: 2px solid transparent !important;	border-radius: 40px !important;	border-color: rgb(255, 255, 255) !important;}", 0);
	/* 全部訊息頁面 */
	firstSheet.insertRule("#globalContainer {	background: url(https://goo.gl/92mQPc !important;}", 0);
  firstSheet.insertRule("._ksg, ._1rs { 	background: url(https://goo.gl/92mQPc !important;	border: none !important;}", 0);
};

var changeBelowChat = function() {
	/* 沒點開的header */
	firstSheet.insertRule("._5q5b .fbNubButton {  border-top-left-radius: 20px !important; border-top-right-radius: 20px !important;background: rgb(255, 192, 203) !important;}", 0);
	firstSheet.insertRule("._5q5b .fbNubButton:before, ._5q5b .fbNubButton:after {content: none !important;}", 0);
	/* 聊天室小視窗姓名欄 */
	firstSheet.insertRule("._5q5b .fbNubFlyoutTitlebar {	background: rgb(255, 192, 203) !important;	border-color: rgba(255, 255, 255, 0) !important;}", 0);
	firstSheet.insertRule("._5q5b ._50mz .fbChatTab .name {  color: #FFFFFF !important;  text-shadow: none !important;  text-align: center !important;   margin-left: -4px !important;}", 0);
	firstSheet.insertRule("._5238 .fbNubButton .wrap, ._5239 .fbNubButton .wrap { padding-left: 0px !important;}", 0);
	/* 右上角的小xx */
	firstSheet.insertRule(".clearfix .fbChatTab {	position: relative !important;}", 0);
	firstSheet.insertRule("a:hover .fbChatTab .funhouse {  position: absolute !important;  right: 0 !important;}", 0);
	/* 聊天室小視窗姓名欄閃爍 */
	firstSheet.insertRule("._50mz.highlightTitle .fbNubFlyoutTitlebar {	background: rgb(255, 157, 193) !important;}", 0);
	firstSheet.insertRule(".fbNubFlyoutTitlebar:hover {	background: rgb(255, 157, 193) !important;}", 0);
	firstSheet.insertRule("._50mz.focusedTab.titlebar {	background: rgb(255, 157, 193) !important;}", 0);
	/* 聊天室小視窗姓名文字 */
	firstSheet.insertRule("._5q5b ._50mz .titlebar .titlebarText {text-shadow: none !important;}", 0);
	/* 聊天室小視窗背景 */
	firstSheet.insertRule(".fbDockChatTabFlyout .fbNubFlyoutBody {background-color: rgb(255, 237, 243) !important;}", 0);
	/* 聊天訊息外框 */
	firstSheet.insertRule("._5w1r {	border: 5px double rgba(255, 76, 76, 0.18) !important;}", 0);
	/* 聊天訊息內框 */
	firstSheet.insertRule("._1nc6 ._5w1r, ._1nc6 ._3okg:before {background: none !important;border-radius: 8px !important;box-shadow: 0px 0px 10px 0px rgb(255, 185, 211) inset !important;}", 0);
	/* 聊天訊息尾端箭頭 */ 
	firstSheet.insertRule("._3okg:after, ._3okg:before {content: none !important;}",0);
	/* 聊天時間紀錄 */ 
	firstSheet.insertRule("._5w-6 {	background-color: rgb(255, 237, 243) !important;color: rgba(255, 109, 142, 0.74) !important;}", 0);
};

var changeFloat = function() {
	/* */
	firstSheet.insertRule("._42ft._4jy0._11b._4jy3._4jy1.selected._51sy {background: rgb(255, 132, 177) !important;border-radius: 8px !important;border: none !important;box-shadow: none !important;}", 0);
	firstSheet.insertRule("._4jy0 { background: snow !important;margin-top: -1px !important;border-radius: 12px !important;border: none !important;box-shadow: none !important;}", 0);
	/* 加朋友 */

	firstSheet.insertRule(".__tw .jewelHeader {		background: -webkit-linear-gradient(#FFBFCB, #FDFFE8) !important;		border: none !important;		border-top-left-radius: 20px !important;		border-top-right-radius: 20px !important;}", 0);
	/* 所有上方的彈出視窗 */
	firstSheet.insertRule(".__tw {background: rgb(252, 255, 238) !important;box-shadow: none !important;	border-radius: 20px !important;}", 0);
	/* 交友邀請 */
	firstSheet.insertRule("._3nzk .fbRequestList .listGray {background: rgb(252, 255, 238) !important;}", 0);
	/* 交友邀請 跟 你可能認識的朋友 中間border*/
	firstSheet.insertRule("._3nzl ._3nzk .hasPYMK {	border: none !important;}", 0);
	firstSheet.insertRule("._1y2l li a.messagesContent:hover {	background-color: rgb(255, 255, 255) !important;}", 0);
	/* 隱私權header */
	firstSheet.insertRule("._8-b ._26y1 {   background: -webkit-linear-gradient(#FFBFCB, #FDFFE8) !important;	border: none !important;	border-top-left-radius: 20px !important;	border-top-right-radius: 20px !important;}", 0);
	/* footer */
	firstSheet.insertRule(".__tw .jewelFooter a, ._26y3 {	background: -webkit-linear-gradient(bottom, #FFBFCB, #FDFFE8) !important;border: none !important;border-bottom-left-radius: 20px !important;border-bottom-right-radius: 20px !important;}", 0);
};
var actionHandle = function() {

};
changeNavbar();
changeRightChat();
changeBase();
changeBelowChat();
changeFloat();
actionHandle();
