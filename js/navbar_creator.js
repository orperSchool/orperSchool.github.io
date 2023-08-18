let schedules = [["Welcome event", "The reproducibility crisis",  "Open science", "Statistical plan", "Statistical plan", "Data collection"], 
["Data storage", "Metadata - Datasharing", "Data management plan","Data management plan", "Pre-registration", "Pre-registration"], 
["Clean Code", "Clean code", "Versioning with Git", "Scientific publishing"],
["Clean code and data challenge", "The future of scientific publication", "Open discussion: how to change the incentives?"]];

let event_types = [["other", "talk", "talk", "talk", "wshop", "talk"],
["talk", "talk", "talk", "wshop", "talk", "wshop"],
["talk", "wshop", "wshop", "talk"],
["wshop", "talk", "debate"]];

let speakers= [["Organizing committee", "Speaker t.b.d.", "Georg Fantner", "Rachel Heyard", "Rachel Heyard", "Gabriel Gasque"],
["Guillaume Anciaux", "Guillaume Anciaux", "EPFL Library RDM team \n Chiara Gabella \n Francesco Varrato","EPFL Library RDM team \n Chiara Gabella \n Francesco Varrato",  "Caro Hautekiet",  "Caro Hautekiet"],
["Eduarda Centeno","Eduarda Centeno", "ENACIT4R \n Régis Longchamp \n William Wegener \n Pierre Guilbert", "EPFL Publishing Support Library \n Lorenza Salvatori"],
["ENACIT4R \n Régis Longchamp \n William Wegener \n Pierre Guilbert", "Zoltan Dienes", "Zoltan Dienes\n Eduarda Centeno\n Russ Poldrack"]];

let times = [["10-11am", "11-12am", "1-2pm", "2:30-3:30pm", "3:30-5pm", "5pm-6pm"], 
["10-11am", "11-12am", "1-2pm", "2-3pm", "3:30-4pm", "4-5pm"], 
["10-11am","11-12am","1-2:30pm", "3-4pm"], 
["10-12am", "1-2:30pm", "3-5pm"]];

let days = ["Monday", "Tuesday", "Wednesday", "Thursday"];
let dates = ["September 11, 2023", "September 12, 2023", "September 13, 2023", "September 14, 2023"];

let place = "EPFL Room AAC108";


/* 

The code below is responsible for generating the schedules, based on above data. It also generates the header of the website and inserts it in every page.
It provides as well full functionality to generate the speaker panels.

*/

let speaker_infos= [["Georg Fantner", "Associate Professor", "https://people.epfl.ch/private/common/photos/links/199129.jpg?ts=1690031440"], 
["Rachel Heyard", "Researcher", "https://www.ebpi.uzh.ch/contacts/ebpi/rheyard/photo/EBPI_Port_heyard_rachel_2023_05_30_1374_50kb.jpg.jpg"], 
["Eduarda Centeno", "Researcher", "https://media.licdn.com/dms/image/D4E03AQE0tYTCQa1yxA/profile-displayphoto-shrink_800_800/0/1681419701601?e=2147483647&v=beta&t=Bu8SAhd1TZFFNdoq8MtkcgrcCMuPRmKaYLNaFok2XqM"], 
 ["Guillaume Anciaux", "Research and teaching associate", "https://img.freepik.com/premium-vector/mysterious-man-spotlight-businessman-with-no-identity-noir-concept-illustration_201904-603.jpg?w=2000"], 
 ["Lorenza Salvatori", "Bibliothécaire", "https://people.epfl.ch/private/common/photos/links/241509.jpg?ts=1690031934"], 
 ["Zoltan Dienes", "Professor", "https://profiles.sussex.ac.uk/p718-zoltan-dienes/photo"],
 ["Russ Poldrack", "Professor", "https://profiles.sussex.ac.uk/p718-zoltan-dienes/photo"],
 ["Chiara Gabella", "Scientist", ""],
 ["Francesco Varrato", "Data Librarian", ""],
 ["Régis Longchamp", "Data Engineer", ""],
 ["William Wegener", "Civil Law", ""],
 ["Pierre Guilbert", "Full-stack Developer", ""],
 ["Caro Hautekiet", "PhD candidate", ""],
 ["Gabriel Gasque", "Heads of Outreach, Protocols.io", ""]];
