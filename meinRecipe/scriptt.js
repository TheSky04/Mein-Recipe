/************************************************** LOADING A RECIPE FROM API *********************************************************/
// 1) terminali aç ve npm init yaz ve sorulara name:"forkify", description:"Recipe application" author:"Furkan Baş" package.json oluştur.
// (parcel v2 kullandığımız için main kısmını kaldırmamız gereklidir.)
// ardından scripts içindekileri sil ve "start":"parcel index.html" "build":"parcel build index.html" olarak gir.
// 2) terminal'e npm i parcel@2 -D yaz ve parcel'i uygulamaya indir. (-D dev dependency olduğunu belirtiyor.)
// 3) npm run start yazarak parcel'ı çalıştır. (NOT: start özel scripttir. Bu yüzden npm run start yerine npm start yazarsan da çalışır.)
// (NOT : PARCEL'IN SCSS DOSYALARINI CSS'E ÇEVİRDİĞİNİ VE OTOMATİKMEN SCSS DOSYASI YÜKLEDİĞİNİ DİST/İNDEX.HTML'DEN VE PACKAGE.JSON'DAN GÖR.)
// 4) index.html'e gel ve script etiketindeki defer kısmını type="module" olarak değiştir.
// 5) src/js içindeki controller.js'e gel orada belirtilen url adresine git. ve fetch api url'ini al.
// kod yandaki gibidir. https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886
// ardından aşağıdaki kod satırlarını yaz.
// let showRecipe = async function () {

//     try {
//       let res = await fetch('https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886');
//       let data = await res.json();

//       if (!res.ok) throw new Error(`${data.message} ${res.status}`);
//       let { recipe } = data.data;
//       recipe = {
//         id: recipe.id,
//         title: recipe.title,
//         publisher: recipe.publisher,
//         sourceUrl: recipe.source_url,
//         image: recipe.image_url,
//         servings: recipe.servings,
//         cookingTime: recipe.cooking_time,
//         ingredients: recipe.ingredients
//       };
//       console.log(recipe);
//     } catch (err) {
//       alert(err);
//     }
//   };

//   showRecipe();
// 6) farklı bir yemeğin apisini denemek ve farklı recipe görmek için fetch içindeki kodu değiştirmemiz gerekiyor. API için verilen
// linke giriyoruz ve oradan ortadaki linke tıklayıp pizza seçeneklerinden id'sini kopyalayıp fetch içindeki id kısmına o id'yi
// yapıştırıp farklı bir menüyü inceliyoruz. Farklı bir api aşağıda verilmiştir.
// let res = await fetch('https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc990');

/******************************************************** Rendering The Recipe ******************************************************/
// 1) showRecipe içinde try'dan sonra yorum satırı olarak // 1) Loading Recipe ve en sonda ise // 2) Rendering Recipe olarak 2'ye ayır.
// 2) index.html içindeki kodları kopyala ve rendering Recipe altına const markup = `(kopyalanan kod buraya gelecek.)`;
// 3) ardından kod içindeki bilgileri recipe object'i ile güncelle. Güncel hali aşağıdaki gibi olacaktır. Ardından
// recipeContainer.innerHTML = "";
// recipeContainer.insertAdjacentHTML('afterbegin', markup); yap ve kod satırını recipeContainer içine yerleştir.
// 4) Kodun yazılmış hali aşağıdaki gibidir.
// const markup = `
//       <figure class="recipe__fig">
//         <img src="${recipe.image}" alt="${recipe.title}" class="recipe__img" />
//         <h1 class="recipe__title">
//           <span>${recipe.title}</span>
//         </h1>
//       </figure>

//       <div class="recipe__details">
//         <div class="recipe__info">
//           <svg class="recipe__info-icon">
//             <use href="src/img/icons.svg#icon-clock"></use>
//           </svg>
//           <span class="recipe__info-data recipe__info-data--minutes">${recipe.cookingTime}</span>
//           <span class="recipe__info-text">minutes</span>
//         </div>
//         <div class="recipe__info">
//           <svg class="recipe__info-icon">
//             <use href="src/img/icons.svg#icon-users"></use>
//           </svg>
//           <span class="recipe__info-data recipe__info-data--people">${recipe.servings}</span>
//           <span class="recipe__info-text">servings</span>

//           <div class="recipe__info-buttons">
//             <button class="btn--tiny btn--increase-servings">
//               <svg>
//                 <use href="src/img/icons.svg#icon-minus-circle"></use>
//               </svg>
//             </button>
//             <button class="btn--tiny btn--increase-servings">
//               <svg>
//                 <use href="src/img/icons.svg#icon-plus-circle"></use>
//               </svg>
//             </button>
//           </div>
//         </div>

//         <div class="recipe__user-generated">
//           <svg>
//             <use href="src/img/icons.svg#icon-user"></use>
//           </svg>
//         </div>
//         <button class="btn--round">
//           <svg class="">
//             <use href="src/img/icons.svg#icon-bookmark-fill"></use>
//           </svg>
//         </button>
//       </div>

//       <div class="recipe__ingredients">
//         <h2 class="heading--2">Recipe ingredients</h2>
//         <ul class="recipe__ingredient-list">
//           <li class="recipe__ingredient">
//             <svg class="recipe__icon">
//               <use href="src/img/icons.svg#icon-check"></use>
//             </svg>
//             <div class="recipe__quantity">1000</div>
//             <div class="recipe__description">
//               <span class="recipe__unit">g</span>
//               pasta
//             </div>
//           </li>

//           <li class="recipe__ingredient">
//             <svg class="recipe__icon">
//               <use href="src/img/icons.svg#icon-check"></use>
//             </svg>
//             <div class="recipe__quantity">0.5</div>
//             <div class="recipe__description">
//               <span class="recipe__unit">cup</span>
//               ricotta cheese
//             </div>
//           </li>
//         </ul>
//       </div>

//       <div class="recipe__directions">
//         <h2 class="heading--2">How to cook it</h2>
//         <p class="recipe__directions-text">
//           This recipe was carefully designed and tested by
//           <span class="recipe__publisher">${recipe.publisher}</span>. Please check out
//           directions at their website.
//         </p>
//         <a
//           class="btn--small recipe__btn"
//           href="${recipe.sourceUrl}"
//           target="_blank"
//         >
//           <span>Directions</span>
//           <svg class="search__icon">
//             <use href="src/img/icons.svg#icon-arrow-right"></use>
//           </svg>
//         </a>
//       </div>
//       `;
//     recipeContainer.innerHTML = "";
//     recipeContainer.insertAdjacentHTML('afterbegin', markup);
// 5) ardından ingredients'ler üzerinde loop döndürmemiz gerekli bu yüzden method'da güncellemeler yapıyoruz. Güncel hali aşağıdaki hali
// const markup = `
//       <figure class="recipe__fig">
//         <img src="${recipe.image}" alt="${recipe.title}" class="recipe__img" />
//         <h1 class="recipe__title">
//           <span>${recipe.title}</span>
//         </h1>
//       </figure>

//       <div class="recipe__details">
//         <div class="recipe__info">
//           <svg class="recipe__info-icon">
//             <use href="src/img/icons.svg#icon-clock"></use>
//           </svg>
//           <span class="recipe__info-data recipe__info-data--minutes">${recipe.cookingTime}</span>
//           <span class="recipe__info-text">minutes</span>
//         </div>
//         <div class="recipe__info">
//           <svg class="recipe__info-icon">
//             <use href="src/img/icons.svg#icon-users"></use>
//           </svg>
//           <span class="recipe__info-data recipe__info-data--people">${recipe.servings}</span>
//           <span class="recipe__info-text">servings</span>

//           <div class="recipe__info-buttons">
//             <button class="btn--tiny btn--increase-servings">
//               <svg>
//                 <use href="src/img/icons.svg#icon-minus-circle"></use>
//               </svg>
//             </button>
//             <button class="btn--tiny btn--increase-servings">
//               <svg>
//                 <use href="src/img/icons.svg#icon-plus-circle"></use>
//               </svg>
//             </button>
//           </div>
//         </div>

//         <div class="recipe__user-generated">
//           <svg>
//             <use href="src/img/icons.svg#icon-user"></use>
//           </svg>
//         </div>
//         <button class="btn--round">
//           <svg class="">
//             <use href="src/img/icons.svg#icon-bookmark-fill"></use>
//           </svg>
//         </button>
//       </div>

//       <div class="recipe__ingredients">
//         <h2 class="heading--2">Recipe ingredients</h2>
//         <ul class="recipe__ingredient-list">

//           ${recipe.ingredients.map(ing => {
//           return `
//           <li class="recipe__ingredient">
//             <svg class="recipe__icon">
//               <use href="src/img/icons.svg#icon-check"></use>
//             </svg>
//             <div class="recipe__quantity">${ing.quantity} </div>
//             <div class="recipe__description">
//               <span class="recipe__unit">${ing.unit}</span>
//               ${ing.description}
//             </div>  
//           </li>
//           `;
//           }).join('')}

//         </ul>
//       </div>

//       <div class="recipe__directions">
//         <h2 class="heading--2">How to cook it</h2>
//         <p class="recipe__directions-text">
//           This recipe was carefully designed and tested by
//           <span class="recipe__publisher">${recipe.publisher}</span>. Please check out
//           directions at their website.
//         </p>
//         <a
//           class="btn--small recipe__btn"
//           href="${recipe.sourceUrl}"
//           target="_blank"
//         >
//           <span>Directions</span>
//           <svg class="search__icon">
//             <use href="src/img/icons.svg#icon-arrow-right"></use>
//           </svg>
//         </a>
//       </div>
//       `;
//     recipeContainer.innerHTML = "";
//     recipeContainer.insertAdjacentHTML('afterbegin', markup);


//   } catch (err) {
//     alert(err);
//   }
// };
// 6) icon'a baktığımızda kod satırını aşağıdaki gibi görmekteyiz. Ancak href içindeki kod eski bir kod. Çünkü biz parcel kullanıyoruz.
// ve istediğimiz url parcel içindeki dist'te mevcut bunu js'e anlatmamız gerekli.
{/* <svg class="recipe__info-icon">
    <use href="src/img/icons.svg#icon-clock"></use>
</svg> */}
// bu yüzden kodun en başına gelip import icons from "url:../img/icons.svg"; yaparak import ediyoruz ve ardından
// src/img/icons.svg gördüğümüz her yere ${icons} yazıyoruz.
// 7) F5 Çektiğimizde resim yüklenmeden resim yüklenene kadar hemen önce bi yüklenme loading iconu gözüksün istiyoruz.
// index.html'deki spinner olan yorum kod satırını al ve renderSpinner(parentEl){} fonksiyonu oluştur ve içine yerleştir.
// bu fonksiyon içine gelen ParentEl'in öncesinde loading iconu oluştursun. renderSpinner fonksiyonu aşağıdaki gibi olacaktır.
// let renderSpinner = function (parentEl) {

