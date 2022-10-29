function FindProxyForURL(url, host){
    var ip = myIpAddress()
    if (dnsDomainIs(host, "google.com") ||
        dnsDomainIs(host, "www.google.com") ||
        dnsDomainIs(host, "www.baidu.com")) {
      return "SOCKS " + ip + ":9011";
    }
     return "DIRECT";
}