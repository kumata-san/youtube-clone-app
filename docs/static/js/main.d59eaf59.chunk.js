(this["webpackJsonpyoutube-api"]=this["webpackJsonpyoutube-api"]||[]).push([[0],{48:function(e,t,a){e.exports=a(74)},74:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(7),c=a.n(i),l=a(26),o=a.n(l),s=a(39),u=a(18),m=a(19),d=a(23),p=a(20),h=a(24),v=a(104),b=a(99),f=a(105),E=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={searchTerm:""},a.handleChange=function(e){return a.setState({searchTerm:e.target.value})},a.handleSubmit=function(e){var t=a.state.searchTerm;(0,a.props.onFormSubmit)(t),e.preventDefault()},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement(b.a,{elevation:6,style:{padding:"25px"}},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement(f.a,{fullWidth:!0,label:"Search...",onChange:this.handleChange})))}}]),t}(r.a.Component),y=a(103),g=function(e){var t=e.video;if(!t)return r.a.createElement("div",null,"Loading...");console.log(t);var a="https://www.youtube.com/embed/".concat(t.id.videoId);return r.a.createElement(r.a.Fragment,null,r.a.createElement(b.a,{elevation:6,style:{height:"70%"}},r.a.createElement("iframe",{frameBorder:"0",height:"100%",width:"100%",title:"Video Player",src:a})),r.a.createElement(b.a,{elevation:6,style:{padding:"15px"}},r.a.createElement(y.a,{variant:"h4"},t.snippet.title," - ",t.snippet.channelTitle),r.a.createElement(y.a,{variant:"subtitle1"},t.snippet.channelTitle),r.a.createElement(y.a,{variant:"subtitle2"},t.snippet.description)))},S=function(e){var t=e.video,a=e.onVideoSelect;return r.a.createElement(v.a,{item:!0,xs:12},r.a.createElement(b.a,{style:{display:"flex",alignItems:"center",cursor:"pointer"},onClick:function(){return a(t)}},r.a.createElement("img",{style:{marginRight:"20px"},alt:"thumbnail",src:t.snippet.thumbnails.medium.url}),r.a.createElement(y.a,{variant:"subtitle1"},r.a.createElement("b",null,t.snippet.title))))},V=function(e){var t=e.videos,a=e.onVideoSelect,n=t.map((function(e,t){return r.a.createElement(S,{onVideoSelect:a,key:t,video:e})}));return r.a.createElement(v.a,{container:!0,spacing:10},n)},j=a(44),w=a.n(j).a.create({baseURL:"https://www.googleapis.com/youtube/v3"}),x=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={videos:[],selectedVideo:null},a.onVideoSelect=function(e){a.setState({selectedVideo:e})},a.handleSubmit=function(){var e=Object(s.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.get("search",{params:{part:"snippet",maxResults:5,key:"AIzaSyBfVkRepOrVajXeVe8nrfNXr4OK8M2bttY",q:t}});case 2:n=e.sent,a.setState({videos:n.data.items,selectedVideo:n.data.items[0]});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.handleSubmit("\u306d\u3053")}},{key:"render",value:function(){var e=this.state,t=e.selectedVideo,a=e.videos;return r.a.createElement(v.a,{justify:"center",container:!0,spacing:10},r.a.createElement(v.a,{item:!0,xs:12},r.a.createElement(v.a,{container:!0,spacing:10},r.a.createElement(v.a,{item:!0,xs:12},r.a.createElement(E,{onFormSubmit:this.handleSubmit})),r.a.createElement(v.a,{item:!0,xs:8},r.a.createElement(g,{video:t})),r.a.createElement(v.a,{item:!0,xs:4},r.a.createElement(V,{videos:a,onVideoSelect:this.onVideoSelect})))))}}]),t}(r.a.Component);c.a.render(r.a.createElement(x,null),document.querySelector("#root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.d59eaf59.chunk.js.map