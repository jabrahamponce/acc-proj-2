import { _ as __nuxt_component_0 } from "./Navbar-BR8KnOPl.js";
import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import "./nuxt-link-CBXZo5aS.js";
import "ufo";
import "#internal/nitro";
import "ofetch";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "defu";
import "klona";
import "devalue";
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "form-container" }, _attrs))} data-v-f5d1086d><form action="action_page.php" data-v-f5d1086d><label for="fname" data-v-f5d1086d>First Name</label><br data-v-f5d1086d><input type="text" id="fname" name="firstname" placeholder="Your name.." data-v-f5d1086d><br data-v-f5d1086d><label for="lname" data-v-f5d1086d>Last Name</label><br data-v-f5d1086d><input type="text" id="lname" name="lastname" placeholder="Your last name.." data-v-f5d1086d><br data-v-f5d1086d><label for="reason" data-v-f5d1086d>Reason</label><br data-v-f5d1086d><select id="reason" name="reason" data-v-f5d1086d><br data-v-f5d1086d><option value="inquiry" data-v-f5d1086d>Inquiry</option><option value="issue" data-v-f5d1086d>Issue</option><option value="complaint" data-v-f5d1086d>Complaint</option><option value="other" data-v-f5d1086d>other</option></select><label for="subject" data-v-f5d1086d>Subject</label><br data-v-f5d1086d><textarea id="subject" name="subject" placeholder="Write something.." style="${ssrRenderStyle({ "height": "200px" })}" data-v-f5d1086d></textarea><br data-v-f5d1086d><input type="submit" value="Submit" data-v-f5d1086d></form></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Form.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-f5d1086d"]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Navbar = __nuxt_component_0;
  const _component_Form = __nuxt_component_1;
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_Navbar, null, null, _parent));
  _push(`<h1 class="page-title">Contact Us Page</h1><p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>`);
  _push(ssrRenderComponent(_component_Form, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Contact/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  index as default
};
//# sourceMappingURL=index-6mddwomO.js.map