let speaker_socials = [["#","#", "#","#"], 
["#","#", "#","#"], 
["#","#", "#","#"], 
["#","#", "#","#"], 
["#","#", "#","#"], 
["#","#", "#","#"], 
["#","#", "#","#"], 
["#","#", "#","#"], 
["#","#", "#","#"], 
["#","#", "#","#"], 
["#","#", "#","#"]];



function generate_speaker_div(speaker_img_link, speaker_name, speaker_role, speaker_fb, speaker_insta, speaker_twitter, speaker_linkedin){
	let div_up = document.createElement("div");
	div_up.classList.add("col-12", "col-md-6" ,"col-lg-4");
	
	let speak_area = document.createElement("div");
	speak_area.classList.add("single-speaker-area", "bg-gradient-overlay-2", "wow", "fadeInUp");
	speak_area.setAttribute("data-wow-delay", "300ms");
	
	let speaker_img = document.createElement("div");
	speaker_img.classList.add("speaker-single-thumb");
	
	{	
		let img = document.createElement("img");
		img.src = './img/bg-img/simple.png';
		speaker_img.appendChild(img);
	}
	
	/*
	let social_info = document.createElement("div");
	social_info.classList.add("social-info");
	
	{
		let fb = document.createElement("a");
		fb.href=speaker_fb;
		let i_fb = document.createElement("i");
		i_fb.classList.add("zmdi", "zmdi-facebook");
		fb.appendChild(i_fb);
		
		let insta = document.createElement("a");
		insta.href=speaker_insta;
		let i_insta = document.createElement("i");
		i_insta.classList.add("zmdi", "zmdi-instagram");
		insta.appendChild(i_insta);
		
		let twitter = document.createElement("a");
		twitter.href=speaker_twitter;
		let i_twitter = document.createElement("i");
		i_twitter.classList.add("zmdi", "zmdi-twitter");
		twitter.appendChild(i_twitter);
		
		let linkedin = document.createElement("a");
		linkedin.href=speaker_linkedin;
		let i_linkedin = document.createElement("i");
		i_linkedin.classList.add("zmdi", "zmdi-linkedin");
		linkedin.appendChild(i_linkedin);
		
		social_info.appendChild(fb);
		social_info.appendChild(insta);
		social_info.appendChild(twitter);
		social_info.appendChild(linkedin);
	}*/
	
	let speaker_info = document.createElement("div");
	speaker_info.classList.add("speaker-info");
	
	{
		let h5 = document.createElement("h5");
		h5.textContent = speaker_name;
		let p = document.createElement("p");
		p.textContent = speaker_role;
		
		speaker_info.appendChild(h5);
		speaker_info.appendChild(p);
	}

	speak_area.appendChild(speaker_img);
	/*speak_area.appendChild(social_info);*/
	speak_area.appendChild(speaker_info);
	
	div_up.appendChild(speak_area);
	
	return div_up;
}

function create_speakers(){
	let schedule_area = document.getElementById("speakerContent");
	
	for(let i=0; i < speaker_infos.length; ++i){
		let speaker_div = generate_speaker_div(speaker_infos[i][2], speaker_infos[i][0], speaker_infos[i][1], speaker_socials[0][0], speaker_socials[0][1], speaker_socials[0][2], speaker_socials[0][3]);
		schedule_area.appendChild(speaker_div);
	}
	
}


