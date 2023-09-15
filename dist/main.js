(()=>{"use strict";const e=function(){const e=document.getElementById("main");e.textContent="",e.className="",e.classList.add("home-page"),e.appendChild(function(){const e=document.createElement("div");e.classList.add("home");const t=document.createElement("p");return t.classList.add("home-name"),t.textContent="닭",e.appendChild(t),e}())};function t(e,t,n){const d=document.createElement("div");d.classList.add("menu-item-div");const a=document.createElement("img");a.classList.add("food-image"),a.src=`./img/food/${e.toLowerCase()}.png`,a.alt=`${e}`;const s=document.createElement("div");s.classList.add("food-info-div");const c=document.createElement("h2");c.classList.add("food-name"),c.textContent=e;const i=document.createElement("h3");i.classList.add("food-price"),i.textContent=t;const o=document.createElement("p");return o.classList.add("food-description"),o.textContent=n,s.appendChild(c),s.appendChild(i),s.appendChild(o),d.appendChild(a),d.appendChild(s),d}function n(){const e=document.createElement("div");return e.classList.add("menu-divider"),e}const d=function(){const e=document.getElementById("main");e.textContent="",e.className="",e.classList.add("about-us-page"),e.appendChild(function(){const e=document.createElement("div");return e.classList.add("about-us"),e.appendChild(function(){const e=document.createElement("div");e.classList.add("about-us-divs"),e.classList.add("mission-div");const t=document.createElement("h3");t.classList.add("about-us-headers"),t.classList.add("mission-header"),t.textContent="Our Mission";const n=document.createElement("p");return n.classList.add("mission-text"),n.textContent="We hope to spread and show the world our admiration for the best type of fried chicken — Korean Fried Chicken.",e.appendChild(t),e.appendChild(n),e}()),e.appendChild(function(){const e=document.createElement("div");e.classList.add("about-us-divs"),e.classList.add("visit-div");const t=document.createElement("h3");t.classList.add("about-us-headers"),t.classList.add("visit-header"),t.textContent="Visit Us";const n=document.createElement("h4");n.classList.add("visit-location"),n.textContent="Koreatown";const d=document.createElement("p");d.classList.add("visit-address"),d.innerHTML="\n      20 W 34th St., New York, NY 10001 <br>\n      Tel: (212)-123-4567\n   ";const a=document.createElement("h5");a.classList.add("visit-hours-header"),a.textContent="Hours";const s=document.createElement("p");return s.classList.add("visit-hours"),s.innerHTML="\n      Mon: 11AM - 10PM <br>\n      Tue: 11AM - 10PM <br>\n      Wed: 11AM - 10PM <br>\n      Thu: 11AM - 10PM <br>\n      Fri: 11AM - 12AM <br>\n      Sat: 11AM - 12AM <br>\n      Sun: 11AM - 10PM <br>\n   ",e.appendChild(t),e.appendChild(n),e.appendChild(d),e.appendChild(a),e.appendChild(s),e}()),e.appendChild(function(){const e=document.createElement("div");e.classList.add("about-us-divs"),e.classList.add("contact-div");const t=document.createElement("h3");t.classList.add("about-us-headers"),t.classList.add("contact-header"),t.textContent="Contact Us";const n=document.createElement("div");n.classList.add("contact-form");const d=document.createElement("input");d.classList.add("contact-form-name"),d.type="text",d.placeholder="Name",d.required=!0;const a=document.createElement("input");a.classList.add("contact-form-email"),a.type="email",a.placeholder="E-Mail Address",a.required=!0;const s=document.createElement("input");s.classList.add("contact-form-text"),s.type="text",s.placeholder="Please let us know how we are doing!",s.required=!0;const c=document.createElement("button");return c.classList.add("contact-form-submit"),c.textContent="Submit",c.addEventListener("click",(()=>{d.value="",a.value="",s.value=""})),n.appendChild(d),n.appendChild(a),n.appendChild(s),e.appendChild(t),e.appendChild(n),e.appendChild(c),e}()),e}())},a=document.getElementById("content");a.classList.add("content"),a.appendChild(function(){const a=document.createElement("header");a.classList.add("header");const s=document.createElement("button");s.classList.add("restaurantName"),s.textContent="DAK",s.addEventListener("click",(()=>{e()}));const c=document.createElement("div");c.classList.add("btnDiv");const i=document.createElement("button");i.classList.add("button"),i.textContent="Home";const o=document.createElement("button");o.classList.add("button"),o.textContent="Menu";const l=document.createElement("button");return l.classList.add("button"),l.textContent="About",c.appendChild(i),c.appendChild(o),c.appendChild(l),a.appendChild(s),a.appendChild(function(){const a=document.createElement("div");a.classList.add("btnDiv");const s=document.createElement("button");s.classList.add("button"),s.textContent="Home",s.addEventListener("click",(()=>{e()}));const c=document.createElement("button");c.classList.add("button"),c.textContent="Menu",c.addEventListener("click",(()=>{!function(){const e=document.getElementById("main");e.textContent="",e.className="",e.classList.add("menu-page"),e.appendChild(function(){const e=document.createElement("div");e.classList.add("menu");const d=document.createElement("h1");return d.classList.add("menu-header"),d.textContent="Menu",e.appendChild(d),e.appendChild(t("Dak Classic","$14","Classic original fried chicken, marinated with our signature DAK seasoning")),e.appendChild(n()),e.appendChild(t("Soy Garlic","$15","Hand battered whole chicken coated with soy garlic sauce")),e.appendChild(n()),e.appendChild(t("Spicy","$15","Hand battered whole chicken coated with our DAK sweet and spicy sauce")),e.appendChild(n()),e.appendChild(t("Half & Half","$18","Combination of two choices: Dak Classic, Soy Garlic, and Spicy")),e.appendChild(n()),e.appendChild(t("Chicken Tenders","$13","Double breaded crispy and juicy 100% white meat chicken tenders (+$1 to coat with the sauce of your choice)")),e.appendChild(n()),e.appendChild(t("Dak Classic Thigh Burger","$12","Signature DAK seasoned premium chicken thigh, fried to perfection and topped with fresh lettuce, onion, pickles, and our DAK burger secret sauce on a toasted sesame seed bun (Served with seasoned fries)")),e.appendChild(n()),e.appendChild(t("Tteokbokki","$12","Sweet, spicy, and chewy rice cakes served with fish cakes and topped with scallions")),e.appendChild(n()),e.appendChild(t("Seasoned Fries","$7","Crispy and perfectly seasoned french fries, served with our house made garlic aioli")),e.appendChild(n()),e}())}()}));const i=document.createElement("button");return i.classList.add("button"),i.textContent="About Us",i.addEventListener("click",(()=>{d()})),a.appendChild(s),a.appendChild(c),a.appendChild(i),a}()),a}()),a.appendChild(function(){const e=document.createElement("div");return e.setAttribute("id","main"),e}()),a.appendChild(function(){const e=document.createElement("footer");e.classList.add("footer");const t=document.createElement("a");t.classList.add("photo-credit"),t.textContent="Photo by Jon Tyson",t.href="https://unsplash.com/@jontyson?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText";const n=document.createElement("div");n.classList.add("github-div");const d=document.createElement("span");d.classList.add("credit"),d.textContent="Created by laumt";const a=document.createElement("span");a.classList.add("divider"),a.textContent="|";const s=document.createElement("a");s.classList.add("github"),s.href="https://github.com/laumt9";const c=document.createElement("i");return c.classList.add("fa-brands","fa-github"),c.style.color="white",s.appendChild(c),n.appendChild(d),n.appendChild(a),n.appendChild(s),e.appendChild(t),e.appendChild(n),e}()),e()})();