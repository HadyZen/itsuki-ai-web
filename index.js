const { spawn } = require("child_process");

function hadySaveng() {
 const child = spawn(`npm install && node itsuki.js`, {
	cwd: __dirname,
	stdio: "inherit",
	shell: true
});

	child.on("close", (code) => {
if (code == 2) {			
hadySaveng();
}
});
}

hadySaveng();