//     let markup = `
//       <div class="spinner">
//         <svg>
//           <use href="${icons}#icon-loader"></use>
//         </svg>
//       </div>
//       `;
//     parentEl.innerHTML = "";
//     parentEl.insertAdjacentHTML("afterbegin", markup);
//   };
// ardından showRecipe try içinde 1) loading recipe'nin hemen altına renderSpinner(recipeContainer); yaz ve fonksiyonu çağır.
// 8) Biz eski browserlardan uygulamaya girerken yeni methodlardan dolayı sıkıntı yaşamamasını istiyoruz. Bu yüzden aşağıdakileri yapıyoruz.
// terminale gelip npm i core-js regenerator-runtime yazıyoruz. (package.json'dan gelip gelmediklerini kontrol et.)
// ardından controller.js'in en üstüne gelip aşağıdaki gibi import ediyoruz.
// import "core-js/stable"; // => polyfilling for everything.
// import "regenerator-runtime/runtime"; // =>  polyfilling for async/await

/**************************************** Listening for Load and Hashchange Events ***********************************************/
// 1) index.html içindeki result ul'sine gel ve içine aşağıdaki geçici kodları yaz.
{/* <a href="#5ed6604591c37cdc054bc990">RECIPE 1</a>
<a href="#5ed6604591c37cdc054bc886">RECIPE 2</a> */}
// 2) showRecipe(); olan kısmı kes ve onun yerine bunu yapıştır. window.addEventListener('hashchange', showRecipe);
// (NOT : BURADA GEÇİCİ OLARAK KONULAN LİNKLERE TIKLANDIĞINDA SAYFAYA RECİPE GELİYOR ANCAK BAŞKA İD İÇEREN LİNKE TIKLASANDA SONUÇ
// DEĞİŞMİYOR. UYGULAMADA BUNU TEST ET.)
// 3) linklere tıklayınca içeriğin değişmesi için showRecipe try'ın en başına let id = window.location.hash.slice(1); yazıyoruz.
// ardından let res kısmını  let res = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${id}`); olarak güncelliyoruz.
// (NOT : ŞİMDİ LİNKLERE TIKLADIĞIMIZDA İÇERİK DEĞİŞİYOR. ANCAK LİNKİ KOPYALAYIP BAŞKA YERDE AÇTIĞIMIZDA İSE HASHCHANGE EVENTİ
// GERÇEKLEŞMEDİĞİ İÇİN İÇERİK GÖRÜNMÜYOR.)
// 4) window.addEventListener('load', showRecipe); yazıyoruz ve başka linkten girince de içerik görünmesini sağlıyoruz.
// 5) ancak iki tane addEventListener alt alta olduğu için burada bir düzeltme yapmamız gerekli iki eventListeneri düzeltmek için
// aşağıdaki kod satırını yazıp addEventListenerları yorum satırı yapıyoruz.
// ['hashchange', 'load'].forEach(ev => window.addEventListener(ev,showRecipe));
// 6) hash'e sahip olmadan url'i girdiğimizde yani id olmadan url'e giriş yaptığmızda hata ile karşılaşıyoruz ve loading icon sürekli dönüyor.
// bu hatayı düzeltmek için const id altına if(!id) return; yazıyoruz.

/**************************************************** Refactoring for MVC **********************************************************/
// (NOT : BURADA CONTROLLER.JS İÇİNDEKİ KODLARI PARÇALARA AYIRIP ARCHİTECTURE MVC DÜZENİNE GÖRE AYARLAYACAĞIZ.)
// 1) src/js içine controller.js ve model.js oluştur. ardından src/js içine views klasörü oluştur ve içine recipeView.js oluştur.
// 2) forkify-architecture-recipe-loadin.png'ye bakarak model.js'e gel ve state object'i oluştur.
// 3) controller.js'den showRecipe fonksiyonunun içindeki let res kısmından recipe object'i dahil kes ve model.js'de loadRecipe yapıştır.
// ardından recipe'i state.recipe olarak düzelt.
// 4) controller.js'in en başına gel ve import * as model from "./model.js"; yaz ve export edilen model'i controller'da import et.
// 5) controller.js'de renderSpinner(recipeContainer); kısmını // 1) loading Recipe üstüne at. Ardından loading Recipe altına
// model.loadRecipe(id); yaz.
// (NOT : LOADRECİPE FONKSİYONU ASYNC BİR FONKSİYON OLDUĞU İÇİN YUKARIDAKİ GİBİ ÇAĞIRDIĞIMIZDA BİZE PROMİSE DÖNDÜRÜR. BU PROMİSE'İ ÇEVİRMEK
// İÇİN BAŞINA AWAİT YAZIYORUZ. AYRICA LOADRECİPE GERİYE BİR ŞEY DÖNDÜRMEDİĞİ İÇİN HERHANGİ BİR VARİABLE'A BAĞLAMIYORUZ.)
// 6) markup kısmında hep recipe kullandığımız için model.loadRecipe(id) altına
// const {recipe} = model.state; yazıyoruz.
// (NOT : BURADA UYGULAMAYI ÇALIŞTIR VE HATA ALIP ALMADIĞINI İNCELE. HATA ALMAMAN VE UYGULAMANIN DÜZGÜN ÇALIŞMASI GEREKLİDİR.)
// 7) recipeView.js'e geç ve class recipeView'i oluştur.
// (NOT: We do this because later, we will also have a parent class called View, which will contain a couple of methods that all the
// views should inherit. So using classes makes all of this very simple to implement. Also,we want each view to have a couple of
// private methods and properties and so classes makes this really easy to implement again. Each of these classes to have a couple of
// private properties and one of them is going to be the parentElement.)
// Bu yüzden recipeView class içinde private #parentElement = document.querySelector('.recipe'); oluştur.
// ardından class dışında export default new RecipeView(); yap ve class'ı export et.
// 8) ardından controller.js'in en üstüne gel ve import recipeView from './views/recipeView.js'; yaz.
// 9) controller.js'e gel ve 2) Rendering Recipe altına recipeView.render(model.state.recipe); yap. Ardından recipeView.js'e gel ve
// private kısımda #data; oluştur ve render(data){this.#data = data;} oluştur.
// 10) controller.js'deki markup kısmını olduğu gibi kes ve recipeView içinde private #generateMarkup(){} fonksiyonu oluştur ve içine at.
// const markup olan kısmı sil ve silinen kısma return yaz.
// (NOT : BURADA RECİPE OLAN KISMIN BİR KARŞILIĞI YOK YANİ BİR SORUN VAR BUNU DÜZELTMELİYİZ.so,recipe olan her yere this.#data yazıyoruz.)
// 11) controller.js geliyoruz ve  const { recipe } = model.state; kısmını siliyoruz. Buraya artık gerek yok.
// 12) recipeContainer.innerHTML = ""; recipeContainer.insertAdjacentHTML('afterbegin', markup); kısımlarını #generateMarkup'tan kes
// ve render(data) methodu içine aktar.
// 13) render data içine yukarıda aktardıklarının üstüne const markup = this.#generateMarkup(); yaz.
// 14) render(data) altına aşağıdaki kod satırını yaz.
// #clear() {
//     this.#parentElement.innerHTML = "";
// }
// ardından render(data) içindeki recipeContainer.innerHTML = ""; kısmını sil ve this.#clear(); yaz.
// ardından recipeContainer.insertAdjacentHTML('afterbegin', markup); içindeki recipeContainer'ı this.#parentElement.insert... yap.
// 15) diagram'a göre showRecipes olan fonksiyonun adı controlRecipes olmalı bu yüzden adını controlRecipes olarak değiştir.
// 16) control.js'den renderSpinner fonksiyonunu olduğu gibi ks ve recipeView içine aktar. renderSpinner içindeki parametreyi kaldır.
// parentEl olan yerleri this.#parentElement olarak değiştir.
// (NOT : İCONS MODULE'U RECİPEVİEW'DE GÖZÜKMÜYOR BU YÜZDEN BURADAKİ HATAYI DÜZELTMELİYİZ.)
// 17) icons'u tanıtmak için import icons from "url:../img/icons.svg"; kısmını controller.js'den kes ve recipeView.js'in üste yaz.
// konum belirtirken güncelleme gerekeceğinden import icons from "url:../../img/icons.svg"; olarak güncelle. )
// 18) controller.js gel ve renderSpinner(recipeContainer); kısmını recipeView.renderSpinner(); olarak güncelle.
// 19) terminal'e npm install @babel/plugin-proposal-private-methods @babel/plugin-proposal-private-property-in-object yaz.
// (NOT: Uygulama çalışıyor mu diye kontrol et. Çalışması lazım.)
// (NOT : UYGULAMAYI İNCELEDİĞİMİZDE GRADİENTS GİBİ DEĞERLERİN 0.5 GİBİ VERİLDİĞİNİ GÖRÜYORUZ BİZ BUNU KESİRLİ, 1/2 ŞEKLİNDE İSTİYORUZ.)
// (NOT : BUNUN İÇİN GOOGLE'A NPM FRACTİONAL YAZ VE İNCELE.)
// 20) terminale npm install fractional yaz.
// 21) ardından recipeView.js'e gel ve en üstüne import {Fraction} from 'fractional'; yaz.
// (NOT: HERE YOU SEE THAT ANY LİBRARİES OR ANY PACKAGES THAT WE İMPORT FROM NPM, WE DON'T EVEN HAVE TO SPECİFY ANY PATH.
// ALL WE HAVE TO DO İS TO WRİTE THEİR NAMES HERE AND WE NEED ALSO WHAT THEY EXPORT.)
// 22) recipeView.js gel ingredients içindeki recipe quantity divini aşağıdaki gibi güncelle.
// <div class="recipe__quantity">${ing.quantity ? new Fraction(ing.quantity).toString() : ''} </div>
// 23) ingredients içindeki map methodunun içindeki fonksiyonu oradan kes. #generateMarkUpIngredient(ing){} fonksiyonu oluştur ve
// içine yapıştır ve düzenle. Ardından kestiğin map kısmını ${this.#data.ingredients.map(this.#generateMarkUpIngredient).join('')} yap.

