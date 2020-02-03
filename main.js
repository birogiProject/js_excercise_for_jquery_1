$(() => {
	// Todoを保存する配列を用意する
	const todos = [];

	// DOM操作に必要な要素を取得する
	const $input = $('#input');
	const $addButton = $('#add-button');
	const $todoElements = $('#todos');

	// 追加ボタンをクリックしたときの処理を実装する
	$addButton.click(() => {
		if ($input.val() !== '') {
			todos.push($input.val());
			showTodos();
			$input.val('');
		}
	});

	// Todoを保存している配列を一覧表示する
	function showTodos() {
		$todoElements.empty();

		todos.forEach((value, index) => {
			const $todoLi = $('<li></li>');
			$todoElements.append($todoLi);

			const $todoText = $(`<span>${value}</span>`);
			$todoLi.append($todoText);

			const $deleteButton = $('<button>削除</button>');
			$todoText.append($deleteButton);
			$deleteButton.click(() => {
				deleteTodo(index);
			});
		});
	}

	// 指定したTodoを配列から取り除く
	function deleteTodo(index) {
		todos.splice(index, 1);
		showTodos();
	}
});