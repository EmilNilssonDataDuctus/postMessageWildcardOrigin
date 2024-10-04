const ALLOWED_ORIGIN = "https://emilnilssondataductus.github.io/"

const channelRenderer = document.getElementById("channel-renderer");

var channel = undefined;

channel = window.opener;

if (channel) {
  console.log("channel not falsy");
  console.log("channel", channel);

  channel.postMessage(
    `test-message from: netlify`,
    channel.location.origin
  );
} else {
  console.log("channel falsy");
}
