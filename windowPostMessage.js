const ALLOWED_ORIGIN = "*"

const channelRenderer = document.getElementById("channel-renderer");

var channel = undefined;

channel = window.opener;

if (channel) {
  console.log("channel not falsy");
  console.log("channel", channel);

  channel.postMessage(
    `test-message from: netlify`,
    ALLOWED_ORIGIN
  );
} else {
  console.log("channel falsy");
}
