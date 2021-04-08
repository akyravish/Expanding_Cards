// jshint esversion:9

const panels = document.querySelectorAll('.panel');

const removeClass = () => {
	panels.forEach((panel) => {
		panel.classList.remove('active');
	});
};

panels.forEach((panel) => {
	panel.addEventListener('click', () => {
		removeClass();
		panel.classList.add('active');
	});
});
