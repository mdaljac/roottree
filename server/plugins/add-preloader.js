const preloaderHtml = `<div
		id="preloader"
		style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background-color: turquoise; z-index: 9999;">
    </div>`;

export default defineNitroPlugin((nitroApp) => {
	nitroApp.hooks.hook("render:html", (html, { event }) => {
		// html argument is an object representation of the html template.
		html.bodyPrepend.push(preloaderHtml);
	});
});
