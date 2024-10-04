const ALLOWED_ORIGIN = "https://emilnilssondataductus.github.io/"

const channelRenderer = document.getElementById("channel-renderer");

var channel = undefined;

channel = window.opener;

if (channel) {
  console.log("channel not falsy");
  console.log("channel", channel);
  // console.log("channel.location", channel.location);
  // console.log("channel.location.origin", channel.location.origin);
  // console.log("channel.self", channel.self);
  // console.log("channel.window", channel.window);
  // channelRenderer.insertAdjacentText(
  //   "beforeEnd",
  //   JSON.stringify(
  //     Object.entries(channel.location).map(
  //       (entry) => `${entry[0]}: ${entry[1]}`
  //     ),
  //     null,
  //     2
  //   )
  // );
  // channelRenderer.insertAdjacentText(
  //   "beforeEnd",
  //   JSON.stringify(Object.entries(channel.location), null, 2)
  // );

  channel.postMessage(
    `test-message from: netlify`,
    ALLOWED_ORIGIN
  );
} else {
  console.log("channel falsy");
}
