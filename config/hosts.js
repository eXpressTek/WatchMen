var one_tick = 20; //seconds

//service name must be unique for a certain host.
//host name must be unique
module.exports =
	[
		{
			name: 'expresstek email',
			host: 'mail.expresstek.us',
			port: 25,
			ping_service_name: 'smtp',
			timeout:10000,
			ping_interval: one_tick, //seconds
			failed_ping_interval: one_tick / 3, //minutes
			enabled: true,
			alert_to: ['dev-test@eXpressTek.us'],
			warning_if_takes_more_than: 1500, //miliseconds
			services : [
				{
					name: 'mail server'
				}
			]
		} ,
		{
			name:'localhost test',
			host: '127.0.0.1',
			ping_service_name: 'icmp',
			timeout:10000,
			ping_interval: one_tick,
			failed_ping_interval: one_tick / 3,
			alert_to: ['dev-test@eXpressTek.us'],
			enabled: true,
			warning_if_takes_more_than: 1000, //miliseconds
			services : [
				{
					name: 'xtlabs',
				}
			]
		} ,
		{
			name:'google maps',
			host: '74.125.225.163',
			port:8080,
			ping_service_name: 'icmp',
			timeout:10000,
			ping_interval: one_tick,
			failed_ping_interval: one_tick / 3,
			alert_to: ['dev-test@eXpressTek.us'],
			enabled: true,
			warning_if_takes_more_than: 1000, //miliseconds
			services : [
				{
					name: 'xtlabs',
				}
			]
		} ,
		{
			name:'Apple HTTPS',
			host: 'www.apple.com',
			port:443,
			protocol: 'https',
			ping_service_name: 'http',
			timeout:10000,
			ping_interval: one_tick, //seconds
			failed_ping_interval: one_tick / 3, //minutes
			enabled: true,
			alert_to: ['dev-test@eXpressTek.us'],
			warning_if_takes_more_than: 1500, //miliseconds
			services : [
				{
					name: 'home',
					method: 'get',
					url : '/',
					expected: {statuscode: 200, contains: 'Apple Inc'}
				}
			]
		} ,
		{
			name:'Juniper VPN',
			host: '11.11.11.11',
			port:443,
			protocol: 'https',
			ping_service_name: 'http',
			timeout:10000,
			ping_interval: one_tick, //seconds
			failed_ping_interval: one_tick / 3, //minutes
			enabled: true,
			alert_to: ['dev-test@eXpressTek.us'],
			warning_if_takes_more_than: 1500, //miliseconds
			services : [
				{
					name: 'xtlabs',
					method: 'get',
					url : '/dana-na/auth/url_0/welcome.cgi',
					expected: {statuscode: 200, contains: 'Instant Virtual Extranet'}
				}
			]
		} ,
		{
			name:'google.com',
			host: 'www.google.com',
			port:80,
			ping_service_name: 'http',
			timeout:10000,
			ping_interval: one_tick,
			failed_ping_interval: one_tick / 3,
			enabled: false,
			services : [
				{
					name: 'home',
					method: 'get',
					url : '/',
					expected: {statuscode: 302, contains: ''}
				}
			]
		} ,
		{
			name:'node js',
			host: 'nodejs.org',
			port:80,
			ping_service_name: 'http',
			timeout:10000,
			ping_interval: one_tick,
			failed_ping_interval: one_tick / 3,
			warning_if_takes_more_than: 1500,
			enabled: true,
			services : [
				{
					name: 'home',
					method: 'get',
					url : '/',
					expected: {statuscode: 200, contains: 'Node'}
				}
			]
		} ,
		{
			name:'redis',
			host: 'redis.io',
			port:80,
			ping_service_name: 'http',
			timeout:10000,
			ping_interval: one_tick,
			failed_ping_interval: one_tick / 3,
			warning_if_takes_more_than: 1500,
			enabled: true,
			services : [
				{
					name: 'home',
					method: 'get',
					url : '/',
					expected: {statuscode: 200, contains: 'Redis'}
				}
			]
		} ,
		{
			name:'express',
			host: 'expressjs.com',
			port:80,
			ping_service_name: 'http',
			timeout:10000,
			ping_interval: one_tick,
			failed_ping_interval: one_tick / 3,
			enabled: true,
			services : [
				{
					name: 'home',
					method: 'get',
					url : '/',
					expected: {statuscode: 200, contains: 'web application framework'}
				}
			]
		}
	];