/******************************************** Helpers and Configuration Files**********************************************************/
// 1) js sağ tıkla ve config.js oluştur.
// 2) model.js'e gel ve fetch api'nin https://forkify-api.herokuapp.com/api/v2/recipes/ kısmını kes ve config.js'de
// export const API_URL = `https://forkify-api.herokuapp.com/api/v2/recipes/`;oluştur.Ardından model.js'de bunu aşağıdaki gibi import et.
// import { API_URL } from "./config.js"; ardından da kestiğin fetch kısmını şöyle düzenle : let res = await fetch(`${API_URL}${id}`);
// 3) js altında helpers.js oluştur.
// (NOT: The goal of this file or this module is to contain a couple of functions that we reuse over and over in our project. So here
// in this module we then have a central place for all of them basically. )
// 4) model.js gel ve loadRecipe altındaki let res, let data, if(..) kısımlarını kes ve helpers methodu içine gönder.
// ardından export const getJSON adında async function oluştur ve kestiğin kısmı fonksiyonun try'ı içine al.
// ÖNEMLİİİİ : ASYNC FUNCTİON'DAN ASYNC FUNCTİON DÖNDÜRÜLDÜĞÜ İÇİN GETJSON'UN EN SONUNDA RETURN DATA; EKLİYORUZ !!!!
// Fonksiyonun parametresini url yap. Fetch içindeki kısmı sil ve fetch(url) olarak güncelle.
// ardından model.js'e gel ve yandaki gibi import et. import { getJSON } from "./helpers.js";
// daha sonra loadRecipe try içine kestiğin kısma yandakini yaz. const data = await getJSON(`${API_URL}${id}`);
// 5) link'teki id'ye ekstradan bir şeyler ekleyip yanlış id gönderdiğimizde bad request (400) hatasını helpers.js'den alıyoruz.
// ancak bizim asıl hatamız Cannot read properties of undefined (reading 'data') olarak belirtilen model.js'deki hata bu değildir.
// model.js'deki asıl hatayı görmek için ::
// helpers.js'e girip catch kısmına throw(err); yazıyoruz.
// 6) controller.js'in en tepesindeki önceden hazırlanmış olan settimeout function'ı al ve helpers içine yapıştır.
// ardından getJSon içindeki res kısmını yandaki gibi güncelle.  let res = await Promise.race([fetch(url), timeout(10)]);
// (NOT: İnternet hızını 3G slow yap ve timeout değerini 0.5'e düşür ve Request took too long! Timeout after 0.5 second hatası aldığını gör.)
// 7) config.js gel ve yandaki kodu yaz. export const TIMEOUT_SEC = 10;
// ardından helpers.js gel ve yandaki gibi import et import { TIMEOUT_SEC } from "./config.js";
// ardından getJSon içindeki res'i yandaki gibi güncelle let res = await Promise.race([fetch(url), timeout(TIMEOUT_SEC)]);

/******************************************** Event Handlers in MVC ***************************************************/
// (NOT: controller.js'e geldiğimizde ['hashchange', 'load'].forEach(ev => window.addEventListener(ev, controlRecipes));
// kısmının burada olduğunu görüyoruz. Ancak biz bunu view kısmında görmek isteriz controller kısmında değil. Ancak bu method
// controlRecipes fonksiyonunu kullanıyor bunu da view kısmında görmek istemiyoruz. Dolayısıyla bu sorunu çözmemiz gerekiyor.)
// (Events should be handled in the controller.(otherwise we would have application logic in the view.))
// (Events should be listened for in the view.(otherwise we would need DOM elements in the controller.))
// (The solution is called the Publisher-Subscriber Design pattern.)
// 1) controller.js'den ['hashchange', 'load'].forEach(ev => window.addEventListener(ev, controlRecipes)); kısmını kes ve
// recipe view içinde aşağıdaki fonksiyonu #generateMarkup üstünde aşağıdaki fonksiyonu oluştur.
// addHandlerRender(handler) {
//     ['hashchange', 'load'].forEach(ev => window.addEventListener(ev, handler));
// };
// ardından controller.js gel ve kestiğin kısma aşağıdaki kod satırını yaz.
// const init = function () {
//   recipeView.addHandlerRender(controlRecipes);
// };
// init();

/******************************************** Implementing Error and Success Messages *****************************************/
// 1) recipeView gel ve aşağıdaki kod satırına sahip fonksiyonu ekle.(Gerekli html kodu index.html'de yorum satırı olarak bulunmaktadır.)
// renderError(message) {

//     const markup = `
//         <div class="error">
//             <div>
//             <svg>
//                 <use href="${icons}#icon-alert-triangle"></use>
//             </svg>
//             </div>
//             <p>${message}</p>
//         </div>
//     `;
//     this.#clear();
//     this.#parentElement.insertAdjacentHTML("afterbegin", markup);
// };
// 2) model.js'e gel ve loadRecipe fonksiyonunun catch kısmına throw err; ekle.
// 3) controller.js gel ve controlRecipes'in catch kısmına recipeView.renderError(err); yaz.
// (NOT: ID OLARAK GEÇERSİZ BİR ID DENE VE HATA ALIP ALMADIĞINI GÖR. Hata alman gerekli.)
// 4) recipeView private alana #errorMessage = `We couldn't find this recipe. Please try another one !`; yaz.
// ardından renderError(message = this.#errorMessage) olarak güncelle.
// 5) buna benzer şekilde ilerde kullanmak üzere bir successMessage kısmı oluşturuyoruz. Aşağıdaki kod satırını recipeView.js'de olustur.
// recipeView.js gel ve recipeView.js'in private kısmında #message = ""; olustur. Ardından aşağıdaki fonksiyonu olustur.
// renderMessage(message = this.#message) {
//     const markup = `
//         <div class="message">
//             <div>
//             <svg>
//                 <use href="${icons}#icon-smile"></use>
//             </svg>
//             </div>
//             <p>${message}</p>
//         </div>
//     `;
//     this.#clear();
//     this.#parentElement.insertAdjacentHTML("afterbegin", markup);
// };

/******************************************** Implementing Search Results Part-1 ********************************************/
// 1) model.js gel ve let state içine aşağıdaki satırı ekle.
// search: {
//     query: '',
//     results: []
// }
// 2) model.js gel ve aşağıdaki gibi method oluştur. Oluşturulan method aşağıdaki gibidir.
// export const loadSearchResults = async function (query) {

//     try {
//         state.search.query = query;
//         const data = await getJSON(`${API_URL}?search=${query}`);
//         console.log(data);

//         state.search.results = data.data.recipes.map(rec => {
//             return {
//                 id: rec.id,
//                 title: rec.title,
//                 publisher: rec.publisher,
//                 image: rec.image_url
//             };
//         });
//          console.log(state.search.results);
//     } catch (err) {
//         console.error(err);
//         throw err;
//     }
// };
// loadSearchResults("pizza");
// (Ardından uygulamayı çalıştır ve console'da 59 adet object'in geldiğini gör.)
// 3) controller.js'e gel ve aşağıdaki methodu oluştur.
// const controlSearchResults = async function () {

//     try {
//       await model.loadSearchResults('pizza');
//       console.log(model.state.search.results);
//     } catch (err) {
//       console.error(err);
//     }

//   };
//   controlSearchResults();
// 4) views sağ tıkla ve searchViews.js oluştur.
// 5) searchView.js içeriğini aşağıdaki gibi oluştur.
// class searchView {
//     #parentEl = document.querySelector('.search');

//     getQuery() {
//         return this.#parentEl.querySelector('.search__field').value;
//     }
// }

// export default new searchView();
// 6) controller.js gel ve en başına import searchView from "./views/searchView.js"; oluştur.
// 7) controller.js gel ve controlSearchResults fonksiyonunu aşağıdaki gibi güncelle.
// const controlSearchResults = async function () {
//     try {
//       const query = searchView.getQuery();
//       if (!query) return;
//       await model.loadSearchResults(query);
//       console.log(model.state.search.results);
//     } catch (err) {
//       console.error(err);
//     }
//   };
//   controlSearchResults();
// 8) 7. maddede yazılan controlSearchResults(); kısmı sil ve Publisher-Subscriber pattern kullanarak güncelle.
// bunu yapmak için searchView.js gel ve aşağıdaki metodu searchView class'ı içine yerleştir.
// addHandlerSearch(handler) {
//     this.#parentEl.addEventListener('submit', function (e) {
//         e.preventDefault();
//         handler();
//     });
// }
// ardından controller.js gel ve searchView.addHandlerSearch(controlSearchResults);
// 9) console.log'da gereksiz bulunan kodları temizle ve arama butonuna pizza yaz.(bunu yaptığında 59 objenin çıktığını görmen gerek.)
// ardından arama butonuna avacado yaz ve 39 objenin çıktığını gör.
// 10) arama butonunda aramadan sonra içeriğinin silinmesini istiyoruz. Bunun için searchView.js gel ve searchView class'ı içine aşağıdakini yaz.
// #clearInput() {
//     this.#parentEl.querySelector('.search__field').value = "";
// }
// ardından getQuery() methodunu aşağıdaki gibi güncelle.
// getQuery() {
//     const query = this.#parentEl.querySelector('.search__field').value;
//     this.#clearInput();
//     return query;
// }
// (ÖNEMLİ NOT :BURADA return kısmını kaldırıp önce query variable'ına tanımladık en sonda ise query'i döndürdük. Eğer direk return
// şeklinde bıraksaydık this.#clearInput(); methoduna ulaşamayacaktık. eğer this.#clearInput(); methodunu başa çekseydik bu defa
// sonuçları elde edemeyecektik. her ikisinin gerçekleşmesi için böyle bir yol izledik. Burayı iyi kavra, çok önemli! )

/******************************************** Implementing Search Results Part-2 ********************************************/
// 1) Views altında resultsView.js oluştur.
// 2) Views altında View.js oluştur.
// 3) recipeView.js'in en üstüne import View from "./View.js"; yaz.
// 4) recipeView.js gel ve private alanların hepsinde # kısmını _ olarak değiştir.
// (NOT: Uygulamayı yenile ve çalışıp çalışmadığını dene çalışmıyorsa eksik kalan # private kısımlar vardır.)
// 5) searchView.js gel ve private alanların hepsinde # kısmını _ olarak değiştir.
// 6) recipeView.js gel ve addHandlerRender,_generateMarkup_, _generateMarkUpIngredient methodları hariç diğer tüm methodları kes
// ve View.js'e gel ve export default class View{ (kesilen kısmı buraya yapıştır.) } ayrıca _data methodunu da kes ve buraya yapıştır.
// 7) recipeView.js gel ve class RecipeView{} kısmını class RecipeView extends View {} olarak güncelle.
// 8) View.js gel ve en başına import { icons } from "url:../../img/icons.svg"; yaz.
// 9) resultsView.js gel ve class resultsView extends View{} yap.
// 10) resulsView.js gel ve en başına import View from "./View.js"; yaz.
// 11) resultsView.js içine _parentElement = document.querySelector('.results'); yaz ve ardından new instance'lar için aşağıdakini class
// dışına yaz.
// export default new resultsView();
// 12) controller.js gel ve en üstüne yandakini yaz. import resultsView from "./Views/resultsView.js";
// 13) controller.js gel ve controlSearchResults fonksiyonunda try'dan hemen sonra yandakini yaz. resultsView.renderSpinner();
// ardından da sonuçları görmek için onun altına da console.log(resultsView); yaz.
// (NOT: Arama butonuna pizza yaz ve resultsView'i incele. _data:undefined,_parentElement: ul.results olarak bulmalısın.
// baktıktan sonra console.log(resultsView); silebilirsin.)
// 14) resultsView.js gel ve _generateMarkup(){ return `...`} methodu oluştur ve index.html'deki preview yorum satırındaki kodları kopyala
// return `(kopyaladığın kodları buraya yapıştır). `;
// 15) controller.js gel ve controlSearchResults methodu içinde try'ın en sonuna resultsView.render(model.state.search.results); yaz.
// 16) ardından resultsView.js gel ve _generateMarkup(){} fonksiyonunu en başına console.log(this._data); yaz.
// (NOT: Arama butonuna pizza yaz ve sonuçları incele. console.log'da 2 adet 59 object'e sahip olan array oluşması lazım.)
// 17) ardından resultsView.js'i aşağıdaki gibi yap.
// class resultsView extends View {

