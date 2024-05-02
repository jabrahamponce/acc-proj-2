import { _ as __nuxt_component_0 } from './Navbar-BR8KnOPl.mjs';
import { _ as __nuxt_component_1 } from './CardGroup-BH_hd-GE.mjs';
import { useSSRContext } from 'file:///home/advcc-proj-2/Desktop/Proj2/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent } from 'file:///home/advcc-proj-2/Desktop/Proj2/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from '../server.mjs';
import './nuxt-link-CBXZo5aS.mjs';
import 'file:///home/advcc-proj-2/Desktop/Proj2/node_modules/ufo/dist/index.mjs';
import 'file:///home/advcc-proj-2/Desktop/Proj2/node_modules/ofetch/dist/node.mjs';
import 'file:///home/advcc-proj-2/Desktop/Proj2/node_modules/hookable/dist/index.mjs';
import 'file:///home/advcc-proj-2/Desktop/Proj2/node_modules/unctx/dist/index.mjs';
import 'file:///home/advcc-proj-2/Desktop/Proj2/node_modules/h3/dist/index.mjs';
import 'file:///home/advcc-proj-2/Desktop/Proj2/node_modules/unhead/dist/index.mjs';
import 'file:///home/advcc-proj-2/Desktop/Proj2/node_modules/@unhead/shared/dist/index.mjs';
import 'file:///home/advcc-proj-2/Desktop/Proj2/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///home/advcc-proj-2/Desktop/Proj2/node_modules/defu/dist/defu.mjs';
import '../../nitro/nitro-prerenderer.mjs';
import 'file:///home/advcc-proj-2/Desktop/Proj2/node_modules/destr/dist/index.mjs';
import 'file:///home/advcc-proj-2/Desktop/Proj2/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///home/advcc-proj-2/Desktop/Proj2/node_modules/scule/dist/index.mjs';
import 'file:///home/advcc-proj-2/Desktop/Proj2/node_modules/klona/dist/index.mjs';
import 'file:///home/advcc-proj-2/Desktop/Proj2/node_modules/ohash/dist/index.mjs';
import 'file:///home/advcc-proj-2/Desktop/Proj2/node_modules/unstorage/dist/index.mjs';
import 'file:///home/advcc-proj-2/Desktop/Proj2/node_modules/unstorage/drivers/fs.mjs';
import 'file:///home/advcc-proj-2/Desktop/Proj2/node_modules/unstorage/drivers/memory.mjs';
import 'file:///home/advcc-proj-2/Desktop/Proj2/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///home/advcc-proj-2/Desktop/Proj2/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///home/advcc-proj-2/Desktop/Proj2/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///home/advcc-proj-2/Desktop/Proj2/node_modules/pathe/dist/index.mjs';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Navbar = __nuxt_component_0;
  const _component_CardGroup = __nuxt_component_1;
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_Navbar, null, null, _parent));
  _push(`<br>`);
  _push(ssrRenderComponent(_component_CardGroup, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-dMFHzAmH.mjs.map
