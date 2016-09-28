describe('createCell', function(){
	it('should be a function', function(){
		assert.isFunction(createCell);
	});
	it('should have two arguments', function(){
		assert.equal(createCell.length, 2);
	});
	it('should create a*a cells', function(){
		var a = 20;
		createCell(a, 0.1);
		assert.equal($('.grid-row').length, a);
		for (var i = 0; i < a; i++){
			assert.equal($('.grid-row')[i].children.length, a);
		}
		var div = $('#map')[0];
	    while(div.children.length)
	    {
	        div.removeChild(div.firstChild);
	    }
	});
	it('if the second argument is smaller or equal to 0, should only have dead cells', function(){
		var a = 20;
		createCell(a, 0);
		for (var i = 0; i < a; i++){
			assert.equal($('.grid-row')[i].children.length, a);
		}
	    var alive = 0;
		for (var i = 0; i < a; i++){
			for (var j = 0; j < a; j++){
				if ($('.grid-row')[i].children[j].className == 'grid-cell-1'){
					alive = 1;
					break;
				}
			}
			if (alive) break;
		}
		assert.equal(alive, 0);
		var div = $('#map')[0];
	    while(div.children.length)
	    {
	        div.removeChild(div.firstChild);
	    }
	});
	it('if the second argument is greater or equal to 1, should only have alive cells', function(){
		var a = 20;
		createCell(a, 1);
		for (var i = 0; i < a; i++){
			assert.equal($('.grid-row')[i].children.length, a);
		}
	    var dead = 0;
		for (var i = 0; i < a; i++){
			for (var j = 0; j < a; j++){
				if ($('.grid-row')[i].children[j].className == 'grid-cell-0'){
					dead = 1;
					break;
				}
			}
			if (dead) break;
		}
		assert.equal(dead, 0);
		var div = $('#map')[0];
	    while(div.children.length)
	    {
	        div.removeChild(div.firstChild);
	    }
	});
	it('if the second argument is greater than 0 and smaller than 1, should have both alive cells and dead cells', function(){
		var a = 20;
		createCell(a, 0.1);
		for (var i = 0; i < a; i++){
			assert.equal($('.grid-row')[i].children.length, a);
		}
	    var dead = 0, alive = 0;
		for (var i = 0; i < a; i++){
			for (var j = 0; j < a; j++){
				if ($('.grid-row')[i].children[j].className == 'grid-cell-0') dead = 1;
				else alive = 1;
				if (alive && dead) break;
			}
			if (alive && dead) break;
		}
		assert.equal(dead, 1);
		assert.equal(alive, 1);
		var div = $('#map')[0];
	    while(div.children.length)
	    {
	        div.removeChild(div.firstChild);
	    }
	});
});

describe('randomInit', function(){
	it('should be a function', function(){
		assert.isFunction(randomInit);
	});
	it('should have one argument', function(){
		assert.equal(randomInit.length, 1);
	});
});

describe('updateCell', function(){
	it('should be a function', function(){
		assert.isFunction(updateCell);
	});
	it('should have two arguments', function(){
		assert.equal(updateCell.length, 2);
	});
	it('Any live cell with fewer than two live neighbours dies, as if caused by under-population',function(){
		// 生成一个5*5的空地图，里面初始没有活细胞
		createCell(5, 0);
		// 直接给记录细胞生死的矩阵赋值初始化细胞生死
		matrix = [[0,0,0,1,1],
				  [0,0,1,0,1],
				  [0,0,0,0,1],
				  [0,1,1,0,0],
				  [0,0,0,1,1]];
		// 更新2行3列的活细胞，它周围只有1个细胞，更新后应该死亡
		updateCell(1,2);
		assert.equal($('.grid-row')[1].children[2].className, 'grid-cell-0');
	});
	it('Any live cell with two or three live neighbours lives on to the next generation', function(){
		// 初始化细胞生死
		matrix = [[0,0,0,1,1],
				  [0,0,1,0,1],
				  [0,0,0,0,1],
				  [0,1,1,0,0],
				  [0,0,0,1,1]];
		// 更新4行4列的细胞，它周围有3个细胞，更新后生存
		updateCell(4,4);
		assert.equal($('.grid-row')[4].children[4].className, 'grid-cell-1');
	});
	it('Any live cell with more than three live neighbours dies, as if by over-population', function(){
		// 初始化细胞生死
		matrix = [[0,0,0,1,1],
				  [0,0,1,1,1],
				  [0,0,0,0,1],
				  [0,1,1,0,0],
				  [0,0,0,1,1]];
		// 更新2行4列的活细胞，它周围有5个细胞，更新后死亡
		updateCell(1,3);
		assert.equal($('.grid-row')[1].children[3].className, 'grid-cell-0');
	});
	it('Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction', function(){
		// 初始化细胞生死
		matrix = [[0,0,0,1,1],
				  [0,0,1,1,1],
				  [0,0,0,0,1],
				  [0,1,1,0,0],
				  [0,0,0,1,1]];
		// 更新1行1列的活细胞，它周围有3个细胞，更新后复活
		updateCell(0,0);
		assert.equal($('.grid-row')[0].children[0].className, 'grid-cell-1');
		// 清除地图
		var div = $('#map')[0];
	    while(div.children.length)
	    {
	        div.removeChild(div.firstChild);
	    }
	});
});

describe('updateMatrix', function(){
	it('should be a function', function(){
		assert.isFunction(updateMatrix);
	});
	it('should have no argument', function(){
		assert.equal(updateMatrix.length, 0);
	});
	it('should update the values of the matrix according to the change of some particular doms\' classname', function(){
		// 生成一个3*3的空地图，里面初始没有活细胞，此时矩阵的值全为0
		createCell(3, 0);
		$('.grid-row')[1].children[1].className = 'grid-cell-1';
		updateMatrix();
		assert.deepEqual(matrix,[[0,0,0],[0,1,0],[0,0,0]]);
		var div = $('#map')[0];
	    while(div.children.length)
	    {
	        div.removeChild(div.firstChild);
	    }
	});
});

describe('updateMap', function(){
	it('should be a function', function(){
		assert.isFunction(updateMap);
	});
	it('should have no argument', function(){
		assert.equal(updateMap.length, 0);
	});
	it('should meet the life-game requirements', function(){
		// 生成一个5*5的空地图，里面初始没有活细胞
		createCell(5, 0);
		// 直接给记录细胞生死的矩阵赋值初始化细胞生死
		matrix = [[0,0,0,1,1],
				  [0,0,1,0,1],
				  [0,0,0,0,1],
				  [0,1,1,0,0],
				  [0,0,0,1,1]];
		// result为符合lifegame要求的更新后矩阵应有的值
		result = [[1,0,1,0,0],
				  [1,0,0,0,1],
				  [1,1,1,0,0],
				  [1,0,0,0,1],
				  [1,0,0,0,1]];
		updateMap();
		console.log(matrix);
		assert.deepEqual(matrix, result);
		var div = $('#map')[0];
	    while(div.children.length)
	    {
	        div.removeChild(div.firstChild);
	    }
	});
});