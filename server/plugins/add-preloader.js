const preloaderHtml = `<div
		id="preloader"
		style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background-color: black; z-index: 9999;">
    <div id="preloader-logo-wrapper" style="position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%);">
      <div style="position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); width: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center;">
        <img src="/logo.svg" id="preloader-logo" style="" />
        <p style="position: absolute;" class="preloader-text typewritter">Grow with us</p>
      </div>
      <div id="preloader-logotype">
        <span class="preloader-root">ROOT</span>
        <span class="preloader-tree">TREE</span>
      </div>
    </div>
    </div>`;

export default defineNitroPlugin((nitroApp) => {
	nitroApp.hooks.hook("render:html", (html, { event }) => {
		// html argument is an object representation of the html template.
		html.bodyPrepend.push(preloaderHtml);
	});
});