function create_href(title, link){
	let a = document.createElement("a");
	let textlink = document.createTextNode(title);
	a.appendChild(textlink);
	a.title = title;
	a.href = link;
	return a;
}

										
function create_schedule_entry(event_name, speaker_name, event_type, hour, place_str, hyperlink, visible, is_single_page){
	let single_schedule = document.createElement("div");
	single_schedule.classList.add("single-schedule-area", "d-flex", "flex-wrap", "justify-content-between", "align-items-center");
	if(visible === true){
		single_schedule.classList.add("wow", "fadeInUp");
		single_schedule.setAttribute("data-wow-delay", "300ms");
	}
	if(is_single_page === true){
		single_schedule.classList.add("single-page");
	}
	//single_schedule.style("animation-name", "fadeInUp");
	//single_schedule.style("visibility", "visible");
	// Image + text: 
	{
		let schedule_text_and_img = document.createElement("div");
		schedule_text_and_img.classList.add("single-schedule-tumb-info", "d-flex", "align-items-center");
		
		// Image part
		let img_div = document.createElement("div");
		img_div.classList.add("single-schedule-tumb");
		let img = document.createElement("img");
		switch(event_type){
			case "talk":
				img.src = "img/bg-img/talk.png";
				break;
			case "wshop":
				img.src = "img/bg-img/workshop.png";
				break;
			case "debate":
				img.src = "img/bg-img/debate.png";
				break;
			default:
				img.src = "img/bg-img/welcome.png";
		}
		
		img_div.appendChild(img);
		
		schedule_text_and_img.appendChild(img_div);
		
		// Text part
		let text_div = document.createElement("div");
		text_div.classList.add("single-schedule-info");
		let activity = document.createElement("h6");
		activity.textContent = event_name;
		let speaker = document.createElement("p");
		speaker.textContent="by ";
		let span = document.createElement("span");
		let names = speaker_name.split('\n');
		if(names.length == 1){
			span.textContent=speaker_name;
		} else {
			for(let i=0; i < names.length; ++i){
				let textNode = document.createTextNode(names[i]);
				span.appendChild(textNode);
				span.appendChild(document.createElement("br"));
			}
		}
		
		speaker.appendChild(span);
		
		text_div.appendChild(activity);
		text_div.appendChild(speaker);
		
		schedule_text_and_img.appendChild(text_div);
		
		single_schedule.appendChild(schedule_text_and_img);
	}

	// Schedule Info
	{
		let schedule_info = document.createElement("div");
		schedule_info.classList.add("schedule-time-place");
		let time = document.createElement("p");
		let time_icon = document.createElement("i");
		time_icon.classList.add("zmdi", "zmdi-time");
		time.appendChild(time_icon);
		time.insertAdjacentHTML('beforeend', hour);
		
		let place = document.createElement("p");
		let place_icon = document.createElement("i");
		place_icon.classList.add("zmdi", "zmdi-map");
		place.appendChild(place_icon);
		place.insertAdjacentHTML('beforeend', place_str);
		
		schedule_info.appendChild(time);
		schedule_info.appendChild(place);
		
		single_schedule.appendChild(schedule_info);
	}
	return single_schedule;
}


function create_day_schedule(day, id, activity_list_day, speaker_list_day, event_list_day, time_slot_day, active, is_single_page){
	
	let day_tab = document.createElement("div");
	day_tab.classList.add("tab-pane", "fade");
	if(active === true){
		day_tab.classList.add("show", "active");
	}
	day_tab.id = id; //.setAttribute("id", id);
	day_tab.setAttribute("role", "tabpanel");
	day_tab.setAttribute("aria-labelledby", day + "-tab");
	
	let tab_content = document.createElement("div");
	tab_content.classList.add("single-tab-content");
	
	let row = document.createElement("div");
	row.classList.add("row");
	row.setAttribute("aria-expanded", "true");
	
	let column = document.createElement("div");
	column.classList.add("col-12");
	for(let i=0; i < activity_list_day.length; ++i){
		let schedule = create_schedule_entry(activity_list_day[i], speaker_list_day[i], event_list_day[i], time_slot_day[i], place, "#", active, is_single_page);
		column.appendChild(schedule);
	}
	
	row.appendChild(column);
	tab_content.appendChild(row);
	day_tab.appendChild(tab_content);
	// Add button here
	// Schedule button to send to schedule page

	
	return day_tab;
}



function day_schedule_insert(is_single_page){
	let schedule_area = document.getElementById("conferScheduleTabContent");

	for(let i=0; i < days.length; ++i){
		let schedule = create_day_schedule(days[i].toLowerCase(), "step-" + i, schedules[i], speakers[i], event_types[i], times[i], i === 0, is_single_page);
		schedule_area.appendChild(schedule);
	}

}

