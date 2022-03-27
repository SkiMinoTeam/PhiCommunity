import './style.css';
import ChapterSelect0_mp3 from './ChapterSelect0.mp3';

window.addEventListener('DOMContentLoaded', () => {
	fetch('https://api.github.com/repos/HanHan233/PhiCommunity/commits?per_page=1')
		.then((res) => res.json())
		.then((data) => {
			document.querySelector('div#recentUpdContent').innerText = data[0].commit.message;
		});
	document
		.querySelector('div#startToPlayBtn')
		.addEventListener('click', () => {
			window.actx.close();
			location.href = '../songSelect/index.html';
		});
	document
		.querySelector('div#getChart')
		.addEventListener('click', () => {
			window.actx.close();
			location.href = '../getChart/index.html';
		});
	document
		.querySelector('div#cacheControl')
		.addEventListener('click', () => {
			window.actx.close();
			location.href = '../cacheControl/index.html';
		});
	document.querySelector('div#settingBtn').addEventListener('click', () => {
		window.actx.close();
		location.href = '../settings/index.html';
	});
	document
		.querySelector('div#uploadChartsBtn')
		.addEventListener('click', () => {
			window.actx.close();
			location.href =
				'https://github.com/HanHan233/PhiCommunity-Charts-Repo';
		});
	fetch(ChapterSelect0_mp3)
		.then(res => res.arrayBuffer())
		.then(arrayBuffer => {
			window.actx = new (window.AudioContext ||
				window.webkitAudioContext ||
				window.mozAudioContext ||
				window.msAudioContext)();
			window.actx.decodeAudioData(arrayBuffer, function (buffer) {
				var source = window.actx.createBufferSource();
				source.buffer = buffer;
				source.loop = true;
				source.connect(window.actx.destination);
				source.start(0);
			});
		});
	const body = document.getElementById('body');
	if (window.DeviceOrientationEvent) {
		console.log(
			'DeviceOrientationEvent detected, attaching event listener.'
		);
		window.addEventListener(
			'deviceorientation',
			(event) => {
				const { gamma, beta } = event;
				body.style.setProperty('--gamma', gamma);
				body.style.setProperty('--beta', beta);
				// console.log(gamma, beta);
			},
			true
		);
	}
});
