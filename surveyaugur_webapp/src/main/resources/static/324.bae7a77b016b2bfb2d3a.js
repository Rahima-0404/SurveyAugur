(self.webpackChunksurveyaugur_webapp=self.webpackChunksurveyaugur_webapp||[]).push([[324],{768:(t,e,n)=>{"use strict";n.r(e),n.d(e,{SurveysModule:()=>B});var o=n(8583),a=n(1095),i=n(4655),r=n(2789),c=n(7716),u=n(1841),s=n(2199),l=n(5939);function d(t,e){1&t&&(c.TgZ(0,"th",13),c._uU(1,"SNo. "),c.qZA())}function h(t,e){if(1&t&&(c.TgZ(0,"td",14),c._uU(1),c.qZA()),2&t){const t=e.index;c.xp6(1),c.hij(" ",t+1," ")}}function m(t,e){1&t&&(c.TgZ(0,"th",13),c._uU(1," SurveyTitle "),c.qZA())}function p(t,e){if(1&t&&(c.TgZ(0,"td",14),c._uU(1),c.qZA()),2&t){const t=e.$implicit;c.xp6(1),c.AsE(" ",t.surveyTitle,",",t.surveyUrl," ")}}function f(t,e){1&t&&(c.TgZ(0,"th",13),c._uU(1," ActivatedOn "),c.qZA())}function v(t,e){if(1&t&&(c.TgZ(0,"td",14),c._uU(1),c.qZA()),2&t){const t=e.$implicit;c.xp6(1),c.hij(" ",t.activatedOn," ")}}function g(t,e){1&t&&(c.TgZ(0,"th",13),c._uU(1," Actions "),c.qZA())}function y(t,e){1&t&&(c.TgZ(0,"td",14),c.TgZ(1,"button",15),c._uU(2,"Preview"),c.qZA(),c._uU(3,"\xa0\xa0\xa0 "),c.TgZ(4,"button",16),c._uU(5,"DeActivate"),c.qZA(),c.qZA())}function Z(t,e){1&t&&c._UZ(0,"tr",17)}function w(t,e){1&t&&c._UZ(0,"tr",18)}function b(t,e){1&t&&(c.TgZ(0,"th",13),c._uU(1,"SNo. "),c.qZA())}function _(t,e){if(1&t&&(c.TgZ(0,"td",14),c._uU(1),c.qZA()),2&t){const t=e.index;c.xp6(1),c.hij(" ",t+1," ")}}function A(t,e){1&t&&(c.TgZ(0,"th",13),c._uU(1," SurveyTitle "),c.qZA())}function S(t,e){if(1&t&&(c.TgZ(0,"td",14),c._uU(1),c.qZA()),2&t){const t=e.$implicit;c.xp6(1),c.hij(" ",t.title," ")}}function U(t,e){1&t&&(c.TgZ(0,"th",13),c._uU(1," CreatedOn "),c.qZA())}function C(t,e){if(1&t&&(c.TgZ(0,"td",14),c._uU(1),c.qZA()),2&t){const t=e.$implicit;c.xp6(1),c.hij(" ",t.createdOn," ")}}function T(t,e){1&t&&(c.TgZ(0,"th",13),c._uU(1," Actions "),c.qZA())}function x(t,e){1&t&&(c.TgZ(0,"td",14),c.TgZ(1,"button",15),c._uU(2,"Preview"),c.qZA(),c._uU(3,"\xa0\xa0\xa0 "),c.TgZ(4,"button",16),c._uU(5,"Activate"),c.qZA(),c.qZA())}function k(t,e){1&t&&c._UZ(0,"tr",17)}function q(t,e){1&t&&c._UZ(0,"tr",18)}const N=[{path:"",component:(()=>{class t{constructor(t,e){this.http=t,this.user=e,this.displayedColumns=["position","name","updates","Actions"],this.activeById=[],this.inactiveSurvey=[],this.activeSurvey=[],this.id="ca9dac86-f327-4491-9e46-3400a3a996b4"}ngOnInit(){setInterval(()=>this.http.get("/surveyauthor/api/v1/surveys/users/ca9dac86-f327-4491-9e46-3400a3a996b4").subscribe(t=>{this.inactiveSurvey=[],this.inactiveSurvey=t.result,console.log(t),console.log(this.inactiveSurvey),this.dataSource1=new r.by(this.inactiveSurvey)}),10),setInterval(()=>{this.http.get("/surveyengine/api/v1/surveys").subscribe(t=>{console.log(t.result),this.activeSurvey=t.result,console.log(this.activeSurvey),this.activeById=[],this.getById(),console.log(this.activeById),this.dataSource=new r.by(this.activeById)})},10)}getById(){for(let t=0;t<this.activeSurvey.length;t++)this.activeSurvey[t].createdBy.toString()===this.id.toString()&&this.activeById.push(this.activeSurvey[t])}}return t.\u0275fac=function(e){return new(e||t)(c.Y36(u.eN),c.Y36(s._))},t.\u0275cmp=c.Xpm({type:t,selectors:[["app-surveys"]],decls:40,vars:6,consts:[[1,"sub-heading"],[2,"width","100%"],["label","Active Surveys"],["mat-table","",1,"mat-elevation-z8",3,"dataSource"],["matColumnDef","position"],["mat-header-cell","","class","tableHeader",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","name"],["matColumnDef","updates"],["matColumnDef","Actions"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["label","InActive Surveys"],["mat-header-cell","",1,"tableHeader"],["mat-cell",""],["mat-raised-button","","color","accent",2,"width","6em"],["mat-raised-button","","color","primary",2,"width","7em"],["mat-header-row",""],["mat-row",""]],template:function(t,e){1&t&&(c.TgZ(0,"p",0),c._uU(1,"Surveys"),c.qZA(),c._UZ(2,"hr",1),c.TgZ(3,"mat-tab-group"),c.TgZ(4,"mat-tab",2),c._UZ(5,"br"),c._UZ(6,"br"),c.TgZ(7,"table",3),c.ynx(8,4),c.YNc(9,d,2,0,"th",5),c.YNc(10,h,2,1,"td",6),c.BQk(),c.ynx(11,7),c.YNc(12,m,2,0,"th",5),c.YNc(13,p,2,2,"td",6),c.BQk(),c.ynx(14,8),c.YNc(15,f,2,0,"th",5),c.YNc(16,v,2,1,"td",6),c.BQk(),c.ynx(17,9),c.YNc(18,g,2,0,"th",5),c.YNc(19,y,6,0,"td",6),c.BQk(),c.YNc(20,Z,1,0,"tr",10),c.YNc(21,w,1,0,"tr",11),c.qZA(),c.qZA(),c.TgZ(22,"mat-tab",12),c._UZ(23,"br"),c._UZ(24,"br"),c.TgZ(25,"table",3),c.ynx(26,4),c.YNc(27,b,2,0,"th",5),c.YNc(28,_,2,1,"td",6),c.BQk(),c.ynx(29,7),c.YNc(30,A,2,0,"th",5),c.YNc(31,S,2,1,"td",6),c.BQk(),c.ynx(32,8),c.YNc(33,U,2,0,"th",5),c.YNc(34,C,2,1,"td",6),c.BQk(),c.ynx(35,9),c.YNc(36,T,2,0,"th",5),c.YNc(37,x,6,0,"td",6),c.BQk(),c.YNc(38,k,1,0,"tr",10),c.YNc(39,q,1,0,"tr",11),c.qZA(),c.qZA(),c.qZA()),2&t&&(c.xp6(7),c.Q6J("dataSource",e.dataSource),c.xp6(13),c.Q6J("matHeaderRowDef",e.displayedColumns),c.xp6(1),c.Q6J("matRowDefColumns",e.displayedColumns),c.xp6(4),c.Q6J("dataSource",e.dataSource1),c.xp6(13),c.Q6J("matHeaderRowDef",e.displayedColumns),c.xp6(1),c.Q6J("matRowDefColumns",e.displayedColumns))},directives:[l.SP,l.uX,r.BZ,r.w1,r.fO,r.Dz,r.as,r.nj,r.ge,r.ev,a.lW,r.XQ,r.Gk],styles:[".sub-heading[_ngcontent-%COMP%]{font-size:18px;font-weight:700;font-family:Roboto}.mat-tab-lables[_ngcontent-%COMP%]{flex:50%;flex-wrap:wrap;justify-content:space-around;align-content:stretch;align-items:baseline;flex-direction:row}.Active[_ngcontent-%COMP%]   Surveys[_ngcontent-%COMP%]   .div[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]{background-color:blue}table[_ngcontent-%COMP%]{width:100%}.tableHeader[_ngcontent-%COMP%]{background-color:#1e90ff;font-size:medium;justify-content:center}.mat-column-position[_ngcontent-%COMP%]{word-wrap:break-word!important;white-space:unset!important;flex:0 0 0%!important;width:20%!important;overflow-wrap:break-word;word-wrap:break-word;word-break:break-word;-webkit-hyphens:auto;hyphens:auto}.mat-column-Actions[_ngcontent-%COMP%], .mat-column-name[_ngcontent-%COMP%]{justify-content:center}.mat-column-Actions[_ngcontent-%COMP%]{word-wrap:break-word!important;white-space:unset!important;flex:0 0 0%!important;width:20%!important;overflow-wrap:break-word;word-wrap:break-word;word-break:break-word;-webkit-hyphens:auto;hyphens:auto}"]}),t})()}];let Y=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=c.oAB({type:t}),t.\u0275inj=c.cJS({imports:[[i.Bz.forChild(N)],i.Bz]}),t})(),B=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=c.oAB({type:t}),t.\u0275inj=c.cJS({imports:[[o.ez,Y,l.Nh,u.JF,a.ot,r.p0]]}),t})()}}]);