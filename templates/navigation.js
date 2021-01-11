function writeNav(levels) {
	switch (levels) {
		case 0:
			document.write('\
				<link rel="stylesheet" href="styles/navigation.css"> \
				<script src="scripts/navigation.js"></script> \
				<div class="navigation" id="navigation"> \
					<a href="pages/javascript:void(0)" class="closeNavigation" onclick="closeNavigation()">&#215;</a> \
					<a href="pages/home.html">Home</a> \
					<a href="pages/about.html">About</a> \
					<a href="pages/blasting_to_bedrock.html">Blasting to Bedrock</a> \
					<a href="pages/downloads.html">Downloads</a> \
					<a href="pages/assets.html">Assets</a> \
					<a href="pages/feedback.html">Feedback</a> \
			');
			break;
		case 1:
			document.write('\
				<link rel="stylesheet" href="../styles/navigation.css"> \
				<script src="../scripts/navigation.js"></script> \
				<div class="navigation" id="navigation"> \
					<a href="javascript:void(0)" class="closeNavigation" onclick="closeNavigation()">&#215;</a> \
					<a href="home.html">Home</a> \
					<a href="about.html">About</a> \
					<a href="blasting_to_bedrock.html">Blasting to Bedrock</a> \
					<a href="downloads.html">Downloads</a> \
					<a href="assets.html">Assets</a> \
					<a href="feedback.html">Feedback</a> \
			');
			break;
		case 2:
			document.write('\
				<link rel="stylesheet" href="../../styles/navigation.css"> \
				<script src="../../scripts/navigation.js"></script> \
				<div class="navigation" id="navigation"> \
					<a href="javascript:void(0)" class="closeNavigation" onclick="closeNavigation()">&#215;</a> \
					<a href="../home.html">Home</a> \
					<a href="../about.html">About</a> \
					<a href="../blasting_to_bedrock.html">Blasting to Bedrock</a> \
					<a href="../downloads.html">Downloads</a> \
					<a href="../assets.html">Assets</a> \
					<a href="../feedback.html">Feedback</a> \
			');
			break;
	}
	document.write('\
		</div> \
		<a href="javascript:void(0)" onclick="openNavigation()" id="openNavigation">&#9776;</a> \
	');
}