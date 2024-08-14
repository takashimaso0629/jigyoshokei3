//スクロールした際の動きを関数でまとめる
function PageTopAnime() {

    var scroll = $(window).scrollTop(); //スクロール値を取得
    if (scroll >= 200){//200pxスクロールしたら
      $('#page-top').removeClass('DownMove');   // DownMoveというクラス名を除去して
      $('#page-top').addClass('UpMove');      // UpMoveというクラス名を追加して出現
    }else{//それ以外は
      if($('#page-top').hasClass('UpMove')){//UpMoveというクラス名が既に付与されていたら
        $('#page-top').removeClass('UpMove'); //  UpMoveというクラス名を除去し
        $('#page-top').addClass('DownMove');  // DownMoveというクラス名を追加して非表示
      }
    }
    
    var wH = window.innerHeight; //画面の高さを取得
    var footerPos =  $('#footer').offset().top; //footerの位置を取得
    if(scroll+wH >= (footerPos+10)) {
      var pos = (scroll+wH) - footerPos+10 //スクロールの値＋画面の高さからfooterの位置＋10pxを引いた場所を取得し
      $('#page-top').css('bottom',pos); //#page-topに上記の値をCSSのbottomに直接指定してフッター手前で止まるようにする
    }else{//それ以外は
      if($('#page-top').hasClass('UpMove')){//UpMoveというクラス名がついていたら
        $('#page-top').css('bottom','10px');// 下から10pxの位置にページリンクを指定
      }
    }
}

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
  PageTopAnime();/* スクロールした際の動きの関数を呼ぶ*/
});

// ページが読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function () {
  PageTopAnime();/* スクロールした際の動きの関数を呼ぶ*/
});

// #page-topをクリックした際の設定
$('#page-top').click(function () {
    $('body,html').animate({
        scrollTop: 0//ページトップまでスクロール
    }, 500);//ページトップスクロールの速さ。数字が大きいほど遅くなる
    return false;//リンク自体の無効化
});




$(".openbtn1").click(function () {//ボタンがクリックされたら
  $(this).toggleClass('active');//ボタン自身に activeクラスを付与し
    $("#g-nav").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
});

$("#g-nav a").click(function () {//ナビゲーションのリンクがクリックされたら
    $(".openbtn1").removeClass('active');//ボタンの activeクラスを除去し
    $("#g-nav").removeClass('panelactive');//ナビゲーションのpanelactiveクラスも除去
});


// 動きのきっかけの起点となるアニメーションの名前を定義
function BgFadeAnime(){

  // 背景色が伸びて出現（左から右）
$('.bgLRextendTrigger').each(function(){ //bgLRextendTriggerというクラス名が
  var elemPos = $(this).offset().top-50;//要素より、50px上の
  var scroll = $(window).scrollTop();
  var windowHeight = $(window).height();
  if (scroll >= elemPos - windowHeight){
    $(this).addClass('bgLRextend');// 画面内に入ったらbgLRextendというクラス名を追記
  }else{
    $(this).removeClass('bgLRextend');// 画面外に出たらbgLRextendというクラス名を外す
  }
}); 

 // 文字列を囲う子要素
$('.bgappearTrigger').each(function(){ //bgappearTriggerというクラス名が
  var elemPos = $(this).offset().top-50;//要素より、50px上の
  var scroll = $(window).scrollTop();
  var windowHeight = $(window).height();
  if (scroll >= elemPos - windowHeight){
    $(this).addClass('bgappear');// 画面内に入ったらbgappearというクラス名を追記
  }else{
    $(this).removeClass('bgappear');// 画面外に出たらbgappearというクラス名を外す
  }
});   
}

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function (){
  BgFadeAnime();/* アニメーション用の関数を呼ぶ*/
});// ここまで画面をスクロールをしたら動かしたい場合の記述

// 画面が読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function(){
  BgFadeAnime();/* アニメーション用の関数を呼ぶ*/
});// ここまで画面が読み込まれたらすぐに動かしたい場合の記述


$('#container').scrollgress({//バーの高さの基準となるエリア指定
  height: '5px',//バーの高さ
  color: '#0481A2',//バーの色
});