//     _parentElement = document.querySelector('.results');

//     _generateMarkup() {
//         console.log(this._data);

//         return this._data.map(this._generateMarkupPreview).join('');


//     }

// _generateMarkupPreview(result) {

//     return `
//     <li class="preview">
//         <a class="preview__link preview__link--active" href="#${result.id}">
//         <figure class="preview__fig">
//             <img src="${result.image}" alt="${result.title}" />
//         </figure>
//         <div class="preview__data">
//             <h4 class="preview__title">${result.title}</h4>
//             <p class="preview__publisher">${result.publisher}</p>
//         </div>
//         </a>
//     </li>
//     `;
// }

// export default new resultsView();
// (NOT: Arama butonuna pizza yaz ve sonuçları incele. Sonuçların çalışıyor olması lazım.)
// 18) controller.js gel ve aşağıdaki kod satırını importlardan hemen sonra kodların en başına yaz.
// if (module.hot) {
//     module.hot.accept();
// }
// (NOT: this code is coming from the parcel not Javascript.)
// 19) ardından daha önce oluşturduğumuz fake a etiketlerini index.html'den kaldır.
// 20) recipeView.js gel ve <div class="recipe__user-generated">'in altındaki svg'leri sil. Böylece kullanıcı icon'u gözükmeyecek.
// 21) arama yerine asşlkasşd gibi random yazınca bize yine success geliyor. Bunu düzeltmemiz gerek. Bu yüzden bir errorMessage property
// oluşturmamız gerekiyor.
// resultsView.js gel ve private alanda aşağıdaki kod satırlarını yaz.
// _errorMessage = "No recipes found for your query! Please try again!";
// _message = "";
// ardından View.js'e gel ve render(data){}'nın en başına aşağıdaki kod satırını yaz.
// if (!data || (Array.isArray(data) && data.length === 0)) return this.renderError();
// (Not: şimdi arama butonuna dşlkfsşldkf gibi random değerler yazınca hata alacaksın.)

/******************************************** Implementing Pagination Part-1 **************************************************/
// 1) model.js gel ve state.search içinde resultsPerPage: 10; oluştur.
// 2) ardından model.js'in en altında aşağıdaki fonksiyon methodunu oluştur.
// export const getSearchResultsPage = function (page) {

//     const start = (page - 1) * state.search.resultsPerPage;
//     const end = page * state.search.resultsPerPage;

//     return state.search.results.slice(start, end);
// };
// 3) state.search içindeki resultsPerPage:10 kısmındaki 10 sayısının nerden geldiği bilinmiyor.(like magic number) bu yüzden
// config.js gel ve export const RES_PER_PAGE = 10; yaz ve model.js'e geri dön.
// import { API_URL } from "./config.js"; kısmını import { API_URL, RES_PER_PAGE } from "./config.js"; olarak güncelle
// ve state.search içindeki resultPerPage kısmını  resultsPerPage: RES_PER_PAGE olarak güncelle.
// 4) controller.js gel ve controlSearchResults fonksiyonunun en altındaki resultsView.render(model.state.search.results); kısmını
//  resultsView.render(model.getSearchResultsPage(1)); olarak değiştir.
// (NOT : Buradaki 1 değerini ilerde dynamic yapacağız ama şuanlık görmek amacıyla 1 olarak belirlendi.)
// (NOT : İşe yarayıp yaramadığını görmek için arama çubuğuna pizza yaz ve 10 tane pizzanın gösterilip gösterilmediğini incele.)
// (NOT : resultsView.render(model.getSearchResultsPage(1)); içindeki 1 değerini 2,3 gibi değerler girerek değişip değişmediğini incele
// sayıyı değiştirdiğimiz halde ürünlerin değişmediğini görüyoruz. Bu yüzden controller'daki module.hot kısmını yorum satırı yap.
// ardından tekrar incele.)
// 5) hangi sayfada olduğumuzu bilmek isteriz. Bu yüzden model.js içindeki getSearchResultsPage fonksiyonu içine en başa
// state.search.page = page; yazıyoruz. ardından state objectine geliyoruz ve search içine resultsPerPage'in üstüne page:1, yazıyoruz.
// 6) default parametre belirlemek için getSearchResultsPage içindeki parametreyi (page = state.search.page) yapıyoruz.

/******************************************** Implementing Pagination Part-2 **************************************************/
// 1) Views altında paginationView.js oluştur.
// 2) paginationView.js içinde aşağıdaki kod satırını oluştur.
// import { icons } from "url:../../img/icons.svg";
// import View from "./View.js";

// class paginationView extends View {
//     _parentElement = document.querySelector('.pagination');

//     _generateMarkup() {
//          const curPage = this._data.page;
//         // 1) Page 1 and there are other pages

//         // 2) Page 1 and there are No other pages

//         // 3) Last page

//         // 4) Other page

//     }

// }
// export default new paginationView();
// (NOT : Burada 4 durum için 4 yorum satırı oluşturduk ve ilerleyen kodları ilgili yorumun altına yazacağız.)
// 3) controller.js gel ve controlSearchResults fonksiyonunu aşağıdaki gibi yorum satırları ekle.
// const controlSearchResults = async function () {

//     try {
//       resultsView.renderSpinner();

//       // 1) Get search query
//       const query = searchView.getQuery();
//       if (!query) return;

//       // 2) Load search results
//       await model.loadSearchResults(query);

//       // 3) Render results
//       resultsView.render(model.getSearchResultsPage(2));

//       // 4) Render initial Pagination buttons

//     } catch (err) {
//       console.error(err);
//     }

//   };
// (NOT : Burada ilk 3 numaralı kodların altındaki kodlar önceden yazılıydı. 4.Maddeyi şimdi ekledik ve kodları birazdan ekleyeceğiz.)
// 4) controller.js gel ve import olarak yandaki satırı ekle. import paginationView from "./Views/paginationView.js";
// 5) controller.js controlSearch results fonksiyonuna gel ve 4.maddenin altına şunu yaz. paginationView.render(model.state.search);
// 6) paginationView.js'e gel ve 1 numaralı maddenin üstüne yani en üste 
// const numPages = Math.ceil(this._data.results.length / this._data.resultsPerPage); yaz. ardından console.log(numPages); yaz.
// numPages'in çalışıp çalışmadığını görmek için arama çubuğuna pizza yaz ve dene. Çalışıyorsa devam et çalışmıyorsa sorunu düzelt.
// 7) paginationView.js gel 1.maddenin altına aşağıdaki kod satırını yaz.
// // 1) Page 1 and there are other pages
// if (curPage === 1 && numPages > 1) {
//     return `page 1,others`;
// }
// 8) paginationView.js gel ve 2.maddenin altına aşağıdaki kod satırını yaz.
// // 2) Last page
// if (curPage === numPages && numPages > 1) {
//     return `last page`;
// }
// 9) paginationView.js gel ve 3.maddenin altına aşağıdaki kod satırını yaz.
// // 3) Other page
// if (curPage < numPages) {
//     return `other page`;
// }
// 10) paginationView.js gel ve 4.maddenin altına yandaki kod satırını yaz.  return `only 1 page`;
// (NOT:Controller.js'den sayfa numarasını 2'ye getir ve arama çubuğuna pizza yaz ve test et. sayfalama kısmında other page yazıyorsa
// ve sayfa numarasını 6'ya getirdiğimizde last page, 1.sayfaya getirdiğimizde page 1,others yazıyorsa işlemin doğrudur.)
// 11) paginationView.js gel ve 2 numaralı kodun altındaki return kısmının içindekini sil ve index.html'den button-prev olan yorum
// satırındaki kodu al ve return içine bu html kodunu gönder ve aşağıdaki kod gibi yap.
// // 2) Last page
// if (curPage === numPages && numPages > 1) {
//     return `
//     <button class="btn--inline pagination__btn--prev">
//         <svg class="search__icon">
//         <use href="${icons}#icon-arrow-left"></use>
//         </svg>
//         <span>${curPage - 1}</span>
//     </button>
//     `;
// }
// 12) paginationView.js gel ve 1 numaralı kodun altındaki return kısmının içindekini sil ve index.html'den button-next olan yorum
// satırındaki kodu al ve return içine bu html kodunu gönder ve aşağıdaki kod gibi yap.
// 1) Page 1 and there are other pages
// if (curPage === 1 && numPages > 1) {
//     return `
//     <button class="btn--inline pagination__btn--next">
//         <span>Page ${curPage + 1}</span>
//         <svg class="search__icon">
//         <use href="${icons}#icon-arrow-right"></use>
//         </svg>
//     </button>
//   `;
// }
// 13) paginationView.js gel ve 3 numaralı kodun altındaki return kısmının içindekini sil ve index.html'den button-prev
// ve button-next olan yorum satırındaki kodu al ve return içine bu html kodunu gönder ve aşağıdaki kod gibi yap.
// // 3) Other page
// if (curPage < numPages) {
//     return `
//     <button class="btn--inline pagination__btn--prev">
//         <svg class="search__icon">
//         <use href="${icons}#icon-arrow-left"></use>
//         </svg>
//         <span>Page ${curPage - 1}</span>
//     </button>
//     <button class="btn--inline pagination__btn--next">
//         <span>Page ${curPage + 1}</span>
//         <svg class="search__icon">
//         <use href="${icons}#icon-arrow-right"></use>
//         </svg>
//     </button>
//     `;
// }
// 14) paginationView.js gel ve 4 numaralı kodun altındaki return kısmının içindekini sil ve aşağıdaki gibi yap.
//// 4) Page 1 and there are No other pages
// return "";
// (NOT : Şimdi controller.js'den sayfa numaralarını değiştirerek ve arama butonuna bazı kelimeler yazarak buttonları incele
// buttonların doğru şekilde olması lazım yoksa kodda hata yapmışsındır.
// 15) paginationView.js gel ve paginationView class'ı içinde _generateMarkup üzerine aşağıdaki metodu oluştur.
// addHandlerClick(handler) {
//     this._parentElement.addEventListener('click', function (e) {
//         const btn = e.target.closest('.btn--inline');
//         console.log(btn);
//         handler();
//     });
// }
// 16) controller.js gel ve init metodu üstüne aşağıdaki fonksiyon metodunu oluştur.
// const controlPagination = function () {
//     console.log("Page controller");
// };
// ardından init fonksiyonunun içine paginationView.addHandlerClick(controlPagination); yaz.
// (NOT : arama çubuğuna pizza yaz ve önceki sayfaya tıkla eğer tıkladığın buton geliyorsa ve page controller yazıyorsa işlem doğrudur.)
// 17) paginationView.js gel ve _generateMarkup içindeki return içindeki html kodlarında next buttonlarına data-goto="${curPage+1}"
// prev buttonlarına data-goto="${curPage-1}" attribute'unu ekliyoruz.
// ardından addHandlerClick metoduna geliyoruz ve handler() üstüne aşağıdaki kod satırlarını yazıyoruz.
// const goToPage = +btn.dataset.goto;
// console.log(goToPage);
// (NOT: Geri ve ileri butonların tam ortasına tıkladığımızda undefined hatası alıyoruz bunu düzeltmemiz lazım. Bu yüzden
// addHandlerClick methodunda const btn altına if(!btn) return; ekliyoruz.)
// (NOT : arama çubuğuna pizza yaz ve önceki ve sonraki sayfaya tıkla sayfa numarası ve ardından page Controller çıkıyorsa işlem doğrudur.)
// 18) console.log(goToPage); kısmını sil ve handler(goToPage); yap. ardından controller.js gel ve controlPagination içine parametre olarak
// controlPagination(goToPage){} yap ve çalışıp çalışmadığını görmek için methodun içini 
// console.log("page controller"); değil console.log(goToPage); yap.
// (Not : arama çubuğuna pizza yaz ve önceki ve sonraki sayfaya tıkla sayfa numarasını görüyorsan işlem doğrudur.)
// (Not : şimdiki amacımız butona tıkladığında öncekiyse 1 önceki sayfaya sonrakiyse 1 sonraki sayfaya gitmek.)
// 19) controller.js gel ve controlSearchResults methodu içindeki 3. ve 4.maddeyi kopyala ve controlPagination içine aktar.
// controller.js içindeki controlPagination metodu aşağıdaki gibi olmalıdır.
// const controlPagination = function (goToPage) {
//     // 3) Render NEW results
//     resultsView.render(model.getSearchResultsPage(goToPage));

