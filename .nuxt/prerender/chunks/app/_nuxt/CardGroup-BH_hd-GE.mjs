import { _ as __nuxt_component_0$1 } from './nuxt-link-CBXZo5aS.mjs';
import { useSSRContext, mergeProps, withCtx, createVNode, createTextVNode } from 'file:///home/advcc-proj-2/Desktop/Proj2/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent } from 'file:///home/advcc-proj-2/Desktop/Proj2/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from '../server.mjs';

const _sfc_main$3 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  const _component_nuxt_link = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "card" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/blog/learning-web-development" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<h1${_scopeId}>Learning Web Development 101</h1>`);
      } else {
        return [
          createVNode("h1", null, "Learning Web Development 101")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<img class="card-image" src="https://advcc-proj2.nyc3.cdn.digitaloceanspaces.com/media/pexels-goumbik-574070.jpg" alt="..."><br><div class="intro"><h3> Website development broadly refers to the tasks and processes that are involved to create and maintain a website. That includes everything from the markup, to coding and scripting, network configuration, and CMS development. </h3></div><br><div>`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    class: "btn-blog",
    to: "/blog/learning-web-development"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Read more... `);
      } else {
        return [
          createTextVNode(" Read more... ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><br><br></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/BlogPostCard1.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$2 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  const _component_nuxt_link = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "card" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/blog/responsive-web-applications" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<h1${_scopeId}>Responsive Web Applications</h1>`);
      } else {
        return [
          createVNode("h1", null, "Responsive Web Applications")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<img class="card-image" src="https://advcc-proj2.nyc3.cdn.digitaloceanspaces.com/media/taras-shypka-iFSvn82Xf.jpg" alt="..."><br><div class="intro"><h3> Responsive apps refer to creating a website that can be accessed from a desktop, mobile, or any interface. A responsive app enables users to have a better experience irrespective of the device, OS, screen size, orientation, and browser platform. These apps are styled using an inline style, different layouts, and flexible images to ensure consistent UX. </h3></div><br><div>`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    class: "btn-blog",
    to: "/blog/responsive-web-applications"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Read more... `);
      } else {
        return [
          createTextVNode(" Read more... ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><br><br></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/BlogPostCard2.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1$1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_nuxt_link = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "card" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/blog/javascript-web-applications" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<h1${_scopeId}>Learning JavaScript for Web Applications</h1>`);
      } else {
        return [
          createVNode("h1", null, "Learning JavaScript for Web Applications")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<img class="card-image" src="https://advcc-proj2.nyc3.cdn.digitaloceanspaces.com/media/pexels-meneses-340146.jpg" alt="..."><br><div class="intro"><h3> JavaScript is a popular programming language for building web, mobile, and desktop applications. There are many frameworks and libraries that have been built around JavaScript, with more likely being developed even as you are reading this article. If you plan to start learning JavaScript, some of them are worth learning as well. </h3></div><br><div>`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    class: "btn-blog",
    to: "/blog/javascript-web-applications"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Read more... `);
      } else {
        return [
          createTextVNode(" Read more... ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><br><br></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/BlogPostCard3.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_BlogPostCard1 = __nuxt_component_0;
  const _component_BlogPostCard2 = __nuxt_component_1$1;
  const _component_BlogPostCard3 = __nuxt_component_2;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "card-group" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_BlogPostCard1, null, null, _parent));
  _push(`<br>`);
  _push(ssrRenderComponent(_component_BlogPostCard2, null, null, _parent));
  _push(`<br>`);
  _push(ssrRenderComponent(_component_BlogPostCard3, null, null, _parent));
  _push(`<br></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CardGroup.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { __nuxt_component_1 as _ };
//# sourceMappingURL=CardGroup-BH_hd-GE.mjs.map
