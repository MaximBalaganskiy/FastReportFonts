(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{583:function(o,e,n){},593:function(o,e,n){"use strict";function t(){var y=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};return Object(s.a)().then(function(o){var e,s=_.a.get("dasharrays"),n=new k.a("Border Editor"),t=m()(C({styles:s})),r="fr-edit-border-dialog__border-body-lines--active",a=t.find(".js-border-presentation"),d=t.find(".js-border-lines"),i=t.find(".js-border-style"),l=t.find(".js-border-width"),c=t.find(".js-border-color"),p=t.find(".js-border-shadow-check"),h=t.find(".js-border-shadow-controls"),v=t.find(".js-border-shadow-width"),b=t.find(".js-border-shadow-color"),u="90%",w="90%",f=function(){var o,e=m()(Object(x.a)("svg",{width:"100%",height:"100%"})),n=m()(Object(x.a)("g",{class:"js-border-presentation-lines"}));n.append(m()(Object(x.a)("line"))),n.append(m()(Object(x.a)("line"))),n.append(m()(Object(x.a)("line"))),n.append(m()(Object(x.a)("line"))),o=m()(Object(x.a)("rect",{width:u,height:w,class:"js-border-presentation-shadow"})),e.append(o),e.append(Object(x.a)("rect",{width:u,height:w,fill:"#FFF"})),e.append(m()(Object(x.a)("text",{fill:"#000",x:"38%",y:"50%"})).append(O.a.tr("Misc Sample"))),e.append(n),a.html(e)},j=function(o){var e,n,t,r=a.find(".js-border-presentation-shadow");r.toggleClass("fr-hidden",!o.shadow),o.shadow&&(o.shadow.width&&r.attr({x:o.shadow.width,y:o.shadow.width}),o.shadow.color&&r.attr("fill",o.shadow.color)),o.lines&&(e=a.find(".js-border-presentation-lines").children(),n={x1:0,x2:0,y1:0,y2:0},t={stroke:"","stroke-width":"","stroke-dasharray":""},o.lines.includes("All")||o.lines.includes("Top")?e.eq(0).attr({x1:.5,x2:u,y1:.5,y2:.5}).css({stroke:o.color,"stroke-width":o.width,"stroke-dasharray":s[o.style]}):e.eq(0).attr(n).css(t),o.lines.includes("All")||o.lines.includes("Right")?e.eq(1).attr({x1:u,x2:u,y1:.5,y2:w}).css({stroke:o.color,"stroke-width":o.width,"stroke-dasharray":s[o.style]}):e.eq(1).attr(n).css(t),o.lines.includes("All")||o.lines.includes("Bottom")?e.eq(2).attr({x1:.5,x2:u,y1:w,y2:w}).css({stroke:o.color,"stroke-width":o.width,"stroke-dasharray":s[o.style]}):e.eq(2).attr(n).css(t),o.lines.includes("All")||o.lines.includes("Left")?e.eq(3).attr({x1:.5,x2:.5,y1:.5,y2:w}).css({stroke:o.color,"stroke-width":o.width,"stroke-dasharray":s[o.style]}):e.eq(3).attr(n).css(t))},g=function(o){o.style=o.style||_.a.get("default-dasharray"),o.width=o.width||1,o.color=Object(B.a)(o.color)||"#000000",i.val(o.style),l.val(o.width),Object(q.a)("color")?c.val(o.color):c.spectrum({color:o.color,preferredFormat:"hex"}),o.shadow?(p.prop("checked",!0),h.removeAttr("disabled"),v.removeAttr("disabled"),b.removeAttr("disabled"),o.shadow.width=o.shadow.width||4,o.shadow.color=Object(B.a)(o.shadow.color)||"#000000",v.val(o.shadow.width),Object(q.a)("color")?b.val(o.shadow.color):b.spectrum({color:o.shadow.color,preferredFormat:"hex"})):(p.prop("checked",!1),h.attr("disabled",!0),v.attr("disabled",!0),b.attr("disabled",!0),Object(q.a)("color")||b.spectrum({color:"#000000",preferredFormat:"hex"})),o.lines=o.lines||[],d.find("."+r).removeClass(r),o.lines.forEach(function(o){d.find(".js-border-lines[data-value="+o+"]").addClass(r)}),j(o)};return g=g.bind(null,y),e=Object(F.a)(g,500),f(),g(),p.on("change",function(o){m()(o.target).is(":checked")?y.shadow={}:delete y.shadow,g()}),v.on("change",function(o){y.shadow&&(y.shadow.width=m()(o.target).val(),e())}),b.on("change",function(o){y.shadow&&(y.shadow.color=m()(o.target).val(),e())}),i.on("change",function(o){y.style=m()(o.target).val(),e()}),l.on("change",function(o){y.width=m()(o.target).val(),e()}),c.on("change",function(o){y.color=m()(o.target).val(),e()}),d.on("click",".js-border-lines",function(o){var e=m()(o.currentTarget),n=e.data("value"),t=!e.is("."+r);t?(Object(A.a)(y.lines,"All"),Object(A.a)(y.lines,"None"),"All"===n||"None"===n?y.lines=[n]:(y.lines.push(n),4===y.lines.length&&(y.lines=["All"]))):(Object(A.a)(y.lines,n),y.lines.length||(y.lines=["None"])),g()}),t.on("click",".js-save-border",function(){return n.trigger("ok",y)}),n.find(".fr-modal-content").html(t),o.append(n),window.DSG.head.put(o),n})}var r,m,_,s,k,O,x,F,A,B,q,C;n.r(e),n(583),r=n(0),m=n.n(r),_=n(4),s=n(161),k=n(232),O=n(2),x=n(3),F=n(82),A=n(28),B=n(62),q=n(165),n(233),n(234),C=function(){var o=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};return o.styles=o.styles||{},'\n        <div class="fr-edit-border-dialog">\n            <div class="fr-edit-border-dialog__hint">\n                '+O.a.tr("Forms Border Hint")+'\n            </div>\n            <div class="fr-modal-body fr-edit-border-dialog__body">\n                <div class="fr-edit-border-dialog__border">\n                    <div class="fr-edit-border-dialog__border-body">\n                        <div class="fr-edit-border-dialog__border-body-lines js-border-lines">\n                            <a class="js-border-lines" data-value="All">\n                                <div class="icon-036"></div>\n                            </a>\n                            <a class="js-border-lines" data-value="None">\n                                <div class="icon-037"></div>\n                            </a>\n                            <a class="js-border-lines" data-value="Left">\n                                <div class="icon-034"></div>\n                            </a>\n                            <a class="js-border-lines" data-value="Top">\n                                <div class="icon-032"></div>\n                            </a>\n                            <a class="js-border-lines" data-value="Right">\n                                <div class="icon-035"></div>\n                            </a>\n                            <a class="js-border-lines" data-value="Bottom">\n                                <div class="icon-033"></div>\n                            </a>\n                        </div>\n                        <div class="fr-edit-border-dialog__border-body-presentation js-border-presentation"></div>\n                    </div>\n                    <div class="fr-edit-border-dialog__shadow">\n                        <div class="fr-edit-border-dialog__control-item">\n                            <span>'+O.a.tr("Forms Border Shadow")+'</span>\n                            <input type="checkbox" class="js-border-shadow-check"/>\n                        </div>\n                        <hr/>\n                        <div class="fr-edit-border-dialog__shadow-controls js-border-shadow-controls">\n                            <div class="fr-edit-border-dialog__control-item">\n                                <span>'+O.a.tr("Forms Border Width")+'</span>\n                                <select class="js-border-shadow-width">\n                                    <option value="0.25">0.25</option>\n                                    <option value="0.5">0.5</option>\n                                    <option value="1">1</option>\n                                    <option value="1.5">1.5</option>\n                                    <option value="2">2</option>\n                                    <option value="3">3</option>\n                                    <option value="4">4</option>\n                                    <option value="6">6</option>\n                                </select>\n                            </div>\n                            <div class="fr-edit-border-dialog__control-item">\n                                <span>'+O.a.tr("Forms Border Color")+'</span>\n                                <input type="color" class="js-border-shadow-color"/>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class="fr-edit-border-dialog__line">\n                    <div class="fr-edit-border-dialog__control-item">\n                        <span>'+O.a.tr("Forms Border Style")+'</span>\n                        <select class="js-border-style">'+function(o){return Object.entries(o).map(function(o){var e=o[0];o[1];return'<option value="'+e+'">'+e+"</option>"}).join("")}(o.styles)+'</select>\n                    </div>\n                    <div class="fr-edit-border-dialog__control-item">\n                        <span>'+O.a.tr("Forms Border Width")+'</span>\n                        <select class="js-border-width">\n                            <option value="1">1</option>\n                            <option value="2">2</option>\n                            <option value="3">3</option>\n                            <option value="4">4</option>\n                            <option value="5">5</option>\n                            <option value="6">6</option>\n                            <option value="7">7</option>\n                            <option value="8">8</option>\n                            <option value="9">9</option>\n                            <option value="10">10</option>\n                            <option value="11">11</option>\n                            <option value="12">12</option>\n                        </select>\n                    </div>\n                    <div class="fr-edit-border-dialog__control-item">\n                        <span>'+O.a.tr("Forms Border Color")+'</span>\n                        <input type="color" class="js-border-color"/>\n                    </div>\n                </div>\n            </div>\n\n            <div class="fr-modal-footer content-right">\n                <button type="button" class="fr-btn fr-btn-primary fr-save js-save-border">\n                    '+O.a.tr("Buttons Ok")+"\n                </button>\n            </div>\n        </div>\n    "},n.d(e,"create",function(){return t})}}]);