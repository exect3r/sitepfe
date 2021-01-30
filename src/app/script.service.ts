import { Injectable } from "@angular/core";
import { ScriptStore } from "./script.store";

declare var document: any;

@Injectable(
  {providedIn: "root"}
)
export class ScriptService {

  private scripts: any = {};

  constructor() {
    ScriptStore.forEach((script: any) => {
      this.scripts[script.name] = {
        loaded: false,
        src: script.src,
        id: ""
      };
    });
  }

  uuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

  load(...scripts: string[]) {
    var promises: any[] = [];
    scripts.forEach((script) => promises.push(this.loadScript(script)));
    return promises
  }

  loadScript(name: string) {
    if (this.scripts[name].loaded) {
      document.getElementById(this.scripts[name].id).remove();
    }
    
    let script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = this.scripts[name].src;
    script.id = this.uuid()
    
    this.scripts[name].loaded = true;
    this.scripts[name].id = script.id;
        
    document.getElementsByTagName('head')[0].appendChild(script);
    return { script: name, loaded: true }
  }
}