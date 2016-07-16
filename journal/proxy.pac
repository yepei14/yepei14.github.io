function FindProxyForURL(url, host)
{
    if (isInNet(host, "192.168.1.0", "255.255.255.0"))
        return "DIRECT";

    return "SOCKS 2604:a880:1:20::c1a:a001:8388";
}