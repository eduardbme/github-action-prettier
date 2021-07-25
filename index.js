const core = require("@actions/core");

function run() {
  require("prettier/bin-prettier");
}

try {
  run();
} catch (err) {
  core.setFailed(err.message);
}
