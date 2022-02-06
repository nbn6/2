[rewrite_local]

#panda widget解锁会员
^https:\/\/mobile-api\.adguard\.com\/api/1.0/ios_validate_receipt url script-response-body https://raw.githubusercontent.com/nbn6/2/main/2.js
[mitm]
hostname = mobile-api.adguard.com

*/

let obj = JSON.parse($response.body);
obj = {
  "products": [{
    "product_id": "com.adguard.lifetimePurchase",
    "premium_status": "ACTIVE"
  }]
}

$done({body: JSON.stringify(obj)});