//     // 4) Render NEW initial Pagination buttons
//     paginationView.render(model.state.search);
// };
// (NOT : Uygulamayı çalıştır ve arama butonuna pizza yaz ve ileri geri butonlarına basarak kontrol et. Çalışması lazım.)
/***********************************************************************************************************************************/
/*********************************************** Project Planning II ***************************************************************/
/***********************************************************************************************************************************/

/*********************************************** Updating Recipe Servings **********************************************************/
// 1) controller.js gel ve const init üstüne aşağıdaki metodu oluştur.
// const controlServings = function () {
//     // Update the recipe servings (in state)
//     model.updateServings(6);
//     // Update the recipe View
//     recipeView.render(model.state.recipe);
//   }
// 2) model.js gel ve en alta aşağıdaki kod satırını yaz.
// export const updateServings = function (newServings) {

//     state.recipe.ingredients.forEach(ing => {

//         ing.quantity = (ing.quantity * newServings) / state.recipe.servings;
//         // new Quantity = old Quantity * new Servings / old Servings 
//     });


//     state.recipe.servings = newServings;
// }
// 3) recipeView.js gel ve _generateMarkup fonksiyonu üzerine aşağıdaki kod satırını yaz.
// addHandlerUpdateServings(handler) {
//     this._parentElement.addEventListener('click', function (e) {
//         const btn = e.target.closest('.btn--tiny');
//         if (!btn) return;
//         console.log(btn);
//         handler();
//     });
// }
// 4) controller.js gel ve init fonksiyonunun addHandlerRender fonksiyonu altına aşağıdaki kod satırını yaz.
// recipeView.addHandlerUpdateServings(controlServings);
// (NOT : controller.js gel ve controlServings içindeki model.updateServings(8); olarak ayarla.(GEÇİCİ) daha sonra uygulamayı çalıştır
// herhangi bir ürüne gel ve servings'de artı butonuna bas ve 8'e çıktığını gör. Göremiyorsan bir problem var.)
// 5) controller.js gel ve controlServings metodunun içine parametre olarak newServings gönder. Ardından
// model.updateServingsi yandaki gibi güncelle model.updateServings(newServings);
// 6) recipeView.js gel ve _generateMarkup içinde class'ı btn--increase-servings olan buttonların classını btn--update-servings olarak
// güncelle ve ardından birine data-update-to="${this._data.servings - 1}" diğerine data-update-to="${this._data.servings + 1}" ekle.
// olması gereken kod aşağıdaki gibidir
{/* <div class="recipe__info-buttons">
    <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings - 1}">
    <svg>
        <use href="${icons}#icon-minus-circle"></use>
    </svg>
    </button>
    <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings + 1}">
    <svg>
        <use href="${icons}#icon-plus-circle"></use>
    </svg>
    </button>
</div> */}
// 7) recipeView.js gel ve  addHandlerUpdateServings(handler) methodunu aşağıdaki gibi güncelle.
// addHandlerUpdateServings(handler) {
//     this._parentElement.addEventListener('click', function (e) {
//         const btn = e.target.closest('.btn--update-servings');
//         if (!btn) return;
//         console.log(btn);
//         const updateTo = +btn.dataset.updateTo;
//         handler(updateTo);
//     });
// }
// (NOT : Uygulamayı çalıştırdığımızda serving buttonlarının çalıştığını görürüz. Ancak bir problem var butonlara bastıkça
// -5 serving gibi negatif değerlere dönüşme durumu var bunu düzeltmeliyiz.)
// 8) yukarıdaki hatayı düzeltmek ve kodu destructuring kullanarak düzeltmek için recipeView.js içindeki addHandlerUpdateServings
// aşağıdaki gibi güncelle.
// addHandlerUpdateServings(handler) {
//     this._parentElement.addEventListener('click', function (e) {
//         const btn = e.target.closest('.btn--update-servings');
//         if (!btn) return;
//         console.log(btn);
//         const { updateTo } = btn.dataset;
//         if (+updateTo > 0) handler(+updateTo);
//     });
// }

/*********************************************** Developing a DOM Updating Algorithm **********************************************/
// (IN THİS LECTURE, WE WİLL DEVELOP AN ALGORİTHM WHİCH WİLL UPDATE THE DOM ONLY İN PLACES WHERE İT ACTUALLY CHANGED. AND REMEMBER THAT
// THAT İS NECESSARY BECAUSE RİGHT NOW, AS WE UPDATE THE SERVİNGS HERE THEN THAT WİLL ALWAYS BASİCALLY RE-RENDER THE ENTİRE RECİPEVİEW
// HERE. SO WE CAN SEE SOME FLİCKERİNG AROUND THE PAGE. EVERYTİME THAT I WOULD UPDATE THE SERVİNGS, İT WOULD THEN RELAOD THİS IMAGE
// WHİCH WOULD THEN CAUSE A SHORT FLİCKER. HAVİNG TO RE-RENDER THE ENTİRE VİEW, SO ALL OF THİS HTML ELEMENTS İS ACTUALLY A BİT OVERKİLL
// AND IT WİLL PUT TOO MUCH STRAİN ON THE BROWSER. SO IT WILL CREATE UNNECESSARY WORK. SO THEREFORE, LETS CREATE AN UPDATE METHOD THAT
// WE CAN USE İN THİS SİTUATİON.)
// 1) controller.js gel controlServings methodundaki recipeView.render(model.state.recipe); kısmını yorum satırı yap ve
// recipeView.update(model.state.recipe); yap.
// (NOT : The difference between update and render is that the update method will basically only update text and attributes in the DOM.
// So without having to re-render the entire view.)
// (NOT : SO LETS GO TO THE VİEW HERE BECAUSE WE WİLL WANT THİS UPDATE METHOD TO BE AVAİLABLE ON ALL THE VİEWS. BECAUSE, ACTUALLY
// WE USE THİS İN MULTİPLE SİTUTATİON İN THİS PROJECT. SO ACTUALLY, NOT JUST HERE FOR UPDATİNG THE SERVİNGS.)
// 2) yukarıda yazan sebepten ötürü view.js'e gel. _clear(){} methodu üstüne aşağıdaki kodu yaz.
// update(data) {

//     if (!data || (Array.isArray(data) && data.length === 0)) return this.renderError();

//     this._data = data;
//     const newMarkup = this._generateMarkup();
//     const newDOM = document.createRange().createContextualFragment(newMarkup);
//     const newElements = newDOM.querySelectorAll('*');
//     console.log(newElements);
// }
// (NOT : Uygulamayı çalıştır ve servings'te + butonuna bas ve console'u incele. What we did got was the entire list of all the elements.
// in the new DOM. So in this so to say virtual DOM. So if we check now this element, So this is the elements the contains the number
// that should now contain 5.(13 numaralı koddan bahsediyor.) So let's see the text content property or innerHTML is the same. and so
// indeed, here we have five now. And so again, the reason for that is that this here is now basically the DOM that would be rendered
// on the page if we simply used the render method from before. And so now with this, we can compare this DOM that we have here,
// which is a little bit like a virtual DOM. So to the actual DOM that is really on the page. So for example, again, this one here has
// now changed to the five. and this one is still at four. So that is one of the elements, which is different and so that is then one
// of the things that we will change. But everything else is the same. Or at least, most of the things. For example, here the minutes,
// this value here(talking about the page on the screen) this is, of course, still 45.). (8.sıradaki kodu açıyor) so you see, of course
// it is still 45 and so this element will not change, and the same for example , for the image and for this icon and for lots of things.
// so with this, we will be able to only change what happened from the new DOM, which is this one here to the actual current DOM, which
// is basically what we have here on the page. So in order to being able to actually do that comparison, we now also need to get all
// the actual elements that are currently on the page.
// 3) View.js gel ve update(data) kodunu aşağıdaki gibi güncelle.
// update(data) {

//     if (!data || (Array.isArray(data) && data.length === 0)) return this.renderError();

//     this._data = data;
//     const newMarkup = this._generateMarkup();
//     const newDOM = document.createRange().createContextualFragment(newMarkup);
//     const newElements = Array.from(newDOM.querySelectorAll('*'));
//     const curElements = Array.from(this._parentElement.querySelectorAll('*'));
//     console.log(curElements);
//     console.log(newElements);
// }
// (NOT : UYGULAMAYI ÇALIŞTIR VE SERVİNGS'İ 1 ARTIR. ARDINDAN CONSOLE'DA CURELEMENTS İLE NEWELEMENTS'İN 13.SATIRDAKİ KODLARINDA
// İNNERHTML VE İNNERTEXT DEĞERLERİNİ İNCELE CURELEMENTS'TE 4 DEĞERİNİ GÖRÜRKEN NEWELEMENTS'TE 5 DEĞERİNİ GÖRECEKSİN.)
// 4) update(data)'yı aşağıdaki gibi güncelle.
// update(data) {

//     if (!data || (Array.isArray(data) && data.length === 0)) return this.renderError();

//     this._data = data;
//     const newMarkup = this._generateMarkup();
//     const newDOM = document.createRange().createContextualFragment(newMarkup);
//     const newElements = Array.from(newDOM.querySelectorAll('*'));
//     const curElements = Array.from(this._parentElement.querySelectorAll('*'));

//     newElements.forEach((newEl, i) => {
//         const curEl = curElements[i];
//         console.log(curEl,newEl.isEqualNode(curEl));
//     });

// }
// (NOT : isEqualNode method is basically compare the content of this one and this one (curEl and newEl). So it doesn't have to be
// the exact same node. All the matters is that the content in these nodes is the same. )
// (NOT : Uygulamayı çalıştır ve servings'te + butonuna tekrar bas ve console'u incele.
// aynı olan node'lar true ile gösterilirken farklı olanlar false ile gösterilecek.)
// 5) update(data)' nın son hali aşağıdaki gibidir.
// update(data) {

