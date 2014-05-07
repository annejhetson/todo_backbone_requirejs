describe("Test timing", function() {
	it("should be a fast test", function (done) {
		expect("hi").to.equal("hi");
		done();
	});

	it("should be a medium test", function(done) {
		setTimeout(function() {
			expect("hi").to.equal("hi");
			done();
		}, 40);
	});

	it("should be a super slow test", function(done) {
		setTimeout(function() {
			expect("hi").to.equal("hi");
			done();
		}, 1150);
	});
});