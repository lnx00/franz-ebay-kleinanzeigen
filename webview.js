"use strict";

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = Franz => {
  const getMessages = function getMessages() {
	var badgeText = document.querySelector("#msgbox-notification-badge").innerText;

	if (badgeText && badgeText != "") {
		var messageCount = parseInt(badgeText);
		Franz.setBadge(messageCount);
	} else {
		Franz.setBadge(0);
	}
  };

  Franz.loop(getMessages);
  Franz.injectCSS(_path.default.join(__dirname, 'service.css'));
};
