javascript: 
	var firstSheet = document.styleSheets[0];
	var changeNavbar = function() {
		var navbar = document.getElementsByClassName("_4f7n");
		navbar[0].style.background = "rgb(255, 185, 205)";
		navbar[0].style.borderBottom = 0;
	  navbar[0].style.boxShadow = "none";
	  firstSheet.insertRule("._3zm- a {
  		text-shadow: none !important;
		}", 0);
		/* */
	  firstSheet.insertRule("._4f7n:after { 
	  	content: none !important;
	  }", 0);
	  /* 首頁新增通知 */
	  /*firstSheet.insertRule("._5ah- {
			display: inline !important;
	  }", 0);
	  firstSheet.insertRule("._5ahz {
	    background: #FF6A93 !important;
	    border-radius: 16px !important;
	    box-shadow: 0 0 4px 2px rgba(245, 40, 40, 0.85) !important;
	    margin: 5px 0px 0px 8px !important;
		}", 0);*/
	  /* 功能按鈕(好友、訊息、通知、隱私設定) */
		firstSheet.insertRule("._24xk a.jewelButton, ._3nzl a.jewelButton { 
			background-image: url(https://goo.gl/KnwxgO) !important;
			background-size: 27px !important;
			background-position: top left !important;
		}", 0);
		firstSheet.insertRule("._1z4y a.jewelButton { 
			background-image: url(https://goo.gl/oi1rqt) !important;
			background-size: 27px !important;
			background-position: top left !important;
		}", 0);
		firstSheet.insertRule("._4xi2.east a.jewelButton { 
			background-image: url(https://goo.gl/IxpmLw) !important;
			background-size: 27px !important;
			background-position: top left !important;
		}", 0);
		firstSheet.insertRule("._59fb { 
			width: 20px !important;
			height: 18px !important;
			margin: 5px !important;
		}", 0);
		firstSheet.insertRule("._5cop ._59fb { 
			background-image: url(https://goo.gl/93ZY3A) !important;
			background-size: 20px 18px !important;
			background-position: top left !important;
		}", 0);
		firstSheet.insertRule("._59fc ._1ayn {
			margin-left: -9px !important;
		}", 0);
	};

	var changeRightChat = function() {
		var chatBox = document.getElementsByClassName("_51x_");
		chatBox[0].style.backgroundImage = "url(https://goo.gl/WL7Yn0)";
		chatBox[0].style.backgroundPosition = "-17px 0px";
		firstSheet.insertRule(".fbChatSidebarBody { background: rgba(255, 255, 255, 0.65) !important }", 0);
		
		firstSheet.insertRule("._5pr2 .fbChatOrderedList ._42fz a:hover { 
			box-shadow: 0px 0px 29px 8px rgb(255, 185, 211) !important;
	  	background: pink !important;
	  }", 0);
	  firstSheet.insertRule("._5pr2 ._42fz a:hover { 
	  	border-color: rgb(255, 255, 255) !important;
	  }", 0);
	  firstSheet.insertRule("._5pr2 ._55ln { 
	  	border-bottom: 2px solid transparent !important;
	    border-top: 2px solid transparent !important;
	    border-radius: 40px !important;
	  }", 0);
	  firstSheet.insertRule(".fbChatSidebarBody [data-reactid] > * > * {
	    border-radius: 1000px !important;
	  }", 0);
	  firstSheet.insertRule("._5pr2 ._56p9 { overflow: hidden; }", 0);
	  /* 動態牆的頭像 */
	  firstSheet.insertRule("*[data-hovercard] img {
			border-color: transparent !important;
			border-radius: 1000px !important;
	  }", 0);
	  /* 動態牆頭像的after惱人邊框 */
	  firstSheet.insertRule("._38vo:after { content: none !important; }", 0);
	  firstSheet.insertRule("._5pr2 ._56p9:after { border: none !important }", 0);
		firstSheet.insertRule("._5vb_ ._5pr2 ._4oes {
  		background: #FFE2E8 !important;
		}", 0);
	};

	var changeBase = function() {
		firstSheet.insertRule("._li {
			background-image: url(https://goo.gl/6Q21UF) !important;
		}", 0);
		firstSheet.insertRule("#leftCol {
			background: rgba(255, 255, 255, 0.0) !important;
		}", 0);
		firstSheet.insertRule("#contentCol {
			background: rgba(255, 255, 255, 0.0) !important;
		}", 0);

	  /*var useless_text = document.querySelectorAll(".fsm.fwn.fcg");
	  useless_text[3].style.display = "none";*/
	};

  var changeBelowChat = function() {
		/* 聊天室小視窗姓名欄 */
		firstSheet.insertRule("._5q5b .fbNubFlyoutTitlebar {
			background: rgb(255, 192, 203) !important;
			border-color: rgba(255, 255, 255, 0) !important;
		}", 0);
		/* 聊天室小視窗姓名欄閃爍 */
		firstSheet.insertRule("._50mz.highlightTitle .fbNubFlyoutTitlebar {
			background: rgb(255, 157, 193) !important;
		}", 0);
		firstSheet.insertRule(".fbNubFlyoutTitlebar:hover {
			background: rgb(255, 157, 193) !important;
		}", 0);
	  firstSheet.insertRule("._50mz.focusedTab.titlebar {
	  	background: rgb(255, 157, 193) !important;
	  }", 0);
	  /* 聊天室小視窗姓名文字 */
	  firstSheet.insertRule("._5q5b ._50mz .titlebar .titlebarText {
	  	text-shadow: none !important;
	  }", 0);
	  /* 聊天室小視窗背景 */
	  firstSheet.insertRule(".fbDockChatTabFlyout .fbNubFlyoutBody {
		  background-color: rgb(255, 237, 243) !important;
		}", 0);
	  /* 聊天訊息外框 */
	  firstSheet.insertRule("._5w1r {
      border: 5px double rgba(255, 76, 76, 0.18) !important;
	  }", 0);
	  /* 聊天訊息內框 */
	  firstSheet.insertRule("._1nc6 ._5w1r, ._1nc6 ._3okg:before {
      background: none !important;
      border-radius: 8px !important;
      box-shadow: 0px 0px 10px 0px rgb(255, 185, 211) inset !important;
    }", 0);
	  /* 聊天訊息尾端箭頭 */ 
		firstSheet.insertRule("._3okg:after, ._3okg:before {
	  	content: none !important;
	  }",0);
		/* 聊天時間紀錄 */ 
		firstSheet.insertRule("._5w-6 {
	    background-color: rgb(255, 237, 243) !important;
	    color: rgba(255, 109, 142, 0.74) !important;
	  }", 0);
  };

  var changeFloat = function() {
  	/* 加朋友 */
  	firstSheet.insertRule("._4jy1 {
			background: rgb(255, 132, 177) !important;
			border-radius: 8px !important;
			border: none !important;
			box-shadow: none !important;
  	}", 0);
  	/* */
  	firstSheet.insertRule("._4jy0 { 
  		background: snow !important;
  		margin-top: -1px !important;
  		border-radius: 12px !important;
  		border: none !important;
  		box-shadow: none !important;
  	}", 0);

  	firstSheet.insertRule(".__tw .jewelHeader {
			background: -webkit-linear-gradient(#FFBFCB, #FDFFE8) !important;
    	border: none !important;
    	border-top-left-radius: 20px !important;
    	border-top-right-radius: 20px !important;
  	}", 0);
  	firstSheet.insertRule(".friendBrowserForm, #u_0_5, #fbNotificationsFlyout, #fbRequestsFlyout {
			background: rgb(252, 255, 238) !important;
			box-shadow: none !important;
			border-radius: 20px !important;
  	}", 0);
  	/* 交友邀請 */
  	firstSheet.insertRule("._3nzk .fbRequestList .listGray {
		  background: rgb(252, 255, 238) !important;
		}", 0);
		/* 交友邀請 跟 你可能認識的朋友 中間border*/
		firstSheet.insertRule("._3nzl ._3nzk .hasPYMK {
			border: none !important;
		}", 0);
  	firstSheet.insertRule(".__tw .jewelFooter a {
    	background: -webkit-linear-gradient(bottom, #FFBFCB, #FDFFE8) !important;
			border: none !important;
			border-bottom-left-radius: 20px !important;
    	border-bottom-right-radius: 20px !important;
    }", 0);
    firstSheet.insertRule("._1y2l li a.messagesContent:hover {
		  background-color: rgb(255, 255, 255) !important;
		}", 0);

  };
  var actionHandle = function() {
  	
	};
	changeNavbar();
	changeRightChat();
	changeBase();
	changeBelowChat();
	changeFloat();
	actionHandle();
  
void(0);