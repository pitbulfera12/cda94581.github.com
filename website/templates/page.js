function write(levels) {
	var pathBack = "";
	var levelCount = 0;
	while (levelCount < levels) {
		pathBack += "../";
		levelCount++;
	}
	document.write('\
		<link rel="stylesheet" href="' + pathBack + '../styles/page.css"> \
		<link rel="shortcut icon" type="image/x-icon" href="' + pathBack + '../resources/favicon.ico"> \
		<link rel="stylesheet" href="' + pathBack + '../styles/navigation.css"> \
		<script src="' + pathBack + '../scripts/navigation.js"></script> \
		<div class="navigation" id="navigation"> \
			<a href="javascript:void(0)" class="closeNavigation" onclick="closeNavigation()">&#215;</a> \
			<a href="' + pathBack + 'home">Home</a> \
			<a href="' + pathBack + 'about">About</a> \
			<a href="' + pathBack + 'blasting_to_bedrock">Blasting to Bedrock</a> \
			<a href="' + pathBack + 'downloads">Downloads</a> \
			<a href="' + pathBack + 'assets">Assets</a> \
			<a href="' + pathBack + 'feedback">Feedback</a> \
			<a href="' + pathBack + 'non_youtube-y_things">Non YouTube-y Things</a> \
		</div> \
		<a href="javascript:void(0)" onclick="openNavigation()" id="openNavigation">&#9776;</a> \
	');
}