(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{403:function(t,a,s){"use strict";s.r(a);var n=s(13),e=Object(n.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuration"}},[t._v("#")]),t._v(" Configuration")]),t._v(" "),a("h4",{attrs:{id:"directory-structure"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#directory-structure"}},[t._v("#")]),t._v(" directory structure")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("sqldev ---------------------------------- /opt/sqldev application directory\n├── config ------------------------------ configuration "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("file")]),t._v(" directory\n│ ├── __global___.ini\n│ ├── app.ini ------------------------- application configuration\n│ ├── gorm.ini ------------------------ Database configuration\n│ └── sqldev.ini ---------------------- System configuration\n├── sqldev ------------------------------ binary "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("upgrade"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n├── install.sh -------------------------- installation script\n├─ init.sh ----------------------------- initialization script\n├── start.sh ---------------------------- Start script\n└── stop.sh ----------------------------- "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("shutdown")]),t._v(" script\n\n\nðŸ™"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("' ðŸ™'")]),t._v("\n\n\nNote: Because of the development framework used, some configuration items are not related to the application, so they are not listed anymore, only the application-related configuration items and their descriptions are shown.\n\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#### app.ini configuration description")]),t._v("\n```ini\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#max_rows")]),t._v("\nmax_rows "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10000")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#cas login server.")]),t._v("\ncas_server "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" https://cas.login.abc.com\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#front-end application server address")]),t._v("\nui_server "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" http://sqldev.abc.com\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#login mode")]),t._v("\nlogin_mode "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" normal\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#File export directory")]),t._v("\nexport_path "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" /opt/sqldev/export\nexport_patch "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("\nexport_timeout "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("300")]),t._v("\nlog_path "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v(" /log/\nexport_batch "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Registration Code")]),t._v("\nlicense "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" xxx\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#redis database configuration")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("redis"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\npool_size "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("host")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),t._v(".0.1\nport "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6379")]),t._v("\npassword "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("\n")])])]),a("h4",{attrs:{id:"gorm-ini-configuration-instructions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gorm-ini-configuration-instructions"}},[t._v("#")]),t._v(" gorm.ini configuration instructions")]),t._v(" "),a("div",{staticClass:"language-ini extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ini"}},[a("code",[a("span",{pre:!0,attrs:{class:"token section"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token section-name selector"}},[t._v("default")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("name")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("app")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("enable")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("true")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("driver")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("mysql")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#SQLDEV application database")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("connstring")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("root:root@tcp(127.0.0.1:3306)/sqldev?charset=utf8&parseTime=true&loc=Asia%2FShanghai")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("max_open_conns")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("100")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("max_idle_conns")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("100")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#Whether to print database statements")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("show_sql")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("false")]),t._v("\n")])])]),a("h4",{attrs:{id:"sqldev-ini-configuration-notes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sqldev-ini-configuration-notes"}},[t._v("#")]),t._v(" sqldev.ini Configuration Notes")]),t._v(" "),a("div",{staticClass:"language-ini extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ini"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#Application port")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("addrs")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("0.0.0.0:9000")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);