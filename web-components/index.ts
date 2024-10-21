window.onload = () => {
  class Wujie extends HTMLElement {
    constructor() {
      super();

      // 样式隔离
      let dom = this.attachShadow({ mode: "open" });
      let template = document.querySelector("#wujie") as HTMLTemplateElement;

      dom.appendChild(template.content.cloneNode(true));

      console.log(this.getAttr("age"), this.getAttr("url"));
    }

    private getAttr(attr: string) {
      return this.getAttribute(attr);
    }

    // 生命周期
    connectedCallback() {
      console.log("组件挂载");
    }

    disconnectedCallback() {
      console.log("组件卸载");
    }

    attributeChangedCallback(name: any, oldValue: any, newValue: any) {
      console.log("属性变化");
    }
  }

  window.customElements.define("wu-jie", Wujie);
};
