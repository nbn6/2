#！name= MitM 所有主机名
#！desc=对除以下主机名以外的所有主机名执行MitM。

[MITM]
hostname = --cl5.apple.com, -mzstorekit-sb.itunes.apple.com, -gsas.apple.com, -csig.apple.com, -sandbox.itunes.apple.com, -guzzoni.apple.com, -itunes.apple.com, -musicstatus.itunes.apple.com, -*.mzstatic.com, -xp.apple.com, -*.siri.apple.com, -*.push.apple.com, -amp-api.apps.apple.com, -api-edge.apps.apple.com, -play.itunes.apple.com, -search.itunes.apple.com, -amp-api-search-edge.apps.apple.com, -gsa.apple.com, -mzstorekit.itunes.apple.com, -bag.itunes.apple.com, -p56-buy.itunes.apple.com, -inappcheck.itunes.apple.com, *
[Panel]
capture = title = "HTTP Capture", content = "DISABLE", icon = "doc.text.magnifyingglass", icon-color = "FF6D1F", script-name = HTTP-Capture, update-interval = 1

[Script]
HTTP-Capture = type=generic, script-path = https://github.com/DecoAri/JavaScript/blob/main/Surge/Capture.js?raw=true