//     if (!data || (Array.isArray(data) && data.length === 0)) return this.renderError();

//     this._data = data;
//     const newMarkup = this._generateMarkup();
//     const newDOM = document.createRange().createContextualFragment(newMarkup);
//     const newElements = Array.from(newDOM.querySelectorAll('*'));
//     const curElements = Array.from(this._parentElement.querySelectorAll('*'));

//     newElements.forEach((newEl, i) => {
//         const curEl = curElements[i];
//         console.log(curEl, newEl.isEqualNode(curEl));

//         if (!newEl.isEqualNode(curEl) && newEl.firstChild?.nodeValue.trim() !== '') {
//             curEl.textContent = newEl.textContent;
//         }

//         if (!newEl.isEqualNode(curEl)) {
//             Array.from(newEl.attributes).forEach(attr => curEl.setAttribute(attr.name, attr.value));
//         }
//     });
// }
// 6) (Not:Burada amacımız arama butonunda herhangi bir recipe'ye tıkladığımızda sol tarafta selected olarak kendini belirtmesi.)
// resultsView.js gel ve _generateMarkupPreview(result) fonksiyonuna gel ve fonksiyonu aşağıdaki gibi güncelle.
// _generateMarkupPreview(result) {

//     const id = window.location.hash.slice(1);

//     return `
//     <li class="preview">
//         <a class="preview__link ${result.id === id ? 'preview__link--active' : ''}  preview__link--active" href="#${result.id}">
//         <figure class="preview__fig">
//             <img src="${result.image}" alt="${result.title}" />
//         </figure>
//         <div class="preview__data">
//             <h4 class="preview__title">${result.title}</h4>
//             <p class="preview__publisher">${result.publisher}</p>
//         </div>
//         </a>
//     </li>
//     `;
// }
// 7) controller.js gel ve controlRecipes fonksiyonunu aşağıdaki gibi güncelle.
// let controlRecipes = async function () {

//     try {

//       let id = window.location.hash.slice(1);

//       if (!id) return;

//       recipeView.renderSpinner();

//       // 0) Update results view to mark selected search results
//       resultsView.update(model.getSearchResultsPage());

//       // 1) Loading Recipe
//       await model.loadRecipe(id);

//       // 2) Rendering Recipe
//       recipeView.render(model.state.recipe);

//     } catch (err) {
//       console.error(err);
//       recipeView.renderError(err);
//     }
// };
// (ÖNEMLİ NOT : resultsView.update(model.getSearchResultsPage()); olarak güncellediğimiz kısmı bir de
// resultsView.render(model.getSearchResultsPage()); olarak yap ve uygulamayı çalıştır ve dene.
// tıklama olayının yine gerçekleştiğini göreceksin. Ancak render kullandığımızda başka recipe'ye tıkladığımızda sayfa yenilenir
// ve flickering olayı gerçekleşir. Ancak update metodunda böyle bir durum söz konusu olmaz. Bu yüzden render yerine update kullandık.)
// 8) F5 atıp sayfayı yenilediğimizde karşımıza recipe not found! hatası çıkıyor bunu düzeltmek için View.js
// gel ve  render(data) içindeki if (!data || (Array.isArray(data) && data.length === 0)) return this.renderError(); methodunu sil.


/*********************************************** Implementing BookMarks Part-1 **********************************************/
// 1) arama butonuna pizza yazdığımızda ve 3.sayfaya geldiğimizde ardından arama butonuna farklı bir şey örneğin avocado yazınca
// tekrar 3.sayfada oluyoruz. Bu hatayı düzeltmemiz gerekiyor.
// model.js'e gel ve loadSearchResults methodunda try'ın en altına state.search.page = 1; yazıyoruz.
// 2) model.js'e gel ve state içinde yeni bir bookmarks array'i oluştur. Güncel state object'i aşağıdaki gibidir.
// export let state = {
//     recipe: {},
//     search: {
//         query: '',
//         results: [],
//         page: 1,
//         resultsPerPage: RES_PER_PAGE
//     },
//     bookmarks: []
// };
// 3) ardından model.js'in en altında aşağıdaki fonksiyonu oluştur.
// export const addBookmark = function (recipe) {

//     // Add bookmark
//     state.bookmarks.push(recipe);

//     // Mark current recipe as bookmark
//     if (recipe.id === state.recipe.id) state.recipe.bookmarked = true;

// };
// 4) controller.js gel ve init üstüne aşağıdaki fonksiyonu oluştur.
// const controlAddBookmark = function () {

//     model.addBookmark(model.state.recipe);
//     console.log(model.state.recipe);

// }
// 5) uygulamaya girdiğimizde herhangi bir recipe üstüne geldiğimizde bookmarked olarak işaretlenmiş olduğunu görüyoruz bu önceki
// uygulamalardan gelen bir hata. Bunu düzeltmek için recipeView.js geliyoruz ve bookmark-fill olan href'i bookmark olarak düzeltiyoruz.
// ayrıca düzeltme yaptığımız use'un parent'ı olan button'a btn--bookmark class'ı ekliyoruz.
// 6) recipeView.js'de _generateMarkup() fonksiyonu üstüne aşağıdaki metodu yazıyoruz.
// addHandlerAddBookmark(handler) {
//     this._parentElement.addEventListener('click', function (e) {

//         const btn = e.target.closest('.btn--bookmark');
//         if (!btn) return;
//         handler();
//     });
// }
// 7)controller.js geliyoruz ve init methoduna searchView.addHandlerSearch(controlSearchResults); üstüne aşağıdaki kod satırınıyazıyoruz.
// recipeView.addHandlerAddBookmark(controlAddBookmark);
// (NOT : Uygulamayı çalıştır ve herhangi bir metod'un üzerindeki bookmark'a tıkla ve console'dan ilgili recipe'nin bookmarked:true
// olup olmadığını incele.
// 8) recipeView.js gel ve _generateMarkup() içinde 5.maddedeki fill kısmını sildiğimiz use'u aşağıdaki gibi güncelliyoruz.
{/* <svg class="">
    <use href="${icons}#icon-bookmark${this._data.bookmarked ? "-fill" : ""}"></use>
</svg> */}
// 9) ardından güncellemenin gerçekleşmesi için controller.js geliyoruz ve controlAddBookmark() fonksiyonuna geliyoruz ve en sonuna
//  recipeView.update(model.state.recipe); yazıyoruz.
// (NOT : update method is so useful because otherwise we would have to re-render the entire page or actually the entire view. )
// (NOT : Uygulamaya girip 1 ürünü bookmark ettiğimizde işaretin değiştiğini görüyoruz. Ardından başka bir ürünü daha bookmark edip
// önceki bookmark ettiğimiz recipe'ye tekrar döndüğümüzde objesinden bookmarked:true'nun gittiğini ve bookmark işaretinin kaybolduğunu
// görüyoruz. Why is that ? Well, as we load each new recipe it will always be loaded basically from scratch. So it will be loaded
// from the API. We are not loading this recipe from the bookmarks.)
// 10) hatayı düzeltmek için model.js geliyoruz ve loadRecipe function'ının altına try'ın en sonuna aşağıdaki gibi yazıyoruz.
// if (state.bookmarks.some(bookmark => bookmark.id === id)) {
//     state.recipe.bookmarked = true;
// } else {
//     state.recipe.bookmarked = false;
// }
// (NOT : Uygulamaya girip bazı recipe'leri bookmarked et ve geri döndüğünde recipe'nin hala bookmarked edilip edilmediğini incele.
// bu defa bookmarked olarak işaretli olması lazım.)
// (NOT : The last thing what we want is that when we click on this button again , we then want to unbookmarked basically the recipe.
// So we want it remove from the bookmarks. We need another function or method to simply remove a bookmark.)
// 11) model.js gel ve en altına aşağıdaki fonksiyonu oluştur.
// export const deleteBookmark = function (id) {
//     // Delete bookmark
//     const index = state.bookmarks.findIndex(el => el.id === id);
//     state.bookmarks.splice(index, 1);

//     // Mark current recipe as NOT bookmarked
//     if (id === state.recipe.id) state.recipe.bookmarked = false;

// };
// 12) controller.js gel ve controllAddBookmark fonksiyonunu aşağıdaki gibi güncelle.
// const controlAddBookmark = function () {

//     if (!model.state.recipe.bookmarked) {
//       model.addBookmark(model.state.recipe);
//     } else {
//       model.deleteBookmark(model.state.recipe.id);
//     }

//     console.log(model.state.recipe);
//     recipeView.update(model.state.recipe);
// }


/*********************************************** Implementing BookMarks Part-2 **********************************************/
// (NOT : Burada seçilen bookmarksların sağ üst köşede bulunan bookmarks sekmesinde gözükmesini sağlayacağız.)
// 1) Views içinde bookmarksView.js oluştur. resultsView.js içindekileri kopyala ve buraya yapıştır.
// class adını class bookmarksView extends View olarak ve  en altında export default new bookmarksView(); olarak güncelle.
// ardından _parentElement'i yandaki gibi güncelle  _parentElement = document.querySelector('.bookmarks__list');
// ardından _errorMessage'ı yandaki gibi güncelle _errorMessage = "No bookmarks yet. Find a nice recipe and bookmark it.";
// the rest of the code is going to be the same.
// 2) controller.js gel ve yandaki gibi import et. import bookmarksView from "./Views/bookmarksView.js";
// ( And so all we want to do at least for now is that whenever a newbookmark is added, we want to render the bookmarks view with
// all the bookmarks. So with the array of bookmarks.)
// 3) controller.js gel ve controllAddBookmark fonksiyonunu aşağıdaki gibi güncelle.
// const controlAddBookmark = function () {

//     // 1) Add/Remove Bookmark
//     if (!model.state.recipe.bookmarked) {
//       model.addBookmark(model.state.recipe);
//     } else {
//       model.deleteBookmark(model.state.recipe.id);
//     }

//     // 2) Update recipe view
//     recipeView.update(model.state.recipe);

//     // 3) Render bookmarks
//     bookmarksView.render(model.state.bookmarks);
// }
// (NOT : Uygulamayı çalıştır ve herhangi bir recipe'de bookmarks işaretine tıkla ve sağ üstteki bookmarkta göründüğünü gör. Ancak
// hangi recipe üstündeysek onun seçili olduğunu gör ancak bir başka recipe'yi bookmarks ettiğimizde selected kısmında sorun olduğunu
// görüyoruz.)
// 4) controller.js gel ve controlRecipes'de 0.madde altına yandaki kodu yaz.  bookmarksView.update(model.state.bookmarks);
// yapıyoruz ve uygulamayı çalıştırıp tekrar incelediğimizde hatanın giderilmiş olduğunu görüyoruz.
// (NOT : resultsView.js ve bookmark.js içinde kullanılan preview kısmı tamamen aynı kod tekrar ettiği için bir re-factoring yapıyoruz.)
// 5) View içinde previewView.js olustur. resultsView.js içindekileri aynen kopyala ve previewView.js içine yapıştır.
// class'ı class previewView extends View olarak ve export default new previewView(); olarak düzenle.
// ardından _message ve _errorMessage kısımlarına ihtiyacımız olmadığı için bunları sil. ayrıca _parentElement de çok önemli değil
// _parentElement kısmını yandaki gibi yap. _parentElement = '' ;
// _generateMarkup fonksiyonunu sil. _generateMarkupPreview(result) kısmını da _generateMarkup() olarak düzenle.
// previewView.js'in son hali aşağıdaki gibidir.
// class previewView extends View {

