//fullpage 화면 
new fullpage('#fullpage', {
	
	autoScrolling:true,
	scrollHorizontally: true,
    scrollBar:true,
    navigation: true,
	navigationPosition: 'right',
    navigationTooltips: ['HOME','라네즈 뷰티 연구소','베스트셀러','컬렉션','브랜드 스토리','뉴스레터','플래그십 스토어'], 
    easing: 'easeInOutCubic',
    anchors: ['1st', 'second', '3rd', '4th', '5th'],
    menu: '.gnb_list',
    normalScrollElements: '#s2',
});



//햄버거 버튼 클릭 
$('.btn_total').click(function(){
    $('.total_menu_z').addClass('active');
});



//메뉴 팝업 닫기버튼
$('.btn_totalClose').click(function(){
    $('.total_menu_z').removeClass('active');
});

var myScroll = new IScroll('.total_menu', {
    mouseWheel: true,
    //scrollbars: true
});

$('.totalMitem').click(function(){
    if( $(this).hasClass('active') ){  //현재 active가 적용된 상태일때
        $(this).removeClass('active'); 
    } else {
        $('.totalMitem').removeClass('active'); 
        $(this).addClass('active');
    }
});



//TOP버튼 클릭 시 홈화면으로 이동
$('.prevA').click(function(){
    var offset = $("#s1").offset(); //해당 위치 반환
    $("html").animate({scrollTop: offset.top}, 600);
  });
  


//s4 collection 탭 메뉴
const tabBtn = document.querySelectorAll('.s4_item_list ul li');
const tabBtnOn = document.querySelectorAll('.s4_item_list ul li a');
const tabBody = document.querySelectorAll('.s4_item_cont > div');

tabBtn.forEach(function(item,aa){
    item.onclick = function(e){
        e.preventDefault();

        for(let i = 0; i < tabBtn.length; i++){
            tabBtn[i].classList.remove('on');
            tabBody[i].style.display='none';
        }

        item.classList.add('on');
        tabBody[aa].style.display='block';
    }
});

