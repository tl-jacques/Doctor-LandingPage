<script
  async
  src="https://www.googletagmanager.com/gtag/js?id=AW-16683907811"
/>;

window.dataLayer = window.dataLayer || [];
function gtag() {
  dataLayer.push({
    pagePath:
      "https://api.whatsapp.com/send/?phone=5588994935841&amp;text=Oi%20quero%20agendar%20uma%20consulta%20com%20o%20Dr%20Jorge",
  });
}
gtag("js", new Date());

gtag("config", "AW-16683907811");

export function gtag_report_conversion(url) {
  var callback = function () {
    if (typeof url != "undefined") {
      window.location = url;
    }
  };
  gtag("event", "conversion", {
    send_to: "AW-16683907811/yc4WCKebvc4ZEOP1wJM-",
    value: 1.0,
    currency: "BRL",
    event_callback: callback,
  });
  return false;
}
