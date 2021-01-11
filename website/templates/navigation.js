function writeNav(levels) {
	switch (levels) {
		case 1:
			document.write('\
				<link rel="stylesheet" href="../styles/navigation.css"> \
				<script src="../scripts/navigation.js"></script> \
				<div class="navigation" id="navigation"> \
					<a href="javascript:void(0)" class="closeNavigation" onclick="closeNavigation()">&#215;</a> \
					<a href="home/">Home</a> \
					<a href="about/">About</a> \
					<a href="blasting_to_bedrock/">Blasting to Bedrock</a> \
					<a href="downloads/">Downloads</a> \
					<a href="assets/">Assets</a> \
					<a href="feedback/">Feedback</a> \
			');
			break;
		case 2:
			document.write('\
				<link rel="stylesheet" href="../../styles/navigation.css"> \
				<script src="../../scripts/navigation.js"></script> \
				<div class="navigation" id="navigation"> \
					<a href="javascript:void(0)" class="closeNavigation" onclick="closeNavigation()">&#215;</a> \
					<a href="../home/">Home</a> \
					<a href="../about/">About</a> \
					<a href="../blasting_to_bedrock/">Blasting to Bedrock</a> \
					<a href="../downloads/">Downloads</a> \
					<a href="../assets/">Assets</a> \
					<a href="../feedback/">Feedback</a> \
			');
			break;
	}
	document.write('\
		</div> \
		<a href="javascript:void(0)" onclick="openNavigation()" id="openNavigation">&#9776;</a> \
	');
}