//     _parentElement = document.querySelector('*');

//     _generateMarkup() {

//         const id = window.location.hash.slice(1);

//         return `
//         <li class="preview">
//             <a class="preview__link ${result.id === id ? 'preview__link--active' : ''}  preview__link--active" href="#${result.id}">
//             <figure class="preview__fig">
//                 <img src="${result.image}" alt="${result.title}" />
//             </figure>
//             <div class="preview__data">
//                 <h4 class="preview__title">${result.title}</h4>
//                 <p class="preview__publisher">${result.publisher}</p>
//             </div>
//             </a>
//         </li>
//         `;
//     }
// }

// export default new previewView();
// 6) bookmarksView.js'e gel ve _generateMarkupPreview(result) kısmını sil.
// ardından previewView'i bookmarksView'a yandaki gibi import et. import previewView from "./previewView.js";
// 7) bookmarksView.js içindeki return kısmını aşağıdaki gibi güncelle.
// return this._data.map(bookmark => previewView.render(bookmark)).join(''); => (that should be a string.)
// 8) View.js gel ve render methodunu aşağıdaki gibi güncelle.
// render(data, render = true) {

//     if (!data || (Array.isArray(data) && data.length === 0)) return this.renderError();

//     this._data = data;
//     const markup = this._generateMarkup();

//     if (!render) return markup;

//     this._clear();
//     this._parentElement.insertAdjacentHTML('afterbegin', markup);
// }
// 9) previewView.js gel ve return kısmında result gördüğün her yeri this._data yap. (ctrl+D komutu ile yap.)
// ardından bookmarksView.js gel ve _generateMarkup() içindeki return kısmını aşağıdaki gibi tekrar güncelle.
// return this._data.map(bookmark => previewView.render(bookmark, false)).join('');
// 10) aynı işlemi resultsView.js'de de yapıyoruz. resultsView.js gel ve _generateMarkup ve  _generateMarkupPreview(result)
// kısımlarını sil ve bookmarksView.js'deki _generateMarkup kısmını kopyala ve resultsView.js'e yapıştır.
// ardından bookmark kısımlarını result olarak değiştir. ve previewView'i aşağıdaki gibi import et.
// import previewView from "./previewView.js";

/*********************************************** Storing Bookmarks With LocalStorage **********************************************/
// 1) model.js gel ve addBookmark methodunun üstüne aşağıdaki metodu oluştur.
// const persistBookmarks = function () {

//     localStorage.setItem('bookmarks', JSON.stringify(state.bookmarks));

// };
// ardından addBookmark ve deleteBookmark methodunun en altında bu methodu çağır. persistBookmarks(); yaz.
// (NOT : Uygulamayı çalıştır ve 2 tane ürünü bookmark et ardından localstorage'da depolandığını görmek için console'dan
// localstorage'ı incele. ürünlerin bilgilerinin saklandığını göreceksin. f5 çeksen dahi bu bilgiler orada kalacak. )
// 2) model.js gel ve en altında aşağıdaki methodu oluştur.
// const init = function () {

//     const storage = localStorage.getItem('bookmarks');
//     if (storage) state.bookmarks = JSON.parse(storage);

// };
// init();
// console.log(state.bookmarks);
// (NOT : Cannot set properties of undefined (setting 'textContent') hatası alacaksın Normalde bu kodun çalışması lazım ancak koddaki
// hatadan dolayı çalışmıyor koddaki hatayı düzeltmek için aşağıdakileri izle.)
// 3) bookmarksView.js gel ve aşağıdaki metodu _generateMarkup üstünde oluştur.
// addHandlerRender(handler) {
//     window.addEventListener('load', handler);
// }
// ardından controller.js gel ve init üstüne aşağıdaki metodu oluştur.
// const controlBookmarks = function () {
//     bookmarksView.render(model.state.bookmarks);
// };
// ardından init fonksiyonun en başına yandaki kodu yaz. bookmarksView.addHandlerRender(controlBookmarks);
// (NOT : Uygulamayı çalıştır ve localstorage'ın işe yarayıp yaramadığını incele. F5 Çek ve bookmarkslar yerinde mi diye incele.
// localstorage'ın çalışması ve f5 çektiğimizde bookmarksları tutması lazım.)
// 4) Normalde localstorage burada bitti ancak kodlamaya devam edeceğimiz için bazen localstorage'ın işlevsiz olmasını isteriz
// bu yüzden aşağıdaki kod satırını model.js'in en sonuna yaz.
// const clearBookmarks = function () {
//     localStorage.clear('bookmarks');
// }
// clearBookmarks();
// (NOT : localstorage'ın çalışmasını istediğimiz için clearbookmarks(); kısmı yorum satırı olacak. Ancak eğer ki localstorage'ın
// çalışmasını istemiyorsak clearBookmarks();'ın yorum satırını kaldıracağız ve init(); kısmını yorum satırı yapacağız.)

/***********************************************************************************************************************************/
/*********************************************** Project Planning III **************************************************************/
/***********************************************************************************************************************************/


/*********************************************** Uploading a New Recipe Part-1 *****************************************************/
// 1) views altında addRecipeView.js oluştur. Oluşturulan addRecipeView.js aşağıdaki gibidir.
// import { icons } from "url:../../img/icons.svg";
// import View from "./View.js";

// class addRecipeView extends View {
//     _parentElement = document.querySelector('.upload');

//     _window = document.querySelector('.add-recipe-window');
//     _overlay = document.querySelector('.overlay');
//     _btnOpen = document.querySelector('.nav__btn--add-recipe');
//     _btnClose = document.querySelector('.btn--close-modal');


//     constructor() {
//         super();
//         this._addHandlerShowWindow();

//     }

//     toggleWindow() {

//         this._overlay.classList.toggle('hidden');
//         this._window.classList.toggle('hidden');

//     }

//     _addHandlerShowWindow() {
//         this._btnOpen.addEventListener('click', this.toggleWindow.bind(this));
//     }


//     _generateMarkup() {

//     }

// }

// export default new addRecipeView();
// 2) controller.js gel addRecipeView.js'i import etmek için yandaki kodu yaz. import addRecipeView from "./Views/addRecipeView.js";
// (NOT : Uygulamayı çalıştır ve add Recipe butonuna basınca form'un çıkıp çıkmadığını incele. Formun çıkması lazım.
// form çıkıyor ancak çarpı butonuna veya ekran dışında bir yere basıldığında form kapatılsın istiyoruz.)
// 3) yukarıdaki işlemi gerçekleştirmek için addRecipeView.js geliyoruz ve _addHandlerShowWindow() methodu altına _addHandlerHideWindow()
// metodu oluşturuyoruz. oluşturulan metod aşağıdaki gibidir.
// _addHandlerCloseWindow() {
//     this._btnClose.addEventListener('click', this.toggleWindow.bind(this));
//     this._overlay.addEventListener('click', this.toggleWindow.bind(this));
// }
// metodu yerleştirdikten sonra bu metodu constructor'da çağırmamız gerekli bu yüzden constructor'a this._addHandlerCloseWindow(); yaz.
// 4) addRecipeView.js gel ve _generateMarkup() üstüne aşağıdaki kod satırını oluştur.
// addHandlerUpload(handler) {

//     this._parentElement.addEventListener('submit', function (e) {
//         e.preventDefault();
//         const data = [...new FormData(this)];
//         handler(data);
//     });

// }
// ardından controller.js gel ve init fonksiyonu üzerine aşağıdaki kod satırını yaz.
// const controlAddRecipe = function (newRecipe) {
//     console.log(newRecipe);
// }
// ardından init fonksiyonunun en altına yandaki kod satırını yaz.  addRecipeView.addHandlerUpload(controlAddRecipe);
// (NOT : Uygulamayı çalıştır ve AddRecipe butonuna tıkla ve form'u submit et ve console'dan bize dönen data'yı incele.)
// 5) bize gelen data'nın daha anlaşılır olması ve array değilde object olması için addRecipeView.js içindeki addHandlerUpload(handler)
// kısmını aşağıdaki gibi güncelle.
// addHandlerUpload(handler) {

//     this._parentElement.addEventListener('submit', function (e) {
//         e.preventDefault();
//         const dataArr = [...new FormData(this)];
//         const data = Object.fromEntries(dataArr);
//         handler(data);
//     });

// }
// (NOT :  Uygulamayı çalıştır ve AddRecipe butonuna tıkla ve form'u submit et ve console'dan bize dönen data'yı TEKRAR incele.)

/*********************************************** Uploading a New Recipe Part-2 *****************************************************/
// 1) model.js gel ve en altta aşağıdaki metodu oluştur.
// export const uploadRecipe = async function (newRecipe) {

//     try {// console.log(Object.entries(newRecipe));
//         const ingredients = Object.entries(newRecipe)
//             .filter(entry => entry[0].startsWith('ingredient') && entry[1] !== '')
//             .map(ing => {
//                 const ingArr = ing[1].replaceAll(' ', '').split(',');
//                 if (ingArr.length !== 3) {
//                     throw new Error("Wrong ingredient format! Please use the correct format.")
//                 };
//                 const [quantity, unit, description] = ingArr;
//                 return { quantity: quantity ? +quantity : null, unit, description };
//             })
//         console.log(ingredients);
//     } catch (err) {
//         throw err;
//     }
// }
// 2) controller.js gel ve controlAddRecipe fonksiyonunu aşağıdaki gibi güncelle.
// const controlAddRecipe = async function (newRecipe) {
//     try {

//       // Upload the new recipe data
//       await model.uploadRecipe(newRecipe);
//     } catch (err) {
//       console.error('🔥', err);
//       addRecipeView.renderError(err.message);
//     }
// }
// (NOT : Burada controllAddRecipe fonksiyonu model.uploadRecipe(newRecipe) async function'ını aldığı için kendi de async function
// oldu ve promise'i çevirebilmek için await metodu kullandık.)
// (NOT : Uygulamaya gir ve add Recipe kısmına tıkla ingredient 4 kısmına 5 yaz ve upload butonuna tıkla. Eğer hatayı ekranda alıyorsan
// işlem doğrudur.)
// (We have that part working of the ingredients
// Now it's time to actually create the object that is ready to be uploaded. )
// 3) model.js gel ve uploadRecipe'yi aşağıdaki gibi güncelle.
// export const uploadRecipe = async function (newRecipe) {

