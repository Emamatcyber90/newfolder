var randomfirst = Math.floor((Math.random() * 10) + 1)


var comp = ()
	comp(1)="Mozilla/5.0 (Windows NT 10.0 WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36"
	comp(2)="Mozilla/5.0 (Windows NT 6.1 WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36"
	comp(3)="Mozilla/5.0 (Macintosh Intel Mac OS X 10_11_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36"
	comp(4)="Mozilla/5.0 (Macintosh Intel Mac OS X 10_11_5) AppleWebKit/601.6.17 (KHTML, like Gecko) Version/9.1.1 Safari/601.6.17"
	comp(5)="Mozilla/5.0 (Windows NT 6.1 WOW64 rv:47.0) Gecko/20100101 Firefox/47.0"
	comp(6)="Mozilla/5.0 (Windows NT 10.0 WOW64 rv:47.0) Gecko/20100101 Firefox/47.0"
	comp(7)="Mozilla/5.0 (Windows NT 6.3 WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36"
	comp(8)="Mozilla/5.0 (Macintosh Intel Mac OS X 10.11 rv:47.0) Gecko/20100101 Firefox/47.0"
	comp(9)="Mozilla/5.0 (Windows NT 10.0 Win64 x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36"
	comp(10)="Mozilla/5.0 (Windows NT 5.1 rv:47.0) Gecko/20100101 Firefox/47.0"
	comp(11)="Mozilla/5.0 (X11 Ubuntu Linux x86_64 rv:47.0) Gecko/20100101 Firefox/47.0"
	comp(12)="Mozilla/5.0 (Windows NT 6.1 WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.84 Safari/537.36"
	comp(13)="Mozilla/5.0 (Macintosh Intel Mac OS X 10_10_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36"
	comp(14)="Mozilla/5.0 (Windows NT 10.0 WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.84 Safari/537.36"
	comp(15)="Mozilla/5.0 (Macintosh Intel Mac OS X 10_11_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.84 Safari/537.36"
	comp(16)="Mozilla/5.0 (Windows NT 6.1 Win64 x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36"
	comp(17)="Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36"
	comp(18)="Mozilla/5.0 (Windows NT 6.3 WOW64 rv:47.0) Gecko/20100101 Firefox/47.0"
	comp(19)="Mozilla/5.0 (Macintosh Intel Mac OS X 10_11_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.106 Safari/537.36"
	comp(20)="Mozilla/5.0 (Windows NT 10.0 Win64 x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2486.0 Safari/537.36 Edge/13.10586"


	var mobile = ()
	mobile(1)="Mozilla/5.0 (Linux Android 4.4 Nexus 5 Build/_BuildID_) AppleWebKit/537.36 (KHTML,like Gecko) Version/4.0 Chrome/30.0.0.0 Mobile Safari/537.36"
	mobile(2)="Mozilla/5.0 (Linux U Android 4.1.1 en-gb Build/KLP) AppleWebKit/534.30 (KHTML, likeGecko) Version/4.0 Safari/534.30"
	mobile(3)="Mozilla/5.0 (Linux U Android 4.1.1 en-gb Build/KLP) AppleWebKit/534.30 (KHTML, likeGecko) Version/4.0 Safari/534.30"
	mobile(4)="Mozilla/5.0 (iPhone U CPU like Mac OS X en) AppleWebKit/420+ (KHTML, like Gecko)Version/3.0 Mobile/1A543 Safari/419.3"
	mobile(5)="Mozilla/5.0 (iPhone U CPU iPhone OS 5_1_1 like Mac OS X en) AppleWebKit/534.46.0(KHTML, like Gecko) CriOS/19.0.1084.60 Mobile/9B206 Safari/7534.48.3"
	mobile(6)="Mozilla/5.0 (Linux <Android Version> <Build Tag etc.>) AppleWebKit/<WebKit Rev>(KHTML, like Gecko) Chrome/<Chrome Rev> Safari/<WebKit Rev>"
	mobile(7)="Mozilla/5.0 (Linux <Android Version> <Build Tag etc.>) AppleWebKit/<WebKit Rev>(KHTML, like Gecko) Chrome/<Chrome Rev> Mobile Safari/<WebKit Rev>"
	mobile(8)="Mozilla/5.0 (iPad CPU OS 7_0 like Mac OS X) AppleWebKit/537.51.1 (KHTML, like Gecko) Mobile/11A465"
	mobile(9)="Mozilla/5.0 (iPad CPU OS 7_0 like Mac OS X) AppleWebKit/537.51.1 (KHTML, like Gecko) CriOS/30.0.1599.12 Mobile/11A465 Safari/8536.25 (3B92C18B-D9DE-4CB7-A02A-22FD2AF17C8F)"
	mobile(10)="Mozilla/5.0 (iPhone CPU iPhone OS 7_0 like Mac OS X) AppleWebKit/537.51.1 (KHTML, like Gecko) Mobile/11A465 Twitter for iPhone"
	mobile(11)="Mozilla/5.0 (iPhone U CPU iPhone OS 4_3_5 like Mac OS X en-us) AppleWebKit/533.17.9 (KHTML, like Gecko) Version/5.0.2 Mobile/8L1 Safari/6533.18.5"


if (randomfirst <8){
	//pc
	

	var weighted = Math.pow(Math.random(), 3)
	var scaled = Math.floor(weighted * (20 - 1 + 1)) + 1 
	var agentused = comp(scaled)
		
	
}else{
	//not pc
	
	var weighted = Math.pow(Math.random(), 3)
	var scaled = Math.floor(weighted * (11 - 1 + 1)) + 1 
	var agentused = mobile(scaled)
}
navigator.__defineGetter__("userAgent", function(){
    return agentused // customized user agent
})
