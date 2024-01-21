import{G as f,r as u,j as e,a as y,b as N}from"./index-u8xbBGD0.js";import{B as h}from"./button-sEAzYWy9.js";import{u as Q,a as w,E as q}from"./index.esm-RQ_3Pb1y.js";import{u as C}from"./use-question-context-pgDizof8.js";function S(r){return f({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.496 6.033a.237.237 0 0 1-.24-.247C5.35 4.091 6.737 3.5 8.005 3.5c1.396 0 2.672.73 2.672 2.24 0 1.08-.635 1.594-1.244 2.057-.737.559-1.01.768-1.01 1.486v.105a.25.25 0 0 1-.25.25h-.81a.25.25 0 0 1-.25-.246l-.004-.217c-.038-.927.495-1.498 1.168-1.987.59-.444.965-.736.965-1.371 0-.825-.628-1.168-1.314-1.168-.803 0-1.253.478-1.342 1.134-.018.137-.128.25-.266.25h-.825zm2.325 6.443c-.584 0-1.009-.394-1.009-.927 0-.552.425-.94 1.01-.94.609 0 1.028.388 1.028.94 0 .533-.42.927-1.029.927z"},child:[]}]})(r)}function z(r){return f({tag:"svg",attr:{version:"1.2",baseProfile:"tiny",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12 4c-4.419 0-8 3.582-8 8s3.581 8 8 8 8-3.582 8-8-3.581-8-8-8zm3.707 10.293c.391.391.391 1.023 0 1.414-.195.195-.451.293-.707.293s-.512-.098-.707-.293l-2.293-2.293-2.293 2.293c-.195.195-.451.293-.707.293s-.512-.098-.707-.293c-.391-.391-.391-1.023 0-1.414l2.293-2.293-2.293-2.293c-.391-.391-.391-1.023 0-1.414s1.023-.391 1.414 0l2.293 2.293 2.293-2.293c.391-.391 1.023-.391 1.414 0s.391 1.023 0 1.414l-2.293 2.293 2.293 2.293z"},child:[]}]})(r)}const E=({onSubmit:r,question:t})=>{const[c,d]=u.useState(!1),{register:n,handleSubmit:s,control:o,formState:{errors:i},setValue:l}=Q(),{fields:m,append:p,remove:v}=w({control:o,name:"options"}),g=a=>{r(a)},j=()=>{d(!1),p({title:"",value:0})},b=a=>{v(a)};return u.useEffect(()=>{t&&(l("question",t.question),t.options.forEach(a=>{p({title:a.title,value:a.value})}))},[t,l,p]),e.jsxs("form",{onSubmit:s(g),className:"max-w-md mx-auto mt-8 p-4 bg-gray-100 rounded-md",children:[e.jsxs("div",{className:"relative",children:[e.jsx("div",{className:"pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3",children:e.jsx(S,{className:"h-6 w-6 text-gray-400"})}),e.jsx("input",{type:"text",id:"question",placeholder:"Enter your Question",...n("question",{required:{value:!0,message:"Question text is required."}}),className:"text-input pl-10"})]}),i.question&&i.question.message&&e.jsx(q,{message:i.question.message}),!c&&e.jsxs("div",{className:"my-4",children:[e.jsx("label",{htmlFor:"options",className:"block text-gray-700 text-sm font-bold mb-2",children:"Options"}),m.map((a,x)=>e.jsxs("div",{className:"flex items-center justify-between gap-3 mb-2",children:[e.jsx("input",{type:"text",placeholder:"Option",...n(`options.${x}.title`,{required:"Option text is required"}),defaultValue:a.value,className:"text-input"}),e.jsx("input",{type:"number",placeholder:"Points",...n(`options.${x}.value`,{required:"Option value is required",valueAsNumber:!0}),defaultValue:a.value,className:"text-input"}),e.jsx(z,{className:"w-16 h-16 text-danger-default hover:text-danger-dark",onClick:()=>b(x)})]},a.id)),e.jsx(h,{type:"button",variant:"ghost",handleClick:j,children:e.jsx("p",{children:"Add Another Option"})})]}),e.jsx(h,{type:"submit",variant:"primary",children:t?"Update Question":"Create Question"})]})},F=()=>{const r=y(),{questions:t,setQuestions:c}=C(),[d,n]=u.useState(void 0),s=N();return u.useEffect(()=>{s.id&&n(t==null?void 0:t.find((o,i)=>i===+s.id))},[s,t]),e.jsxs("div",{children:[e.jsx("h3",{className:"text-center",children:s!=null&&s.id?"Update your Question for the Quiz":"Create a new Question for the Quiz"}),e.jsx("div",{className:"w-fit ml-auto",children:e.jsx(h,{variant:"secondary",handleClick:()=>r(-1),children:"Go Back"})}),e.jsx(E,{question:d,onSubmit:o=>{let i=[];s.id?i=t==null?void 0:t.map((l,m)=>+s.id===m?o:l):i=[...t,o],c(i),r("/quiz-app/questions")}})]})};export{F as default};