AUI.add("aui-form-validator",function(r){var ao=r.Lang,x=r.Object,P=ao.isBoolean,G=ao.isDate,w=x.isEmpty,s=ao.isFunction,aa=ao.isObject,m=ao.isString,a=ao.trim,W=r.DOM._getRegExp,I="-",F=".",p="",o="form-validator",B="Invalid Date",K="|",ai="blurHandlers",g="checkbox",d="container",aj="containerErrorClass",T="containerValidClass",J="contentBox",R="error",al="errorClass",ak="extractCssPrefix",an="extractRules",q="field",ag="fieldContainer",Y="fieldStrings",e="inputHandlers",Z="message",b="messageContainer",Q="name",X="radio",n="rules",ab="selectText",af="showAllMessages",y="showMessages",N="stack",k="stackErrorContainer",t="type",ae="valid",D="validateOnBlur",V="validateOnInput",U="validClass",l="blur",O="errorField",ac="input",H="reset",z="submit",E="submitError",i="validateField",C="validField",h=r.getClassName,am=h(o,R),v=h(o,R,d),f=h(o,ae),ad=h(o,ae,d),L=h(q),c=h(o,Z),u=h(o,N,R),ah='<div class="'+c+'" role="alert"></div>',S='<label class="'+u+'"></label>',j=[an,D,V];YUI.AUI.defaults.FormValidator={STRINGS:{DEFAULT:"Please fix this field.",acceptFiles:"Please enter a value with a valid extension ({0}).",alpha:"Please enter only apha characters.",alphanum:"Please enter only aphanumeric characters.",date:"Please enter a valid date.",digits:"Please enter only digits.",email:"Please enter a valid email address.",equalTo:"Please enter the same value again.",max:"Please enter a value less than or equal to {0}.",maxLength:"Please enter no more than {0} characters.",min:"Please enter a value greater than or equal to {0}.",minLength:"Please enter at least {0} characters.",number:"Please enter a valid number.",range:"Please enter a value between {0} and {1}.",rangeLength:"Please enter a value between {0} and {1} characters long.",required:"This field is required.",url:"Please enter a valid URL."},REGEX:{alpha:/^[a-z_]+$/i,alphanum:/^\w+$/,digits:/^\d+$/,number:/^[+\-]?(\d+([.,]\d+)?)+$/,email:/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i,url:/^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i},RULES:{acceptFiles:function(ar,aq,at){var ap=null;if(m(at)){var A=at.split(/,\s*|\b\s*/).join(K);ap=W("[.]("+A+")$","i");}return ap&&ap.test(ar);},date:function(aq,ap,ar){var A=new Date(aq);return(G(A)&&(A!=B)&&!isNaN(A));},equalTo:function(aq,ap,ar){var A=r.one(ar);return A&&(a(A.val())==aq);},max:function(ap,A,aq){return(M.toNumber(ap)<=aq);},maxLength:function(ap,A,aq){return(ap.length<=aq);},min:function(ap,A,aq){return(M.toNumber(ap)>=aq);},minLength:function(ap,A,aq){return(ap.length>=aq);},range:function(aq,ap,ar){var A=M.toNumber(aq);return(A>=ar[0])&&(A<=ar[1]);},rangeLength:function(aq,ap,ar){var A=aq.length;return(A>=ar[0])&&(A<=ar[1]);},required:function(at,aq,au){var A=this;if(r.FormValidator.isCheckable(aq)){var ap=aq.get(Q);var ar=A.getElementsByName(ap);return(ar.filter(":checked").size()>0);}else{return !!at;}}}};var M=r.Component.create({NAME:o,ATTRS:{containerErrorClass:{value:v,validator:m},containerValidClass:{value:ad,validator:m},errorClass:{value:am,validator:m},extractCssPrefix:{value:L+I,validator:m},extractRules:{value:true,validator:P},fieldContainer:{value:F+L},fieldStrings:{value:{},validator:aa},messageContainer:{getter:function(A){return r.Node.create(A).clone();},value:ah},render:{value:true},strings:{valueFn:function(){return YUI.AUI.defaults.FormValidator.STRINGS;}},rules:{validator:aa,value:{}},selectText:{value:true,validator:P},showMessages:{value:true,validator:P},showAllMessages:{value:false,validator:P},stackErrorContainer:{getter:function(A){return r.Node.create(A).clone();},value:S},validateOnBlur:{value:true,validator:P},validateOnInput:{value:false,validator:P},validClass:{value:f,validator:m}},isCheckable:function(ap){var A=ap.get(t).toLowerCase();return(A==g||A==X);},toNumber:function(A){return parseFloat(A)||0;},EXTENDS:r.Widget,UI_ATTRS:j,prototype:{CONTENT_TEMPLATE:null,UI_EVENTS:{},initializer:function(){var A=this;A.blurHandlers=[];A.errors={};A.inputHandlers=[];A.stackErrorContainers={};},bindUI:function(){var A=this;
A._createEvents();A._bindValidation();},addFieldError:function(ar,aq){var A=this;var at=A.errors;var ap=ar.get(Q);if(!at[ap]){at[ap]=[];}at[ap].push(aq);},clearFieldError:function(ap){var A=this;delete A.errors[ap.get(Q)];},eachRule:function(ap){var A=this;r.each(A.get(n),function(aq,ar){if(s(ap)){ap.apply(A,[aq,ar]);}});},findFieldContainer:function(ap){var A=this;var aq=A.get(ag);if(aq){return ap.ancestor(aq);}},focusInvalidField:function(){var A=this;var ap=A.get(J);var aq=ap.one(F+am);if(aq){if(A.get(ab)){aq.selectText();}aq.focus();}},getElementsByName:function(ap){var A=this;return A.get(J).all('[name="'+ap+'"]');},getField:function(ap){var A=this;if(m(ap)){ap=A.getElementsByName(ap).item(0);}return ap;},getFieldError:function(ap){var A=this;return A.errors[ap.get(Q)];},getFieldStackErrorContainer:function(ar){var A=this;var ap=ar.get(Q);var aq=A.stackErrorContainers;if(!aq[ap]){aq[ap]=A.get(k);}return aq[ap];},getFieldErrorMessage:function(au,at){var av=this;var ax=au.get(Q);var ap=av.get(Y)[ax]||{};var A=av.get(n)[ax];var aw=av.getStrings();var ar={};if(at in A){var aq=r.Array(A[at]);r.each(aq,function(aA,az){ar[az]=[aA].join(p);});}var ay=(ap[at]||aw[at]||aw.DEFAULT);return ao.sub(ay,ar);},hasErrors:function(){var A=this;return !w(A.errors);},highlight:function(aq,ap){var A=this;var ar=A.findFieldContainer(aq);A._highlightHelper(aq,A.get(al),A.get(U),ap);A._highlightHelper(ar,A.get(aj),A.get(T),ap);},normalizeRuleValue:function(ap){var A=this;return s(ap)?ap.apply(A):ap;},unhighlight:function(ap){var A=this;A.highlight(ap,true);},printStackError:function(aq,ap,ar){var A=this;if(!A.get(af)){ar=ar.slice(0,1);}ap.empty();r.each(ar,function(au,at){var av=A.getFieldErrorMessage(aq,au);var aw=A.get(b).addClass(au);ap.append(aw.html(av));});},resetAllFields:function(){var A=this;A.eachRule(function(aq,ar){var ap=A.getField(ar);A.resetField(ap);});},resetField:function(aq){var A=this;var ap=A.getFieldStackErrorContainer(aq);ap.remove();A.resetFieldCss(aq);A.clearFieldError(aq);},resetFieldCss:function(aq){var ap=this;var ar=ap.findFieldContainer(aq);var A=function(au,at){if(au){r.each(at,function(av){au.removeClass(ap.get(av));});}};A(aq,[U,al]);A(ar,[T,aj]);},validatable:function(aq){var A=this;var at=A.get(n)[aq.get(Q)];var ar=A.normalizeRuleValue(at.required);var ap=YUI.AUI.defaults.FormValidator.RULES.required.apply(A,[aq.val(),aq]);return(ar||(!ar&&ap)||at.custom);},validate:function(){var A=this;A.eachRule(function(ap,aq){A.validateField(aq);});A.focusInvalidField();},validateField:function(ar){var A=this;var aq=A.getField(ar);if(aq){var ap=A.validatable(aq);A.resetField(aq);if(ap){A.fire(i,{validator:{field:aq}});}}},_bindValidation:function(){var A=this;var ap=A.get(J);ap.on(H,r.bind(A._onFormReset,A));ap.on(z,r.bind(A._onFormSubmit,A));},_createEvents:function(){var A=this;var ap=function(aq,ar){A.publish(aq,{defaultFn:ar});};ap(O,A._defErrorFieldFn);ap(C,A._defValidFieldFn);ap(i,A._defValidateFieldFn);},_defErrorFieldFn:function(ar){var A=this;var ap=ar.validator;var at=ap.field;A.highlight(at);if(A.get(y)){var aq=A.getFieldStackErrorContainer(at);at.placeBefore(aq);A.printStackError(at,aq,ap.errors);}},_defValidFieldFn:function(ap){var A=this;var aq=ap.validator.field;A.unhighlight(aq);},_defValidateFieldFn:function(aq){var ap=this;var ar=aq.validator.field;var at=ap.get(n)[ar.get(Q)];r.each(at,function(ax,av){var aw=YUI.AUI.defaults.FormValidator.RULES[av];var au=a(ar.val());ax=ap.normalizeRuleValue(ax);if(s(aw)&&!aw.apply(ap,[au,ar,ax])){ap.addFieldError(ar,av);}});var A=ap.getFieldError(ar);if(A){ap.fire(O,{validator:{field:ar,errors:A}});}else{ap.fire(C,{validator:{field:ar}});}},_highlightHelper:function(ar,A,ap,aq){if(ar){if(aq){ar.removeClass(A).addClass(ap);}else{ar.removeClass(ap).addClass(A);}}},_onBlurField:function(ap){var A=this;var aq=ap.currentTarget.get(Q);A.validateField(aq);},_onFieldInputChange:function(ap){var A=this;A.validateField(ap.currentTarget);},_onFormSubmit:function(ap){var A=this;var aq={validator:{formEvent:ap}};A.validate();if(A.hasErrors()){aq.validator.errors=A.errors;A.fire(E,aq);ap.halt();}else{A.fire(z,aq);}},_onFormReset:function(ap){var A=this;A.resetAllFields();},_bindValidateHelper:function(at,ar,aq,ap){var A=this;A._unbindHandlers(ap);if(at){A.eachRule(function(av,aw){var au=A.getElementsByName(aw);A[ap].push(au.on(ar,r.bind(aq,A)));});}},_uiSetExtractRules:function(aI){var aG=this;if(aI){var ap=aG.get(J);var aB=aG.get(n);var aH=aG.get(ak);var aC=YUI.AUI.defaults.FormValidator.RULES;var aq=x.keys(aC);var au=aq.join("|");var aw=W("aui-field-"+au,"g");var aA=ap.getDOM();var av=aA.elements;for(var aF=0,ax=av.length;aF<ax;aF++){var A=av[aF];var ar=A.className;var at=A.name;var ay=ar.match(aw);if(ay){if(!aB[at]){aB[at]={};}for(var aE=0,aD=ay.length;aE<aD;aE++){var az=ay[aE];if(!(aB[at][az] in ay)){aB[at][az]=true;}}}}}},_uiSetValidateOnInput:function(ap){var A=this;A._bindValidateHelper(ap,ac,A._onFieldInputChange,e);},_uiSetValidateOnBlur:function(ap){var A=this;A._bindValidateHelper(ap,l,A._onBlurField,ai);},_unbindHandlers:function(ap){var A=this;r.each(A[ap],function(aq){aq.detach();});A[ap]=[];}}});r.each(YUI.AUI.defaults.FormValidator.REGEX,function(ap,A){YUI.AUI.defaults.FormValidator.RULES[A]=function(ar,aq,at){return YUI.AUI.defaults.FormValidator.REGEX[A].test(ar);};});r.FormValidator=M;},"@VERSION@",{skinnable:false,requires:["aui-base","aui-event-input","selector-css3"]});