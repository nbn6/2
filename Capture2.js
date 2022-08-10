#！name= MitM 所有主机名
#！desc=对除以下主机名以外的所有主机名执行MitM。

[MITM]
hostname = -cl5.apple.com, -mzstorekit-sb.itunes.apple.com, -gsas.apple.com, -csig.apple.com, -sandbox.itunes.apple.com, -guzzoni.apple.com, -itunes.apple.com, -musicstatus.itunes.apple.com, -*.mzstatic.com, -xp.apple.com, -*.siri.apple.com, -*.push.apple.com, -amp-api.apps.apple.com, -api-edge.apps.apple.com, -play.itunes.apple.com, -search.apple.com, -amp-api-search-edge.apps.apple.apple.com, -gsa.apple.com, -mzstorekit.itunes.

[Panel]
capture = title = "HTTP Capture", content = "DISABLE", icon = "doc.text.magnifyingglass", icon-color = "FF6D1F", script-name = HTTP-Capture, update-interval = 1

[Script]
HTTP-Capture = type=generic, script-path = https://raw.githubusercontent.com/nbn6/2/main/Capture.js?raw=true
