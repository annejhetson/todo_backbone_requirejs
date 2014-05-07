
describe("TodoItem", function() {
	it("has default values", function() {
		//create empty note model.
		var todo = new TodoItem();
		debugger;

		expect(todo.get("description")).to.equal("Nothing");
	});
});