(this["webpackJsonpcanof-book"]=this["webpackJsonpcanof-book"]||[]).push([[0],{114:function(e,t,o){},115:function(e,t,o){"use strict";o.r(t);var a=o(2),n=o.n(a),r=o(65),c=o.n(r),s=o(12),i=o(13),d=o(15),l=o(14),p=(o(32),o(36)),j=o(40),h=(o(73),o(16)),u=o(18),O=o(1),b=function(){var e=Object(h.b)().logout;return Object(O.jsx)(u.a,{onClick:function(){return e({returnTo:window.location.origin})},children:"Log Out"})},m=function(){var e=Object(h.b)().loginWithRedirect;return Object(O.jsx)(u.a,{onClick:function(){return e()},children:"Log In"})},x=function(e){Object(d.a)(o,e);var t=Object(l.a)(o);function o(){return Object(s.a)(this,o),t.apply(this,arguments)}return Object(i.a)(o,[{key:"render",value:function(){return Object(O.jsxs)(p.a,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark",children:[Object(O.jsx)(p.a.Brand,{children:"My Favorite Books"}),Object(O.jsx)(j.b,{style:{padding:"30px"},to:"/",children:"Home"}),Object(O.jsx)(j.b,{style:{padding:"30px"},to:"/profile",children:"Profile"}),this.props.auth0.isAuthenticated?Object(O.jsx)(b,{}):Object(O.jsx)(m,{})]})}}]),o}(n.a.Component),f=Object(h.c)(x),v=function(e){Object(d.a)(o,e);var t=Object(l.a)(o);function o(){return Object(s.a)(this,o),t.apply(this,arguments)}return Object(i.a)(o,[{key:"render",value:function(){return this.props.auth0.isLoading?Object(O.jsx)("div",{children:" Loading..."}):this.props.auth0.error?Object(O.jsxs)("div",{children:["Oops... ",this.props.auth0.error.message]}):this.props.children}}]),o}(n.a.Component),k=Object(h.c)(v),S=function(e){Object(d.a)(o,e);var t=Object(l.a)(o);function o(){return Object(s.a)(this,o),t.apply(this,arguments)}return Object(i.a)(o,[{key:"render",value:function(){return Object(O.jsx)(p.a,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark",children:Object(O.jsx)(p.a.Brand,{children:"\xa9 Best Books"})})}}]),o}(n.a.Component),_=o(9),g=function(e){Object(d.a)(o,e);var t=Object(l.a)(o);function o(){return Object(s.a)(this,o),t.apply(this,arguments)}return Object(i.a)(o,[{key:"render",value:function(){var e=this.props.auth0.user;return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("div",{children:["Hello ",e.name]}),Object(O.jsxs)("div",{children:["Email: ",e.email]})]})}}]),o}(a.Component),C=Object(h.c)(g),T=o(28),E=o.n(T),B=o(42),w=o(67),y=(o(95),o(43)),U=o.n(y),D=o(26),R=o(68),I=o(8),P=o(23),N=function(e){Object(d.a)(o,e);var t=Object(l.a)(o);function o(){return Object(s.a)(this,o),t.apply(this,arguments)}return Object(i.a)(o,[{key:"render",value:function(){return Object(O.jsx)("div",{children:Object(O.jsxs)(P.a,{show:this.props.showModal,onHide:this.props.closeModalFx,children:[Object(O.jsx)(P.a.Header,{closeButton:!0,children:Object(O.jsx)(P.a.Title,{children:"Add a Book"})}),Object(O.jsx)(P.a.Body,{children:Object(O.jsxs)(I.a,{onSubmit:this.props.addBook,children:[Object(O.jsxs)(I.a.Group,{controlId:"formBasicEmail",children:[Object(O.jsx)(I.a.Label,{children:"Book Name"}),Object(O.jsx)(I.a.Control,{type:"text",placeholder:"Enter Book Name",name:"bookName",onChange:this.props.updateBookName})]}),Object(O.jsxs)(I.a.Group,{controlId:"formBasicPassword",children:[Object(O.jsx)(I.a.Label,{children:"Description"}),Object(O.jsx)(I.a.Control,{type:"text",placeholder:"Description",name:"description",onChange:this.props.updateDescription})]}),Object(O.jsxs)(I.a.Group,{controlId:"formBasicPassword",children:[Object(O.jsx)(I.a.Label,{children:"Image URL"}),Object(O.jsx)(I.a.Control,{type:"text",placeholder:"Image URL",name:"imgUrl",onChange:this.props.updateImgUrl})]}),Object(O.jsx)(u.a,{variant:"primary",type:"submit",children:"Add Book"})]})}),Object(O.jsx)(P.a.Footer,{children:Object(O.jsx)(u.a,{variant:"secondary",onClick:this.props.closeModalFx,children:"Close"})})]})})}}]),o}(a.Component),F=function(e){Object(d.a)(o,e);var t=Object(l.a)(o);function o(){return Object(s.a)(this,o),t.apply(this,arguments)}return Object(i.a)(o,[{key:"render",value:function(){return Object(O.jsx)("div",{children:Object(O.jsxs)(P.a,{show:this.props.showModal,onHide:this.props.closeModalFx,children:[Object(O.jsx)(P.a.Header,{closeButton:!0,children:Object(O.jsx)(P.a.Title,{children:"Update Book Info"})}),Object(O.jsx)(P.a.Body,{children:Object(O.jsxs)(I.a,{onSubmit:this.props.updateBook,children:[Object(O.jsxs)(I.a.Group,{controlId:"formBasicEmail",children:[Object(O.jsx)(I.a.Label,{children:"Book Name"}),Object(O.jsx)(I.a.Control,{type:"text",placeholder:"Enter Book Name",name:"bookName",onChange:this.props.updateBookName,value:this.props.name})]}),Object(O.jsxs)(I.a.Group,{controlId:"formBasicPassword",children:[Object(O.jsx)(I.a.Label,{children:"Description"}),Object(O.jsx)(I.a.Control,{type:"text",placeholder:"Description",name:"description",onChange:this.props.updateDescription,value:this.props.description})]}),Object(O.jsxs)(I.a.Group,{controlId:"formBasicPassword",children:[Object(O.jsx)(I.a.Label,{children:"Image URL"}),Object(O.jsx)(I.a.Control,{type:"text",placeholder:"Image URL",name:"imgUrl",onChange:this.props.updateImgUrl,value:this.props.img})]}),Object(O.jsx)(u.a,{variant:"primary",type:"submit",children:"Update Info"})]})}),Object(O.jsx)(P.a.Footer,{children:Object(O.jsx)(u.a,{variant:"secondary",onClick:this.props.closeModalFx,children:"Close"})})]})})}}]),o}(a.Component),A=function(e){Object(d.a)(o,e);var t=Object(l.a)(o);function o(e){var a;return Object(s.a)(this,o),(a=t.call(this,e)).componentDidMount=Object(B.a)(E.a.mark((function e(){var t;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U.a.get("".concat(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_ROUTE,"/books"),{params:{email:a.props.auth0.user.email}});case 2:t=e.sent,console.log("books",t.data),a.setState({books:t.data,showBooks:!0});case 5:case"end":return e.stop()}}),e)}))),a.handleShowModal=function(){a.setState({showModal:!0})},a.handleCloseModal=function(){a.setState({showModal:!1,showUpdateForm:!1})},a.updateBookName=function(e){a.setState({bookName:e.target.value}),console.log(a.state.bookName)},a.updateDescription=function(e){a.setState({description:e.target.value}),console.log(a.state.description)},a.updateImgUrl=function(e){a.setState({imgUrl:e.target.value}),console.log(a.state.imgUrl)},a.addBook=function(){var e=Object(B.a)(E.a.mark((function e(t){var o,n;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),o={name:a.state.bookName,description:a.state.description,img:a.state.imgUrl,email:a.props.auth0.user.email},e.next=4,U.a.post("".concat(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_ROUTE,"/addBooks"),o);case 4:n=e.sent,a.setState({books:n.data,showModal:!1});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.deleteBook=function(){var e=Object(B.a)(E.a.mark((function e(t){var o,n;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o={email:a.props.auth0.user.email},e.next=3,U.a.delete("".concat(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_ROUTE,"/deleteBook/").concat(t),{params:o});case 3:n=e.sent,a.setState({books:n.data});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.showUpdateForm=function(e){var t=a.state.books.filter((function(t,o){return e===o}));a.setState({showUpdateForm:!0,index:e,bookName:t[0].name,description:t[0].description,imgUrl:t[0].img})},a.updateBook=function(){var e=Object(B.a)(E.a.mark((function e(t){var o,n;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),o={name:a.state.bookName,description:a.state.description,img:a.state.imgUrl,email:a.props.auth0.user.email},e.next=4,U.a.put("".concat(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_ROUTE,"/updateBook/").concat(a.state.index),o);case 4:n=e.sent,a.setState({showUpdateForm:!1,books:n.data});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.state={books:[],showBooks:!1,showModal:!1,showUpdateForm:!1,bookName:"",description:"",imgUrl:"",index:0},a}return Object(i.a)(o,[{key:"render",value:function(){var e=this;return Object(O.jsxs)(w.a,{children:[Object(O.jsx)("h1",{children:"My Favorite Books"}),Object(O.jsx)("p",{children:"This is a collection of my favorite books"}),Object(O.jsx)(u.a,{variant:"primary",onClick:this.handleShowModal,children:"Add a Book"}),this.state.showModal&&Object(O.jsx)(N,{closeModalFx:this.handleCloseModal,showModal:this.state.showModal,updateBookName:this.updateBookName,updateDescription:this.updateDescription,updateImgUrl:this.updateImgUrl,addBook:this.addBook}),this.state.showUpdateForm&&Object(O.jsx)(F,{closeModalFx:this.handleCloseModal,showModal:this.state.showUpdateForm,updateBookName:this.updateBookName,updateDescription:this.updateDescription,updateImgUrl:this.updateImgUrl,name:this.state.bookName,description:this.state.description,img:this.state.imgUrl,updateBook:this.updateBook}),this.state.showBooks&&Object(O.jsx)(R.a,{children:this.state.books.map((function(t,o){return Object(O.jsx)("div",{children:Object(O.jsxs)(D.a,{style:{width:"18rem"},children:[Object(O.jsx)(D.a.Img,{variant:"top",src:t.img,style:{width:"15rem",height:"16rem",margin:"auto"}}),Object(O.jsxs)(D.a.Body,{children:[Object(O.jsx)(D.a.Title,{children:t.name}),Object(O.jsx)(D.a.Text,{style:{overflow:"auto",height:"5rem"},children:t.description}),Object(O.jsx)(u.a,{variant:"danger",onClick:function(){return e.deleteBook(o)},children:"Delete"}),Object(O.jsx)(u.a,{variant:"primary",onClick:function(){return e.showUpdateForm(o)},children:"Update Info"})]})]})},o)}))})]})}}]),o}(n.a.Component),L=Object(h.c)(A),M=(o(114),function(e){Object(d.a)(o,e);var t=Object(l.a)(o);function o(){return Object(s.a)(this,o),t.apply(this,arguments)}return Object(i.a)(o,[{key:"render",value:function(){return Object(O.jsx)(D.a,{style:{width:"18rem"},children:Object(O.jsxs)(D.a.Body,{children:[Object(O.jsx)(D.a.Title,{children:"Log In"}),Object(O.jsx)(D.a.Text,{children:"Click Below to Log In"}),Object(O.jsx)(m,{})]})})}}]),o}(n.a.Component)),H=function(e){Object(d.a)(o,e);var t=Object(l.a)(o);function o(){return Object(s.a)(this,o),t.apply(this,arguments)}return Object(i.a)(o,[{key:"render",value:function(){return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)(j.a,{children:Object(O.jsxs)(k,{children:[Object(O.jsx)(f,{}),Object(O.jsxs)(_.c,{children:[Object(O.jsx)(_.a,{exact:!0,path:"/",children:this.props.auth0.isAuthenticated?Object(O.jsx)(L,{}):Object(O.jsx)(M,{})}),Object(O.jsx)(_.a,{exact:!0,path:"/profile",children:this.props.auth0.isAuthenticated&&Object(O.jsx)(C,{})})]}),Object(O.jsx)(S,{})]})})})}}]),o}(n.a.Component),W=Object(h.c)(H);c.a.render(Object(O.jsx)(h.a,{domain:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_DOMAIN,clientId:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_CLIENT_ID,redirectUri:window.location.origin,children:Object(O.jsx)(W,{})}),document.getElementById("root"))},73:function(e,t,o){},95:function(e,t,o){}},[[115,1,2]]]);
//# sourceMappingURL=main.50ba68c8.chunk.js.map