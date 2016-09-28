var matrix; // 用于记录生存状况的矩阵

// 以a为边长产生地图并生成密度为density的活细胞
function createCell(a, density){
	matrix = new Array();
	var row;
	var col;
	for (var i = 0; i < a; i++){
		matrix[i] = new Array();
		row = $('<div />');
		row.addClass('grid-row');
		for(var j = 0; j < a; j++){
			matrix[i][j] = randomInit(density);
			col = $('<div />');
			col.addClass('grid-cell-' + String(matrix[i][j]));
			row.append(col);
		}
		$('#map').append(row);
	}
}

// 以x的概率产生存活细胞，x的范围为0到1之间
function randomInit(x){
	if (Math.random() < x) return 1;
	else return 0;
}

// 更新当前地图
function updateMap(){
	for (var i = 0; i < matrix.length; i++){
		for (var j = 0; j < matrix.length; j++){
			// 更新每一个细胞
			updateCell(i, j);
		}
	}
	updateMatrix();
}

// 更新第x行y列的细胞
function updateCell(x, y){
	var count = 0;
	var cell = $('.grid-row')[x].children[y];
	var a = [x - 1 < 0 ? matrix.length - 1 : x - 1, x, x + 1 > matrix.length - 1 ? 0 : x + 1];
	var b = [y - 1 < 0 ? matrix.length - 1 : y - 1, y, y + 1 > matrix.length - 1 ? 0 : y + 1];
	for (var i = 0; i < 3; i++){
		for (var j = 0; j < 3; j++){
			if (i == 1 && j == 1) continue;
			if (matrix[a[i]][b[j]] == 1) count++;
		}
	}
	if (count == 3) cell.className = 'grid-cell-1';
	else if (count == 2)  return;
	else cell.className = 'grid-cell-0';
}

// 更新矩阵
function updateMatrix(){
	for (var i = 0; i < matrix.length; i++){
		for (var j = 0; j < matrix.length; j++){
			// 更新每一个细胞
			if ($('.grid-row')[i].children[j].className == 'grid-cell-0') matrix[i][j] = 0;
			else matrix[i][j] = 1;
		}
	}
}