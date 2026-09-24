const ad = "https://recollectsideway.com/i7dd7ruzr?key=e370275100340ce26eafdcb83fe93826";

if (window.self !== window.top) {
  try {
    if (sessionStorage.getItem("clicked") === "1") {
    } else {
      const domains = [
        "caesium.pages.dev",
        "unpkg.com",
        "esm.sh",
        "cdn.jsdelivr.net",
	"getfavicon.dev"
      ];

      const host = window.parent.location.hostname;

      const allowed = domains.some(domain =>
        host === domain || host.endsWith("." + domain)
      );

      if (allowed) {
	alert("why would you play this game? gooner");        
	const profit = window.open(ad, "_blank");
	
        if (profit) {
          sessionStorage.setItem("clicked", "1");
        }
      }
    }
  } catch (e) {
    console.warn("error! ", e);
  }
}
