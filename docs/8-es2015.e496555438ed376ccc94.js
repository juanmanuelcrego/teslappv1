(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{zrcO:function(e,t,r){"use strict";r.r(t),r.d(t,"UsersModule",(function(){return q}));var s=r("3Pt+"),i=r("ofXK"),n=r("tyNb"),c=r("fXoL");let o=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=c.Gb({type:e,selectors:[["ng-component"]],decls:3,vars:0,consts:[[1,"p-4"],[1,"container"]],template:function(e,t){1&e&&(c.Rb(0,"div",0),c.Rb(1,"div",1),c.Nb(2,"router-outlet"),c.Qb(),c.Qb())},directives:[n.g],encapsulation:2}),e})();var b=r("SxV6"),a=r("J9tS");function d(e,t){1&e&&c.Nb(0,"span",10)}function u(e,t){1&e&&(c.Rb(0,"span"),c.Cc(1,"Delete"),c.Qb())}function f(e,t){if(1&e){const e=c.Sb();c.Rb(0,"tr"),c.Rb(1,"td"),c.Cc(2),c.Qb(),c.Rb(3,"td"),c.Cc(4),c.Qb(),c.Rb(5,"td"),c.Cc(6),c.Qb(),c.Rb(7,"td",6),c.Rb(8,"a",7),c.Cc(9,"Edit"),c.Qb(),c.Rb(10,"button",8),c.dc("click",(function(){c.tc(e);const r=t.$implicit;return c.fc().deleteUser(r.id)})),c.Ac(11,d,1,0,"span",9),c.Ac(12,u,2,0,"span",5),c.Qb(),c.Qb(),c.Qb()}if(2&e){const e=t.$implicit;c.zb(2),c.Dc(e.firstName),c.zb(2),c.Dc(e.lastName),c.zb(2),c.Dc(e.username),c.zb(2),c.mc("routerLink","edit/",e.id,""),c.zb(2),c.kc("disabled",e.isDeleting),c.zb(1),c.kc("ngIf",e.isDeleting),c.zb(1),c.kc("ngIf",!e.isDeleting)}}function l(e,t){1&e&&(c.Rb(0,"tr"),c.Rb(1,"td",11),c.Nb(2,"span",12),c.Qb(),c.Qb())}let m=(()=>{class e{constructor(e){this.accountService=e,this.users=null}ngOnInit(){this.accountService.getAll().pipe(Object(b.a)()).subscribe(e=>this.users=e)}deleteUser(e){this.users.find(t=>t.id===e).isDeleting=!0,this.accountService.delete(e).pipe(Object(b.a)()).subscribe(()=>{this.users=this.users.filter(t=>t.id!==e)})}}return e.\u0275fac=function(t){return new(t||e)(c.Mb(a.a))},e.\u0275cmp=c.Gb({type:e,selectors:[["ng-component"]],decls:17,vars:2,consts:[["routerLink","add",1,"btn","btn-sm","btn-success","mb-2"],[1,"table","table-striped"],[2,"width","30%"],[2,"width","10%"],[4,"ngFor","ngForOf"],[4,"ngIf"],[2,"white-space","nowrap"],[1,"btn","btn-sm","btn-primary","mr-1",3,"routerLink"],[1,"btn","btn-sm","btn-danger","btn-delete-user",3,"disabled","click"],["class","spinner-border spinner-border-sm",4,"ngIf"],[1,"spinner-border","spinner-border-sm"],["colspan","4",1,"text-center"],[1,"spinner-border","spinner-border-lg","align-center"]],template:function(e,t){1&e&&(c.Rb(0,"h1"),c.Cc(1,"Users"),c.Qb(),c.Rb(2,"a",0),c.Cc(3,"Add User"),c.Qb(),c.Rb(4,"table",1),c.Rb(5,"thead"),c.Rb(6,"tr"),c.Rb(7,"th",2),c.Cc(8,"First Name"),c.Qb(),c.Rb(9,"th",2),c.Cc(10,"Last Name"),c.Qb(),c.Rb(11,"th",2),c.Cc(12,"Username"),c.Qb(),c.Nb(13,"th",3),c.Qb(),c.Qb(),c.Rb(14,"tbody"),c.Ac(15,f,13,7,"tr",4),c.Ac(16,l,3,0,"tr",5),c.Qb(),c.Qb()),2&e&&(c.zb(15),c.kc("ngForOf",t.users),c.zb(1),c.kc("ngIf",!t.users))},directives:[n.e,i.k,i.l],encapsulation:2}),e})();function p(e,t){1&e&&(c.Rb(0,"h1"),c.Cc(1,"Add User"),c.Qb())}function h(e,t){1&e&&(c.Rb(0,"h1"),c.Cc(1,"Edit User"),c.Qb())}function g(e,t){1&e&&(c.Rb(0,"div"),c.Cc(1,"First Name is required"),c.Qb())}function v(e,t){if(1&e&&(c.Rb(0,"div",17),c.Ac(1,g,2,0,"div",0),c.Qb()),2&e){const e=c.fc();c.zb(1),c.kc("ngIf",e.f.firstName.errors.required)}}function R(e,t){1&e&&(c.Rb(0,"div"),c.Cc(1,"Last Name is required"),c.Qb())}function Q(e,t){if(1&e&&(c.Rb(0,"div",17),c.Ac(1,R,2,0,"div",0),c.Qb()),2&e){const e=c.fc();c.zb(1),c.kc("ngIf",e.f.lastName.errors.required)}}function k(e,t){1&e&&(c.Rb(0,"div"),c.Cc(1,"Username is required"),c.Qb())}function C(e,t){if(1&e&&(c.Rb(0,"div",17),c.Ac(1,k,2,0,"div",0),c.Qb()),2&e){const e=c.fc();c.zb(1),c.kc("ngIf",e.f.username.errors.required)}}function N(e,t){1&e&&(c.Rb(0,"em"),c.Cc(1,"(Leave blank to keep the same password)"),c.Qb())}function A(e,t){1&e&&(c.Rb(0,"div"),c.Cc(1,"Password is required"),c.Qb())}function w(e,t){1&e&&(c.Rb(0,"div"),c.Cc(1,"Password must be at least 6 characters"),c.Qb())}function z(e,t){if(1&e&&(c.Rb(0,"div",17),c.Ac(1,A,2,0,"div",0),c.Ac(2,w,2,0,"div",0),c.Qb()),2&e){const e=c.fc();c.zb(1),c.kc("ngIf",e.f.password.errors.required),c.zb(1),c.kc("ngIf",e.f.password.errors.minlength)}}function I(e,t){1&e&&c.Nb(0,"span",18)}const S=function(e){return{"is-invalid":e}};let y=(()=>{class e{constructor(e,t,r,s,i){this.formBuilder=e,this.route=t,this.router=r,this.accountService=s,this.alertService=i,this.loading=!1,this.submitted=!1}ngOnInit(){this.id=this.route.snapshot.params.id,this.isAddMode=!this.id;const e=[s.m.minLength(6)];this.isAddMode&&e.push(s.m.required),this.form=this.formBuilder.group({firstName:["",s.m.required],lastName:["",s.m.required],username:["",s.m.required],password:["",e]}),this.isAddMode||this.accountService.getById(this.id).pipe(Object(b.a)()).subscribe(e=>{this.f.firstName.setValue(e.firstName),this.f.lastName.setValue(e.lastName),this.f.username.setValue(e.username)})}get f(){return this.form.controls}onSubmit(){this.submitted=!0,this.alertService.clear(),this.form.invalid||(this.loading=!0,this.isAddMode?this.createUser():this.updateUser())}createUser(){this.accountService.register(this.form.value).pipe(Object(b.a)()).subscribe(e=>{this.alertService.success("User added successfully",{keepAfterRouteChange:!0}),this.router.navigate([".",{relativeTo:this.route}])},e=>{this.alertService.error(e),this.loading=!1})}updateUser(){this.accountService.update(this.id,this.form.value).pipe(Object(b.a)()).subscribe(e=>{this.alertService.success("Update successful",{keepAfterRouteChange:!0}),this.router.navigate(["..",{relativeTo:this.route}])},e=>{this.alertService.error(e),this.loading=!1})}}return e.\u0275fac=function(t){return new(t||e)(c.Mb(s.b),c.Mb(n.a),c.Mb(n.c),c.Mb(a.a),c.Mb(a.b))},e.\u0275cmp=c.Gb({type:e,selectors:[["ng-component"]],decls:32,vars:22,consts:[[4,"ngIf"],[3,"formGroup","ngSubmit"],[1,"form-row"],[1,"form-group","col"],["for","firstName"],["type","text","formControlName","firstName",1,"form-control",3,"ngClass"],["class","invalid-feedback",4,"ngIf"],["for","lastName"],["type","text","formControlName","lastName",1,"form-control",3,"ngClass"],["for","username"],["type","text","formControlName","username",1,"form-control",3,"ngClass"],["for","password"],["type","password","formControlName","password",1,"form-control",3,"ngClass"],[1,"form-group"],[1,"btn","btn-primary",3,"disabled"],["class","spinner-border spinner-border-sm mr-1",4,"ngIf"],["routerLink","/users",1,"btn","btn-link"],[1,"invalid-feedback"],[1,"spinner-border","spinner-border-sm","mr-1"]],template:function(e,t){1&e&&(c.Ac(0,p,2,0,"h1",0),c.Ac(1,h,2,0,"h1",0),c.Rb(2,"form",1),c.dc("ngSubmit",(function(){return t.onSubmit()})),c.Rb(3,"div",2),c.Rb(4,"div",3),c.Rb(5,"label",4),c.Cc(6,"First Name"),c.Qb(),c.Nb(7,"input",5),c.Ac(8,v,2,1,"div",6),c.Qb(),c.Rb(9,"div",3),c.Rb(10,"label",7),c.Cc(11,"Last Name"),c.Qb(),c.Nb(12,"input",8),c.Ac(13,Q,2,1,"div",6),c.Qb(),c.Qb(),c.Rb(14,"div",2),c.Rb(15,"div",3),c.Rb(16,"label",9),c.Cc(17,"Username"),c.Qb(),c.Nb(18,"input",10),c.Ac(19,C,2,1,"div",6),c.Qb(),c.Rb(20,"div",3),c.Rb(21,"label",11),c.Cc(22," Password "),c.Ac(23,N,2,0,"em",0),c.Qb(),c.Nb(24,"input",12),c.Ac(25,z,3,2,"div",6),c.Qb(),c.Qb(),c.Rb(26,"div",13),c.Rb(27,"button",14),c.Ac(28,I,1,0,"span",15),c.Cc(29," Save "),c.Qb(),c.Rb(30,"a",16),c.Cc(31,"Cancel"),c.Qb(),c.Qb(),c.Qb()),2&e&&(c.kc("ngIf",t.isAddMode),c.zb(1),c.kc("ngIf",!t.isAddMode),c.zb(1),c.kc("formGroup",t.form),c.zb(5),c.kc("ngClass",c.oc(14,S,t.submitted&&t.f.firstName.errors)),c.zb(1),c.kc("ngIf",t.submitted&&t.f.firstName.errors),c.zb(4),c.kc("ngClass",c.oc(16,S,t.submitted&&t.f.lastName.errors)),c.zb(1),c.kc("ngIf",t.submitted&&t.f.lastName.errors),c.zb(5),c.kc("ngClass",c.oc(18,S,t.submitted&&t.f.username.errors)),c.zb(1),c.kc("ngIf",t.submitted&&t.f.username.errors),c.zb(4),c.kc("ngIf",!t.isAddMode),c.zb(1),c.kc("ngClass",c.oc(20,S,t.submitted&&t.f.password.errors)),c.zb(1),c.kc("ngIf",t.submitted&&t.f.password.errors),c.zb(2),c.kc("disabled",t.loading),c.zb(1),c.kc("ngIf",t.loading))},directives:[i.l,s.o,s.i,s.d,s.a,s.h,s.c,i.j,n.e],encapsulation:2}),e})();const U=[{path:"",component:o,children:[{path:"",component:m},{path:"add",component:y},{path:"edit/:id",component:y}]}];let M=(()=>{class e{}return e.\u0275mod=c.Kb({type:e}),e.\u0275inj=c.Jb({factory:function(t){return new(t||e)},imports:[[n.f.forChild(U)],n.f]}),e})(),q=(()=>{class e{}return e.\u0275mod=c.Kb({type:e}),e.\u0275inj=c.Jb({factory:function(t){return new(t||e)},imports:[[i.b,s.l,M]]}),e})()}}]);