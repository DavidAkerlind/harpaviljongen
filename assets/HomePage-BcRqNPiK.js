import{r as $,j as d,g as wn,R as Le,u as kn}from"./index-BV_-pWDb.js";/* empty css               */import{h as Pn,F as On}from"./Footer-mNR2TDO-.js";import{P as Sn,M as te}from"./PageDesc-BwfSuURv.js";import{B as En}from"./BackgroundImage-Dyq0dL8B.js";import{a as In}from"./index-xsH4HHeE.js";import{M as ee}from"./Skeleton-B0HVdmxy.js";import{F as ne}from"./Flexbox-34b1VA7v.js";import{P as Nn}from"./PageHeader-BN_8ixvI.js";import{B as U}from"./Button-DnBL4szw.js";/* empty css                       */import{i as Tn}from"./thumbnail_Restaurangporträtt_Harpaviljongen_IG_A-8-BJIgvfYS.js";import{i as _n}from"./thumbnail_Restaurangporträtt_Harpaviljongen_IG_A-11-BBjFbcIz.js";import{H as Fn}from"./HeroSection-CgGannIz.js";/* empty css                *//* empty css               */import"./thumbnail_Restaurangporträtt_Harpaviljongen_IG_A-3-Cz-JxXVF.js";function jn(){const[t,e]=$.useState([]),[n,a]=$.useState(!0),[r,i]=$.useState(null);return $.useEffect(()=>{In.get("https://harpaviljongen-db-api.onrender.com/api/openingHours").then(s=>{e(s.data.data)}).catch(s=>i(s)).finally(()=>a(!1))},[]),{fetchedHours:t,loading:n,error:r}}function Mn({img:t}){const{fetchedHours:e,loading:n,error:a}=jn();return n?d.jsx(ee,{}):a?d.jsx(ee,{}):d.jsxs("section",{id:"openingHours",className:"opening-hours-section",children:[d.jsx("h2",{className:"opening-hours__title",children:"ÖPPETTIDER"}),d.jsx("ul",{className:"opening-hours__day-list",children:e.map(({day:r,hours:i})=>d.jsxs("li",{className:"opening-hours__day",children:[d.jsx("span",{className:"opening-hours__day-name",children:r}),d.jsx("span",{children:i.from===""&&i.to===""?"Stängt":`${i.from}-${i.to}`})]},r))}),t&&d.jsx(En,{img:t,altText:"background image opening-hours",type:"opening-hours"})]})}const Ln="data:image/svg+xml,%3csvg%20width='162'%20height='396'%20viewBox='0%200%20162%20396'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M94.5688%20363.606C91.3255%20362.324%2088.5296%20346.663%2088.5296%20346.663C87.0198%20336.353%2091.8847%20217.366%2091.8847%20217.366C94.1215%20210.678%20127.674%20186.156%20127.674%20186.156C156.976%20169.938%20164.916%20133.657%20161.114%20103.228C157.926%2077.7027%20148.141%2052.7351%20140.256%2028.4359C139.921%2027.377%20135.894%2012.441%20133.993%208.70697C133.937%208.81843%20133.937%208.9299%20133.881%209.04136C134.273%209.54294%20134.441%2010.0445%20134.441%2010.5461C134.441%2010.769%20134.441%2010.992%20134.329%2011.2149C132.651%2016.6766%20109.501%2021.0236%2081.2043%2021.0236C81.1483%2021.0236%2081.0924%2021.0236%2081.0924%2021.0236C81.0365%2021.0236%2081.0365%2021.0236%2080.9806%2021.0236C80.701%2021.0236%2080.4773%2021.0236%2080.1977%2021.0236C80.0859%2021.0236%2079.974%2021.0236%2079.8622%2021.0236C79.6944%2021.0236%2079.5267%2021.0236%2079.3589%2021.0236C52.7695%2020.8564%2031.129%2016.8438%2028.2771%2011.7165C28.0534%2011.3264%2027.9975%2010.9362%2027.9975%2010.5461C27.9975%2010.156%2028.0534%209.76587%2028.2771%209.43148C28.2771%209.37575%2028.2771%209.37575%2028.2212%209.32002C18.715%2036.6842%209.09698%2064.4943%202.72224%2092.7502C-2.86964%20117.272%20-0.241449%20147.144%2014.2974%20168.155C19.4979%20175.623%2026.3759%20181.698%2034.3723%20186.156C34.3723%20186.156%2067.8956%20210.678%2070.1323%20217.366C70.1323%20217.366%2075.5564%20335.238%2074.0466%20345.549C74.0466%20345.549%2070.7474%20362.268%2067.4482%20363.606C67.4482%20363.606%2022.6293%20366.504%2020.113%20376.925C20.113%20376.925%2012.8995%20388.796%2046.2271%20393.756C46.2271%20393.756%2077.0663%20395.261%2080.8128%20395.651V395.707C80.8128%20395.707%2080.9247%20395.707%2081.0365%20395.707C81.1483%20395.707%2081.2043%20395.707%2081.2043%20395.707V395.651C84.9508%20395.261%20115.82%20393.756%20115.82%20393.756C149.147%20388.796%20141.934%20376.925%20141.934%20376.925C139.473%20366.504%2094.5688%20363.606%2094.5688%20363.606Z'%20fill='%23051d46'/%3e%3cpath%20d='M79.6499%2020.9782C79.8173%2020.9782%2079.9846%2020.9782%2080.2078%2020.9782C80.2636%2020.9782%2080.3752%2020.9782%2080.4868%2020.9782C80.7657%2020.9782%2081.1005%2020.9782%2081.3795%2020.9782C109.054%2020.9782%20131.706%2015.6778%20134.05%208.92688C130.312%203.90551%20108.218%200%2081.4911%200C54.1246%200%2031.5842%204.07289%2028.7388%209.31743C31.6958%2015.7894%2053.2877%2020.755%2079.6499%2020.9782V20.9782Z'%20fill='%23051d46'/%3e%3cpath%20d='M28.683%2011.6607C31.5285%2016.7937%2053.1204%2020.8108%2079.5941%2020.9782C53.2319%2020.8108%2031.6958%2015.7894%2028.683%209.37323C28.4598%209.70799%2028.3483%2010.0985%2028.3483%2010.4891C28.3483%2010.8796%2028.4598%2011.2702%2028.683%2011.6607Z'%20fill='%23051d46'/%3e%3cpath%20d='M81.3795%2020.9782C81.4353%2020.9782%2081.4353%2020.9782%2081.4911%2020.9782C109.724%2020.9782%20132.822%2016.6263%20134.552%2011.1028C134.608%2010.9354%20134.608%2010.7123%20134.608%2010.4891C134.608%209.93115%20134.44%209.42902%20134.05%208.92688C131.706%2015.6778%20109.055%2020.9782%2081.3795%2020.9782Z'%20fill='%23051d46'/%3e%3c/svg%3e",Rn="data:image/svg+xml,%3csvg%20width='30'%20height='30'%20viewBox='0%200%2030%2030'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M29.724%2018.1391C29.5518%2019.4122%2028.9889%2020.554%2028.4206%2021.6752C27.4613%2023.5946%2026.1164%2025.2823%2024.4748%2026.6261C22.5349%2028.2087%2020.3167%2029.1563%2017.8922%2029.5936C16.3892%2029.8648%2014.8752%2030.0622%2013.3402%2029.982C9.63966%2029.7885%206.44535%2028.4573%203.84916%2025.6628C2.74763%2024.4574%201.81134%2023.1029%201.06627%2021.6367C0.636038%2020.8127%200.474503%2019.9508%200.329585%2019.0675C0.0617432%2017.4332%20-0.103093%2015.8005%200.0729847%2014.1302C0.290362%2012.0674%200.844008%2010.1339%201.84475%208.33693C3.05797%206.11676%204.72026%204.19037%206.7193%202.68791C8.71003%201.20379%2010.9631%200.443459%2013.3974%200.141127C15.978%20-0.200661%2018.6004%200.0804208%2021.0572%200.962046C23.4675%201.83246%2025.6187%203.16058%2027.0734%205.38803C28.528%207.61548%2029.5375%2010.0209%2029.88%2012.7434C30.1644%2015.0023%2029.8735%2017.0347%2029.724%2018.1391ZM28.3181%2014.7716C28.3059%2013.1859%2028.1607%2011.6175%2027.6015%2010.143C27.2287%209.16018%2026.7993%207.7613%2026.1553%206.75486C25.8655%206.30197%2025.5152%205.88866%2025.1694%205.47693C23.9263%203.99674%2022.3158%203.04276%2020.5208%202.3853C18.1927%201.51505%2015.6914%201.25075%2013.2399%201.61595C10.735%201.98767%208.4907%202.93342%206.60347%204.69135C6.04657%205.21119%205.51602%205.76008%205.01389%206.33594C2.88141%208.77697%201.7316%2011.6925%201.73282%2016.4884C1.73355%2019.4785%203.16759%2022.0345%205.22149%2024.2189C7.40162%2026.5378%2010.0298%2027.7002%2013.1037%2027.9599C14.5965%2028.0856%2016.068%2027.9186%2017.536%2027.6854C21.9256%2026.9883%2025.0588%2024.5471%2027.0791%2020.4933C28.2967%2018.0498%2028.2446%2015.6697%2028.3181%2014.7716Z'%20fill='%23051d46'/%3e%3ccircle%20cx='15'%20cy='15'%20r='14'%20fill='%23051d46'/%3e%3cpath%20d='M16.4095%2013.7344C16.3734%2014.1366%2016.6802%2014.4823%2017.0841%2014.4823V14.4823C18.9852%2014.4849%2020.8863%2014.4843%2022.7873%2014.4949C23.0361%2014.4969%2023.2836%2014.5299%2023.5247%2014.5933C23.6495%2014.6199%2023.7615%2014.6903%2023.8415%2014.7924C23.9215%2014.8945%2023.9646%2015.0221%2023.9635%2015.1532C23.976%2015.2841%2023.9448%2015.4154%2023.8752%2015.5258C23.8055%2015.636%2023.7014%2015.7188%2023.5801%2015.7601C23.2651%2015.8676%2022.9358%2015.9243%2022.6039%2015.9281C20.7449%2015.911%2018.886%2015.8677%2017.0272%2015.8344C16.6304%2015.8272%2016.233%2015.8359%2015.8367%2015.8152C15.6294%2015.8079%2015.4242%2015.7698%2015.2275%2015.702C14.9166%2015.5876%2014.7907%2015.3429%2014.814%2014.9933C14.8629%2014.2659%2014.897%2013.5373%2014.923%2012.8087C15.0075%2010.4471%2015.0832%208.08518%2015.1701%205.7236C15.1897%205.48851%2015.226%205.25518%2015.2787%205.02551C15.336%204.71023%2015.5151%204.52745%2015.8364%204.52808C16.1687%204.52871%2016.3212%204.7516%2016.3787%205.04891C16.4255%205.27997%2016.4503%205.51519%2016.4527%205.75123C16.4505%208.28654%2016.4428%2010.8219%2016.4296%2013.3573C16.4289%2013.4813%2016.4211%2013.6053%2016.4095%2013.7344Z'%20fill='%23F2F0EF'/%3e%3c/svg%3e",Dn=()=>d.jsxs("section",{className:"chambre",children:[d.jsxs("header",{className:"chambre__header",children:[d.jsx("h2",{className:"section__title",children:"CHAMBRE SÈPARÈE"}),d.jsxs("p",{className:"chambre__text",children:["En kväll i vår mest omsorgsfulla vrå. Där glas klingar lågmält, smaker dröjer sig kvar och tiden tycks sakta ned. Fem serveringar. Noggrant utvalda råvaror. Viner med själ.",d.jsx("br",{})," ",d.jsx("br",{})," ",d.jsx("br",{}),"Vill du förfina upplevelsen ytterligare står vår sommelier Elsa Hurtig redo att guida dig genom vinets värld – och självklart har vi omsorgsfullt utvalda alkoholfria alternativ. ",d.jsx("br",{})," ",d.jsx("br",{})," ",d.jsx("br",{})," En kväll i vårt chambre séparée är mer än en middag. Det är ett minne i vardande. Välkommen."]})]}),d.jsxs("section",{className:"chambre__button-section",children:[d.jsx(U,{text:"MER INFO",link:"/chambre"}),d.jsx(U,{text:"BOKA",link:"mailto:info@harpaviljongen.se"})]}),d.jsxs("figure",{className:"chambre__image-container",children:[d.jsx("img",{src:Tn,alt:"dukad middag i chambre séparée",className:"chambre__image"}),d.jsx("img",{src:_n,alt:"Vitrinskål med vinglas",className:"chambre__image"})]})]});/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */function zn(t,e,n){return(e=Yn(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function ae(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?ae(Object(n),!0).forEach(function(a){zn(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):ae(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}function Wn(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var a=n.call(t,e);if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function Yn(t){var e=Wn(t,"string");return typeof e=="symbol"?e:e+""}const re=()=>{};let Ht={},Re={},De=null,ze={mark:re,measure:re};try{typeof window<"u"&&(Ht=window),typeof document<"u"&&(Re=document),typeof MutationObserver<"u"&&(De=MutationObserver),typeof performance<"u"&&(ze=performance)}catch{}const{userAgent:ie=""}=Ht.navigator||{},L=Ht,b=Re,se=De,nt=ze;L.document;const j=!!b.documentElement&&!!b.head&&typeof b.addEventListener=="function"&&typeof b.createElement=="function",We=~ie.indexOf("MSIE")||~ie.indexOf("Trident/");var Un=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,Hn=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,Ye={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},Vn={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},Ue=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],A="classic",ft="duotone",Bn="sharp",Gn="sharp-duotone",He=[A,ft,Bn,Gn],Xn={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},$n={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},qn=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),Kn={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},Zn=["fak","fa-kit","fakd","fa-kit-duotone"],oe={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},Jn=["kit"],Qn={kit:{"fa-kit":"fak"}},ta=["fak","fakd"],ea={kit:{fak:"fa-kit"}},le={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},at={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},na=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],aa=["fak","fa-kit","fakd","fa-kit-duotone"],ra={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},ia={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},sa={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},kt={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},oa=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],Pt=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...na,...oa],la=["solid","regular","light","thin","duotone","brands"],Ve=[1,2,3,4,5,6,7,8,9,10],fa=Ve.concat([11,12,13,14,15,16,17,18,19,20]),ca=[...Object.keys(sa),...la,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",at.GROUP,at.SWAP_OPACITY,at.PRIMARY,at.SECONDARY].concat(Ve.map(t=>"".concat(t,"x"))).concat(fa.map(t=>"w-".concat(t))),ua={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}};const _="___FONT_AWESOME___",Ot=16,Be="fa",Ge="svg-inline--fa",W="data-fa-i2svg",St="data-fa-pseudo-element",ma="data-fa-pseudo-element-pending",Vt="data-prefix",Bt="data-icon",fe="fontawesome-i2svg",da="async",pa=["HTML","HEAD","STYLE","SCRIPT"],Xe=(()=>{try{return!0}catch{return!1}})();function tt(t){return new Proxy(t,{get(e,n){return n in e?e[n]:e[A]}})}const $e=l({},Ye);$e[A]=l(l(l(l({},{"fa-duotone":"duotone"}),Ye[A]),oe.kit),oe["kit-duotone"]);const ga=tt($e),Et=l({},Kn);Et[A]=l(l(l(l({},{duotone:"fad"}),Et[A]),le.kit),le["kit-duotone"]);const ce=tt(Et),It=l({},kt);It[A]=l(l({},It[A]),ea.kit);const Gt=tt(It),Nt=l({},ia);Nt[A]=l(l({},Nt[A]),Qn.kit);tt(Nt);const ha=Un,qe="fa-layers-text",ba=Hn,ya=l({},Xn);tt(ya);const va=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],gt=Vn,xa=[...Jn,...ca],K=L.FontAwesomeConfig||{};function Ca(t){var e=b.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function Aa(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}b&&typeof b.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[n,a]=e;const r=Aa(Ca(n));r!=null&&(K[a]=r)});const Ke={styleDefault:"solid",familyDefault:A,cssPrefix:Be,replacementClass:Ge,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};K.familyPrefix&&(K.cssPrefix=K.familyPrefix);const G=l(l({},Ke),K);G.autoReplaceSvg||(G.observeMutations=!1);const c={};Object.keys(Ke).forEach(t=>{Object.defineProperty(c,t,{enumerable:!0,set:function(e){G[t]=e,Z.forEach(n=>n(c))},get:function(){return G[t]}})});Object.defineProperty(c,"familyPrefix",{enumerable:!0,set:function(t){G.cssPrefix=t,Z.forEach(e=>e(c))},get:function(){return G.cssPrefix}});L.FontAwesomeConfig=c;const Z=[];function wa(t){return Z.push(t),()=>{Z.splice(Z.indexOf(t),1)}}const M=Ot,I={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function ka(t){if(!t||!j)return;const e=b.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;const n=b.head.childNodes;let a=null;for(let r=n.length-1;r>-1;r--){const i=n[r],s=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(s)>-1&&(a=i)}return b.head.insertBefore(e,a),t}const Pa="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function J(){let t=12,e="";for(;t-- >0;)e+=Pa[Math.random()*62|0];return e}function X(t){const e=[];for(let n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function Xt(t){return t.classList?X(t.classList):(t.getAttribute("class")||"").split(" ").filter(e=>e)}function Ze(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Oa(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,'="').concat(Ze(t[n]),'" '),"").trim()}function ct(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,": ").concat(t[n].trim(),";"),"")}function $t(t){return t.size!==I.size||t.x!==I.x||t.y!==I.y||t.rotate!==I.rotate||t.flipX||t.flipY}function Sa(t){let{transform:e,containerWidth:n,iconWidth:a}=t;const r={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(e.x*32,", ").concat(e.y*32,") "),s="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),o="rotate(".concat(e.rotate," 0 0)"),u={transform:"".concat(i," ").concat(s," ").concat(o)},f={transform:"translate(".concat(a/2*-1," -256)")};return{outer:r,inner:u,path:f}}function Ea(t){let{transform:e,width:n=Ot,height:a=Ot,startCentered:r=!1}=t,i="";return r&&We?i+="translate(".concat(e.x/M-n/2,"em, ").concat(e.y/M-a/2,"em) "):r?i+="translate(calc(-50% + ".concat(e.x/M,"em), calc(-50% + ").concat(e.y/M,"em)) "):i+="translate(".concat(e.x/M,"em, ").concat(e.y/M,"em) "),i+="scale(".concat(e.size/M*(e.flipX?-1:1),", ").concat(e.size/M*(e.flipY?-1:1),") "),i+="rotate(".concat(e.rotate,"deg) "),i}var Ia=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}`;function Je(){const t=Be,e=Ge,n=c.cssPrefix,a=c.replacementClass;let r=Ia;if(n!==t||a!==e){const i=new RegExp("\\.".concat(t,"\\-"),"g"),s=new RegExp("\\--".concat(t,"\\-"),"g"),o=new RegExp("\\.".concat(e),"g");r=r.replace(i,".".concat(n,"-")).replace(s,"--".concat(n,"-")).replace(o,".".concat(a))}return r}let ue=!1;function ht(){c.autoAddCss&&!ue&&(ka(Je()),ue=!0)}var Na={mixout(){return{dom:{css:Je,insertCss:ht}}},hooks(){return{beforeDOMElementCreation(){ht()},beforeI2svg(){ht()}}}};const F=L||{};F[_]||(F[_]={});F[_].styles||(F[_].styles={});F[_].hooks||(F[_].hooks={});F[_].shims||(F[_].shims=[]);var N=F[_];const Qe=[],tn=function(){b.removeEventListener("DOMContentLoaded",tn),st=1,Qe.map(t=>t())};let st=!1;j&&(st=(b.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(b.readyState),st||b.addEventListener("DOMContentLoaded",tn));function Ta(t){j&&(st?setTimeout(t,0):Qe.push(t))}function et(t){const{tag:e,attributes:n={},children:a=[]}=t;return typeof t=="string"?Ze(t):"<".concat(e," ").concat(Oa(n),">").concat(a.map(et).join(""),"</").concat(e,">")}function me(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var bt=function(e,n,a,r){var i=Object.keys(e),s=i.length,o=n,u,f,m;for(a===void 0?(u=1,m=e[i[0]]):(u=0,m=a);u<s;u++)f=i[u],m=o(m,e[f],f,e);return m};function _a(t){const e=[];let n=0;const a=t.length;for(;n<a;){const r=t.charCodeAt(n++);if(r>=55296&&r<=56319&&n<a){const i=t.charCodeAt(n++);(i&64512)==56320?e.push(((r&1023)<<10)+(i&1023)+65536):(e.push(r),n--)}else e.push(r)}return e}function Tt(t){const e=_a(t);return e.length===1?e[0].toString(16):null}function Fa(t,e){const n=t.length;let a=t.charCodeAt(e),r;return a>=55296&&a<=56319&&n>e+1&&(r=t.charCodeAt(e+1),r>=56320&&r<=57343)?(a-55296)*1024+r-56320+65536:a}function de(t){return Object.keys(t).reduce((e,n)=>{const a=t[n];return!!a.icon?e[a.iconName]=a.icon:e[n]=a,e},{})}function _t(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:a=!1}=n,r=de(e);typeof N.hooks.addPack=="function"&&!a?N.hooks.addPack(t,de(e)):N.styles[t]=l(l({},N.styles[t]||{}),r),t==="fas"&&_t("fa",e)}const{styles:Q,shims:ja}=N,en=Object.keys(Gt),Ma=en.reduce((t,e)=>(t[e]=Object.keys(Gt[e]),t),{});let qt=null,nn={},an={},rn={},sn={},on={};function La(t){return~xa.indexOf(t)}function Ra(t,e){const n=e.split("-"),a=n[0],r=n.slice(1).join("-");return a===t&&r!==""&&!La(r)?r:null}const ln=()=>{const t=a=>bt(Q,(r,i,s)=>(r[s]=bt(i,a,{}),r),{});nn=t((a,r,i)=>(r[3]&&(a[r[3]]=i),r[2]&&r[2].filter(o=>typeof o=="number").forEach(o=>{a[o.toString(16)]=i}),a)),an=t((a,r,i)=>(a[i]=i,r[2]&&r[2].filter(o=>typeof o=="string").forEach(o=>{a[o]=i}),a)),on=t((a,r,i)=>{const s=r[2];return a[i]=i,s.forEach(o=>{a[o]=i}),a});const e="far"in Q||c.autoFetchSvg,n=bt(ja,(a,r)=>{const i=r[0];let s=r[1];const o=r[2];return s==="far"&&!e&&(s="fas"),typeof i=="string"&&(a.names[i]={prefix:s,iconName:o}),typeof i=="number"&&(a.unicodes[i.toString(16)]={prefix:s,iconName:o}),a},{names:{},unicodes:{}});rn=n.names,sn=n.unicodes,qt=ut(c.styleDefault,{family:c.familyDefault})};wa(t=>{qt=ut(t.styleDefault,{family:c.familyDefault})});ln();function Kt(t,e){return(nn[t]||{})[e]}function Da(t,e){return(an[t]||{})[e]}function z(t,e){return(on[t]||{})[e]}function fn(t){return rn[t]||{prefix:null,iconName:null}}function za(t){const e=sn[t],n=Kt("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function R(){return qt}const cn=()=>({prefix:null,iconName:null,rest:[]});function Wa(t){let e=A;const n=en.reduce((a,r)=>(a[r]="".concat(c.cssPrefix,"-").concat(r),a),{});return He.forEach(a=>{(t.includes(n[a])||t.some(r=>Ma[a].includes(r)))&&(e=a)}),e}function ut(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=A}=e,a=ga[n][t];if(n===ft&&!t)return"fad";const r=ce[n][t]||ce[n][a],i=t in N.styles?t:null;return r||i||null}function Ya(t){let e=[],n=null;return t.forEach(a=>{const r=Ra(c.cssPrefix,a);r?n=r:a&&e.push(a)}),{iconName:n,rest:e}}function pe(t){return t.sort().filter((e,n,a)=>a.indexOf(e)===n)}function mt(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=e;let a=null;const r=Pt.concat(aa),i=pe(t.filter(h=>r.includes(h))),s=pe(t.filter(h=>!Pt.includes(h))),o=i.filter(h=>(a=h,!Ue.includes(h))),[u=null]=o,f=Wa(i),m=l(l({},Ya(s)),{},{prefix:ut(u,{family:f})});return l(l(l({},m),Ba({values:t,family:f,styles:Q,config:c,canonical:m,givenPrefix:a})),Ua(n,a,m))}function Ua(t,e,n){let{prefix:a,iconName:r}=n;if(t||!a||!r)return{prefix:a,iconName:r};const i=e==="fa"?fn(r):{},s=z(a,r);return r=i.iconName||s||r,a=i.prefix||a,a==="far"&&!Q.far&&Q.fas&&!c.autoFetchSvg&&(a="fas"),{prefix:a,iconName:r}}const Ha=He.filter(t=>t!==A||t!==ft),Va=Object.keys(kt).filter(t=>t!==A).map(t=>Object.keys(kt[t])).flat();function Ba(t){const{values:e,family:n,canonical:a,givenPrefix:r="",styles:i={},config:s={}}=t,o=n===ft,u=e.includes("fa-duotone")||e.includes("fad"),f=s.familyDefault==="duotone",m=a.prefix==="fad"||a.prefix==="fa-duotone";if(!o&&(u||f||m)&&(a.prefix="fad"),(e.includes("fa-brands")||e.includes("fab"))&&(a.prefix="fab"),!a.prefix&&Ha.includes(n)&&(Object.keys(i).find(p=>Va.includes(p))||s.autoFetchSvg)){const p=qn.get(n).defaultShortPrefixId;a.prefix=p,a.iconName=z(a.prefix,a.iconName)||a.iconName}return(a.prefix==="fa"||r==="fa")&&(a.prefix=R()||"fas"),a}class Ga{constructor(){this.definitions={}}add(){for(var e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];const r=n.reduce(this._pullDefinitions,{});Object.keys(r).forEach(i=>{this.definitions[i]=l(l({},this.definitions[i]||{}),r[i]),_t(i,r[i]);const s=Gt[A][i];s&&_t(s,r[i]),ln()})}reset(){this.definitions={}}_pullDefinitions(e,n){const a=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(a).map(r=>{const{prefix:i,iconName:s,icon:o}=a[r],u=o[2];e[i]||(e[i]={}),u.length>0&&u.forEach(f=>{typeof f=="string"&&(e[i][f]=o)}),e[i][s]=o}),e}}let ge=[],H={};const B={},Xa=Object.keys(B);function $a(t,e){let{mixoutsTo:n}=e;return ge=t,H={},Object.keys(B).forEach(a=>{Xa.indexOf(a)===-1&&delete B[a]}),ge.forEach(a=>{const r=a.mixout?a.mixout():{};if(Object.keys(r).forEach(i=>{typeof r[i]=="function"&&(n[i]=r[i]),typeof r[i]=="object"&&Object.keys(r[i]).forEach(s=>{n[i]||(n[i]={}),n[i][s]=r[i][s]})}),a.hooks){const i=a.hooks();Object.keys(i).forEach(s=>{H[s]||(H[s]=[]),H[s].push(i[s])})}a.provides&&a.provides(B)}),n}function Ft(t,e){for(var n=arguments.length,a=new Array(n>2?n-2:0),r=2;r<n;r++)a[r-2]=arguments[r];return(H[t]||[]).forEach(s=>{e=s.apply(null,[e,...a])}),e}function Y(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),a=1;a<e;a++)n[a-1]=arguments[a];(H[t]||[]).forEach(i=>{i.apply(null,n)})}function D(){const t=arguments[0],e=Array.prototype.slice.call(arguments,1);return B[t]?B[t].apply(null,e):void 0}function jt(t){t.prefix==="fa"&&(t.prefix="fas");let{iconName:e}=t;const n=t.prefix||R();if(e)return e=z(n,e)||e,me(un.definitions,n,e)||me(N.styles,n,e)}const un=new Ga,qa=()=>{c.autoReplaceSvg=!1,c.observeMutations=!1,Y("noAuto")},Ka={i2svg:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return j?(Y("beforeI2svg",t),D("pseudoElements2svg",t),D("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=t;c.autoReplaceSvg===!1&&(c.autoReplaceSvg=!0),c.observeMutations=!0,Ta(()=>{Ja({autoReplaceSvgRoot:e}),Y("watch",t)})}},Za={icon:t=>{if(t===null)return null;if(typeof t=="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:z(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){const e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=ut(t[0]);return{prefix:n,iconName:z(n,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(c.cssPrefix,"-"))>-1||t.match(ha))){const e=mt(t.split(" "),{skipLookups:!0});return{prefix:e.prefix||R(),iconName:z(e.prefix,e.iconName)||e.iconName}}if(typeof t=="string"){const e=R();return{prefix:e,iconName:z(e,t)||t}}}},P={noAuto:qa,config:c,dom:Ka,parse:Za,library:un,findIconDefinition:jt,toHtml:et},Ja=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=b}=t;(Object.keys(N.styles).length>0||c.autoFetchSvg)&&j&&c.autoReplaceSvg&&P.dom.i2svg({node:e})};function dt(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(n=>et(n))}}),Object.defineProperty(t,"node",{get:function(){if(!j)return;const n=b.createElement("div");return n.innerHTML=t.html,n.children}}),t}function Qa(t){let{children:e,main:n,mask:a,attributes:r,styles:i,transform:s}=t;if($t(s)&&n.found&&!a.found){const{width:o,height:u}=n,f={x:o/u/2,y:.5};r.style=ct(l(l({},i),{},{"transform-origin":"".concat(f.x+s.x/16,"em ").concat(f.y+s.y/16,"em")}))}return[{tag:"svg",attributes:r,children:e}]}function tr(t){let{prefix:e,iconName:n,children:a,attributes:r,symbol:i}=t;const s=i===!0?"".concat(e,"-").concat(c.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:l(l({},r),{},{id:s}),children:a}]}]}function Zt(t){const{icons:{main:e,mask:n},prefix:a,iconName:r,transform:i,symbol:s,title:o,maskId:u,titleId:f,extra:m,watchable:h=!1}=t,{width:p,height:v}=n.found?n:e,k=ta.includes(a),O=[c.replacementClass,r?"".concat(c.cssPrefix,"-").concat(r):""].filter(S=>m.classes.indexOf(S)===-1).filter(S=>S!==""||!!S).concat(m.classes).join(" ");let y={children:[],attributes:l(l({},m.attributes),{},{"data-prefix":a,"data-icon":r,class:O,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(p," ").concat(v)})};const C=k&&!~m.classes.indexOf("fa-fw")?{width:"".concat(p/v*16*.0625,"em")}:{};h&&(y.attributes[W]=""),o&&(y.children.push({tag:"title",attributes:{id:y.attributes["aria-labelledby"]||"title-".concat(f||J())},children:[o]}),delete y.attributes.title);const x=l(l({},y),{},{prefix:a,iconName:r,main:e,mask:n,maskId:u,transform:i,symbol:s,styles:l(l({},C),m.styles)}),{children:w,attributes:T}=n.found&&e.found?D("generateAbstractMask",x)||{children:[],attributes:{}}:D("generateAbstractIcon",x)||{children:[],attributes:{}};return x.children=w,x.attributes=T,s?tr(x):Qa(x)}function he(t){const{content:e,width:n,height:a,transform:r,title:i,extra:s,watchable:o=!1}=t,u=l(l(l({},s.attributes),i?{title:i}:{}),{},{class:s.classes.join(" ")});o&&(u[W]="");const f=l({},s.styles);$t(r)&&(f.transform=Ea({transform:r,startCentered:!0,width:n,height:a}),f["-webkit-transform"]=f.transform);const m=ct(f);m.length>0&&(u.style=m);const h=[];return h.push({tag:"span",attributes:u,children:[e]}),i&&h.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),h}function er(t){const{content:e,title:n,extra:a}=t,r=l(l(l({},a.attributes),n?{title:n}:{}),{},{class:a.classes.join(" ")}),i=ct(a.styles);i.length>0&&(r.style=i);const s=[];return s.push({tag:"span",attributes:r,children:[e]}),n&&s.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),s}const{styles:yt}=N;function Mt(t){const e=t[0],n=t[1],[a]=t.slice(4);let r=null;return Array.isArray(a)?r={tag:"g",attributes:{class:"".concat(c.cssPrefix,"-").concat(gt.GROUP)},children:[{tag:"path",attributes:{class:"".concat(c.cssPrefix,"-").concat(gt.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(c.cssPrefix,"-").concat(gt.PRIMARY),fill:"currentColor",d:a[1]}}]}:r={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:e,height:n,icon:r}}const nr={found:!1,width:512,height:512};function ar(t,e){!Xe&&!c.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Lt(t,e){let n=e;return e==="fa"&&c.styleDefault!==null&&(e=R()),new Promise((a,r)=>{if(n==="fa"){const i=fn(t)||{};t=i.iconName||t,e=i.prefix||e}if(t&&e&&yt[e]&&yt[e][t]){const i=yt[e][t];return a(Mt(i))}ar(t,e),a(l(l({},nr),{},{icon:c.showMissingIcons&&t?D("missingIconAbstract")||{}:{}}))})}const be=()=>{},Rt=c.measurePerformance&&nt&&nt.mark&&nt.measure?nt:{mark:be,measure:be},q='FA "6.7.2"',rr=t=>(Rt.mark("".concat(q," ").concat(t," begins")),()=>mn(t)),mn=t=>{Rt.mark("".concat(q," ").concat(t," ends")),Rt.measure("".concat(q," ").concat(t),"".concat(q," ").concat(t," begins"),"".concat(q," ").concat(t," ends"))};var Jt={begin:rr,end:mn};const rt=()=>{};function ye(t){return typeof(t.getAttribute?t.getAttribute(W):null)=="string"}function ir(t){const e=t.getAttribute?t.getAttribute(Vt):null,n=t.getAttribute?t.getAttribute(Bt):null;return e&&n}function sr(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(c.replacementClass)}function or(){return c.autoReplaceSvg===!0?it.replace:it[c.autoReplaceSvg]||it.replace}function lr(t){return b.createElementNS("http://www.w3.org/2000/svg",t)}function fr(t){return b.createElement(t)}function dn(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=t.tag==="svg"?lr:fr}=e;if(typeof t=="string")return b.createTextNode(t);const a=n(t.tag);return Object.keys(t.attributes||[]).forEach(function(i){a.setAttribute(i,t.attributes[i])}),(t.children||[]).forEach(function(i){a.appendChild(dn(i,{ceFn:n}))}),a}function cr(t){let e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const it={replace:function(t){const e=t[0];if(e.parentNode)if(t[1].forEach(n=>{e.parentNode.insertBefore(dn(n),e)}),e.getAttribute(W)===null&&c.keepOriginalSource){let n=b.createComment(cr(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(t){const e=t[0],n=t[1];if(~Xt(e).indexOf(c.replacementClass))return it.replace(t);const a=new RegExp("".concat(c.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const i=n[0].attributes.class.split(" ").reduce((s,o)=>(o===c.replacementClass||o.match(a)?s.toSvg.push(o):s.toNode.push(o),s),{toNode:[],toSvg:[]});n[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",i.toNode.join(" "))}const r=n.map(i=>et(i)).join(`
`);e.setAttribute(W,""),e.innerHTML=r}};function ve(t){t()}function pn(t,e){const n=typeof e=="function"?e:rt;if(t.length===0)n();else{let a=ve;c.mutateApproach===da&&(a=L.requestAnimationFrame||ve),a(()=>{const r=or(),i=Jt.begin("mutate");t.map(r),i(),n()})}}let Qt=!1;function gn(){Qt=!0}function Dt(){Qt=!1}let ot=null;function xe(t){if(!se||!c.observeMutations)return;const{treeCallback:e=rt,nodeCallback:n=rt,pseudoElementsCallback:a=rt,observeMutationsRoot:r=b}=t;ot=new se(i=>{if(Qt)return;const s=R();X(i).forEach(o=>{if(o.type==="childList"&&o.addedNodes.length>0&&!ye(o.addedNodes[0])&&(c.searchPseudoElements&&a(o.target),e(o.target)),o.type==="attributes"&&o.target.parentNode&&c.searchPseudoElements&&a(o.target.parentNode),o.type==="attributes"&&ye(o.target)&&~va.indexOf(o.attributeName))if(o.attributeName==="class"&&ir(o.target)){const{prefix:u,iconName:f}=mt(Xt(o.target));o.target.setAttribute(Vt,u||s),f&&o.target.setAttribute(Bt,f)}else sr(o.target)&&n(o.target)})}),j&&ot.observe(r,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function ur(){ot&&ot.disconnect()}function mr(t){const e=t.getAttribute("style");let n=[];return e&&(n=e.split(";").reduce((a,r)=>{const i=r.split(":"),s=i[0],o=i.slice(1);return s&&o.length>0&&(a[s]=o.join(":").trim()),a},{})),n}function dr(t){const e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),a=t.innerText!==void 0?t.innerText.trim():"";let r=mt(Xt(t));return r.prefix||(r.prefix=R()),e&&n&&(r.prefix=e,r.iconName=n),r.iconName&&r.prefix||(r.prefix&&a.length>0&&(r.iconName=Da(r.prefix,t.innerText)||Kt(r.prefix,Tt(t.innerText))),!r.iconName&&c.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=t.firstChild.data)),r}function pr(t){const e=X(t.attributes).reduce((r,i)=>(r.name!=="class"&&r.name!=="style"&&(r[i.name]=i.value),r),{}),n=t.getAttribute("title"),a=t.getAttribute("data-fa-title-id");return c.autoA11y&&(n?e["aria-labelledby"]="".concat(c.replacementClass,"-title-").concat(a||J()):(e["aria-hidden"]="true",e.focusable="false")),e}function gr(){return{iconName:null,title:null,titleId:null,prefix:null,transform:I,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Ce(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:a,rest:r}=dr(t),i=pr(t),s=Ft("parseNodeAttributes",{},t);let o=e.styleParser?mr(t):[];return l({iconName:n,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:a,transform:I,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:r,styles:o,attributes:i}},s)}const{styles:hr}=N;function hn(t){const e=c.autoReplaceSvg==="nest"?Ce(t,{styleParser:!1}):Ce(t);return~e.extra.classes.indexOf(qe)?D("generateLayersText",t,e):D("generateSvgReplacementMutation",t,e)}function br(){return[...Zn,...Pt]}function Ae(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!j)return Promise.resolve();const n=b.documentElement.classList,a=m=>n.add("".concat(fe,"-").concat(m)),r=m=>n.remove("".concat(fe,"-").concat(m)),i=c.autoFetchSvg?br():Ue.concat(Object.keys(hr));i.includes("fa")||i.push("fa");const s=[".".concat(qe,":not([").concat(W,"])")].concat(i.map(m=>".".concat(m,":not([").concat(W,"])"))).join(", ");if(s.length===0)return Promise.resolve();let o=[];try{o=X(t.querySelectorAll(s))}catch{}if(o.length>0)a("pending"),r("complete");else return Promise.resolve();const u=Jt.begin("onTree"),f=o.reduce((m,h)=>{try{const p=hn(h);p&&m.push(p)}catch(p){Xe||p.name==="MissingIcon"&&console.error(p)}return m},[]);return new Promise((m,h)=>{Promise.all(f).then(p=>{pn(p,()=>{a("active"),a("complete"),r("pending"),typeof e=="function"&&e(),u(),m()})}).catch(p=>{u(),h(p)})})}function yr(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;hn(t).then(n=>{n&&pn([n],e)})}function vr(t){return function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const a=(e||{}).icon?e:jt(e||{});let{mask:r}=n;return r&&(r=(r||{}).icon?r:jt(r||{})),t(a,l(l({},n),{},{mask:r}))}}const xr=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=I,symbol:a=!1,mask:r=null,maskId:i=null,title:s=null,titleId:o=null,classes:u=[],attributes:f={},styles:m={}}=e;if(!t)return;const{prefix:h,iconName:p,icon:v}=t;return dt(l({type:"icon"},t),()=>(Y("beforeDOMElementCreation",{iconDefinition:t,params:e}),c.autoA11y&&(s?f["aria-labelledby"]="".concat(c.replacementClass,"-title-").concat(o||J()):(f["aria-hidden"]="true",f.focusable="false")),Zt({icons:{main:Mt(v),mask:r?Mt(r.icon):{found:!1,width:null,height:null,icon:{}}},prefix:h,iconName:p,transform:l(l({},I),n),symbol:a,title:s,maskId:i,titleId:o,extra:{attributes:f,styles:m,classes:u}})))};var Cr={mixout(){return{icon:vr(xr)}},hooks(){return{mutationObserverCallbacks(t){return t.treeCallback=Ae,t.nodeCallback=yr,t}}},provides(t){t.i2svg=function(e){const{node:n=b,callback:a=()=>{}}=e;return Ae(n,a)},t.generateSvgReplacementMutation=function(e,n){const{iconName:a,title:r,titleId:i,prefix:s,transform:o,symbol:u,mask:f,maskId:m,extra:h}=n;return new Promise((p,v)=>{Promise.all([Lt(a,s),f.iconName?Lt(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(k=>{let[O,y]=k;p([e,Zt({icons:{main:O,mask:y},prefix:s,iconName:a,transform:o,symbol:u,maskId:m,title:r,titleId:i,extra:h,watchable:!0})])}).catch(v)})},t.generateAbstractIcon=function(e){let{children:n,attributes:a,main:r,transform:i,styles:s}=e;const o=ct(s);o.length>0&&(a.style=o);let u;return $t(i)&&(u=D("generateAbstractTransformGrouping",{main:r,transform:i,containerWidth:r.width,iconWidth:r.width})),n.push(u||r.icon),{children:n,attributes:a}}}},Ar={mixout(){return{layer(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=e;return dt({type:"layer"},()=>{Y("beforeDOMElementCreation",{assembler:t,params:e});let a=[];return t(r=>{Array.isArray(r)?r.map(i=>{a=a.concat(i.abstract)}):a=a.concat(r.abstract)}),[{tag:"span",attributes:{class:["".concat(c.cssPrefix,"-layers"),...n].join(" ")},children:a}]})}}}},wr={mixout(){return{counter(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:a=[],attributes:r={},styles:i={}}=e;return dt({type:"counter",content:t},()=>(Y("beforeDOMElementCreation",{content:t,params:e}),er({content:t.toString(),title:n,extra:{attributes:r,styles:i,classes:["".concat(c.cssPrefix,"-layers-counter"),...a]}})))}}}},kr={mixout(){return{text(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=I,title:a=null,classes:r=[],attributes:i={},styles:s={}}=e;return dt({type:"text",content:t},()=>(Y("beforeDOMElementCreation",{content:t,params:e}),he({content:t,transform:l(l({},I),n),title:a,extra:{attributes:i,styles:s,classes:["".concat(c.cssPrefix,"-layers-text"),...r]}})))}}},provides(t){t.generateLayersText=function(e,n){const{title:a,transform:r,extra:i}=n;let s=null,o=null;if(We){const u=parseInt(getComputedStyle(e).fontSize,10),f=e.getBoundingClientRect();s=f.width/u,o=f.height/u}return c.autoA11y&&!a&&(i.attributes["aria-hidden"]="true"),Promise.resolve([e,he({content:e.innerHTML,width:s,height:o,transform:r,title:a,extra:i,watchable:!0})])}}};const Pr=new RegExp('"',"ug"),we=[1105920,1112319],ke=l(l(l(l({},{FontAwesome:{normal:"fas",400:"fas"}}),$n),ua),ra),zt=Object.keys(ke).reduce((t,e)=>(t[e.toLowerCase()]=ke[e],t),{}),Or=Object.keys(zt).reduce((t,e)=>{const n=zt[e];return t[e]=n[900]||[...Object.entries(n)][0][1],t},{});function Sr(t){const e=t.replace(Pr,""),n=Fa(e,0),a=n>=we[0]&&n<=we[1],r=e.length===2?e[0]===e[1]:!1;return{value:Tt(r?e[0]:e),isSecondary:a||r}}function Er(t,e){const n=t.replace(/^['"]|['"]$/g,"").toLowerCase(),a=parseInt(e),r=isNaN(a)?"normal":a;return(zt[n]||{})[r]||Or[n]}function Pe(t,e){const n="".concat(ma).concat(e.replace(":","-"));return new Promise((a,r)=>{if(t.getAttribute(n)!==null)return a();const s=X(t.children).filter(p=>p.getAttribute(St)===e)[0],o=L.getComputedStyle(t,e),u=o.getPropertyValue("font-family"),f=u.match(ba),m=o.getPropertyValue("font-weight"),h=o.getPropertyValue("content");if(s&&!f)return t.removeChild(s),a();if(f&&h!=="none"&&h!==""){const p=o.getPropertyValue("content");let v=Er(u,m);const{value:k,isSecondary:O}=Sr(p),y=f[0].startsWith("FontAwesome");let C=Kt(v,k),x=C;if(y){const w=za(k);w.iconName&&w.prefix&&(C=w.iconName,v=w.prefix)}if(C&&!O&&(!s||s.getAttribute(Vt)!==v||s.getAttribute(Bt)!==x)){t.setAttribute(n,x),s&&t.removeChild(s);const w=gr(),{extra:T}=w;T.attributes[St]=e,Lt(C,v).then(S=>{const Cn=Zt(l(l({},w),{},{icons:{main:S,mask:cn()},prefix:v,iconName:x,extra:T,watchable:!0})),pt=b.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(pt,t.firstChild):t.appendChild(pt),pt.outerHTML=Cn.map(An=>et(An)).join(`
`),t.removeAttribute(n),a()}).catch(r)}else a()}else a()})}function Ir(t){return Promise.all([Pe(t,"::before"),Pe(t,"::after")])}function Nr(t){return t.parentNode!==document.head&&!~pa.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(St)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function Oe(t){if(j)return new Promise((e,n)=>{const a=X(t.querySelectorAll("*")).filter(Nr).map(Ir),r=Jt.begin("searchPseudoElements");gn(),Promise.all(a).then(()=>{r(),Dt(),e()}).catch(()=>{r(),Dt(),n()})})}var Tr={hooks(){return{mutationObserverCallbacks(t){return t.pseudoElementsCallback=Oe,t}}},provides(t){t.pseudoElements2svg=function(e){const{node:n=b}=e;c.searchPseudoElements&&Oe(n)}}};let Se=!1;var _r={mixout(){return{dom:{unwatch(){gn(),Se=!0}}}},hooks(){return{bootstrap(){xe(Ft("mutationObserverCallbacks",{}))},noAuto(){ur()},watch(t){const{observeMutationsRoot:e}=t;Se?Dt():xe(Ft("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const Ee=t=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce((n,a)=>{const r=a.toLowerCase().split("-"),i=r[0];let s=r.slice(1).join("-");if(i&&s==="h")return n.flipX=!0,n;if(i&&s==="v")return n.flipY=!0,n;if(s=parseFloat(s),isNaN(s))return n;switch(i){case"grow":n.size=n.size+s;break;case"shrink":n.size=n.size-s;break;case"left":n.x=n.x-s;break;case"right":n.x=n.x+s;break;case"up":n.y=n.y-s;break;case"down":n.y=n.y+s;break;case"rotate":n.rotate=n.rotate+s;break}return n},e)};var Fr={mixout(){return{parse:{transform:t=>Ee(t)}}},hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-transform");return n&&(t.transform=Ee(n)),t}}},provides(t){t.generateAbstractTransformGrouping=function(e){let{main:n,transform:a,containerWidth:r,iconWidth:i}=e;const s={transform:"translate(".concat(r/2," 256)")},o="translate(".concat(a.x*32,", ").concat(a.y*32,") "),u="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),f="rotate(".concat(a.rotate," 0 0)"),m={transform:"".concat(o," ").concat(u," ").concat(f)},h={transform:"translate(".concat(i/2*-1," -256)")},p={outer:s,inner:m,path:h};return{tag:"g",attributes:l({},p.outer),children:[{tag:"g",attributes:l({},p.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:l(l({},n.icon.attributes),p.path)}]}]}}}};const vt={x:0,y:0,width:"100%",height:"100%"};function Ie(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function jr(t){return t.tag==="g"?t.children:[t]}var Mr={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-mask"),a=n?mt(n.split(" ").map(r=>r.trim())):cn();return a.prefix||(a.prefix=R()),t.mask=a,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides(t){t.generateAbstractMask=function(e){let{children:n,attributes:a,main:r,mask:i,maskId:s,transform:o}=e;const{width:u,icon:f}=r,{width:m,icon:h}=i,p=Sa({transform:o,containerWidth:m,iconWidth:u}),v={tag:"rect",attributes:l(l({},vt),{},{fill:"white"})},k=f.children?{children:f.children.map(Ie)}:{},O={tag:"g",attributes:l({},p.inner),children:[Ie(l({tag:f.tag,attributes:l(l({},f.attributes),p.path)},k))]},y={tag:"g",attributes:l({},p.outer),children:[O]},C="mask-".concat(s||J()),x="clip-".concat(s||J()),w={tag:"mask",attributes:l(l({},vt),{},{id:C,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[v,y]},T={tag:"defs",children:[{tag:"clipPath",attributes:{id:x},children:jr(h)},w]};return n.push(T,{tag:"rect",attributes:l({fill:"currentColor","clip-path":"url(#".concat(x,")"),mask:"url(#".concat(C,")")},vt)}),{children:n,attributes:a}}}},Lr={provides(t){let e=!1;L.matchMedia&&(e=L.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){const n=[],a={fill:"currentColor"},r={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:l(l({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});const i=l(l({},r),{},{attributeName:"opacity"}),s={tag:"circle",attributes:l(l({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||s.children.push({tag:"animate",attributes:l(l({},r),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:l(l({},i),{},{values:"1;0;1;1;0;1;"})}),n.push(s),n.push({tag:"path",attributes:l(l({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:l(l({},i),{},{values:"1;0;0;0;0;1;"})}]}),e||n.push({tag:"path",attributes:l(l({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:l(l({},i),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},Rr={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-symbol"),a=n===null?!1:n===""?!0:n;return t.symbol=a,t}}}},Dr=[Na,Cr,Ar,wr,kr,Tr,_r,Fr,Mr,Lr,Rr];$a(Dr,{mixoutsTo:P});P.noAuto;P.config;P.library;P.dom;const Wt=P.parse;P.findIconDefinition;P.toHtml;const zr=P.icon;P.layer;P.text;P.counter;var xt={exports:{}},Ct,Ne;function Wr(){if(Ne)return Ct;Ne=1;var t="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return Ct=t,Ct}var At,Te;function Yr(){if(Te)return At;Te=1;var t=Wr();function e(){}function n(){}return n.resetWarningCache=e,At=function(){function a(s,o,u,f,m,h){if(h!==t){var p=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw p.name="Invariant Violation",p}}a.isRequired=a;function r(){return a}var i={array:a,bigint:a,bool:a,func:a,number:a,object:a,string:a,symbol:a,any:a,arrayOf:r,element:a,elementType:a,instanceOf:r,node:a,objectOf:r,oneOf:r,oneOfType:r,shape:r,exact:r,checkPropTypes:n,resetWarningCache:e};return i.PropTypes=i,i},At}var _e;function Ur(){return _e||(_e=1,xt.exports=Yr()()),xt.exports}var Hr=Ur();const g=wn(Hr);function Fe(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,a)}return n}function E(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Fe(Object(n),!0).forEach(function(a){V(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Fe(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}function lt(t){"@babel/helpers - typeof";return lt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},lt(t)}function V(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Vr(t,e){if(t==null)return{};var n={},a=Object.keys(t),r,i;for(i=0;i<a.length;i++)r=a[i],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}function Br(t,e){if(t==null)return{};var n=Vr(t,e),a,r;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)a=i[r],!(e.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}function Yt(t){return Gr(t)||Xr(t)||$r(t)||qr()}function Gr(t){if(Array.isArray(t))return Ut(t)}function Xr(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function $r(t,e){if(t){if(typeof t=="string")return Ut(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Ut(t,e)}}function Ut(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}function qr(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Kr(t){var e,n=t.beat,a=t.fade,r=t.beatFade,i=t.bounce,s=t.shake,o=t.flash,u=t.spin,f=t.spinPulse,m=t.spinReverse,h=t.pulse,p=t.fixedWidth,v=t.inverse,k=t.border,O=t.listItem,y=t.flip,C=t.size,x=t.rotation,w=t.pull,T=(e={"fa-beat":n,"fa-fade":a,"fa-beat-fade":r,"fa-bounce":i,"fa-shake":s,"fa-flash":o,"fa-spin":u,"fa-spin-reverse":m,"fa-spin-pulse":f,"fa-pulse":h,"fa-fw":p,"fa-inverse":v,"fa-border":k,"fa-li":O,"fa-flip":y===!0,"fa-flip-horizontal":y==="horizontal"||y==="both","fa-flip-vertical":y==="vertical"||y==="both"},V(e,"fa-".concat(C),typeof C<"u"&&C!==null),V(e,"fa-rotate-".concat(x),typeof x<"u"&&x!==null&&x!==0),V(e,"fa-pull-".concat(w),typeof w<"u"&&w!==null),V(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(T).map(function(S){return T[S]?S:null}).filter(function(S){return S})}function Zr(t){return t=t-0,t===t}function bn(t){return Zr(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var Jr=["style"];function Qr(t){return t.charAt(0).toUpperCase()+t.slice(1)}function ti(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var a=n.indexOf(":"),r=bn(n.slice(0,a)),i=n.slice(a+1).trim();return r.startsWith("webkit")?e[Qr(r)]=i:e[r]=i,e},{})}function yn(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var a=(e.children||[]).map(function(u){return yn(t,u)}),r=Object.keys(e.attributes||{}).reduce(function(u,f){var m=e.attributes[f];switch(f){case"class":u.attrs.className=m,delete e.attributes.class;break;case"style":u.attrs.style=ti(m);break;default:f.indexOf("aria-")===0||f.indexOf("data-")===0?u.attrs[f.toLowerCase()]=m:u.attrs[bn(f)]=m}return u},{attrs:{}}),i=n.style,s=i===void 0?{}:i,o=Br(n,Jr);return r.attrs.style=E(E({},r.attrs.style),s),t.apply(void 0,[e.tag,E(E({},r.attrs),o)].concat(Yt(a)))}var vn=!1;try{vn=!0}catch{}function ei(){if(!vn&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function je(t){if(t&&lt(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Wt.icon)return Wt.icon(t);if(t===null)return null;if(t&&lt(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function wt(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?V({},t,e):{}}var Me={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},xn=Le.forwardRef(function(t,e){var n=E(E({},Me),t),a=n.icon,r=n.mask,i=n.symbol,s=n.className,o=n.title,u=n.titleId,f=n.maskId,m=je(a),h=wt("classes",[].concat(Yt(Kr(n)),Yt((s||"").split(" ")))),p=wt("transform",typeof n.transform=="string"?Wt.transform(n.transform):n.transform),v=wt("mask",je(r)),k=zr(m,E(E(E(E({},h),p),v),{},{symbol:i,title:o,titleId:u,maskId:f}));if(!k)return ei("Could not find icon",m),null;var O=k.abstract,y={ref:e};return Object.keys(n).forEach(function(C){Me.hasOwnProperty(C)||(y[C]=n[C])}),ni(O[0],y)});xn.displayName="FontAwesomeIcon";xn.propTypes={beat:g.bool,border:g.bool,beatFade:g.bool,bounce:g.bool,className:g.string,fade:g.bool,flash:g.bool,mask:g.oneOfType([g.object,g.array,g.string]),maskId:g.string,fixedWidth:g.bool,inverse:g.bool,flip:g.oneOf([!0,!1,"horizontal","vertical","both"]),icon:g.oneOfType([g.object,g.array,g.string]),listItem:g.bool,pull:g.oneOf(["right","left"]),pulse:g.bool,rotation:g.oneOf([0,90,180,270]),shake:g.bool,size:g.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:g.bool,spinPulse:g.bool,spinReverse:g.bool,symbol:g.oneOfType([g.bool,g.string]),title:g.string,titleId:g.string,transform:g.oneOfType([g.string,g.object]),swapOpacity:g.bool};var ni=yn.bind(null,Le.createElement);function xi(){const t=kn();return $.useEffect(()=>{if(t.hash){const e=t.hash.replace("#",""),n=document.getElementById(e);n&&n.scrollIntoView({behavior:"smooth"})}},[t]),d.jsxs("section",{className:"page page-home",children:[d.jsx(Fn,{}),d.jsx(Nn,{text:"HARPAVILJONGEN"}),d.jsxs("section",{className:"page__top-section",children:[d.jsx(U,{text:"MENY",link:"/menu"}),d.jsx(U,{text:"ÖPPETTIDER",link:"#openingHours"}),d.jsx(U,{text:"VINLISTA",link:"/wine-list"})]}),d.jsx(Sn,{}),d.jsx(te,{menuId:"menu-lunch",img:Pn}),d.jsxs(ne,{children:[d.jsx(te,{menuId:"menu-wine",img:Ln}),d.jsx(Mn,{img:Rn})]}),d.jsx(ne,{children:d.jsx(Dn,{})}),d.jsx(U,{text:"TILL TOPPEN",link:"#top"}),d.jsx(On,{})]})}export{xi as default};