//     try {// console.log(Object.entries(newRecipe));
//         const ingredients = Object.entries(newRecipe)
//             .filter(entry => entry[0].startsWith('ingredient') && entry[1] !== '')
//             .map(ing => {
//                 const ingArr = ing[1].replaceAll(' ', '').split(',');
//                 if (ingArr.length !== 3) {
//                     throw new Error("Wrong ingredient format! Please use the correct format.")
//                 };
//                 const [quantity, unit, description] = ingArr;
//                 return { quantity: quantity ? +quantity : null, unit, description };
//             })

//         const recipe = {
//             title: newRecipe.title,
//             source_url: newRecipe.sourceUrl,
//             image_url: newRecipe.image,
//             publisher: newRecipe.publisher,
//             cooking_time: +newRecipe.cookingTime,
//             servings: +newRecipe.servings,
//             ingredients
//         }
//         console.log(recipe);
//     } catch (err) {
//         throw err;
//     }
// }
// (NOT : add recipe butonuna tıkla ve çıkan formda upload et ve console'dan sonuçları incele. karşına recipe object'i çıkıyorsa işlem doğru.)
// 4) helpers.js gel ve getJSON metodunu kopyala ve getJSON metodunun altına yapıştır ve adını sendJSON yap.
// (NOT : So now, let's learn how we can actually send data using the fetch function.So up until this point, all we did was to simply
// pass in a URL into the fetch function and that would then automatically create a get request. However, to send data, remember how
// we discussed before that needs to be a post request. And so here besides passing in the URL we also pass in an object of some options)
// 5) sendJSON metodunun son hali aşağıdaki gibidir.
// export const sendJSON = async function (url, uploadData) {

//     try {
//         const fetchPro = uploadData
//             ? fetch(url, {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify(uploadData),
//             })
//             : fetch(url);

//         const res = await Promise.race([fetchPro, timeout(TIMEOUT_SEC)]);
//         const data = await res.json();

//         if (!res.ok) throw new Error(`${data.message} (${res.status})`);
//         return data;
//     } catch (err) {
//         throw (err);
//     }
// }
// 6) model.js gel ve import { getJSON } from "./helpers.js"; kısmını import { getJSON, sendJSON } from "./helpers.js"; yap.
// 7) https://forkify-api.herokuapp.com/v2 adresine git ve kendine özel unique api key'i al. (c0b85c18-f5c0-44a9-8898-e7cf1ee812b7);
// ardından config.js gel ve export const KEY = 'c0b85c18-f5c0-44a9-8898-e7cf1ee812b7'; yaz.
// 8) model.js gel import { API_URL, RES_PER_PAGE } from "./config.js"; kısmını import { API_URL, RES_PER_PAGE,KEY } from "./config.js"; yap.
// 9) model.js'de uploadRecipe de try'ın en altına aşağıdaki kod satırlarını yaz.
// const data = await sendJSON(`${API_URL}?key=${KEY}`, recipe);
// console.log(data);
// (NOT : Ardından uygulamaya gir ve add Recipe'ye tıkla ve ardından upload de. The source_url must be at least 5 characters long hatası
// alacaksın index.html gir ve input value="TEST" yazanları 5'e tamamlamak için TEST'LERİ TEST23 yap. Ardından tekrar upload de.
// console.log'da {status: 'success', data: {…}} object'i göreceksin bu bizim post ettiğimiz api.
// 10) tekrar eden kodlar olmaması için model.js'de loadRecipe içinde let { recipe } = data.data; kısmını ve state.recipe object'ini kes
// ardından loadRecipe function'ı üstüne aşağıdaki metodu oluştur.
// const createRecipeObject = function (data) {

//     let { recipe } = data.data;
//     return {
//         id: recipe.id,
//         title: recipe.title,
//         publisher: recipe.publisher,
//         sourceUrl: recipe.source_url,
//         image: recipe.image_url,
//         servings: recipe.servings,
//         cookingTime: recipe.cooking_time,
//         ingredients: recipe.ingredients
//     };

// };
// ardından loadRecipe'ye gel ve kestiğin kısma state.recipe = createRecipeObject(data); yaz.
// ardından uploadRecipe'ye gel ve const data altına yine state.recipe = createRecipeObject(data); yaz.
// 11) sonucu görmek için controller.js gel ve controlAddRecipe function'ı içinde await model.uploadRecipe(newRecipe); kısmının altına
// console.log(model.state.recipe); yaz.
// (NOT : Uygulamayı çalıştır ve add Recipe kısmından yine upload et. console'dan bize dönen sonucu incele. Tıpkı bize gelen
// object'e benzediğini göreceksin.)
// (There's just one thing missing, which is this bookmarked here and also the key is missing as well.)
// 12) model.js gel ve uploadRecipe'nin en altına addBookmark(state.recipe); yaz.
// 13) model.js gel ve createRecipeObject'in en sonuna yandakini ekle. ...(recipe.key && { key: recipe.key })
// (NOT : Uygulamayı çalıştır ve add Recipe kısmından yine upload et. console'dan bize dönen sonucu incele. bookmarked = true
// ve key değerlerinin bize döndüğünü göreceksin.)
// 14) controller.js gel controlAddRecipe fonksiyonunu aşağıdaki gibi güncelle.
// const controlAddRecipe = async function (newRecipe) {
//     try {
//       // Show loading Spinner
//       addRecipeView.renderSpinner();

//       // Upload the new recipe data
//       await model.uploadRecipe(newRecipe);
//       console.log(model.state.recipe);

//       // Render recipe
//       recipeView.render(model.state.recipe);

//       // Success Message
//       addRecipeView.renderMessage();

//       // Close from window
//       setTimeout(function () {
//          addRecipeView.toggleWindow();
//       }, 2500);

//     } catch (err) {
//       console.error('🔥', err);
//       addRecipeView.renderError(err.message);
//     }
//   }
// ardından addRecipeView.js gel ve addRecipeView class'ı içine  _message = "Recipe was successfully uploaded :)"; yaz.
// (NOT : Uygulamayı çalıştır ve add Recipe kısmından bilgileri upload et ve kaydedilen recipe'yi ekranda gör ve incele.)

/*********************************************** Uploading a New Recipe Part-3 *****************************************************/
// (NOT : Herhangi bir recipe upload ettiğimizde url'i değişmiyor ve bookmark kısmında gözükmüyor. Bu 2 hatayı düzeltmeye çalışacağız.)
// 1) controller.js gel ve controlAddRecipe fonksiyonunda success message altına aşağıdaki kod satırını ekle.
// // Render bookmark View
// bookmarksView.render(model.state.bookmarks);
// (NOT : we dont use update here because we really want to insert a new element. And for that we use always render not update method.)
// (Now the second thing that we want to do is to change the ID into URL and for that, we can use the history API. )
// 2) yukarıdaki kodun altına aşağıdaki kod satırını ekle.
// window.history.pushState(null, "", `#${model.state.recipe.id}`);
// (So we can say window.history so that is the history API for the browsers. And then on this history object, we can call the
// pushState method. This will basically allow us to change the URL without reloading the page. Now pushstate, take 3 arguments
// and this first one here is called a state which that doesn't matter we can specify null, then the second one is title 
// which is also not relevant. So we can use just an empty string. Third one is the import one because this one is actually the URL.
// So here we can simply put the hash and then the ID that we want to put onto the URL.)
// (We could also do all kinds of other stuff with the history API , like for example going back and forth just as if we were clicking
// the forward and back buttons in the browser. So we could do like this => window.history.back().It doesn't make sense in this 
// situation. but maybe in some situation you might find this helpful. So automatically going back to the last page.)
// 3) getJSON ve sendJSON metodları neredeyse aynı ve biz burada refactoring uygulamak istiyoruz.
// (we can basically put them together just in one function called AJAX. Because both of them are being done for doing an AJAX request.)
// helpers.js gel ve aşağıdaki AJAX metodunu oluştur. getJSON ve sendJSON metodlarını yorum satırı yap artık kullanmayacağız.
// export const AJAX = async function (url, uploadData = undefined) {
//     try {
//         const fetchPro = uploadData
//             ? fetch(url, {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify(uploadData),
//             })
//             : fetch(url);

//         const res = await Promise.race([fetchPro, timeout(TIMEOUT_SEC)]);
//         const data = await res.json();

//         if (!res.ok) throw new Error(`${data.message} (${res.status})`);
//         return data;

//     } catch (err) {
//         throw (err);
//     }
// };
// 4) model.js gel ve import { getJSON, sendJSON } from "./helpers.js"; kısmını import { AJAX } from "./helpers.js"; yap.
// ardından getJSON ve sendJSON gördüğün heryeri AJAX yap.
// (NOT : Uygulamayı çalıştır ve add Recipe kısmından yeni bir recipe oluştur. ardından oluşturduktan sonra url'den id kısmının 
// değiştiğini gör. Ayrıca bookmark kısmında da bookmarked edildiğini gör.)
// (Now finally, let's use our keys or key in order to actually mark this recipe here as our own recipe by displaying like a small icon.)
// So for that, we need to attach our key to all the API queries.)
// 5) model.js gel ve loadSearchResults fonksiyonuna gel ve 
// const data = await AJAX(`${API_URL}?search=${query}`); kısmını const data = await AJAX(`${API_URL}?search=${query}&key=${KEY}`); yap;
// ardından loadRecipe fonksiyonuna gel ve 
// const data = await AJAX(`${API_URL}${id}`); kısmını const data = await AJAX(`${API_URL}${id}?key=${KEY}`); yap.
// 6) recipeView.js gel ve daha önceden içini sildiğimiz <div class="recipe__user-generated"> divini index.html'den al ve yerine yapıştır.
// recipe__user-generated div'ini aşağıdaki gibi güncelle.
{/* <div class="recipe__user-generated ${this._data.key ? "" : "hidden"}">
    <svg>
    <use href="${icons}#icon-user"></use>
    </svg>
</div> */}
// 7) previewView.js gel ve _generateMarkup() methodu içindeki html kodunda <p class="preview__publisher">${this._data.publisher}</p> altına
// yukarıdaki kodun aynısını kopyala yapıştır. ardından div'in class'ını recipe__user-generated değil preview__user-generated yap.
// (NOT : Uygulamaya gir ve kendi oluşturduğun recipe'lere ve oluşturmadığın recipe'lere göz at. Kendi oluşturduklarımızda kullanıcı
// iconu görmemiz gerek. Göremediysen kodda hata yapmışsındır.)
// (NOT : Biz iconu sadece recipe'nin üzerinde olduğumuzda değil arama kısmının olduğu yerde gördüğümüzde de yanında icon olmasını istiyoruz.)
// 8) model.js gel ve loadSearchResults metodunun olduğu yere gel return kısmının en sonuna ...(rec.key && { key: rec.key }) ekle.
// (NOT : Uygulamayı çalıştır ve arama kısmına senin oluşturduğun recipe'lerden birinin adını gir. Arama kısmında senin recipe'de ikon görceksin.)
// 9) google'dan unsplash.com'a gir ve oradan bir tane pizza resmi seç. Ardından resme sağ tıkla ve resim adresini kopyala
// ardından kendin bir recipe oluştur ve resmi burada image_url kısmına yapıştır ve uygulamayı bitir.


