import r from"./BQaoFdns.js";import{a}from"./1nJOKNTF.js";import{_ as i,o as d,c as l,e as o,a9 as n,d as e,I as u}from"./BEg39ow_.js";import"./B6PznI4H.js";const _={class:"popup fixed left-0 top-0 w-full h-full flex flex-wrap px-4 sm:px-16 py-20 text-white"},h=["innerHTML"],m={class:"flex lg:w-2/3 lg:pr-20 my-3"},p={class:"lg:w-1/3 flex flex-col justify-between relative z-50"},x=["innerHTML"],f=["innerHTML"],k={class:"mt-3"},g=["href"],v={__name:"Popup",props:{title:{type:String},text:{type:String},videoUrl:{type:String},projectUrl:{type:String},techStack:{type:String}},setup(t){const c=a(document.body);return d(()=>{c.value=!0}),(y,b)=>{const s=r;return o(),l("div",_,[t.title?(o(),l("h3",{key:0,innerHTML:t.title,class:"text-40 md:text-80 font-bold block lg:hidden"},null,8,h)):n("",!0),e("div",m,[t.videoUrl?(o(),u(s,{key:0,src:t.videoUrl,autoplay:!0,preload:"metadata",controls:!1,muted:!0,loop:!0,class:"aspect-video"},null,8,["src"])):n("",!0)]),e("div",p,[t.title?(o(),l("h3",{key:0,innerHTML:t.title,class:"text-80 !font-bold hidden lg:block"},null,8,x)):n("",!0),e("h4",{innerHTML:`Tech Stach: ${t.techStack}`,class:"text-18 lg:text-24"},null,8,f),e("div",k,[e("a",{target:"_blank",href:t.projectUrl,class:"text-18 lg:text-24 link reversed"},"Website",8,g)])])])}}},w=i(v,[["__scopeId","data-v-4989b191"]]);export{w as default};
