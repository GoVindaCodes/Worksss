(this["webpackJsonpdashtar-admin"]=this["webpackJsonpdashtar-admin"]||[]).push([[33],{1119:function(e,a,s){"use strict";a.a=s.p+"static/media/forgot-password-office.d1630a33.jpeg"},1120:function(e,a,s){"use strict";a.a=s.p+"static/media/forgot-password-office-dark.d1630a33.jpeg"},1231:function(e,a,s){"use strict";s.r(a);s(0);var t=s(63),r=s(35),o=s(90),c=s(762),i=s(65),l=s(92),n=s(1119),d=s(1120),m=s(2);a.default=()=>{const{onSubmit:e,register:a,handleSubmit:s,errors:b,loading:h}=Object(c.a)();return Object(m.jsx)("div",{className:"flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900",children:Object(m.jsx)("div",{className:"flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800",children:Object(m.jsxs)("div",{className:"flex flex-col overflow-y-auto md:flex-row",children:[Object(m.jsxs)("div",{className:"h-32 md:h-auto md:w-1/2",children:[Object(m.jsx)("img",{"aria-hidden":"true",className:"object-cover w-full h-full dark:hidden",src:n.a,alt:"Office"}),Object(m.jsx)("img",{"aria-hidden":"true",className:"hidden object-cover w-full h-full dark:block",src:d.a,alt:"Office"})]}),Object(m.jsx)("main",{className:"flex items-center justify-center p-6 sm:p-12 md:w-1/2",children:Object(m.jsxs)("div",{className:"w-full",children:[Object(m.jsx)("h1",{className:"mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200",children:"Forgot password"}),Object(m.jsxs)("form",{onSubmit:s(e),children:[Object(m.jsx)(i.a,{label:"Email"}),Object(m.jsx)(l.a,{register:a,label:"Email",name:"verifyEmail",type:"email",placeholder:"john@doe.com"}),Object(m.jsx)(o.a,{errorName:b.verifyEmail}),Object(m.jsx)(r.Button,{disabled:h,type:"submit",block:!0,className:"mt-4 h-12",children:"Recover password"})]}),Object(m.jsx)("p",{className:"mt-4",children:Object(m.jsx)(t.b,{className:"text-sm font-medium text-green-500 dark:text-green-400 hover:underline",to:"/login",children:"Already have an account? Login"})})]})})]})})})}},762:function(e,a,s){"use strict";var t=s(16),r=s.n(t),o=s(0),c=s(168),i=s(12),l=s(43),n=s(91),d=s(15);a.a=()=>{const[e,a]=Object(o.useState)(!1),{dispatch:s}=Object(o.useContext)(l.a),t=Object(i.useHistory)(),m=Object(i.useLocation)(),{register:b,handleSubmit:h,formState:{errors:j}}=Object(c.a)();return{onSubmit:e=>{let{name:o,email:c,phone:i,verifyEmail:l,password:b,role:h}=e;a(!0);"/login"===m.pathname&&n.a.loginAdmin({email:c,password:b}).then((e=>{setTimeout((()=>{window.location.reload()}),100),e&&e.token&&(r.a.set("adminInfo",JSON.stringify(e),{expires:.5}),a(!1),Object(d.c)("Login Success!"),s({type:"USER_LOGIN",payload:{token:e.token}}),localStorage.setItem("email",c),t.replace("/"))})).catch((e=>{console.error("Login error:",e),Object(d.b)(e?e.response.data.message:e.message),a(!1)})),"/signup"===m.pathname&&n.a.registerAdmin({name:o,email:c,phone:i,password:b,role:h}).then((e=>{e&&(a(!1),Object(d.c)("Register Success!"),s({type:"USER_LOGIN",payload:e}),r.a.set("adminInfo",JSON.stringify(e),{expires:.5}),t.replace("/"))})).catch((e=>{Object(d.b)(e?e.response.data.message:e.message),a(!1)})),"/forgot-password"===m.pathname&&(console.log("Forgot Password form submitted:",l),n.a.forgetPassword({verifyEmail:l}).then((e=>{a(!1),console.log("Password reset response:",e),Object(d.c)(e.message)})).catch((e=>{a(!1),console.error("Password reset error:",e),Object(d.b)(e?e.response.data.message:e.message)})))},register:b,handleSubmit:h,errors:j,loading:e}}}}]);
//# sourceMappingURL=33.b9f76b08.chunk.js.map