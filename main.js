$(() => {
	// Todoを保存する配列を用意する
	const todo = [];

	// DOM操作に必要な要素を取得する
	const $input = $('#input');
	const $button = $('#add-button');

	// 追加ボタンをクリックしたときの処理を実装する
	$button.click(() => {
		console.log('$input値 :', $input.val());
		todo.push($input.val());
		showTodo();
	});

	// Todoを保存している配列を一覧表示する
	function showTodo() {
		// 別のタスクで実装予定
	}

	// 指定したTodoを配列から取り除く

});