function create_nav_tab_day(day, date, href, id, aria_id, is_active){
	let anav = document.createElement("a");
	anav.classList.add("nav-link");
	if(is_active === true){
		anav.classList.add("active");
	}
	anav.id = id; //setAttribute("id", id);
	anav.setAttribute("data-toggle", "tab");
	anav.setAttribute("href", "#" + aria_id);
	anav.setAttribute("role", "tab");
	anav.setAttribute("aria-controls", aria_id);
	anav.setAttribute("aria-expanded", "true");
	
	let span = document.createElement("span");
	span.textContent = date;
	let br = document.createElement("br");
	anav.appendChild(br);
	anav.appendChild(span);
	
	anav.insertAdjacentHTML("afterbegin", day);
	
	let li_item = document.createElement("li");
	li_item.classList.add("nav-item");
	
	li_item.appendChild(anav);
	return li_item;
}

function create_nav_panel_schedule(){
	let schedule_area = document.getElementById("conferScheduleTab");
	
	for(let i=0; i < days.length; ++i){
		let nav_item = create_nav_tab_day(days[i], dates[i], "step-" + i, days[i].toLowerCase() + "-tab", "step-" + i, i === 0);
		schedule_area.appendChild(nav_item);
	}
	
}

function header_creator(target){
	let header_area = document.getElementsByClassName("classy-menu")[0];
	
	let home_class = document.createElement("li");
	home_class.appendChild(create_href("Home", "index.html"));

	let schedule_class = document.createElement("li");
	schedule_class.appendChild(create_href("Schedule", "schedule.html"));
	
	let speaker_class = document.createElement("li");
	speaker_class.appendChild(create_href("Speakers", "speakers.html"));
/*
	let contact_class = document.createElement("li");
	contact_class.appendChild(create_href("Contact", "contact.html"));
*/	
	switch(target) {
		case "home":
			home_class.classList.add("active");
			break;
		case "schedule":
			schedule_class.classList.add("active");
			break;
		case "speakers":
			speaker_class.classList.add("active");
			break;
	/*	case "contact":
			contact_class.classList.add("active");
			break;*/
		default:
	}

	
	let nav = document.createElement("ul");
	nav.setAttribute("id", "nav");
	
	nav.appendChild(home_class)
	nav.appendChild(schedule_class);
	nav.appendChild(speaker_class);
	//nav.appendChild(contact_class);
	
	let class_nav = document.createElement("div");
	class_nav.classList.add("classynav");
	
	class_nav.appendChild(nav);
	
	let button_href = create_href("Register now", "https://docs.google.com/forms/d/e/1FAIpQLScKTHVps-Tt4uyIAeSoO4d1NX3RHfAX28pnfxZ_Ma2xVbx3uA/viewform?usp=pp_url");
	button_href.classList.add("btn", "confer-btn", "mt-3", "mt-lg-0", "ml-3", "ml-lg-5");
	let button_i = document.createElement("i");
	button_i.classList.add("zmdi", "zmdi-long-arrow-right");
	button_href.appendChild(button_i);
	
	class_nav.appendChild(button_href);
	
	
	header_area.appendChild(class_nav);
}


/*
Now create here the footer
*/

/*
    <!-- Footer Area Start -->
    <footer class="footer-area bg-img bg-overlay-2 section-padding-100-0" id="footer">
        <!-- Main Footer Area -->
        <div class="main-footer-area">
            <div class="container">
                <div class="row">

                    <!-- Single Footer Widget Area -->
                    <div class="col-12 col-sm-6 col-lg-3">
                        <div class="single-footer-widget mb-60 wow fadeInUp" data-wow-delay="300ms">
                            <!-- Widget Title -->
                            <h5 class="widget-title">Contact</h5>

                            <!-- Contact Area -->
                            <div class="footer-contact-info">
                                <p><i class="zmdi zmdi-map"></i> EPFL</p>
                                <p><i class="zmdi zmdi-email"></i> confer@gmail.com</p>
                                <p><i class="zmdi zmdi-globe"></i> www.confer.com</p>
                            </div>
                        </div>
                    </div>
				</div>
            </div>
        </div>

        <!-- Copywrite Area -->
        
    </footer>
    <!-- Footer Area End -->*/

