$(document).ready(function () {
	// 獲取最後更新時間戳
	var lastUpdated = sessionStorage.getItem('lastUpdated');

	// 如果最後更新時間戳與頁面載入時間戳相同，則data-loading=false
	if (lastUpdated === performance.timeOrigin.toString()) {
		$('body').attr('data-loading', 'false');
	} else { // 否則顯示 loading 頁面
		$('html, body').css('overflow', 'hidden');
		setTimeout(function () {
			$('.intro .title').removeClass('ci-blur');
			$("html,body").animate({
				scrollTop: 0
			}, "medium");
		}, 500);
	}

	// 更新最後更新時間戳
	sessionStorage.setItem('lastUpdated', performance.timeOrigin.toString());
});

// 在所有內容載入完畢後執行相關動畫設定
$(window).on('load', function () {
	// 3 秒後data-loading=false
	setTimeout(function () {
		$('html, body').removeAttr("style");
		$('body').attr('data-loading', 'false');

	}, 1000);
});
