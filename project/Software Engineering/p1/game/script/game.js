function buttonClick() {
	// 清理上次留下的痕迹
	var div = $('#map')[0];
	while(div.children.length)
	{
	    div.removeChild(div.firstChild);
	}
	clearInterval(this.interval);
	// 重新生成游戏界面
	var a = parseInt($('#sideLength')[0].value);
	var density = parseFloat($('#density')[0].value)
	if (a === NaN || a <= 0 || a >= 101 ||
	density === NaN || density < 0 || density > 1){
		alert('错误的输入！');
		return;
	}
	createCell(a, density);
	this.interval = setInterval(updateMap, 200);
}