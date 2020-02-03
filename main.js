$(() => {
	// Todoを保存する配列を用意する
	const todos = [];

	// DOM操作に必要な要素を取得する
	const $input = $('#input');
	const $button = $('#add-button');
	const $todoElements = $('#todos');

	// 追加ボタンをクリックしたときの処理を実装する
	$button.click(() => {
		console.log('$input値 :', $input.val());
		todos.push($input.val());
		showTodos();
	});

	// Todoを保存している配列を一覧表示する
	function showTodos() {
		$todoElements.empty();
		todos.forEach((value, index) => {
			console.log(value, index);
			const child = $(`<p>${value}</p>`);
			$($todoElements).append(child);
			//削除ボタン呼び出し
			deleteTodo();
		});
	}

	// 指定したTodoを配列から取り除く
	function deleteTodo() {
		// 別のタスクで実装予定
	}
});