// require('../app/js/lib/hello.js')

window.hello = function() {
	return "hello world!";
};

describe("Trying out test libs", function() {
	describe("Chai", function() {
		it("should be equal using 'expect'", function() {
			expect(hello()).to.equal("hello world!");
		});
	});
	describe("Sinon.js", function() {
		it("should report spy called", function() {
			var helloSpy = sinon.spy(window, 'hello');

			expect(helloSpy.called).to.be.false;
			hello();
			expect(helloSpy.called).to.be.true;
			hello.restore();
		});
	});
});