function main_footer_creator(email, website_link, tagline){
	let main_area = document.createElement("div");
	main_area.classList.add("main-footer-area");
	
	let container = document.createElement("div");
	container.classList.add("container");
	
	let row = document.createElement("div");
	row.classList.add("row");
	
	let footer_image_widget = document.createElement("div");
	footer_image_widget.classList.add("col-12", "col-sm-6", "col-lg-3");
	
	let footer_inner_widget = document.createElement("div");
	footer_inner_widget.classList.add("single-footer-widget", "mb-60", "wow", "fadeInUp");
	footer_inner_widget.setAttribute("data-wow-delay", "300ms");
	
	let logo_href= document.createElement("a");
	logo_href.classList.add("footer-logo");
	logo_href.href="#";
	
	let logo_img = document.createElement("img");
	logo_img.src ="img/core-img/logo_white@0.1x.png";
	
	logo_href.appendChild(logo_img);
	
	let tagline_p = document.createElement("p");
	tagline_p.textContent = tagline;
	
	footer_inner_widget.appendChild(logo_href);
	footer_inner_widget.appendChild(tagline_p);
	
	
	// Might want to add later:  
	// <!-- Social Info -->
	//<div class="social-info">
	//    <a href="#"><i class="zmdi zmdi-twitter"></i></a>
	//</div>
	
	footer_image_widget.appendChild(footer_inner_widget);
	
	row.appendChild(footer_image_widget);
	
	let footer_inner_widget_2	= document.createElement("div");
	footer_inner_widget_2.classList.add("single-footer-widget", "mb-60", "wow", "fadeInUp");
	footer_inner_widget_2.setAttribute("data-wow-delay", "300ms");
	
	let h5 = document.createElement("h5");
	h5.classList.add("widget-title");
	h5.textContent = "Contact";
	
	let contact_info = document.createElement("div");
	contact_info.classList.add("footer-contact-info");

	let ins = ["EPFL", email, website_link];
	let classes = ["zmdi-map", "zmdi-email", "zmdi-globe"];
	
	for(let i=0; i< ins.length; ++i){
		let widget_p = document.createElement("p");
		let i_widget = document.createElement("i");
		i_widget.classList.add("zmdi");
		i_widget.classList.add(classes[i]);
		i_widget.textContent = " " + ins[i];
		
		widget_p.appendChild(i_widget);
		contact_info.appendChild(widget_p);
	}
	
	footer_inner_widget_2.appendChild(h5);
	footer_inner_widget_2.appendChild(contact_info);
	
	
	row.appendChild(footer_inner_widget_2);
	
	container.appendChild(row);
	main_area.appendChild(container);

    return main_area;
}


function copyright_creator(){
	let c = document.createElement("div");
	c.classList.add("copywrite-content");
	let r = document.createElement("div");
	r.classList.add("row");
	
	let txt_wrap = document.createElement("div");
	txt_wrap.classList.add("col-12", "col-md-6");
	
	let text_copy = document.createElement("div");
	text_copy.classList.add("copywrite-text");
	
	let p = document.createElement("p");
	/*let s = document.createElement("script");
	s.innerHTML ="document.write(new Date().getFullYear());";*/

	p.textContent = "Copyright &copy;" + new Date().getFullYear();
	p.insertAdjacentHTML("beforeend", " All rights reserved | This template is made with ");
	
	let clib_love = document.createElement("i");
	clib_love.classList.add("fa", "fa-heart-o");
	clib_love.setAttribute("aria-hidden", "true");
	
	p.appendChild(clib_love);
	p.insertAdjacentHTML("beforeend", " by ");
	
	
	let clib_href = document.createElement("a");
	clib_href.href="https://colorlib.com";
	clib_href.setAttribute("target", "_blank");
	clib_href.textContent="Colorlib";
	
	p.appendChild(clib_href);
	p.insertAdjacentHTML("beforeend", " Modified by Fabrice Guibert.");
	
	text_copy.appendChild(p);
	
	/*text_copy.innerHTML = "<p><!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i class="fa fa-heart-o" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
<!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->Modified by Fabrice Guibert.</p>";*/

	txt_wrap.appendChild(text_copy);
	
	r.append(txt_wrap);
	c.append(r);
	
	let container = document.createElement("div");
	container.classList.add("container");
	container.appendChild(c);
	return container;
}
function footer_creator(email, url, tagline){
	let main_footer = main_footer_creator(email, url, tagline);
	let copyright = copyright_creator();
	
	let footer_target = document.getElementById("footer");
	footer_target.appendChild(main_footer);
	footer_target.appendChild(copyright);
}
